import { cities } from '../data/cities.js';
import { services } from '../data/services.js';

const SITE = 'https://lasvegaslandscaping.homepropeople.com';

function url(path, priority = '0.6', changefreq = 'monthly') {
  return `  <url>
    <loc>${SITE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const staticUrls = [
    url('/', '1.0', 'weekly'),
    url('/areas', '0.8', 'monthly'),
    url('/rebate-calculator', '0.9', 'monthly'),
  ];

  const cityUrls = cities.map(city =>
    url(`/areas/${city.slug}`, '0.7', 'monthly')
  );

  const serviceUrls = cities.flatMap(city =>
    services.map(service =>
      url(`/areas/${city.slug}/${service.slug}`, '0.8', 'monthly')
    )
  );

  const esStaticUrls = [
    url('/es/', '0.9', 'weekly'),
    url('/es/calculadora-rebate', '0.9', 'monthly'),
    url('/es/areas', '0.7', 'monthly'),
  ];

  const esCityUrls = cities.map(city =>
    url(`/es/areas/${city.slug}`, '0.7', 'monthly')
  );

  const esServiceUrls = cities.flatMap(city =>
    services.map(service =>
      url(`/es/areas/${city.slug}/${service.slug}`, '0.8', 'monthly')
    )
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...cityUrls, ...serviceUrls, ...esStaticUrls, ...esCityUrls, ...esServiceUrls].join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
