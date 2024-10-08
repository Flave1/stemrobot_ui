const Products = () => (
  <section className="py-20" id="product">
    <h2 className="text-center text-4xl font-bold mb-10">Stemvisions Trading Robot</h2>
    <div className="grid grid-cols-1 justify-items-center">
      {/* Example Product */}
      <div className="bg-slate-200  p-6 rounded-lg shadow-lg text-center max-w-sm">
        <h3 className="text-2xl font-bold mb-2 text-red-400">Stembot</h3>
        <p className="text-gray-600">Leverages machine learning to enhance forex trading strategies.</p>
        
        {/* Feature List */}
        <ul className="list-disc list-inside mt-4 text-left">
          <li className="text-gray-600">Stop-loss protection</li>
          <li className="text-gray-600">24/7 automated trading</li>
          <li className="text-gray-600">High-frequency trading</li>
        </ul>

        {/* Centered Learn More Button */}
        <div className="mt-6 flex justify-center">
          <a href="/learnmore" className="bg-red-400 px-4 py-2 rounded text-white hover:bg-red-500">
            Learn More
          </a>
        </div>

        {/* Store Badges */}
        <div className="flex justify-center mt-6 space-x-4">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/google-play-badge.svg"
              alt="Download from Play Store"
              className="w-36 h-auto"
            />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src="/app-store-apple-badge.svg"
              alt="Download from App Store"
              className="w-36 h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Products;
