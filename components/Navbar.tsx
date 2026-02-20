"use client";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { RiMenuFill } from "react-icons/ri";
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
                    // using higher number for initial width nd height helps the images to be clearer before using a className to reduce it
                    className="w-8 h-8"
                />
                <p className="font-semibold text-xl text-gray-800 max-md:hidden">Innovate-X</p>
            </Link>


            <div className="flex items-center gap-5 max-lg:hidden">
                {
                    navItems.map((item, i)=>(
                        <Link key={i} href={item.url} className="text-lg hover:text-sky-700 transition-all duration-300">{item.text}</Link>
                    ))
                    // map allows one to iterate through an array or object
                }
                <Link href={"/auth/signin"} className="bg-sky-600 text-white  text-lg px-5 py-2 rounded-full flex items-center gap-2">
                    Sign In
                    <FiUser />
                </Link>
            </div>
            <button onClick={()=> setNavOpen(!navOpen)} className="text-xl lg:hidden z-50">
                { navOpen ? <IoMdClose /> : <RiMenuFill/>}
            </button>

            {/* Mobile and tab view */}
            <div className={` min-h-dvh bg-white w-full absolute top-0 right-0 lg:hidden ${navOpen ? "flex" : "hidden"} flex-col pt-20 items-center gap-10 `}>
                {
                    navItems.map((item, i)=>(
                        <Link onClick={()=> setNavOpen(false)} key={i} href={item.url} className="text-lg hover:text-sky-700 transition-all duration-300">{item.text}</Link>
                    ))
                    // map allows one to iterate through an array or object
                }
                <Link onClick={()=> setNavOpen(false)} href={"/auth/signin"} className="bg-sky-600 text-white  text-lg px-10 py-2 rounded-full flex items-center gap-2">
                    Sign In
                    <FiUser />
                </Link>
            </div>
        </main>
    )
}