import Link from "next/link"

export default async function Home() {
  // handle Auth
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl text-black mb-4">BEYOND Nation</h1>
        <div className="flex gap-5">
          <Link href={"/user"}>
            <button className="bg-primary px-4 py-2 rounded-lg text-xl">
              Dashboard
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="bg-primary px-4 py-2 rounded-lg text-xl">
              signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
