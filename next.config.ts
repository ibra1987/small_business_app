import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_DIRECTUS_URL!.replace("https://",""),
        port: '',
   
      },
    ],
  },};

export default nextConfig;
