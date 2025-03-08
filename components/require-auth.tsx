'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import LoadingSpinner from './loading-spinner'; // Create this component if you don't have one

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      return; // Still loading, don't do anything yet
    }

    if (!session) {
      // Redirect to login with callback URL to return after login
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
    } else {
      setIsLoading(false);
    }
  }, [session, status, router, pathname]);

  if (isLoading || status === 'loading') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return <>{children}</>;
} 