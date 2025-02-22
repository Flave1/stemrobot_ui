"use client";

import { motion } from "framer-motion";
import Header from "@/components/prebuilt/header";
import MarketTicker from "@/components/prebuilt/marketTicker";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className={`min-h-screen flex items-center justify-center p-4 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default function LearnComponent() {
  return (
    <div className="bg-black text-white">
      <Header />
      
      <main className="pt-16">
        {/* AI Trading Section */}
        <Section className="bg-gradient-to-b from-black via-blue-900/20 to-black min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                AI-Powered Trading
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Advanced algorithms analyzing market patterns in real-time
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Pattern Recognition</h3>
                  <p className="text-sm text-gray-400">Real-time market analysis</p>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Predictive Analytics</h3>
                  <p className="text-sm text-gray-400">Future trend forecasting</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="/images/ai-trading.jpeg"
                alt="AI Trading Visualization"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Section>

        {/* Market Analysis Section */}
        <Section className="bg-gradient-to-b from-black via-green-900/20 to-black min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden order-2 md:order-1"
            >
              <Image
                src="/images/market-analysis.jpeg"
                alt="Market Analysis"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
                Market Analysis
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive insights across multiple markets
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Technical Analysis</h3>
                  <p className="text-sm text-gray-400">Advanced chart patterns</p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Fundamental Analysis</h3>
                  <p className="text-sm text-gray-400">Market indicators</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Trading Strategies Section */}
        <Section className="bg-gradient-to-b from-black via-purple-900/20 to-black min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Trading Strategies
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Customized strategies for every trading style
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Automated Trading</h3>
                  <p className="text-sm text-gray-400">Smart execution</p>
                </div>
                <div className="bg-pink-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Risk Management</h3>
                  <p className="text-sm text-gray-400">Portfolio protection</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="/images/trading-strategy.jpeg"
                alt="Trading Strategies"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Section>

        {/* About Stembots Section */}
        <Section className="bg-gradient-to-b from-black via-gray-900/20 to-black min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">
                About Stembots
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Revolutionizing trading through artificial intelligence and advanced analytics
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="bg-gray-900/40 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400">Cutting-edge AI technology</p>
              </div>
              <div className="bg-gray-900/40 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p className="text-gray-400">Enterprise-grade protection</p>
              </div>
              <div className="bg-gray-900/40 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-400">24/7 expert assistance</p>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <MarketTicker />
      </div>
    </div>
  );
} 