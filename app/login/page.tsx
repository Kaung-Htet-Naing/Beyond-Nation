"use client";

import Input from "@components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Home() {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [invalidEmail, setInvalidEmail] = useState<string>("");

	const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const auth = getAuth();
		await signInWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const user = userCredential.user;
				const accessToken = await user.getIdToken();

				fetch("http://localhost:3000/api/login", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				})
					.then((response) => {
						if (response.status === 200) {
							router.push("/e-commerce");
						}
					})
					.catch((error) => console.log("error"));
			})
			.catch((error) => {
				const errorCode = error.code;
				const cleanErrorMessage = errorCode.replace("auth/", "");
				setInvalidEmail(cleanErrorMessage);
			});
	};

	return (
		<>
			<form>
				<p className="text-sm font-normal text-center text-gray-600 mb-7">
					Please Sign in a account
				</p>

				<div className="py-5">
					<label
						htmlFor="email"
						className="block text-sm font-medium leading-6 text-gray-600"
					>
						Email
					</label>
					<div className="mt-2">
						<Input
							name="phone"
							placeholder="test@gmail.com"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="pb-5">
					<label
						htmlFor="email"
						className="block text-sm font-medium leading-6 text-gray-600"
					>
						Password
					</label>
					<div className="mt-2">
						<Input
							name="password"
							placeholder="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{invalidEmail && <p className="pt-2 text-red-800">{invalidEmail}</p>}
				</div>
				<div className="flex flex-row justify-between mb-5">
					<div className="inline-flex flex-row gap-x-2">
						<input type="checkbox" />
						<p>Remember Me</p>
					</div>
					<Link className="text-sm" href="password-reset">
						Forget Password?
					</Link>
				</div>
				<button
					onClick={handleSignIn}
					type="submit"
					className="flex w-full  justify-center rounded-md bg-[#333333] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/70"
				>
					Sign In
				</button>
			</form>
		</>
	);
}
