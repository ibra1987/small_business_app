"use server"

import { createClient } from "@/config/supabase/supabaseServer"




export default async function getProfileById(id:string){

    try {
        const client = await createClient()
        const {error,data} = await client.from("profiles").select().eq("user_id",id).single()

        if(error){
            return {
                error:"It seems you have not created a profile yet",
                success:false
            }
        }
        return {
            success:true,
            data:data
        }
        
    } catch (error) {
        
    }

}