import Image from "next/image";

export default function AboutPage() {
  return (
    <section id="about" className="min-h-screen bg-dust-grey-200 w-full py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-8">
        {/* LEFT: Text */}
        <div className="flex flex-col justify-center">
          <p className="tracking-[0.3em] text-sm uppercase text-primary mb-4">
            Avant
          </p>

          <h1 className="font-montserrat text-5xl font-semibold tracking-[0.12em] mb-10 text-[#1c2922]">
            WHO WE ARE
          </h1>

          <p className="font-fira-code text-lg leading-relaxed text-[#28352d] max-w-xl">
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
        <div className="relative h-[480px] lg:h-[520px]">
          {/* Big image */}
          <div className="absolute top-0 right-0 w-[65%] h-full rounded-md overflow-hidden shadow-2xl">
            <Image
              src="/hero_background.png"
              alt="Avant visual"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 80vw"
            />
          </div>

          {/* Small overlapping image */}
          <div className="absolute left-0 bottom-6 w-52 h-72 rounded-md overflow-hidden shadow-xl border border-white/70 bg-white">
            <Image
              src="/test.avif"
              alt="Detail still life"
              fill
              className="object-cover"
              sizes="208px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
