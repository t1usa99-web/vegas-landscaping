export const prerender = false;

export async function POST({ cookies }) {
  // Explicitly overwrite the cookie with an expired value to ensure it clears
  cookies.set('admin_session', '', {
    httpOnly: true,
    secure:   true,
    sameSite: 'lax',
    maxAge:   0,
    path:     '/',
  });
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
