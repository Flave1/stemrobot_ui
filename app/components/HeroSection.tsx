const HeroSection = () => (
  <section className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center">
    {/* Logo at the top */}
    <div className="mb-8">
      <img
        src="/logo.png"  // Replace with the path to your actual logo
        alt="Company Logo"
        className="w-60 h-auto rounded-lg"
      />
    </div>
    
    {/* Heading and Buttons */}
    <h1 className="text-5xl font-bold mb-4 text-center">Innovating Forex & Crypto Trading with AI</h1>
    <p className="text-lg mb-8 text-center">A reliable trading robots for the forex market. Designed to execute trades efficiently and adapt to market conditions, our robots help traders automate their strategies, maximize returns, and reduce risk.</p>
    
    {/* Buttons */}
    <div className="space-x-4">
      <a href="#product" className="bg-teal-500 px-6 py-3 rounded hover:bg-teal-600">Explore Products</a>
      <a href="#features" className="bg-transparent border border-teal-500 px-6 py-3 rounded hover:bg-teal-600">Learn More</a>
    </div>
  </section>
);

export default HeroSection;
