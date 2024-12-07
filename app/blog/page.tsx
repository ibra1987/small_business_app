import getBlogs from "@/utils/blog/getBlogs"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"





async function BlogPage() {
    const blogs = await getBlogs()

  if(!blogs.success){
    return (
      <div>
        Could not fetch articles.
      </div>
    )
  }

  return (
    <main className="min-h-screen max-w-5xl flex flex-col gap-10 justify-start items-start pt-24">
     <h1 className="text-3xl font-bold md:text-4xl"> Latest Business Insights</h1>
     {Array.isArray(blogs.data) && blogs?.data.length>0 && (
           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.data.map((blog)=>(
             <div key={blog.title} className="flex flex-col justify-start items-center ">
              <Link className="w-full " href={`/blog/${blog.slug}`}>
               <div className="w-[100%] h-[200px] relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${blog.featured_image}`}
                alt={blog?.slug!}
                fill={true}
                className="rounded hover:scale-105 tranistion ease-in-out duration-300"
              />
            </div>
            </Link>

            <div className="w-full text-sm text-gray-500 text-left">
              {blog.date_created && new Date(blog.date_created).toLocaleString()}
            </div>
               <h2 className="text-2xl font-bold">
                <Link className="hover:underline text-blue-600" href={`/blog/${blog.slug}`}>
                {blog.title} 
                </Link>
               </h2>
               <p className="text-gray-600">
                  {blog.excerpt.slice(0,100)+"..."}<Link className="inline-flex items-center text-base font-semibold text-blue-600 hover:text-blue-500" href={`/blog/${blog.slug}`}>
                  Read full article
                  <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>       
              </p>
             </div>
          ))}
          </div>
      )}

     
    </main>
  )
  
}

export default BlogPage