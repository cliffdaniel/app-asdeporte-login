import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';
import authConfig from './src/auth.config';

const { auth } = NextAuth(authConfig);

const publicRoutes = ['/'];
const authRoutes = ['/login'];

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

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
