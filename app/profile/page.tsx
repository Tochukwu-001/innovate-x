import { auth } from "@/auth"
import Image from "next/image"
import { redirect } from "next/navigation"
import { IoIosLogOut } from "react-icons/io";


export default async function Profile (){
    const session = await auth()
    if (!session) {
        redirect("/auth/signin")
    }
    return (
        <main className="min-h-dvh flex justify-center">
            <article className="shadow-md rounded-md p-5 my-20 w-1/3 mx-auto flex flex-col items-center gap-10">
                <h1 className="text-center md:text-4xl font-semibold text-gray-900">My Account</h1>
                <span className="flex items-center gap-3 text-gray-600">Name: <h2 className="text-gray-900 text-xl  font-semibold">{session.user?.name}</h2></span>
                <Image
                    src={session?.user?.image ?? "/user.png"}
                    alt={session?.user?.name?.slice(0, 2).toUpperCase() ?? "user"}
                    width={1000}
                    height={1000}
                    className="w-60 h-60 rounded-full"
                />
                <span className="flex items-center gap-3 text-gray-600">Email: <h2 className="text-gray-900 text-xl font-light">{session.user?.email}</h2></span>

                <button className="flex items-center gap-2 px-10 py-2 rounded-md bg-red-500 text-white text-lg cursor-pointer hover:bg-red-600 transition-all duration-300">
                    Logout <IoIosLogOut className="text-2xl"/>
                </button>
            </article>
        </main>
    )
}