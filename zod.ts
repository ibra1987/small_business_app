
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