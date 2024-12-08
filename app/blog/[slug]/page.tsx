import getBlogBySlug from "@/utils/blog/getBlogBySlug";
import Image from "next/image";
import "../../../app/blog.css"
import { Poppins } from 'next/font/google'
import getBlogs from "@/utils/blog/getBlogs";
import { Clock } from "lucide-react";
import { calculateMinutesRead } from "@/utils/common/calculateMinutesRead";
 
// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","700","900"],
  
})


export const dynamicParams = true // or false, to 404 on unknown paths
 
export async function generateStaticParams() {
  const response = await getBlogs()
  if(!response.success || !Array.isArray(response.data)) return []
    
  const blogs = response.data
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}


async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const response = await getBlogBySlug(slug);
  if (!slug || !response.success) return;
  return (
    <main className={`${poppins.className} min-h-screen w-full flex flex-col justify-start items-center pt-16`}>
       
        <article className="w-full max-w-4xl flex flex-col gap-2 justify-start items-start ">
          <h1 className="font-black text-3xl text-gray-800 mb-4 md:text-4xl">
            {response?.data?.title}{" "}
          </h1>
          {response.data?.featured_image && (
            <div className="w-[100%] h-[250px] md:h-[350px] lg:h-[400px] relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${response.data.featured_image}`}
                alt={response.data?.slug!}
                fill={true}
                className="rounded"
              />
            </div>
            
          )}
          <div className="w-full px-4 mb-4 text-sm flex text-gray-500  justify-between items-center">
          <div>
              {response.data?.date_created && new Date(response.data.date_created).toLocaleString()}
            </div> 
            
          {response.data?.featured_image_credits && response.data?.featured_image_credits.blocks && (
            <div  dangerouslySetInnerHTML={{__html:response.data?.featured_image_credits.blocks[0].data.text}}>
              
            </div>
          )}
          <div className=" flex justify-center items-center">
            <Clock className="h-4 w-4 ml-4 mr-1" />
              {calculateMinutesRead(response.data?.body!)} min read
            </div>
          
          </div>
         <div>
            
           {
            response.data?.body && (
              <div className="p-2" dangerouslySetInnerHTML={{__html:response.data?.body}}>
              
              </div>
            )
           }
         </div>
        </article>
        
      
    </main>
  );
}

export default ArticlePage;
