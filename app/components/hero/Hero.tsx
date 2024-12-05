import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-24">
      <h1 className="font-black text-4xl lg:text-7xl ">
        Grow your business with<br/>
        <span className="text-blue-600">smart tools & insights</span>
      </h1>
      <div className="w-full flex justify-center items-center gap-8 py-10">
        <Link href={"/tools"} className="px-8 py-4 rounded font-bold text-lg text-white flex justify-center items-center gap-4 bg-blue-600 hover:bg-blue-700 ">  
            <span>Explore tools</span><ArrowRight/>
        </Link> 
        <Link href={"/talks"} className="px-8 py-4 text-lg font-bold rounded bg-blue-100 text-blue-600 hover:bg-blue-200 ">
           join a talk
        </Link>

      </div>
    </div>
  );
};

export default Hero;
