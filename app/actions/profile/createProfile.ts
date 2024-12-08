"use server"

import { profileSchema } from "@/zod"



export async function createProfile(previousState:unknown,formdata:FormData){
    const business_name = formdata.get("business_name") as string
    const business_description = formdata.get("business_description") as string
    const business_location = formdata.get("business_location") as string
    const primary_phone_number = formdata.get("primary_phone_number") as string
    const facebook = formdata.get("facebook") as string
    const linked_in = formdata.get("linked_in") as string
    const instagram = formdata.get("instagram") as string
    const website = formdata.get("website") as string

    try {
        const validationResult = await profileSchema.safeParseAsync({
            business_name,
            business_description,
            business_location,
            primary_phone_number,
            facebook,
            linked_in,
            instagram,
            website
        })
        if (!validationResult.success) {
            return {
                success: false,
                errors: validationResult.error.issues,
            }
        }
        
    } catch (error) {
        
    }


}