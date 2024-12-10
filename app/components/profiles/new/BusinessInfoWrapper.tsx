"use client";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import BusinessNameAndDescription from "./BusinessNameAndDescription";
import LocationAndPhoneNumber from "./LocationAnadPhoneNumber";
import SocialLinks from "./Social";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { profileSchema } from "@/zod";
import * as z from "zod"
import { createProfile } from "@/app/actions/profile/createProfile";
import { useRouter } from "next/navigation";
const formComponents = [
  BusinessNameAndDescription,
  LocationAndPhoneNumber,
  SocialLinks,
];




export type ProfileSchemaType = z.infer<typeof profileSchema>;

//TO DO  BETTER ERROR DISPLAY
const BusinessInfoWrapper = () => {
  const [state, action, isPending] = useActionState((prevState: any) => createProfile(prevState, collectedData()), undefined);
  const [active, setActive] = useState(0);
  const router = useRouter()
 
  const [formState, setFormState] = useState<ProfileSchemaType>({
    business_name: "",
    business_description: "",
    business_location: "",
    primary_phone_number: "",
    facebook: "",
    linked_in: "",
    instagram: "",
    website: "",
  });

  const collectedData = () => {
    const { business_name, business_description, business_location, primary_phone_number, facebook, linked_in, instagram, website } = formState;
    const formData = new FormData();
    formData.append("business_name", business_name);
    formData.append("business_description", business_description);
    formData.append("business_location", business_location);
    formData.append("primary_phone_number", primary_phone_number);
    formData.append("facebook", facebook ?? "");
    formData.append("linked_in", linked_in ?? "");
    formData.append("instagram", instagram ?? "");
    formData.append("website", website ?? "");
    return formData
  }
  const handleChange = (e?: ChangeEvent<HTMLInputElement>) => {
    if(!e) return
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };


  const goToPrevious = () => {
    if (active === 0) return;
    setActive(active - 1);
  };
  const goToNext = () => {
    if (active === formComponents.length-1) return;
    setActive(active + 1);
  };

  useEffect(()=>{
   if(state?.success){
    setActive(0)
    setFormState({
      business_name: "",
      business_description: "",
      business_location: "",
      primary_phone_number: "",
      facebook: "",
      linked_in: "",
      instagram: "",
      website: "",
    })
   router.back()
   }
  },[state])
  return (
    <div className="w-full flex flex-col justify-start gap-2 ">
      <div className="w-full flex flex-col justify-start items-start  bg-red-100">
        {state?.error && (
          <p className="text-red-600 p-2">Error: {state.error}</p>
        )}
      {state?.errors && (
        state.errors.map((error) => (
          <p key={error.path[0]} className="text-red-600 p-2">{error.message}</p>
        ))
      )}
      </div>
       <form action={action} className="w-full  text-gray-900">
      <div className="w-full flex flex-col justify-start items-start">
     
        <div className="w-full flex justify-center items-center">
        
      
          {formComponents[active]({formState, handleChange})}
        
        </div>
      </div>
      <div className={`${active === formComponents.length-1 ? "justify-end " :  "justify-between " } w-full flex py-6 items-center gap-4`}>
        {formComponents[active-1] && (
            <button className="flex justify-center items-center gap-2 w-1/2 hover:bg-gray-800 p-2 bg-black text-white rounded" onClick={goToPrevious}>
                
                <ArrowLeft/>Previous
                </button>
        )}
         {formComponents[active+1] ?(
                    <button className="flex justify-center items-center gap-2 w-1/2 hover:bg-gray-800 p-2 bg-black text-white rounded" onClick={goToNext}>
                        Next<ArrowRight/>
                        </button>

         ):(
            <button disabled={isPending} className={`${isPending ? " bg-blue-400 text-gray-500" : " hover:bg-blue-800  bg-blue-600"} w-1/2 p-2 outline-none  text-white rounded`} >
              {isPending ? "Saving..." : "Save"}
              </button>

         )}
           
      </div>
      </form>
  

    </div>
  );    
};

export default BusinessInfoWrapper;
