import Image from "next/image";

/** @type {import('tailwindcss').Config} */
export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      
      <Image
        src="/hero_background.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between text-black font-sans p-16">
        <div className="text-9xl text-primary">
          AVANT
        </div>
        <div className="sm:invisible text-9xl text-primary">
          -
        </div>
        <div>
          whaterver
        </div>
      </div>
    </div>
  );
}
