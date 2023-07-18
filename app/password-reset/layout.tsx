import Image from "next/image";

export default function Layout({ children }: any) {
	return (
		<>
			<div className="flex flex-col-reverse lg:h-screen lg:flex-row">
				<div className="flex items-center justify-around w-full bg-black lg:w-1/2 i">
					<div className="lg:w-full mx-auto w-[180px] ">
						{/* <Image
              alt="bg"
              src="/icons/bg-login.png"
              width="500"
              height="692"
              className="mx-auto"
            /> */}
					</div>
				</div>
				<div className="flex items-center justify-center bg-white lg:w-1/2">
					<div className="w-full max-w-[440px]">
						<div className="py-10 bg-white lg:py-0">
							<div className="flex justify-center mb-5">
								<Image alt="logo" src="/logo.png" width="123" height="30" />
							</div>
							<h1 className="mb-1 text-3xl text-center text-gray-900">
								BEYOUND NATIONS
							</h1>
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
