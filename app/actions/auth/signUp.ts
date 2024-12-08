"use server"

import { createClient } from "@/config/supabase/supabaseServer"
import { userSchema } from "@/zod"
export async function signUp(previousState:unknown,formdata:FormData) {

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
        return {
            success:false,
            errors:validationResult.error.errors
        }
    }
       const supabase = await createClient()

        let { error } = await supabase.auth.signUp({
            email,
            password,
            
            options: {
                data: {
                  name,
                },
                emailRedirectTo:"/sign-in?source=conf"
                
                
            }   
           })


              if(error){
                return {
                    error:error.message,
                    success:false
                }
              }
       
          return{
            success:true
          }
    } catch (error) {
        console.log(error)
        return {
            error:"Something went wrong",
            success:false
        }
        
    }
    
}