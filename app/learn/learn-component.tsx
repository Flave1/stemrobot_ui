"use client";

import { motion } from "framer-motion";
import Header from "@/components/prebuilt/header";
import MarketTicker from "@/components/prebuilt/marketTicker";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
                {/* Advanced algorithms analyzing market patterns in real-time */}
                Advanced algorithms analyzing market patterns in real-time. Our
                AI systems process vast amounts of market data to identify
                opportunities that human traders might miss, giving you a
                significant advantage in fast-moving markets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Pattern Recognition</h3>
                  <p className="text-sm text-gray-400">
                    Real-time market analysis that identifies complex patterns
                    across multiple timeframes and asset classes. Our system
                    detects emerging trends before they become obvious.
                  </p>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Predictive Analytics</h3>
                  <p className="text-sm text-gray-400">
                    Future trend forecasting using sophisticated models that
                    combine historical data with current market conditions to
                    predict potential price movements with remarkable accuracy.
                  </p>
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
                  <p className="text-sm text-gray-400">
                    Advanced chart patterns and technical indicators to help you make informed trading decisions.
                  </p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Fundamental Analysis</h3>
                  <p className="text-sm text-gray-400">Market indicators and fundamental data to help you understand the underlying value of an asset.</p>
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
                {/* Customized strategies for every trading style */}
                Customized strategies for every trading style. Our platform
                offers a wide range of pre-configured strategies, from simple to
                complex, to suit different trading styles and goals.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Automated Trading</h3>
                  <p className="text-sm text-gray-400">
                    Smart execution of your trading strategies, ensuring
                    consistent and reliable results.
                  </p>
                </div>
                <div className="bg-pink-900/20 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Risk Management</h3>
                  <p className="text-sm text-gray-400">
                    Portfolio protection with built-in risk controls and
                    stop-losses.
                  </p>
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

              {/* Call to Action */}
              <Section className="bg-gradient-to-b from-black to-blue-900/30 min-h-[50vh] flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            >
              Ready to Transform Your Trading?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Join thousands of traders who are already leveraging our platform
              to achieve consistent results in today's volatile markets. Whether
              you're a beginner or experienced professional, our tools adapt to
              your trading style and goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                Get Started Today
              </button>
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
                Revolutionizing trading through artificial intelligence and
                advanced analytics. Our platform combines cutting-edge AI
                technology with advanced analytics to provide traders with the
                tools they need to make informed decisions and achieve
                consistent results.
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
