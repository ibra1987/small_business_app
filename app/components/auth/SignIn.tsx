"use client"


import { signIn } from "@/app/actions/auth/signIn";
import { redirect } from "next/navigation";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { ZodIssue } from "zod";






const SignIn = ({source}:{source?:string}) => {
  const [state, action, isPending] = useActionState(signIn, undefined);
  const  [generalError,setGeneralError]=useState("")
  const [successMessage,setSuccessMessage]=useState("")
  const [errors,setErrors]=useState<ZodIssue[]>([])
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    passwordConfirmation:""
  })
  useEffect(()=> {
    if(state?.errors){
     setErrors(state.errors)
    }
    if(state?.error){
     setGeneralError(state.error.toString())
    }
    if(state?.success){
     redirect("/in")
    }
   },[state])

   const hasError = (name: string) => {
    if(errors && errors.length>0){
        return errors.find((error) => error.path.includes(name.trim()));

    }
    
  };
 const onchange=(e:ChangeEvent<HTMLInputElement>)=>{
    setGeneralError("")
    setSuccessMessage("")
      const name = e.target.name.trim()
      setUser({
        ...user,
        [name]:e.target.value
      })
  
         if(errors && errors.length>0){
            {
                setErrors({
                   ...errors,
                    ...errors?.filter((err)=> !err.path.includes(name))
                })
            }
         }
  }
  return (
      <form action={action} className="w-full  p-16 md:w-3/5  flex flex-col justify-start items-start gap-4">
        
        {source && (
        <div className="w-full bg-green-100 text-green-700 p-2">
            
                <span>
                    {"Email confirmed, please try log in"}
                </span>
            
        </div>
        )}
        {successMessage && (
        <div className="w-full bg-green-100 text-green-700 p-2">
            
                <span>
                    {successMessage}
                </span>
            
        </div>
        )}
        {generalError && (
        <div className="w-full bg-red-100 text-red-700 p-2">
            
                <span>
                    {generalError}
                </span>
            
        </div>
        )}
         <h1 className="text-2xl lg:text-4xl font-bold"> Sign In </h1>

         <input
      onChange={onchange}
      value={user.email}
     
        placeholder="email address"
        className={`w-full p-2 border border-gray-300 rounded ${
          hasError("email") ? "border-red-500" : ""
        }`}
        type="email"
        name="email"
      />
      {hasError("email") && (
        <p className="text-red-500">
          {
            hasError("email")
              ?.message
          }
        </p>
      )}         
      
      <input
      value={user.password}
      onChange={onchange}
        placeholder="password"
        className={`w-full p-2 border border-gray-300 rounded ${
            hasError("password") ? "border-red-500" : ""
          }`}
        type="password"
        name="password"
      />
      {hasError("password") && (
        <p className="text-red-500">
          {
           hasError("password")
              ?.message
          }
        </p>
      )}         
         <button
      disabled={isPending}
        type="submit"
        className={`${isPending ? " text-gray-500 bg-blue-500 " : " bg-blue-600" } w-full p-2 outline-none  text-white roundeds transition duration-150 hover:bg-blue-700`}
      >
               {isPending ? "Signing In..." : "Sign In"}
         </button>
      </form>

  )
}

export default SignIn