import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl.clone();
    const { pathname } = url;

    if (pathname === '/') {
        url.pathname = '/hello';
        return NextResponse.rewrite(url);
    }
    return NextResponse.next();
}