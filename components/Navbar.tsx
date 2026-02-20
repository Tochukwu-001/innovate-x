"use client";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar(){
    const [navOpen, setNavOpen] = useState(false)
    
    const navItems = [
        {text: "Home", url: "/"},
        {text: "About Us", url: "/about"},
        {text: "Contact Us", url: "/contact"},
        {text: "View", url: "/view"},
    ]
    return(
        <main className="shadow-md px-10 py-3 flex items-center justify-between sticky top-0 bg-white">
            {/* desktop view */}
            <Link href={"/"} className="flex items-center z-50">
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                />
                <p className="font-semibold text-xl text-gray-800 max-md:hidden">Innovate-X</p>
            </Link>

            <div className="flex items-center gap-8 max-lg:hidden">
                {
                    navItems.map((item, i)=> (
                        <Link key={i} href={item.url} className="text-lg hover:text-sky-700 transition-all duration-300">{item.text}</Link>
                    ))
                }
                <Link className="bg-sky-600 text-white text-lg px-5 py-2 rounded-full flex items-center gap-2" href={"/auth/signin"}>
                    Sign In
                    <FiUser />
                </Link>
            </div>

            <button onClick={()=> setNavOpen(!navOpen)} className="text-xl lg:hidden z-50">
                {
                    navOpen ?  <IoMdClose/> : <CiMenuFries/>
                }
            </button>

            {/* mobile and tab view */}
            <div className={` min-h-dvh bg-white w-full absolute top-0 right-0 lg:hidden ${navOpen ? "flex" : "hidden"}  flex-col pt-20 items-center gap-10 `}>
                {
                    navItems.map((item, i)=> (
                        <Link onClick={()=> setNavOpen(false)} key={i} href={item.url} className="text-lg hover:text-sky-700 transition-all duration-300">{item.text}</Link>
                    ))
                }
                <Link onClick={()=> setNavOpen(false)} className="bg-sky-600 text-white text-lg px-10 py-2 rounded-full flex items-center gap-2" href={"/auth/signin"}>
                    Sign In
                    <FiUser />
                </Link>
            </div>
        </main>
    )
}