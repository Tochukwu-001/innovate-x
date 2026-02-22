import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer(){
    return (
        <main>
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

            <div>
                <Link href={"/"}>Chat with us</Link>
                <Link href={"/"}>Privacy Policy</Link>
                <Link href={"/"}>Terms of Use</Link>
            </div>

            <div>
                <FaFacebook/>
                <FaInstagram/>
                <FaXTwitter/>
                <FaYoutube/>
            </div>
        </main>
    )
}