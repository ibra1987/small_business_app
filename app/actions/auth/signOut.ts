"use server"


import { createClient } from "@/config/supabase/supabaseServer"
import { revalidatePath } from "next/cache"

export async function signOut() {

    const client = await createClient()
    await client.auth.signOut()
   revalidatePath("/","layout")

}