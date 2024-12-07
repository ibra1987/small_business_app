"use client";

import { Blog } from "@/utils/blog/getBlogs";
import { getLatestBlogs } from "@/utils/blog/getLatestBlogs";
import { calculateMinutesRead } from "@/utils/common/calculateMinutesRead";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Ensure correct import path for motion

export function BlogSection() {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getLatestBlogs(3, {
        fields: [
          "title",
          "slug",
          "excerpt",
          "date_created",
          "featured_image",
          "featured_image_credits",
          "body",
        ],
      });
      if (res?.data) {
        setPosts(res.data);
      }
    };
    fetchPosts();
  }, []);

  if (!posts) return null;

  return (
    <div id="blog" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Business Insights
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Expert advice and strategies to help your business thrive
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(posts) &&
            posts.map((blog) => (
              <Link
                className={"flex flex-col"}
                key={blog.slug}
                href={`/blog/${blog.slug}`}
              >
                <motion.div
                  initial={{ opacity: 0, translateY: 50}}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1.2, // Extend duration for smoother movement
                    ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for a natural "easeOut" effect
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-col p-1 rounded-lg shadow-lg transition hover:bg-blue-100 hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover rounded-lg"
                      src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${blog.featured_image}`}
                      alt={blog?.slug!}
                      width={1000}
                      height={600}
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                        {blog.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {blog.excerpt}
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        {blog.date_created && (
                          <>
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>
                              {new Date(blog.date_created).toLocaleString()}
                            </span>
                          </>
                        )}
                        <Clock className="h-4 w-4 ml-4 mr-1" />
                        <span>{calculateMinutesRead(blog.body)} min read</span>
                      </div>
                      <span className="inline-flex items-center text-base font-semibold text-blue-600 hover:text-blue-500">
                        Read full article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
          >
            View all articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
