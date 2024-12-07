"use server"

import directusClient from "@/app/directus/directus"
import { readItem } from "@directus/sdk"
import { Blog } from "./getBlogs"


export default async function getBlogBySlug(slug:string){

    try {
        const response = await directusClient.request(readItem("blogs",slug,{
            fields:['title','slug','body','featured_image','excerpt','date_created,featured_image_credits']
        })) as unknown as Blog

        return {
            success:true,
            data:response
        }
    } catch (error) {
        console.log(error)
        return {
            error:"Something went wrong",
            success:false
        }
    }
}