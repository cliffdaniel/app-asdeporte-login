import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';
import authConfig from './auth.config';

const { auth } = NextAuth(authConfig);

const publicRoutes = ['/', '/prices'];
const authRoutes = ['/login', '/register'];
const apiAuthPrefix = '/api/auth';

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
        return NextResponse.next();
    }

    if (publicRoutes.includes(nextUrl.pathname)) {
        return NextResponse.next();
    }

    if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/dashboard', nextUrl));
    }

    if (
        !isLoggedIn &&
        !authRoutes.includes(nextUrl.pathname) &&
        !publicRoutes.includes(nextUrl.pathname)
    ) {
        return NextResponse.redirect(new URL('/login', nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
