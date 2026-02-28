import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import { signIn, auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
    const session = await auth()

    if (session) {
      redirect("/post-innovation")
    }
    
    // console.log(session);
    
  return (
    <main className="min-h-dvh grid lg:grid-cols-2">
      <div className="min-h-dvh bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
      <div className="flex items-center flex-col w-full max-lg:p-3">
        <h1 className="text-gray-800 my-10 text-2xl text-center font-semibold">
          Create Your Account
        </h1>
        <section className="lg:w-1/2 flex flex-col gap-5 max-md:w-full">
          <div className="w-full flex flex-col ">
            <input
              type="email"
              className="border outline-none border-gray-300 p-2 rounded-md"
              placeholder="example@gmail.com"
            />
            <button className="bg-sky-600 text-white p-2 rounded-md mt-2">
              Sign In
            </button>
          </div>

          <div className="flex items-center justify-center">
            <span className="border-b border-gray-300 w-full"></span>
            <p className="text-xs text-gray-700 w-full text-center">
              or continue with
            </p>
            <span className="border-b border-gray-300 w-full"></span>
          </div>

          <div className="flex flex-col gap-5">
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button type="submit" className="border rounded-full flex items-center justify-center gap-2 py-2 border-gray-300 w-full cursor-pointer">
                <FcGoogle className="text-xl" />
                <p>Google</p>
              </button>
            </form>

            <button className="border rounded-full flex items-center justify-center gap-2 py-2 border-gray-300">
              <FaGithub className="text-xl" />
              <p>Github</p>
            </button>
            <button className="border rounded-full flex items-center justify-center gap-2 py-2 border-gray-300">
              <FaApple className="text-xl" />
              <p>Apple</p>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
