import { updateLead } from '../../../lib/db.js';

export const prerender = false;

export async function POST({ request }) {
  const body = await request.json().catch(() => ({}));
  const { id, status, admin_notes } = body;

  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing lead id' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const updates = {};
  if (status      !== undefined) updates.status      = status;
  if (admin_notes !== undefined) updates.admin_notes = admin_notes;

  const updated = updateLead(id, updates);

  if (!updated) {
    return new Response(JSON.stringify({ error: 'Lead not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true, lead: updated }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
