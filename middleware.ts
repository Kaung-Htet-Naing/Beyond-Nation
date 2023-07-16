import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
	const session = request.cookies.get("session");
	const path = request.nextUrl.pathname;

	//Return to /login if don't have a session
	if (!session && path !== "/login" && path !== "/signup") {
		return NextResponse.redirect(new URL("/signup", request.url));
	}

	const responseAPI = await fetch("http://localhost:3000/api/login", {
		headers: {
			Cookie: `session=${session?.value}`,
		},
	});

	if (responseAPI.status !== 200 && path !== "/login" && path !== "/signup") {
		return NextResponse.redirect(new URL("/signup", request.url));
	}
	if (
		responseAPI.status == 200 &&
		(path === "/signup" || path === "/signup" || path === "/")
	) {
		return NextResponse.redirect(new URL("/e-commerce", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
};
