import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
	const session = request.cookies.get("session");
	const path = request.nextUrl.pathname;

	//Return to /login if don't have a session
	if (!session) {
		return NextResponse.redirect(
			new URL("http://localhost:3000/signup", request.url)
		);
	}

	//Call the authentication endpoint
	const responseAPI = await fetch("http://localhost:3000/api/login", {
		headers: {
			Cookie: `session=${session?.value}`,
		},
	});

	//Return to /login if token is not authorized
	if (responseAPI.status !== 200) {
		return NextResponse.redirect(new URL("/signup", request.url));
	}
	if (responseAPI.status == 200) {
		return NextResponse.redirect(new URL("/e-commerce", request.url));
	}
	return NextResponse.next();
}

//Add your protected routes
export const config = {
	// matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
	matcher: ["/something"],
};
