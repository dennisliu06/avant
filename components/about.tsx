import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen color-porcelain-50 w-full py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-8">
        {/* LEFT: Text */}
        <div className="flex flex-col justify-center -ml-50">

          <h1 className="font-montserrat text-7xl font-semibold tracking-[0.26em] mb-35 text-[#1c2922]">
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
          <div className="relative h-[920px]">
            <Image
              src="/hero_background.png"
              alt="Avant visual"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute top-20 left-50 object-cover h-[720px] w-auto scale-[1.00]"
            />

            {/* Small overlapping image */}
            <Image
              src="/test.avif"
              alt="Detail still life"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute top-110 -left-25 object-cover w-[270px] h-[360px]"
            />
        </div>
      </div>
    </section>
  );
}
