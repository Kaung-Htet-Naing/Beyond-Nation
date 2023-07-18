"use client";

import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import PasswordReset from "./components/PasswordReset";
import EmailSuccess from "./components/EmailSuccess";

export default function Home() {
	const auth = getAuth();
	const [email, setEmail] = useState<string>("");
	const [confirmEmail, setConfirmEmail] = useState<string>("");
	const [invalidEmail, setInvalidEmail] = useState<string>("");
	const [success, setSuccess] = useState<boolean>(false);

	const handleResetPassword = async (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		if (email === confirmEmail) {
			await sendPasswordResetEmail(auth, email)
				.then(() => setSuccess(true))
				.catch((error) => {
					const errorCode = error.code;
					const cleanErrorMessage = errorCode.replace("auth/", "");
					setInvalidEmail(cleanErrorMessage);
				});
		} else setInvalidEmail("Email not the same");
	};

	return (
		<>
			{!success ? (
				<PasswordReset
					email={email}
					confirmEmail={confirmEmail}
					setEmail={setEmail}
					setConfirmEmail={setConfirmEmail}
					handleResetPassword={handleResetPassword}
					invalidEmail={invalidEmail}
				/>
			) : (
				<EmailSuccess />
			)}
		</>
	);
}
