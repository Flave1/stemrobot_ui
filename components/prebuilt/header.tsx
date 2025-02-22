"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";
import Link from "next/link";
import { CheckCheck, DollarSign, HomeIcon, Menu, Text, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  function SpinningLogo() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
      if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.5;
      }
    });

    return (
      <group ref={groupRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#4a90e2" />
        </mesh>
        <mesh position={[0.5, 0.5, 0.5]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#ffd700" />
        </mesh>
        <mesh position={[-0.5, -0.5, -0.5]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#66bb6a" />
        </mesh>
      </group>
    );
  }

  const NavLinks = () => (
    <>
      <li>
        <Link href="/" className="hover:text-gray-300 flex items-center">
          <HomeIcon className="mr-2" />
          Home
        </Link>
      </li>
      <li>
        <Link href="/pricing" className="hover:text-gray-300 flex items-center">
          <DollarSign className="mr-2" />
          Pricing
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-gray-300 flex items-center">
          <Text className="mr-2" />
          Chat with us
        </Link>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-16 h-16 md:w-20 md:h-20">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <SpinningLogo />
            </Canvas>
          </div>
          <span className="text-xl md:text-2xl font-bold ml-2">Stembots</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <NavLinks />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm md:hidden border-t border-gray-800">
            <ul className="flex flex-col space-y-4 p-4">
              <NavLinks />
            </ul>
          </div>
        )}

        {/* Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300">
                Welcome, {user.displayName}
              </span>
              <button
                onClick={logout}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link 
              href="/auth/signin"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
