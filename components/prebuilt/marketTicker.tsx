import { useState, useEffect } from "react";

function MarketTicker() {
    const [tickerData, setTickerData] = useState([
      { symbol: "BTC/USD", price: 45000, change: 2.5 },
      { symbol: "ETH/USD", price: 3000, change: -1.2 },
      { symbol: "AAPL", price: 150, change: 0.8 },
      { symbol: "GOOGL", price: 2800, change: 1.5 },
      { symbol: "EUR/USD", price: 1.18, change: -0.3 },
      { symbol: "TSLA", price: 750, change: 3.2 },
      { symbol: "AMZN", price: 3500, change: -2.1 },
      { symbol: "MSFT", price: 290, change: 1.1 },
    ]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTickerData((prevData) =>
          prevData.map((item) => ({
            ...item,
            price: item.price * (1 + (Math.random() - 0.5) * 0.01),
            change: item.change + (Math.random() - 0.5) * 0.5,
          }))
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="h-12 bg-black/80 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-full mx-auto h-full flex items-center overflow-hidden">
          {/* First ticker instance */}
          <div className="flex animate-ticker whitespace-nowrap">
            {tickerData.map((item, index) => (
              <div key={index} className="flex items-center mx-4 h-12 shrink-0">
                <span className="font-semibold text-gray-200 mr-2">{item.symbol}</span>
                <span className="text-gray-400 mr-2">${item.price.toFixed(2)}</span>
                <span
                  className={`${
                    item.change >= 0 ? "text-green-500" : "text-red-500"
                  } tabular-nums`}
                >
                  {item.change >= 0 ? "▲" : "▼"} {Math.abs(item.change).toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
          
          {/* Duplicate ticker for seamless loop */}
          <div className="flex animate-ticker whitespace-nowrap">
            {tickerData.map((item, index) => (
              <div key={`dup-${index}`} className="flex items-center mx-4 h-12 shrink-0">
                <span className="font-semibold text-gray-200 mr-2">{item.symbol}</span>
                <span className="text-gray-400 mr-2">${item.price.toFixed(2)}</span>
                <span
                  className={`${
                    item.change >= 0 ? "text-green-500" : "text-red-500"
                  } tabular-nums`}
                >
                  {item.change >= 0 ? "▲" : "▼"} {Math.abs(item.change).toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .animate-ticker {
            animation: ticker 25s linear infinite;
          }
          
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>
    );
  }

export default MarketTicker;