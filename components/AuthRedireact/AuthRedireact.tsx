"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Props {
	children: React.ReactNode;
}

const AuthRedireact = (props: Props) => {
	const { status } = useSession();
	const router = useRouter();

	if (status === "authenticated") {
		router.replace("/e-commerce");
	}

	return <div>{props.children}</div>;
};

export default AuthRedireact;
