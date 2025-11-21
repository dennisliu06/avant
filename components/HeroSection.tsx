import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {

  const CULTUREANIMATION = "motion-delay-1000 motion-translate-x-in-[0%] motion-translate-y-in-[160%] motion-opacity-in-[0%] motion-duration-[1.33s] motion-duration-[1.87s]/opacity motion-delay-[1.05s]/opacity"
  const ARTANIMATION = "motion-delay-1000 motion-translate-x-in-[0%] motion-translate-y-in-[-160%] motion-opacity-in-[0%] motion-duration-[1.33s] motion-duration-[1.87s]/opacity motion-delay-[1.05s]/opacity"
  const DASHANIMATION = "motion-scale-x-in-0 motion-duration-[2.50s] motion-delay-500"
  const AVANTANIMATION = "motion-translate-x-in-0 motion-delay-800 motion-translate-y-in-[-160%] motion-opacity-in-[0%] motion-duration-1500 motion-duration-[2.28s]/opacity motion-delay-[1.2s]/opacity"

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
        <div className="font-light w-full justify-between text-primary text-7xl md:text-9xl lg:text-9xl flex flex-col xl:flex-row items-center gap-8 lg:gap-16 px-32 ">
          <div className={`tracking-widest ${AVANTANIMATION}`}>AVANT</div>
          <div className={DASHANIMATION}>—</div>
          <div className="flex flex-col items-center gap-8">
            <div className="font-blosta font-light text-primary text-center mb-32">
              <div className={`whitespace-nowrap -mb-20 flex flex-row ${ARTANIMATION}`}>Art x</div>
              <br />
              <div className={`flex flex-row ${CULTUREANIMATION}`}>Culture</div>
            </div>

            <Button className="tracking-[0.3em] font-fira-code text-xl px-8 py-8 motion-delay-[1.8s] motion-blur-in-md motion-opacity-in-0">
              WORK WITH US
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
