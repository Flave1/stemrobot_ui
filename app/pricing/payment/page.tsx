"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Manrope } from "next/font/google";
import { Tab } from "@headlessui/react";
import { CreditCard, Paypal, ApplePayIcon } from "./PaymentIcons";
import Header from "@/components/prebuilt/header";

const manrope = Manrope({ subsets: ["latin"] });

export default function Payment() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}

function PaymentContent() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const price = searchParams.get("price");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the payment details to your backend
    console.log(
      "Submitting payment for",
      plan,
      "at",
      price,
      "using",
      selectedPaymentMethod
    );
    // Call your payment endpoint here
    // const response = await fetch('/api/payment', {
    //   method: 'POST',
    //   body: JSON.stringify({ plan, price, paymentMethod: selectedPaymentMethod }),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    // Handle the response...
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center p-4 mt-8">
        <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-lg backdrop-blur-sm p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Complete Your Purchase
          </h1>
          <p className="text-center mb-6">
            You've selected the <span className="font-semibold">{plan}</span>{" "}
            plan at <span className="font-semibold">{price}</span>
          </p>

          <Tab.Group
            onChange={(index) =>
              setSelectedPaymentMethod(["card", "paypal", "applepay"][index])
            }
          >
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-6">
              <Tab
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                    ${selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"}`
                }
              >
                <CreditCard className="w-6 h-6 mx-auto" />
                Card
              </Tab>
              <Tab
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                    ${selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"}`
                }
              >
                <Paypal className="w-6 h-6 mx-auto" />
                PayPal
              </Tab>
              <Tab
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                    ${selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"}`
                }
              >
                <ApplePayIcon className="w-6 h-6 mx-auto" />
                Apple Pay
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="cardHolder"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      id="cardHolder"
                      name="cardHolder"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="expiry"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="billingAddress"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Billing Address
                    </label>
                    <input
                      type="text"
                      id="billingAddress"
                      name="billingAddress"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                      placeholder="123 Main St"
                      required
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        placeholder="New York"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        placeholder="10001"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out"
                  >
                    Pay Now
                  </button>
                </form>
              </Tab.Panel>
              <Tab.Panel>
                <p className="text-center mb-4">
                  Click the button below to pay with PayPal
                </p>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out"
                >
                  Pay with PayPal
                </button>
              </Tab.Panel>
              <Tab.Panel>
                <p className="text-center mb-4">
                  Click the button below to pay with Apple Pay
                </p>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out border border-white"
                >
                  Pay with Apple Pay
                </button>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
    </>
  );
}
