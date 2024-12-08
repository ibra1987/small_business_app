import getProfileById from "@/utils/profile/getProfileById"
import Link from "next/link"
import { redirect } from "next/navigation"





async function ProfilePage({params}:{params:Promise<{userId:string}>}) {
    const {userId} = await params
    if(!userId) redirect("/in")

    const response = await getProfileById(userId)
  return (
    <main className="min-h-screen flex flex-col justify-start items-center">
      {!response?.success && (
        <div className="mt-20">
          <div> {response?.error}, 
            <Link className="text-blue-700 hover:underline" href={`/in/profile/${userId}/create`}>
            create one now</Link></div>
        </div>
      )}


    </main>
  )
}

export default ProfilePage