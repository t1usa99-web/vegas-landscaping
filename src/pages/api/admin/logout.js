export const prerender = false;

export async function POST() {
  // Set the cookie header directly — bypasses Astro's cookie API to ensure
  // the browser always drops the session cookie regardless of framework version.
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': 'admin_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
    },
  });
}
