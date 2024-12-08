"use client";
import { useState } from "react";
import BusinessNameAndDescription from "./BusinessNameAndDescription";
import LocationAndPhoneNumber from "./LocationAnadPhoneNumber";
import SocialLinks from "./Social";
import { ArrowLeft, ArrowRight } from "lucide-react";

const formComponents = [
  BusinessNameAndDescription,
  LocationAndPhoneNumber,
  SocialLinks,
];

const BusinessInfoWrapper = () => {
  const [active, setActive] = useState(0);

  const goToPrevious = () => {
    if (active === 0) return;
    setActive(active - 1);
  };
  const goToNext = () => {
    if (active === formComponents.length-1) return;
    setActive(active + 1);
  };

  return (
    <div className="w-full flex flex-col justify-start">
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full flex justify-center items-center">
        {/* <div className="text-gray-100">
          {formComponents[active - 1] && formComponents[active - 1]()}
        </div> */}
        <div className="w-full  text-gray-900">{formComponents[active]()}</div>
        {/* <div className="text-gray-100">
          {formComponents[active + 1] && formComponents[active + 1]()}
        </div> */}
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
            <button className="w-1/2 hover:bg-blue-800 p-2 bg-blue-600 text-white rounded" onClick={goToNext}>Save</button>

         )}
      </div>
    </div>
  );    
};

export default BusinessInfoWrapper;
