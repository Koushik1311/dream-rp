import FAQ from "@/components/home/FAQ";
import FeaturedCreators from "@/components/home/FeaturedCreators";
import Hero from "@/components/home/Hero";
import InteractiveStorytelling from "@/components/home/InteractiveStorytelling";

export default function HomePage() {
  return (
    <main className="container">
      {/* Hero Section */}
      <Hero />

      {/* Featured Creators */}
      <FeaturedCreators />

      {/* Next Generation of Interactive Storytelling */}
      <InteractiveStorytelling />

      {/* Frequently asked questions */}
      <FAQ />
    </main>
  );
}
