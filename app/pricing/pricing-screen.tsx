"use client";

import { useState } from "react";
import { Manrope } from "next/font/google";
import Header from "@/components/prebuilt/header";
import MarketTicker from "@/components/prebuilt/marketTicker";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"] });

const pricingTiers = [
  {
    name: "Free Trial",
    price: "$0",
    duration: "30 days",
    features: [
      "Basic market analysis",
      "Limited trading volume",
      "Email support",
      "Access to educational resources",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$29",
    duration: "per month",
    features: [
      "Advanced market analysis",
      "Increased trading volume",
      "Priority email support",
      "Access to webinars",
      "Custom alerts",
    ],
    cta: "Choose Basic",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$99",
    duration: "per month",
    features: [
      "Real-time market data",
      "Unlimited trading volume",
      "24/7 phone support",
      "Exclusive strategy sessions",
      "AI-powered insights",
      "Custom API access",
    ],
    cta: "Choose Premium",
    highlighted: false,
  },
];

export default function PricingScreen() {
  return (
    <div className={`min-h-screen bg-black text-white overflow-y-auto ${manrope.className}`}>
      <Header />
      
      <main className="w-full pt-28 pb-24">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-center">
            Choose Your Trading Plan
          </h1>
          <p className="text-gray-400 text-center mb-8 md:mb-12">
            Select the plan that best fits your trading needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gray-900 bg-opacity-80 rounded-xl shadow-lg backdrop-blur-sm p-6 md:p-8 flex flex-col transform transition-transform duration-300 hover:scale-105 ${
                  tier.highlighted 
                    ? "border-2 border-blue-500 shadow-blue-500/20" 
                    : "border border-gray-800"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">{tier.name}</h2>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl md:text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.duration}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm md:text-base">
                        <svg
                          className="w-5 h-5 mr-3 text-green-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`pricing/payment?plan=${tier.name.toLowerCase().replace(" ", "-")}&price=${tier.price}`}
                  className={`w-full py-3 px-4 rounded-lg text-white font-semibold text-center transition-all duration-200 ${
                    tier.highlighted 
                      ? "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30" 
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0">
        <MarketTicker />
      </div>
    </div>
  );
}
