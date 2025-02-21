"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { CheckCheck, DollarSign, HomeIcon, Text } from "lucide-react";

const Header = () => {
  const { data: session } = useSession();
  console.log("session", session);
  if (session) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {session.user?.name}!
        </h1>
        <p className="mb-4">You are signed in as {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Sign out
        </button>
      </div>
    );
  }

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
  return (
    <header className="top-0 left-0 right-0 z-10 p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          <div className="w-20 h-20">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <SpinningLogo />
            </Canvas>
          </div>
          <span className="text-2xl font-bold">Stembots</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300 flex">
              <HomeIcon className="pr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/auth/signup" className="hover:text-gray-300 flex">
              <CheckCheck className="pr-1" />
              Try it out
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-300 flex">
              <DollarSign className="pr-1" />
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 flex">
              <Text className="pr-1" />
              Chat with us
            </Link>
          </li>
          {/* {session && (
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                <h1 className="text-3xl font-bold mb-4">
                  Welcome, {session?.user?.name}!
                </h1>
              </Link>
            </li>
          )} */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
