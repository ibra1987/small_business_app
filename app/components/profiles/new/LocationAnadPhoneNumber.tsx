"use client";

import { ProfileSchemaType } from "./BusinessInfoWrapper";




const LocationAndPhoneNumber = ({formState,handleChange}:{formState:ProfileSchemaType,handleChange:()=>void}) => {
  return (
    <div className="w-full flex flex-col gap-6 justify-start items-start">
        <label htmlFor="business_location" className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">Business location:</span>
            <input value={formState.business_location} onChange={handleChange} className="w-full p-2 rounded border-2" name="business_location" type="text" required placeholder="Business location"/>
            
        </label>
        <label htmlFor="primary_phone_number" className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">Primary phone number:</span>
            <input value={formState.primary_phone_number} onChange={handleChange}  className="w-full p-2 rounded border-2" name="primary_phone_number" type="tel" required placeholder="Primary phone number"/>
            
        </label>

    </div>
  )
}

export default LocationAndPhoneNumber