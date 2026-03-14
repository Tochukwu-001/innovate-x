"use client";
import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

interface ViewProps {
  session?: any;
}
const Update = ({ session }: ViewProps) => {
  const username = session?.user?.name;
  const uid = session?.user?.id;
  const [updatedName, setUpdatedName] = useState(username);

  // update function
  const updateProfile = async (id) => {
    try {
      const docRef = doc(db, "users", id);
      await updateDoc(docRef, { name: updatedName });
      alert("Profile Sucessfully updated")
    } catch (error) {
      console.error("An error occurred>>>", error);
      alert("Something went wrong!");
    }
  };

  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-2">
        <input
          value={updatedName}
          onChange={(e)=> setUpdatedName(e.target.value)}
          type="text"
          className="border border-gray-300 p-2 rounded-md outline-none"
          placeholder="Edit your username"
        />
        <button onClick={()=> updateProfile(uid)} className="bg-green-600 text-white px-5 py-2 rounded-md">
          Update Profile
        </button>
      </div>
    </main>
  );
};

export default Update;
