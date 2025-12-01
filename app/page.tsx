import AboutPage from "@/components/about";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col ">
      <HeroSection />
      <AboutPage />
      <Contact />
    </div>
  );
}
