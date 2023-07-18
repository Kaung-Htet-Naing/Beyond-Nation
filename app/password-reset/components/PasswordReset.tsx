import Input from "@components/Input";

type Props = {
	email: string;
	confirmEmail: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	setConfirmEmail: React.Dispatch<React.SetStateAction<string>>;
	invalidEmail: string;
	handleResetPassword: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function PasswordReset({
	email,
	confirmEmail,
	setEmail,
	setConfirmEmail,
	invalidEmail,
	handleResetPassword,
}: Props) {
	return (
		<form>
			<p className="mb-2 text-3xl font-normal text-center text-gray-400 mt-7">
				Reset Password
			</p>
			<p className="text-sm font-normal text-center text-gray-400 mb-7">
				Please enter your Email to get instructions how to reset your password.
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
					Confirm Email
				</label>
				<div className="mt-2">
					<Input
						name="phone"
						placeholder="test@gmail.com"
						type="text"
						value={confirmEmail}
						onChange={(e) => setConfirmEmail(e.target.value)}
					/>
				</div>
				{invalidEmail && <p className="pt-2 text-red-800">{invalidEmail}</p>}
			</div>
			<button
				onClick={handleResetPassword}
				type="submit"
				className="flex w-full  justify-center rounded-md bg-[#333333] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/70"
			>
				Reset Password
			</button>
		</form>
	);
}
