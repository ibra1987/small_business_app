import Image from "next/image";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import { BlogSection } from "./components/blog/blogSectionHomePage";
import { PricingSection } from "./components/pricing/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-start items-center">
      <Hero/>
      <Features/>
      <BlogSection/>
      <PricingSection/>
    </main>
  );
}
