"use server";

import { createClient } from "@/config/supabase/supabaseServer";
import { loginSchema } from "@/zod";
export async function signIn(previousState: unknown, formdata: FormData) {
  const email = formdata.get("email") as string;

  const password = formdata.get("password") as string;

  try {
    const validationResult = await loginSchema.safeParseAsync({
      email,
      password,
    });
    if (!validationResult.success) {
      return {
        success: false,
        errors: validationResult.error.errors,
      };
    }
    const supabase = await createClient();

    let {   error } = await supabase.auth.signInWithPassword({
      email,
      password,
      
    });

    if (error) {
      return {
        error: error.message,
        success: false,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
      success: false,
    };
  }
}
