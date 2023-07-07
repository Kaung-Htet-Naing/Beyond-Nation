"use client"

import Input from "@/components/Input"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ResetPassword() {
  return (
    <>
      <form>
        <h1 className="text-gray-900 text-center text-3xl mb-1">
          BEYOUND NATIONS
        </h1>
        <p className="text-sm font-normal text-center text-gray-600 mb-7">
          Reset Password
        </p>
        <p className="text-sm font-normal text-center text-gray-600 mb-7">
          Please Enter your Email to get instruction how to reset your Password
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
              placeholder="test@noBound.com"
              type="text"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/70"
        >
          Reset Password
        </button>
      </form>
      <div className="relative mt-5">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm font-medium leading-6">
          <span className="bg-white px-6 text-gray-900">或</span>
        </div>
      </div>
      <Link
        href="/signup/phone"
        className=" flex gap-2 justify-center w-full bg-transparent border mt-4 py-2 rounded-md text-black font-semibold mb-2"
      >
        Sign Up
      </Link>
    </>
  )
}
