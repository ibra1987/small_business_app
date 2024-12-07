"use server"

import { supabase } from "@/config/supabase"
import { userSchema } from "@/zod"
import bcrypt from "bcryptjs"
export async function signUp(previousState:unknown,formdata:FormData) {
    const saltRounds =10

    const email = formdata.get("email") as  string
    const name =formdata.get("name") as  string
    const password = formdata.get("password")  as  string
    const passwordConfirmation= formdata.get("passwordConfirmation")  as  string

    

    try {
        
        const validationResult = await userSchema.safeParseAsync({
            name,
            email,
            password,
            passwordConfirmation
        })
    if(!validationResult.success){
        console.log(validationResult.error.errors)
        return {
            success:false,
            errors:validationResult.error.errors
        }
    }
    const hashedPassword = await bcrypt.hash(password,saltRounds)
        let { error } = await supabase.auth.signUp({
            email,
            password: hashedPassword
          })

          if(error){
            return {
                success:false,
                error
            }
          }
    } catch (error) {
        console.log(error)
        return {
            error:"Something went wrong",
            success:false
        }
        
    }
    
}