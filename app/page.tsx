import AboutPage from "@/components/about";
import ComingSoon from "@/components/ComingSoonSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col ">
      <HeroSection />
      <AboutPage/>
      <ComingSoon />
    </div>
  );
}
