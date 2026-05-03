import { NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred } from 'fumadocs-core/negotiation';
import { docsContentRoute } from '@/lib/shared';

const passthroughPrefixes = ['/_next', '/api', '/og', '/llms', '/favicon.ico'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (passthroughPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  const markdownPath = pathname.endsWith('.mdx') ? pathname.slice(0, -4) : pathname;

  if (pathname.endsWith('.mdx') || isMarkdownPreferred(request)) {
    const slug = markdownPath === '/' ? '' : markdownPath.replace(/^\/docs\/?/, '').replace(/^\//, '');
    const target = slug.length > 0 ? `${docsContentRoute}/${slug}/content.md` : `${docsContentRoute}/content.md`;

    return NextResponse.rewrite(new URL(target, request.nextUrl));
  }

  return NextResponse.next();
}
