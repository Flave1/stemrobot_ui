'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const messages = [
  "You may be asked to provide your Account Name, MetaTrader Login, and MetaTrader Password. Please ensure this information is different from your Brokerage account login credentials. This information will be used to autonomously execute trades on your behalf with your consent.",
  "You will be redirected shortly to the conversational trading screen."
];

export default function ReadyToTradeScreen() {
  const router = useRouter();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  const [progress, setProgress] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  // Start animations only after component is fully mounted
  useEffect(() => {
    // Set a fixed delay before starting animations
    const startTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    
    return () => clearTimeout(startTimer);
  }, []);

  // Handle message transitions and progress bar
  useEffect(() => {
    if (!animationStarted) return;
    
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 0.2;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 50);

    // First message displays for a very short time
    const firstMessageTimer = setTimeout(() => {
      if (currentMessageIndex === 0) {
        setShowMessage(false);
        setTimeout(() => {
          setCurrentMessageIndex(1);
          setShowMessage(true);
        }, 500);
      }
    }, 3000); // 3 seconds for the first message (since it's longer now)

    // Fixed timing for subsequent messages
    const messageInterval = setInterval(() => {
      if (currentMessageIndex > 0 && currentMessageIndex < messages.length - 1) {
        // Hide current message
        setShowMessage(false);
        
        // Show next message after transition
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
          setShowMessage(true);
        }, 500);
      } else if (currentMessageIndex === messages.length - 1 && progress >= 100) {
        // Redirect to chat when all messages are shown and progress is complete
        setTimeout(() => {
          router.push('/chat');
        }, 1000);
      }
    }, 2000); // 2 seconds for the last message (it's shorter)

    return () => {
      clearTimeout(firstMessageTimer);
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [currentMessageIndex, progress, router, animationStarted]);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black" />
      
      {/* 3D rotating cube effect */}
      <div className="perspective-1000 w-full max-w-3xl mb-16">
        <AnimatePresence mode="wait">
          {showMessage && (
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, rotateY: -90, x: -100 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0, rotateY: 90, x: 100 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                duration: 0.5 
              }}
              className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20 shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl text-white font-medium">
                {messages[currentMessageIndex]}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md bg-gray-800 rounded-full h-2 mb-8">
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      {/* Loading animation */}
      <div className="flex space-x-3 mb-8">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0
          }}
          className="w-3 h-3 rounded-full bg-blue-500"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.2
          }}
          className="w-3 h-3 rounded-full bg-indigo-500"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.4
          }}
          className="w-3 h-3 rounded-full bg-purple-500"
        />
      </div>

      <p className="text-gray-400 text-center">
        Preparing your trading environment...
      </p>
    </div>
  );
} 