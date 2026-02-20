import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer(){
    return (
        <main className="flex max-md:flex-col max-md:gap-5 items-center justify-between md:px-10 py-2 px-5 border-t border-gray-300">
            <Link href={"/"} className="flex items-center">
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                />
                <p className="font-semibold text-xl text-gray-800 max-md:hidden">Innovate-X</p>
            </Link>

            <div className="text-sm text-gray-700 flex max-md:flex-col max-md:gap-2 gap-5">
                <Link href={"/"} className="hover:underline">Chat With Us</Link>
                <Link href={"/"} className="hover:underline">Privacy Policy</Link>
                <Link href={"/"} className="hover:underline">Terms of Use</Link>
            </div>

            <div className="flex items-center gap-5 text-2xl">
                <FaFacebook/>
                <FaInstagram/>
                <FaXTwitter/>
                <FaYoutube/>
            </div>
        </main>
    )
}