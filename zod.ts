
import * as z from "zod"

export const userSchema = z.object({
    email: z.string({required_error:"Please enter a valid email address"}).min(5,{message:"Please enter a valid email address"}).email({message:"Please enter a valid email address"}),
    name: z.string().min(3,{message:"Please enter a valid name"}),
    password: z.string().min(8,{message:"Please enter a valid password"}),
    passwordConfirmation: z.string().min(8,{message:"Passwords don't match"}),
}).superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords don't match",
        path:["passwordConfirmation"]
      });
    }
})

export const loginSchema = z.object({
  email: z.string({required_error:"Please enter a valid email address"}).min(5,{message:"Please enter a valid email address"}).email({message:"Please enter a valid email address"}),
  password: z.string().min(8,{message:"Please enter a valid password"}),

})

export const profileSchema = z.object({
  business_name: z.string().min(3,{message:"Please enter a valid name"}),
  business_description: z.string().min(3,{message:"Please enter a valid description"}),
  business_location: z.string().min(3,{message:"Please enter a valid location"}),
  primary_phone_number: z.string().min(3,{message:"Please enter a valid phone number"}),
  facebook: z.string().min(3,{message:"Please enter a valid url"}).optional(),
  linked_in: z.string().min(3,{message:"Please enter a valid url"}).optional(),
  instagram: z.string().min(3,{message:"Please enter a valid url"}).optional(),
  website: z.string().min(3,{message:"Please enter a valid url"}).optional(),

})