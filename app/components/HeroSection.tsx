const HeroSection = () => (
  <section className="font-mont text-white h-screen flex flex-col justify-center items-center hero-bg">
    {/* Heading and Buttons */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
      Innovating Forex & Crypto Trading with AI
    </h1>
    <p className="text-xl mb-8 text-center px-10 lg:text-2xl">
      A reliable trading robot for the forex market. Designed to execute trades efficiently and
      adapt to market conditions, our robots help traders automate their strategies, maximize
      returns, and reduce risk.
    </p>
    {/* Buttons */}
    <div className="space-x-4">
      <a
        href="/learnmore"
        className="bg-transparent border border-gray-800 px-6 py-3 rounded hover:bg-black"
      >
        Learn More
      </a>
    </div>
  </section>
);

export default HeroSection;
