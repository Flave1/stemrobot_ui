"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import Header from "@/components/prebuilt/header";
import MarketTicker from "@/components/prebuilt/marketTicker";

function AnimatedBox({
  initialPosition,
  symbol,
}: {
  initialPosition: [number, number, number];
  symbol: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [targetPosition, setTargetPosition] = useState(
    new THREE.Vector3(...initialPosition)
  );
  const currentPosition = useRef(new THREE.Vector3(...initialPosition));

  const getAdjacentIntersection = (current: THREE.Vector3) => {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    return new THREE.Vector3(
      current.x + randomDirection[0] * 3,
      0.5,
      current.z + randomDirection[1] * 3
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = getAdjacentIntersection(currentPosition.current);
      newPosition.x = Math.max(-15, Math.min(15, newPosition.x));
      newPosition.z = Math.max(-15, Math.min(15, newPosition.z));
      setTargetPosition(newPosition);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      currentPosition.current.lerp(targetPosition, 0.05);
      meshRef.current.position.copy(currentPosition.current);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={initialPosition}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
        <lineSegments>
          <edgesGeometry
            attach="geometry"
            args={[new THREE.BoxGeometry(1, 1, 1)]}
          />
          <lineBasicMaterial attach="material" color="#000000" linewidth={2} />
        </lineSegments>
      </mesh>
      <Text
        position={[
          initialPosition[0],
          initialPosition[1] + 0.8,
          initialPosition[2],
        ]}
        color="#ffd700"
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
    </group>
  );
}

function Scene() {
  const symbols = [
    "BTC",
    "ETH",
    "XRP",
    "DOGE",
    "ADA",
    "AAPL",
    "GOOGL",
    "MSFT",
    "AMZN",
    "TSLA",
    "EUR/USD",
    "GBP/USD",
    "USD/JPY",
    "AUD/USD",
    "USD/CAD",
  ];

  const initialPositions: [number, number, number][] = [
    [-9, 0.5, -9],
    [-3, 0.5, -3],
    [0, 0.5, 0],
    [3, 0.5, 3],
    [9, 0.5, 9],
    [-6, 0.5, 6],
    [6, 0.5, -6],
    [-12, 0.5, 0],
    [12, 0.5, 0],
    [0, 0.5, 12],
    [-9, 0.5, 9],
    [9, 0.5, -9],
    [-3, 0.5, 3],
    [3, 0.5, -3],
    [0, 0.5, -12],
  ];

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Grid
        renderOrder={-1}
        position={[0, 0, 0]}
        infiniteGrid
        cellSize={1}
        cellThickness={0.5}
        sectionSize={3}
        sectionThickness={1}
        sectionColor={new THREE.Color(0.5, 0.5, 0.5)}
        fadeDistance={50}
      />
      {initialPositions.map((position, index) => (
        <AnimatedBox
          key={index}
          initialPosition={position}
          symbol={symbols[index]}
        />
      ))}
    </>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <div className="relative z-[1] h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            AI-Powered Trading Assistant
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Make smarter trading decisions with real-time market analysis and AI-driven insights
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/ready_to_trade"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Trading
            </Link>
            <Link
              href="/learn"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* 3D Scene Background */}
        <div className="absolute inset-0 z-0">
          <Canvas
            shadows
            camera={{ position: [30, 30, 30], fov: 50 }}
            className="absolute inset-0"
          >
            <Scene />
          </Canvas>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

        {/* Market Ticker */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]">
          <MarketTicker />
        </div>
      </main>
    </div>
  );
}
