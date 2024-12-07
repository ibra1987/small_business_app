"use server"

import directusClient from "@/app/directus/directus"
import { readItems } from "@directus/sdk"

export interface Blog {
    title:string,
    slug:string,
    body:string,
    featured_image:string,
    excerpt:string,
    date_created?:string,
    featured_image_credits?:{
        blocks:Array<{
            id:string,
            type:string,
            data:{
                text:string
            }
        }>
    }

}
export default async function getBlogs(){



    try {
        const response = await directusClient.request(readItems("blogs",{
            fields:['title','slug','featured_image','excerpt','date_created']
        })) as unknown as Blog[]

        return {
            data:response,
            success:true
        }
        
    } catch (error) {
        console.log(error)
        return {
            error:"Something went wrong",
            success:false,
           
        }
    }
}