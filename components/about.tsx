"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Lower threshold for mobile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen color-porcelain-50 w-full py-12 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-16 px-4 md:px-8">
        {/* LEFT: Text */}
        <div 
          className={`flex flex-col justify-center xl:-ml-50 transition-all duration-1000`}
        >
          <h1 className={`font-montserrat text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-[0.15em] md:tracking-[0.26em] mb-6 md:mb-35 text-primary ${
            isVisible 
              ? "opacity-100 motion-translate-x-in-0 motion-delay-800 motion-translate-y-in-[-160%] motion-opacity-in-[0%] motion-duration-1000 motion-duration-[1.78s]/opacity motion-delay-[0.8s]/opacity" 
              : "opacity-0 -translate-x-12 translate-y-12"
          }`}>
            WHO WE ARE
          </h1>

          <p className={`font-fira-code text-base md:text-lg leading-relaxed text-primary max-w-xl ${
            isVisible 
              ? "opacity-100 motion-translate-x-in-0 motion-delay-800 motion-translate-y-in-[160%] motion-opacity-in-[0%] motion-duration-1000 motion-duration-[1.78s]/opacity motion-delay-[0.8s]/opacity" 
              : "opacity-0 -translate-x-12 translate-y-12"
          }`}>
            Avant is a luxury art consultancy specializing in exclusive private art
            sales, bespoke collection building, and the acquisition of rare
            high-value luxury goods. We guide discerning clients through a world of
            exceptional objects and investment-worthy art with discretion and
            refined taste. As a complementary service, we curate intimate,
            high-impact event experiences in partnership with leading luxury houses
            and cultural institutions.
          </p>
        </div>

        {/* RIGHT: Image composition */}
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] xl:h-[920px] mt-8 xl:mt-0">
          <Image
            src="/hero_background.png"
            alt="Avant visual"
            width={0}
            height={0}
            sizes="100vw"
            className={`absolute top-4 left-1/2 -translate-x-1/2 md:top-10 xl:top-20 xl:left-50 xl:translate-x-0 object-cover h-[400px] sm:h-[500px] md:h-[600px] xl:h-[720px] w-auto scale-[0.85] sm:scale-[0.95] xl:scale-[1.00] transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Small overlapping image */}
          <Image
            src="/test.avif"
            alt="Detail still life"
            width={0}
            height={0}
            sizes="100vw"
            className={`absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:top-auto md:bottom-12 xl:top-110 xl:bottom-auto xl:-left-25 object-cover w-[180px] h-[240px] sm:w-[220px] sm:h-[290px] md:w-[250px] md:h-[330px] xl:w-[270px] xl:h-[360px] transition-all duration-1000 delay-500 ${
              isVisible 
                ? "opacity-100 translate-x-0 translate-y-0" 
                : "opacity-0 translate-x-12 translate-y-12"
            }`}
          />
        </div>
      </div>
    </section>
  );
}