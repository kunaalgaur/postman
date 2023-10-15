import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get('token');

    const publicPath = path === '/sign-in' || path === '/sign-up';

    if (!token && !publicPath) {
        return NextResponse.redirect(new URL('/sign-up', request.nextUrl));
    }

    if (token && publicPath) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
}

export const config = {
    matcher: ['/', '/sign-up', '/sign-in'],
};
