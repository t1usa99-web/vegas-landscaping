import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';
import { insertLead } from '../../lib/db.js';

export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { services, property, contact, serviceAnswers, answersText, cityName, cityNote, lang } = body;
    const isSpanish = lang === 'es';

    if (!services?.length) {
      return new Response(JSON.stringify({ error: 'No services selected' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!contact?.firstName) {
      return new Response(JSON.stringify({ error: 'Contact name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // --- Generate estimate with Claude ---
    let estimate = null;

    const apiKey = import.meta.env.ANTHROPIC_API_KEY;
    if (apiKey) {
      try {
        const anthropic = new Anthropic({ apiKey });

        const prompt = `You are an expert landscaping estimator with 20+ years of experience in Las Vegas, Nevada.${isSpanish ? '\nResponde ÚNICAMENTE en español. Todos los textos del JSON deben estar en español.' : ''}
Generate a detailed, professional landscaping estimate for the following project.

SERVICES REQUESTED:
${services.map(s => `- ${s}`).join('\n')}

PROPERTY DETAILS:
- Address: ${property.address || `${cityName || 'Las Vegas'}, NV`}
- Property Type: ${property.propertyType || 'Residential - Single Family'}
- Lot / Project Area: ${property.lotSize || 'Medium (5,000-10,000 sq ft)'}
- Current Condition: ${property.condition || 'Partially landscaped'}
- Desired Timeline: ${property.timeline || 'Flexible'}
- HOA Restrictions: ${property.hoa || 'Not sure'}
${cityName ? `- City / Area: ${cityName}` : ''}
${cityNote ? `- Local Context: ${cityNote}` : ''}

${answersText ? `SERVICE-SPECIFIC PROJECT DETAILS:
${answersText}

` : ''}CUSTOMER NOTES:
${contact.notes || 'None provided'}

IMPORTANT CONTEXT — LAS VEGAS, NV:
- Mojave Desert climate: avg 4" annual rainfall, summer temps 105-115°F
- Nevada AB356 restricts ornamental/decorative turf installation — factor this into any grass/sod estimates and note alternatives
- Water conservation is a top priority; drip irrigation is preferred over spray
- HOA requirements vary widely across Summerlin, Green Valley, Henderson, and North Las Vegas
- Best planting seasons: spring (March–May) and fall (September–November); avoid peak summer installs
- Local labor rates are moderate; desert-grade materials (decomposed granite, boulders, hardy palms) can be premium-priced
- Permits may be required for structures (gazebos, pergolas, retaining walls over 4 ft)

Return ONLY valid JSON in this exact format (no markdown, no extra text):
{
  "summary": "2-3 sentence overview of the project scope and approach",
  "lineItems": [
    {
      "service": "Exact service name",
      "description": "What is included — materials, labor, scope notes",
      "priceRange": "$X,XXX - $X,XXX",
      "timeline": "X days or X-X weeks"
    }
  ],
  "totalRange": "$XX,XXX - $XX,XXX",
  "projectTimeline": "Total estimated project duration",
  "lasVegasNotes": [
    "${cityName ? cityName + '-specific' : 'Las Vegas-specific'} consideration or tip relevant to this service",
    "${cityName ? cityName + '-specific' : 'Las Vegas-specific'} HOA, water, or permit consideration",
    "Timing, cost, or material tip for this ${cityName || 'Las Vegas'} project"
  ],
  "nextSteps": "One or two sentences describing what happens after this estimate — site visit, consultation, etc.",
  "disclaimer": "This preliminary estimate is based on information provided and current Las Vegas market rates. Actual pricing requires an on-site assessment. Final quote may vary based on site conditions, material availability, and project scope."
}`;

        const message = await anthropic.messages.create({
          model: 'claude-sonnet-4-5',
          max_tokens: 4096,
          messages: [{ role: 'user', content: prompt }]
        });

        const responseText = message.content[0].text.trim();
        console.log('Claude raw response (first 300 chars):', responseText.substring(0, 300));

        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          estimate = JSON.parse(jsonMatch[0]);
          console.log('Claude estimate parsed successfully. Total:', estimate.totalRange);
        } else {
          console.error('No JSON found in Claude response:', responseText.substring(0, 500));
        }
      } catch (aiError) {
        console.error('Claude API error details:', aiError.message || aiError);
      }
    }

    // Fallback estimate if AI fails or no key set
    if (!estimate) {
      estimate = buildFallbackEstimate(services, property);
    }

    // --- Send lead notification email via Resend ---
    const resendKey = import.meta.env.RESEND_API_KEY;
    const leadEmail = import.meta.env.LEAD_EMAIL;
    const fromEmail = import.meta.env.FROM_EMAIL || 'onboarding@resend.dev';

    if (resendKey && leadEmail) {
      try {
        const resend = new Resend(resendKey);
        const subject = `New Lead: ${contact.firstName} ${contact.lastName || ''} — ${property.address || 'Las Vegas'}`;
        await resend.emails.send({
          from: fromEmail,
          to: leadEmail,
          subject,
          html: buildLeadEmail(contact, property, services, estimate)
        });
      } catch (emailError) {
        console.error('Resend email error:', emailError);
        // Don't fail the response if email fails
      }
    }

    // --- Save lead to database ---
    try {
      insertLead({
        first_name:      contact.firstName  || '',
        last_name:       contact.lastName   || '',
        phone:           contact.phone      || '',
        email:           contact.email      || '',
        city:            cityName           || property.address || '',
        service:         services.join(', '),
        address:         property.address   || '',
        service_answers: JSON.stringify(serviceAnswers || {}),
        customer_notes:  contact.notes      || '',
        quote_json:      JSON.stringify(estimate),
      });
    } catch (dbError) {
      console.error('DB insert error (non-fatal):', dbError);
    }

    return new Response(JSON.stringify({ estimate }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Submit endpoint error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

function buildFallbackEstimate(services, property) {
  const basePerService = { min: 1500, max: 4500 };
  const totalMin = services.length * basePerService.min;
  const totalMax = services.length * basePerService.max;

  return {
    summary: `Your project includes ${services.length} service${services.length > 1 ? 's' : ''} for your ${property.propertyType || 'Las Vegas'} property. This preliminary estimate reflects typical Las Vegas market rates. A free on-site consultation will allow us to provide a precise quote.`,
    lineItems: services.map(service => ({
      service,
      description: 'Professional installation with quality materials appropriate for desert climate. Full scope to be confirmed during site visit.',
      priceRange: `$${basePerService.min.toLocaleString()} - $${basePerService.max.toLocaleString()}`,
      timeline: '1-3 days'
    })),
    totalRange: `$${totalMin.toLocaleString()} - $${totalMax.toLocaleString()}`,
    projectTimeline: `${Math.ceil(services.length / 2)}-${services.length * 2} weeks`,
    lasVegasNotes: [
      'Nevada AB356 restricts decorative grass — artificial turf and xeriscape are compliant alternatives.',
      'HOA approval may be required before work begins in planned communities.',
      'Spring (Mar–May) and fall (Sep–Nov) are ideal install windows to avoid peak summer heat.'
    ],
    nextSteps: 'One of our Las Vegas landscaping experts will contact you within 24 hours to schedule a free on-site consultation and provide a firm quote.',
    disclaimer: 'This is a preliminary estimate based on the information provided and typical Las Vegas market rates. Actual pricing requires an on-site assessment. Final quote may vary based on site conditions, material selection, and project scope.'
  };
}

function buildLeadEmail(contact, property, services, estimate) {
  const serviceRows = services.map(s => `<li style="padding: 4px 0;">${s}</li>`).join('');
  const lineItemRows = estimate?.lineItems?.map((item, i) => `
    <tr style="background: ${i % 2 === 0 ? '#f9f9f9' : '#ffffff'};">
      <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${item.service}</td>
      <td style="padding: 10px 14px; border-bottom: 1px solid #eee; text-align: right; font-weight: 600; white-space: nowrap;">${item.priceRange}</td>
    </tr>`).join('') || '';

  const submitted = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:Arial,sans-serif;">
  <div style="max-width:640px;margin:24px auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.12);">

    <div style="background:#1a4731;padding:28px 32px;color:white;">
      <div style="font-size:0.75rem;font-weight:600;letter-spacing:0.1em;opacity:0.7;text-transform:uppercase;margin-bottom:8px;">New Lead — Las Vegas Landscaping</div>
      <h1 style="margin:0 0 4px;font-size:1.5rem;">
        ${contact.firstName || ''} ${contact.lastName || ''}
      </h1>
      <div style="opacity:0.8;font-size:0.875rem;">${property.address || 'Las Vegas, NV'} &bull; Submitted ${submitted}</div>
    </div>

    <div style="padding:28px 32px;">

      <h2 style="color:#1a4731;font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 12px;border-bottom:2px solid #1a4731;padding-bottom:8px;">Contact Information</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:28px;font-size:0.9rem;">
        <tr><td style="padding:8px 4px;font-weight:600;width:140px;color:#555;">Name</td><td style="padding:8px 4px;">${contact.firstName || ''} ${contact.lastName || ''}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 4px;font-weight:600;color:#555;">Phone</td><td style="padding:8px 4px;">${contact.phone || '<em style="color:#999;">Not provided</em>'}</td></tr>
        <tr><td style="padding:8px 4px;font-weight:600;color:#555;">Email</td><td style="padding:8px 4px;">${contact.email || '<em style="color:#999;">Not provided</em>'}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 4px;font-weight:600;color:#555;">Preferred Contact</td><td style="padding:8px 4px;">${contact.contactMethod || 'Any'}</td></tr>
      </table>

      <h2 style="color:#1a4731;font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 12px;border-bottom:2px solid #1a4731;padding-bottom:8px;">Property Details</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:28px;font-size:0.9rem;">
        <tr><td style="padding:8px 4px;font-weight:600;width:140px;color:#555;">Address</td><td style="padding:8px 4px;">${property.address || 'Not provided'}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 4px;font-weight:600;color:#555;">Property Type</td><td style="padding:8px 4px;">${property.propertyType || 'Residential'}</td></tr>
        <tr><td style="padding:8px 4px;font-weight:600;color:#555;">Lot Size</td><td style="padding:8px 4px;">${property.lotSize || 'Not specified'}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 4px;font-weight:600;color:#555;">Condition</td><td style="padding:8px 4px;">${property.condition || 'Not specified'}</td></tr>
        <tr><td style="padding:8px 4px;font-weight:600;color:#555;">Timeline</td><td style="padding:8px 4px;">${property.timeline || 'Flexible'}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px 4px;font-weight:600;color:#555;">HOA</td><td style="padding:8px 4px;">${property.hoa || 'Not sure'}</td></tr>
      </table>

      ${contact.notes ? `
      <h2 style="color:#1a4731;font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 12px;border-bottom:2px solid #1a4731;padding-bottom:8px;">Customer Notes</h2>
      <p style="background:#f9f9f9;border-left:3px solid #1a4731;padding:12px 16px;border-radius:0 8px 8px 0;color:#333;font-size:0.9rem;margin-bottom:28px;">${contact.notes}</p>
      ` : ''}

      <h2 style="color:#1a4731;font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 12px;border-bottom:2px solid #1a4731;padding-bottom:8px;">Services Requested (${services.length})</h2>
      <ul style="margin:0 0 28px;padding-left:20px;font-size:0.9rem;color:#333;">${serviceRows}</ul>

      <h2 style="color:#1a4731;font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 12px;border-bottom:2px solid #1a4731;padding-bottom:8px;">AI-Generated Estimate</h2>

      <div style="background:#e8f4ee;border:2px solid #1a4731;border-radius:8px;padding:16px 20px;margin-bottom:16px;text-align:center;">
        <div style="font-size:0.8rem;color:#2d6b4e;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Total Estimated Range</div>
        <div style="font-size:1.75rem;font-weight:800;color:#1a4731;">${estimate?.totalRange || 'Pending'}</div>
        <div style="font-size:0.8rem;color:#555;margin-top:4px;">Est. Duration: ${estimate?.projectTimeline || 'TBD'}</div>
      </div>

      ${lineItemRows ? `
      <table style="width:100%;border-collapse:collapse;margin-bottom:28px;font-size:0.875rem;border:1px solid #eee;border-radius:8px;overflow:hidden;">
        <thead>
          <tr style="background:#1a4731;color:white;">
            <th style="padding:10px 14px;text-align:left;font-weight:600;">Service</th>
            <th style="padding:10px 14px;text-align:right;font-weight:600;white-space:nowrap;">Price Range</th>
          </tr>
        </thead>
        <tbody>${lineItemRows}</tbody>
      </table>` : ''}

      <div style="background:#1a4731;color:white;border-radius:8px;padding:18px 24px;text-align:center;margin-top:8px;">
        <div style="font-size:1rem;font-weight:700;margin-bottom:4px;">Action Required</div>
        <div style="font-size:0.875rem;opacity:0.9;">Follow up with this lead within 24 hours for best conversion.</div>
      </div>

    </div>

    <div style="background:#f0f4f0;padding:16px 32px;text-align:center;font-size:0.75rem;color:#888;">
      Las Vegas Landscaping &bull; AI Lead &amp; Estimate Tool &bull; ${submitted}
    </div>
  </div>
</body>
</html>`;
}
