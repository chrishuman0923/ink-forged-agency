import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const url = req.nextUrl.clone();
  const res = NextResponse.next();

  const { pathname } = url;
  const sanitizedReqUrl = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const isRoot = !sanitizedReqUrl;

  if (!isRoot) {
    const newUrl = `${url.origin}/`;
    return NextResponse.redirect(newUrl);
  }

  return res;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
