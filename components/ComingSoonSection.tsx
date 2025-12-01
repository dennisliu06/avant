export default function About() {
  return (
    <div className="min-h-screen w-full bg-[#0C1B15] text-white px-6 py-10">

      {/* Logo + Title */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src="/avant-logo.png" 
          alt="Avant Logo"
          className="w-10 h-10"
        />
        <span className="text-lg font-semibold tracking-wide">AVANT</span>
      </div>

      {/* ABOUT US Header */}
      <h1 className="text-4xl font-extrabold mb-6">
        ABOUT US
      </h1>

      {/* Description Text */}
      <p className="text-[17px] leading-7 font-light text-gray-200">
        Avant is an art consulting company specializing in private high-end art sales,
        luxury goods, and curated event experiences. Our team brings deep expertise in
        event strategy, production, influencer engagement, and media coverage.
        <br /><br />
        We partner with luxury brands, venues, and cultural institutions to execute
        high-impact activations that blend artistic vision with organizational excellence.
      </p>

    </div>
  );
}
