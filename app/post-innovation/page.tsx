import React from "react";
import PostForm from "./post";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
    const session = await auth();
    if (!session) {
        redirect("/auth/signin")
    }
    return (
        <main>
            <PostForm session={session}/>
        </main>
    );
};

export default page