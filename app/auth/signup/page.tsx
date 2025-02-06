"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MarketTicker from "@/components/prebuilt/marketTicker";
import Header from "@/components/prebuilt/header";
import { signIn } from "next-auth/react";
import AuthWrapper from "../auth-wrapper";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("User registered successfully");
        router.push("/");
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error("An error occurred while registering the user:", error);
    }
  };

  const handleGoogleSignUp = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <>
      <Header />
      <AuthWrapper type="signup">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            {/* <div>
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
                </div> */}
            {/* <div>
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
                </div> */}
          </div>

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Create Account
            </button>
          </div>
        </form>
      </AuthWrapper>
      <MarketTicker />
    </>
  );
}
