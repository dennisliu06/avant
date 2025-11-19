import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full font-montserrat ">
      {/* Background Image */}

      <Image
        src="/hero_background.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 w-full flex items-center justify-center">
        <div className="font-light w-full justify-between text-primary text-8xl xl:text-9xl flex flex-col xl:flex-row items-center gap-8 lg:gap-16 px-32 ">
          <div className="tracking-widest motion-translate-x-in-0 motion-delay-500 motion-translate-y-in-[-160%] motion-opacity-in-[0%] motion-duration-1500 motion-duration-[1.98s]/opacity motion-delay-[0.72s]/opacity">AVANT</div>
          <div className="motion-scale-x-in-0 motion-duration-[2.50s] motion-delay-500">—</div>
          <div className="flex flex-col items-center gap-8">
            <div className="font-blosta font-light text-primary text-center mb-32">
              <div className="whitespace-nowrap -mb-20 motion-delay-700 motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-opacity-in-[0%] motion-duration-[1.13s] motion-duration-[1.67s]/opacity motion-delay-[0.85s]/opacity flex flex-row">Art x</div>
              <br />
              <div className="motion-delay-700 motion-translate-x-in-[0%] motion-translate-y-in-[160%] motion-opacity-in-[0%] motion-duration-[1.13s] motion-duration-[1.67s]/opacity motion-delay-[0.85s]/opacity flex flex-row">Culture</div>
            </div>

            <button className="absolute bottom-16 mt-1 bg-black text-white px-6 py-3 text-xl rounded">
              button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
