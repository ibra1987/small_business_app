import BusinessInfoWrapper from "@/app/components/profiles/new/BusinessInfoWrapper";




export default async function CreateProfilePage() {



    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center py-24">
            <div className="w-full md:w-2/5 flex flex-col justify-start items-center gap-16">

                <BusinessInfoWrapper/>
            </div>
        </main>
    )
    
}


