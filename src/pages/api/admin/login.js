import { checkPassword, createSession } from '../../../lib/db.js';

export const prerender = false;

export async function POST({ request, cookies, redirect }) {
  const body = await request.json().catch(() => ({}));
  const { password } = body;

  if (!checkPassword(password)) {
    return new Response(JSON.stringify({ error: 'Invalid password' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const token = createSession();

  cookies.set('admin_session', token, {
    httpOnly: true,
    secure:   false, // set to true in production with HTTPS
    sameSite: 'lax',
    maxAge:   60 * 60 * 24, // 24 hours
    path:     '/',
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
