"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/prebuilt/header";


function MarketTicker() {
  const [tickerData, setTickerData] = useState([
    { symbol: "BTC/USD", price: 45000, change: 2.5 },
    { symbol: "ETH/USD", price: 3000, change: -1.2 },
    { symbol: "AAPL", price: 150, change: 0.8 },
    { symbol: "GOOGL", price: 2800, change: 1.5 },
    { symbol: "EUR/USD", price: 1.18, change: -0.3 },
    { symbol: "TSLA", price: 750, change: 3.2 },
    { symbol: "AMZN", price: 3500, change: -2.1 },
    // { symbol: "GBP/USD", price: 1.38, change: 0.4 },
    // { symbol: "XRP/USD", price: 0.85, change: -0.7 },
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

export default function UserInfoForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/");
  };

  return (
    <>
      <Header />
      <div className="relative z-10">

        <main className="flex items-center justify-center p-4">
          <div className="max-w-md w-full space-y-8 bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-lg backdrop-blur-sm">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-400">
                Create Your Account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Address (optional)
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="123 Main St, City, State"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="post-code"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Post Code (optional)
                  </label>
                  <input
                    id="post-code"
                    name="postCode"
                    type="text"
                    autoComplete="postal-code"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="12345"
                    value={formData.postCode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <MarketTicker />
    </>
  );
}
