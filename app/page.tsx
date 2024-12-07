import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import { PricingSection } from "./components/pricing/Pricing";
import { BlogSection } from "./components/blog/blogSectionHomePage";

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
