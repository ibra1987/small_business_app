"use client";

import { signUp } from "@/app/actions/auth/signUp";

import {  ChangeEvent, useActionState, useEffect, useState } from "react";
import { ZodIssue } from "zod";


const SignUp = () => {
  const [state, action, isPending] = useActionState(signUp, undefined);
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
  },[state])

  const hasError = (name: string) => {
    if(errors && errors.length>0){
        return errors.find((error) => error.path.includes(name.trim()));

    }
    
  };
 const onchange=(e:ChangeEvent<HTMLInputElement>)=>{
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
    <form
      action={action}
      className="w-full  p-16 md:w-3/5  flex flex-col justify-start items-start gap-1"
    >
      <h1 className="text-2xl lg:text-4xl font-bold"> Create an account </h1>
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
      value={user.name}
      onChange={onchange}
        placeholder="full name"
        className={`w-full p-2 border border-gray-300 rounded ${hasError(
          "name"
        ) ? "border-red-500" : ""}`}
        name="name"
        type="text"
      />
      {hasError("name") && (
        <p className="text-red-500">
          {hasError("name")?.message}
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
      <input
      value={user.passwordConfirmation}
      onChange={onchange}
        placeholder="confirm password"
        className={`w-full p-2 border border-gray-300 rounded ${
            hasError("passwordConfirmation") ? "border-red-500" : ""
          }`}
        type="password"
        name="passwordConfirmation"
      />
      {hasError("passwordConfirmation") && (
        <p className="text-red-500">
          {
            hasError(
              "passwordConfirmation"
            )?.message
          }
        </p>
      )}
      <button
        type="submit"
        className="w-full p-2 outline-none bg-blue-600 text-white roundeds transition duration-150 hover:bg-blue-700"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
