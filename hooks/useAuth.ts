import { createClient } from "@/config/supabase/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";



export function useAuth() {
    const [user,setUser]= useState<User | null>(null)
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        const auth = async ()=>{

            try {
                const client = createClient()
                const data = await client.auth.getUser()
                if(data.data.user) setUser(data.data.user)
                
            } catch (error) {
                console.log(error)
            }finally{
                setIsLoading(false)

            }
            
        }
        auth()
    },[])

    return {user,isLoading}
}