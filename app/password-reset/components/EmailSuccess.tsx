import { useRouter } from "next/navigation";

export default function EmailSuccess() {
	const router = useRouter();

	return (
		<div>
			<p className="mb-2 text-3xl font-normal text-center text-gray-400 mt-7">
				We have send you an Email
			</p>
			<p className="text-sm font-normal text-center text-gray-400 mb-7">
				We have send you an Email with instructions how to reset your password
			</p>
			<button
				onClick={() => router.push("/login")}
				type="submit"
				className="flex w-full  justify-center rounded-md bg-[#333333] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/70"
			>
				Go to Login
			</button>
		</div>
	);
}
