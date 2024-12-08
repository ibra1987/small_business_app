"use client";




const BusinessNameAndDescription = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-start items-start">
        <label htmlFor="business_name" className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">Business Name:</span>
            <input className="w-full p-2 rounded border-2" name="business_name" type="text" required placeholder="Business name"/>
            
        </label>
        <label htmlFor="business_description" className="w-full flex flex-col justify-start items-start">
           <span className="font-medium">Business Description:</span>
            <input className="w-full p-2 rounded border-2"   name="business_description" type="text" required placeholder="Business description"/>
            
        </label>

    </div>
  )
}

export default BusinessNameAndDescription