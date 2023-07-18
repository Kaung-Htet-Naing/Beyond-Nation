"use client"
import PhoneLogin from "./components/phoneLogin"
import OTPVerify from "./components/otpverfiy"

export default function Home({ params }: { params: { signupslug: string } }) {
  return (
    <>
      {params.signupslug === "phone" && <PhoneLogin />}
      {params.signupslug === "otp" && <OTPVerify />}
    </>
  )
}
