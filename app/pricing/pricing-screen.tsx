"use client";

import { useState } from "react";
import { Manrope } from "next/font/google";
import Header from "@/components/prebuilt/header";
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
    <div
      className={`relative min-h-screen bg-black text-white ${manrope.className}`}
    >
      <Header />
      <main className="flex flex-col items-center justify-center p-4 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Choose Your Trading Plan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-gray-900 bg-opacity-80 rounded-xl shadow-lg backdrop-blur-sm p-8 flex flex-col ${
                tier.highlighted ? "border-2 border-blue-500" : ""
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">{tier.name}</h2>
              <div className="text-4xl font-bold mb-2">{tier.price}</div>
              <div className="text-gray-400 mb-6">{tier.duration}</div>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
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
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                  href={`pricing/payment?plan=${tier.name.toLowerCase().replace(" ", "-")}&price=${tier.price}`}
                  className={`w-full py-2 px-4 rounded-md text-white font-semibold transition duration-150 ease-in-out ${
                    tier.highlighted ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {tier.cta}
                </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
