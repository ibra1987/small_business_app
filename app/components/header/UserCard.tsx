"use client";

import { signOut } from "@/app/actions/auth/signOut";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { PuffLoader } from "react-spinners";

const UserCard = ({user,ref,linkRef,click}:{click:()=>void,linkRef:React.RefObject<HTMLAnchorElement>,ref:React.RefObject<HTMLDivElement>,user:User}) => {
const [logginOut,setLoggingOut]=useState(false)
 
  const logOut = async () => {
    setLoggingOut(true)
    await signOut();
    setLoggingOut(false)
    redirect("/");
  };

  return (
    <div ref={ref} className="fixed w-full md:w-1/3 lg:w-1/4 right-8 md:right-12  lg:right-20 xl:right-36 top-14 text-sm  max-w-full py-10 px-4 bg-gray-50 rounded border flex flex-col justify-center items-start gap-2">
    {logginOut && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/15 flex justify-center items-center">
            <PuffLoader color="gray"/>
            </div>
    )}
     
        <div className="w-full flex flex-col justify-start items-start border-b py-3 gap-2">
          <span className="font-bold">
            {user?.user_metadata.name.toUpperCase()}
          </span>
          <span className="text-gray-500">{user?.email}</span>
        </div>
        <Link onClick={click} href={`/in/profile/${user?.id}`}>Profile</Link>
     
      <button onClick={logOut}>Sign out</button>
    </div>
  );
};

export default UserCard;
