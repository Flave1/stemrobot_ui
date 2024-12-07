const HeroSection = () => (
  <section className="font-mont text-white h-screen flex flex-col justify-center items-center hero-bg">
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
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
        className="relative px-8 py-5 rouded-md group overflow-hidden border-none border-gray-800 bg-transparent transition-all duration-300"
      >
        <span
          className="absolute inset-0 bg-gradient-to-r from-gray-700 via-purple-500 to-blue-900
                 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
        ></span>
        <span
          className="absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-300
                 group-hover:bg-opacity-0"
        ></span>
        <span className="relative font-bold uppercase text-gray-200 group-hover:text-white transition-colors duration-300">
          Learn More
        </span>
      </a>
    </div>
  </section>
);

export default HeroSection;
