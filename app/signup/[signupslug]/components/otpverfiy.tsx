import Link from "next/link"
import React from "react"
import OTPInput from "react-otp-input"

const OTPVerify = () => {
  return (
    <>
      <form>
        <h1 className="text-gray-900 text-3xl mb-4">驗證你的電話</h1>
        <p className="text-sm font-normal text-gray-600 mb-3">
          我們發送了驗證碼到 61231236
        </p>

        <div className="flex py-5">
          <OTPInput
            isInputNum={true}
            value={""}
            onChange={() => {}}
            numInputs={6}
            separator={<span className="lg:mr-4  mr-6" />}
            inputStyle="!max-w-[40px] bg-secondary-gray !w-full bg-gray-500  h-full min-h-[44px] text-base border-[#0000004D] text-black rounded-md"
            hasErrored={false}
            errorStyle={{ border: "1px solid #FF8C38" }}
          />
        </div>
        <Link
          href="/signup/info"
          className=" justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-primary/70"
        >
          以電話繼續
        </Link>
      </form>
    </>
  )
}

export default OTPVerify
