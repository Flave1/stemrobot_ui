'use client';

import { Suspense } from 'react';
import ReadyToTradeScreen from './ready-to-trade-screen';
import RequireAuth from '@/components/auth/RequireAuth';
import { motion } from 'framer-motion';

// Simple loading spinner for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default function ReadyToTradePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RequireAuth>
        <ReadyToTradeScreen />
      </RequireAuth>
    </Suspense>
  );
} 