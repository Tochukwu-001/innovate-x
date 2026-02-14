import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    const navItems = [
        {text: "Home", url: "/"},
        {text: "About Us", url: "/about"},
        {text: "Contact Us", url: "/contact"},
        {text: "View", url: "/view"},
    ]
    return(
        <main className="shadow-md px-10 py-5 flex items-center justify-between">
            <Link href={"/"} className="flex items-center">
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                />
                <p className="font-semibold text-xl text-gray-800">Innovate-X</p>
            </Link>

            <div className="flex items-center gap-5">
                <Link href={"#"} className="text-lg hover:text-sky-700 transition-all duration-300">Home</Link>
                <Link href={"#"}>Sign In</Link>
            </div>
        </main>
    )
}