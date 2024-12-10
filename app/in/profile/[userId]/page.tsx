import { ProfileSchemaType } from "@/app/components/profiles/new/BusinessInfoWrapper";
import { createClient } from "@/config/supabase/supabaseServer";
import getProfileById from "@/utils/profile/getProfileById";
import { Facebook, Globe, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function ProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const client = await createClient();
  if (!userId) redirect("/in");

  const response = await getProfileById(userId);
  const user = await client.auth.getUser();
  const data = response?.data as ProfileSchemaType;
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center pt-10">
      {!response?.success || !response.data ? (
        <div className="mt-20">
          <div>
            {" "}
            {response?.error},
            <Link
              className="text-blue-700 hover:underline"
              href={`/in/profile/${userId}/create`}
            >
              create one now
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-start items-center">
          <div className="w-full flex flex-col justify-start items-center gap-6 ">
            <div className="w-full h-[150px] md:h-[300px] bg-gray-500 rounded-t-lg relative mb-10">
              <Image
                src={"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"}
                fill={true}
                alt="logo"
                className="rounded-t-lg"
              />
              <div className="absolute w-[60px] h-[60px] md:w-[120px] md:h-[120px] bg-gray-500 rounded-full p-2 border-4 shadow-sm border-white   left-[20px] md:left-[40px] bottom-[80px] md:bottom-[-40px] "></div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2 px-4">
              {response.data?.logo_url && (
                <Image
                  src={response.data?.logo_url}
                  width={100}
                  height={100}
                  alt="logo"
                />
              )}
              <h1 className="text-3xl  font-bold text-black">
                {response.data.business_name}
              </h1>
              <div className="w-full flex flex-col gap-4 justify-start items-start">
                <p className="text-gray-600">{response.data.business_description}</p>
                <div className="w-full flex flex-col justify-around items-start md:flex-row gap-2 md:justify-start md:gap-6  text-blue-600 ">
                  <p className="flex justify-center items-center gap-2">
                  <MapPin size={20}/>
                  {response.data.business_location}
                  </p>
                  <p className="flex justify-center items-center gap-2">
                  <Phone size={20}/>
                  {response.data.primary_phone_number}
                  </p>
                  <p className="flex justify-center items-center gap-2">
                  <Globe size={20}/>
                  {response.data.website_link}
                  </p>
                  <p className="flex justify-center items-center gap-2">
                  <Mail size={20}/>
                  {"hello@bakeryboston.com"}
                  </p>
                 </div>
                 <div className="w-full flex gap-2 justify-start items-start text-blue-600">
                  <Link href={"/"} className="flex justify-center items-center gap-2 p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white">
                    <Facebook size={20}/>

                  </Link>
                  <Link href={"/"} className="flex justify-center items-center gap-2 p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white">
                    <Instagram size={20}/>

                  </Link>
                  
                  <Link href={"/"} className="flex justify-center items-center gap-2 p-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white">
                    <Twitter size={20}/>
                  </Link>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProfilePage;
 