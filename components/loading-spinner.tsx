import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-3 mb-4">
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
      <p className="text-gray-400">Loading...</p>
    </div>
  );
} 