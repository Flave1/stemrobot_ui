"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { User, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  signInWithGoogle: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
      }, (error) => {
        console.error("Auth state change error:", error);
        setError(error.message);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Auth initialization error:", error);
      setError(error instanceof Error ? error.message : "Authentication initialization failed");
      setLoading(false);
    }
  }, []);

  const signInWithGoogle = async () => {
    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        router.push('/');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError(error instanceof Error ? error.message : "Failed to sign in with Google");
      throw error;
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
      setError(error instanceof Error ? error.message : "Failed to sign out");
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, signInWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 