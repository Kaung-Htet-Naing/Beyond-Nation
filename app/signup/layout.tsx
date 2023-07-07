import Image from "next/image"

export default function Layout({ children }: any) {
  return (
    <>
      <div className="lg:h-screen flex lg:flex-row flex-col-reverse">
        <div className="flex w-full lg:w-1/2 bg-black  i justify-around items-center">
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
        <div className="flex lg:w-1/2 justify-center items-center bg-white">
          <div className="w-full max-w-[440px]">
            <div className="bg-white  lg:py-0 py-10">
              <div className="mb-5 flex justify-center">
                <Image
                  alt="bg"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                  width="123"
                  height="30"
                />
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
