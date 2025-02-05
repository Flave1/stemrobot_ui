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
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-80 p-2 overflow-hidden">
        <div className="flex animate-ticker">
          {tickerData.map((item, index) => (
            <div key={index} className="flex items-center mr-8">
              <span className="font-bold mr-2">{item.symbol}</span>
              <span className="mr-2">${item.price.toFixed(2)}</span>
              <span
                className={item.change >= 0 ? "text-green-500" : "text-red-500"}
              >
                {item.change >= 0 ? "▲" : "▼"} {Math.abs(item.change).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default MarketTicker