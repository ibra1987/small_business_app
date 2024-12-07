"use server"

import directusClient from "@/app/directus/directus"
import { Blog } from "./getBlogs"
import { readItems } from "@directus/sdk"


export async function getLatestBlogs(numOfBlogs:number,options:{fields:Array<string>}) {
    

    try {
        const response = await directusClient.request(readItems("blogs",{
            fields:options.fields,
            sort:"-date_created",
            limit:numOfBlogs
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