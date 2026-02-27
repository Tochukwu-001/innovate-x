import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // commit
    <>
      <main className="min-h-dvh bg-[url('/bg2.jpg')] bg-no-repeat bg-center bg-cover z-20">
        <section className="min-h-dvh bg-black/40 z-20 p-3 flex items-center justify-between">
          <div className="text-white lg:w-1/2 mx-auto flex flex-col gap-10 items-center justify-center max-md:pt-10">
            <h1 className="md:text-5xl text-2xl font-bold text-center">Welcome to <span className="text-sky-600">Innovate-X</span>. Solutions for Africa</h1>
            <p className="text-xl font-light text-center">It is a digital platform built to amplify innovative African minds by providing a space to share ideas, insights, and solutions that address real challenges across the continent. It connects thinkers, creators, and problem-solvers who are passionate about driving sustainable growth, collaboration and positive impact in Africa through innovation and technology.</p>
            <div className="flex w-full items-center gap-5 justify-center max-md:flex-col">
              <Link href={"/auth/signin"} className="bg-sky-600 px-8 py-3 rounded-full font-semibold hover:-translate-y-1 transition-all duration-200 border border-sky-600 max-md:w-full text-center">Get Started for Free</Link>
              <Link href={"/about"} className="border  px-8 py-3 rounded-full hover:-translate-y-1 transition-all duration-200 font-semibold max-md:w-full text-center">Learn More</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

