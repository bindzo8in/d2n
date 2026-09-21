import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes EXCEPT the sign-in page
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/sign-in")) {
    const sessionCookie = getSessionCookie(request);

    // NOTE: This only checks for cookie existence, not validity!
    // Full session validation happens server-side in app/admin/layout.tsx
    if (!sessionCookie) {
      return NextResponse.redirect(new URL("/admin/sign-in", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

