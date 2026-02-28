import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <main>
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
            <div>
                <link href={"/"}>Chat With Us </link>
                <link href={"/"}> Privacy Policy </link>
                <link href={"/"}> Terms Of Use </link>
            </div>

            <div> 
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
                <FaYoutube />
            </div>
        </main>
    )

}