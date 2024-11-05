const HeroSection = () => (
  <section className="bg-gradient-to-t from-red-800 to-red-400 text-white h-screen flex flex-col justify-center items-center font-mono">
    {/* Logo at the top */}
    {/* <div className="mb-8">
      <img
        src="/logo.png" 
        alt="Company Logo"
        className="md:w-60 h-auto rounded-lg opacity-80 "
      />
    </div> */}
    
    {/* Heading and Buttons */}
    <h1 className=" text-4xl md:text-5xl font-bold mb-4 text-center">Innovating Forex & Crypto Trading with AI</h1>
    <p className="text-xl mb-8 text-center px-10">A reliable trading robots for the forex market. Designed to execute trades efficiently and adapt to market conditions, our robots help traders automate their strategies, maximize returns, and reduce risk.</p>
    
    {/* Buttons */}
    <div className="space-x-4">
      {/* <a href="#product" className="bg-gray-800 px-6 py-3 rounded hover:bg-black">Explore Products</a> */}
      <a href="/learnmore" className="bg-transparent border border-gray-800 px-6 py-3 rounded hover:bg-black">Learn More</a>
    </div>
  </section>
);

export default HeroSection;
