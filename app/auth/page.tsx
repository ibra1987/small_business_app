"use client"

import { useEffect, useState } from "react"
import SignUp from "../components/auth/SignUp"
import SignIn from "../components/auth/SignIn"
import { useSearchParams } from "next/navigation"





const AuthPage = () => {
    const params = useSearchParams()
    const source = params.get("source")
    const [isNew,setIsNew]=useState(true)

    useEffect(()=>{
        if(params.get("source")){
            setIsNew(false)
        }
    },[params])
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-start items-center  shadow-lg  ">
        <div className="w-full md:w-3/5 flex justify-center items-center  px-16  ">
        <button className={`w-1/2 p-2 outline-none font-medium border-b  hover:border-b-gray-400 ${isNew ? "border-b border-b-gray-400  " : " text-gray-600 border-b-transparent"}`} onClick={()=>setIsNew(true)}>
            Sign Up
        </button>
        <button className={`w-1/2 p-2 outline-none font-medium border-b  hover:border-b-gray-400 ${isNew ? " text-gray-600 border-b-transparent " : "border-b  border-b-gray-400"}`} onClick={()=>setIsNew(false)}>
            Sign In
        </button>
        </div>
        {isNew && <SignUp/>}
        {!isNew && <SignIn source={source ?? undefined}/>}

    </div>
        </div>
  )
}

export default AuthPage