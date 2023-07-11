import Link from "next/link";

export default async function Home() {
	// handle Auth
	return (
		<div className="flex items-center justify-center w-screen h-screen text-white bg-white">
			<div className="w-full max-w-[600px] mx-auto">
				<h1 className="mb-4 text-6xl text-black">BEYOND Nation</h1>
				<div className="flex gap-5">
					<Link href={"/e-commerce"}>
						<button className="px-4 py-2 text-xl rounded-lg bg-primary">
							Dashboard
						</button>
					</Link>
					<Link href={"/signup"}>
						<button className="px-4 py-2 text-xl rounded-lg bg-primary">
							signup
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
