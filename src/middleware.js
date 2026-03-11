import { defineMiddleware } from 'astro:middleware';
import { verifySession } from './lib/db.js';

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  // Only protect /admin routes (but not /admin/login or /api/admin/login)
  const isAdminPage = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/admin/login';
  const isLoginApi  = pathname === '/api/admin/login';

  if (isAdminPage && !isLoginPage && !isLoginApi) {
    const cookie = context.cookies.get('admin_session');
    const token  = cookie?.value;

    if (!verifySession(token)) {
      return context.redirect('/admin/login');
    }
  }

  return next();
});
