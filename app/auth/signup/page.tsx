"use client";

import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Header from "@/components/prebuilt/header";
import MarketTicker from "@/components/prebuilt/marketTicker";
import Image from "next/image";

export default function Signup() {
  const { user, signInWithGoogle, error } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error signing up with Google:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      <Header />
      
      <main className="w-full pt-28 pb-24">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Create your account
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Start trading with Stembots today
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-white hover:bg-gray-100 transition-colors"
            >
              <Image 
                src="/google.svg" 
                alt="Google" 
                width={20} 
                height={20} 
                className="w-5 h-5"
              />
              <span className="text-gray-900 font-medium">Continue with Google</span>
            </button>

            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/auth/signin" className="text-blue-500 hover:text-blue-400">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0">
        <MarketTicker />
      </div>
    </div>
  );
}
