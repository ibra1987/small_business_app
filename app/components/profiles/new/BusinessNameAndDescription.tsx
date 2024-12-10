"use client";

import { ProfileSchemaType } from "./BusinessInfoWrapper";




const BusinessNameAndDescription = ({formState,handleChange}:{formState:ProfileSchemaType,handleChange:()=>void}) => {
  return (
    <div className="w-full flex flex-col gap-6 justify-start items-start">
        <label htmlFor="business_name" className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">Business Name:</span>
            <input name="business_name" value={formState.business_name} onChange={handleChange}  className="w-full p-2 rounded border-2"  type="text" required placeholder="Business name"/>
            
        </label>
        <label htmlFor="business_description" className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">Business Description:</span>
            <input name="business_description" value={formState.business_description} onChange={handleChange} className="w-full p-2 rounded border-2"   type="text" required placeholder="Business description"/>
            
        </label>

    </div>
  )
}

export default BusinessNameAndDescription