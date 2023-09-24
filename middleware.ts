import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { device } = userAgent(request);
  const isMobileDevice = device.type === "mobile";

  if (isMobileDevice) {
    return NextResponse.rewrite(
      new URL(`/m${url.pathname}${url.search}`, url.origin)
    );
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
};
