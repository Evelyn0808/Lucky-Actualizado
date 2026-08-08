import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// En producción esto debe venir de process.env.JWT_SECRET
const SECRET = new TextEncoder().encode('super-secret-jwt-key-for-lucky-app');

export async function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Rutas que requieren autenticación
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isGestionRoute = request.nextUrl.pathname.startsWith('/gestion-mascotas');

  if (isDashboardRoute || isAdminRoute || isGestionRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/iniciar-sesion', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, SECRET);
      const role = payload.role as string;

      // Verificación de roles (roles en Prisma son mayúsculas: ADMIN, SERVICIOS, USUARIO)
      if (isAdminRoute && role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
      
      if (isGestionRoute && role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/iniciar-sesion', request.url));
      }
      
      if (isDashboardRoute && !['ADMIN', 'SERVICIOS'].includes(role)) {
         return NextResponse.redirect(new URL('/perfil', request.url));
      }

      return NextResponse.next();
    } catch (error) {
      // Token inválido o expirado
      return NextResponse.redirect(new URL('/iniciar-sesion', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/gestion-mascotas/:path*'],
};
