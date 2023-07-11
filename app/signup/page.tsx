"use client";

import Input from "@components/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
							errors={""}
							register={""}
							name="phone"
							placeholder="test@company.com"
							type="text"
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
							errors={""}
							register={""}
							name="email"
							placeholder="password"
							type="password"
						/>
					</div>
				</div>

				<button
					type="submit"
					className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-primary/70"
				>
					Sign In
				</button>
			</form>
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
