"use client";

import Input from "@components/Input";
import Link from "next/link";
import { GoogleLogo } from "@utils/SvgLogo";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, provider } from "@lib/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Home() {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [invalidEmail, setInvalidEmail] = useState<string>("");
	const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
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

	useEffect(() => {
		getRedirectResult(auth).then(async (userCred) => {
			if (!userCred) {
				return;
			}

			fetch("http://localhost:3000/api/login", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${await userCred.user.getIdToken()}`,
				},
			})
				.then((response) => {
					if (response.status === 200) {
						router.push("/e-commerce");
					}
				})
				.catch((error) => console.log("error"));
		});
	}, []);

	function signIn() {
		signInWithRedirect(auth, provider);
	}

	return (
		<>
			<form>
				<h1 className="mb-1 text-3xl text-center text-gray-900">
					BEYOUND NATIONS
				</h1>
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
				<button
					onClick={handleSignUp}
					type="submit"
					className="flex w-full mb-5 justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-primary/70"
				>
					Sign In
				</button>
			</form>
			<button
				type="submit"
				className="flex w-full justify-center rounded-md gap-5  bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300"
				onClick={() => signIn()}
			>
				<GoogleLogo />
				<div>Sign in with Google</div>
			</button>
			<div className="relative mt-5">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-gray-200" />
				</div>
				<div className="relative flex justify-center text-sm font-medium leading-6">
					<span className="px-6 text-gray-900 bg-white">or</span>
				</div>
			</div>
			<Link
				href="/signup/phone"
				className="flex justify-center w-full gap-2 py-2 mt-4 mb-2 font-semibold text-black bg-transparent border rounded-md "
			>
				Sign Up
			</Link>
		</>
	);
}
