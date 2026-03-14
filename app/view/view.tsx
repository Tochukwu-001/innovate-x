"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import { CiCircleCheck, CiTrash } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { FiLoader } from "react-icons/fi";
import { doc, deleteDoc } from "firebase/firestore";

interface Innovation {
  id: string;
  title?: string;
  problem?: string;
  materials?: string;
  impact?: string;
  userImage?: string;
  userName?: string;
  timestamp?: string;
  prototype?: string;
  userId?: string;
}

interface ViewProps {
  session?: any;
}

const View = ({ session }: ViewProps) => {
  const [posts, setPosts] = useState<Innovation[]>([]);
  const [loading, setLoading] = useState(true);
  //   console.log(session);

  const uid = session?.user?.id;

  // fetch function
  const fetchInnovation = async () => {
    const dbArray: Innovation[] = [];

    try {
      const querySnapshot = await getDocs(collection(db, "innovations"));

      querySnapshot.forEach((doc) => {
        const postObj: Innovation = {
          id: doc.id,
          ...doc.data(),
        } as Innovation;

        dbArray.push(postObj);
      });

      setPosts(dbArray);
      setLoading(false);
    } catch (error) {
      console.error("An error occurred>>>", error);
      alert("Something went wrong!");
    }
  };

  // delete function
  const deletePost = async (id: string)=>{
    try {
        // confirmation modal
    await deleteDoc(doc(db, "innovations", id)); 
    } catch (error) {
      console.error("An error occurred>>>", error);
      alert("Something went wrong!");
    }
  }

  useEffect(() => {
    fetchInnovation();
  }, [posts]);

  return (
    <main className="min-h-dvh md:p-5 p-3">
      <h1 className="text-center my-10 font-semibold text-2xl text-gray-800">
        Explore Innovative Solutions Shared by our Community
      </h1>
      {loading ? (
        <div className="h-[70vh] flex items-center justify-center gap-2">
          <FiLoader className="animate-spin text-2xl" />{" "}
          <p className="text-gray-600 text-sm">Loading...</p>
        </div>
      ) : (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <div key={i} className="shadow-sm p-3">
              <h1 className="text-center text-2xl font-bold text-gray-800">
                {post.title}
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <article className="flex items-center gap-2">
                    <img
                      src={post.userImage}
                      alt={post.userName}
                      className="w-10 h-10 rounded-full"
                    />
                    <p>{post.userName}</p>
                  </article>
                  <p className="text-sm">{post.timestamp}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-700 flex items-center gap-2">
                    <FaUsers className="text-base" /> Community Problem{" "}
                  </span>
                  <p className="text-lg font-light line-clamp-2">
                    {post.problem}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-700 flex items-center gap-2">
                    <GrResources className="text-base" /> Materials{" "}
                  </span>
                  <p className="text-lg font-light line-clamp-2">
                    {post.materials}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-700 flex items-center gap-2">
                    <LuPencilLine className="text-base" /> Prototype
                    Description{" "}
                  </span>
                  <p className="text-lg font-light line-clamp-2">
                    {post.prototype}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-700 flex items-center gap-2">
                    <CiCircleCheck className="text-base" /> Projected
                    Impact{" "}
                  </span>
                  <p className="text-lg font-light line-clamp-2">
                    {post.impact}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/view/${post.id}`}
                    className="flex items-center gap-1 hover:text-sky-600"
                  >
                    View Details{" "}
                    <MdKeyboardDoubleArrowRight className="text-lg" />
                  </Link>
                  {uid == post.userId && (
                    <button onClick={()=> deletePost(post.id)} className="text-lg hover:bg-red-500 p-2 rounded-full hover:text-white transition-all duration-200">
                      <CiTrash />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default View;
