"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import Header from "@/components/prebuilt/header";


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
  }, [currentPosition, targetPosition, getAdjacentIntersection]); // Added dependencies

  useFrame((state, delta) => {
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
        sectionColor={[0.5, 0.5, 0.5]}
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

function MarketTicker() {
  const [tickerData, setTickerData] = useState([
    { symbol: "BTC/USD", price: 45000, change: 2.5 },
    { symbol: "ETH/USD", price: 3000, change: -1.2 },
    { symbol: "AAPL", price: 150, change: 0.8 },
    { symbol: "GOOGL", price: 2800, change: 1.5 },
    { symbol: "EUR/USD", price: 1.18, change: -0.3 },
    { symbol: "TSLA", price: 750, change: 3.2 },
    { symbol: "AMZN", price: 3500, change: -2.1 },
    // { symbol: "GBP/USD", price: 1.38, change: 0.4 },
    // { symbol: "XRP/USD", price: 0.85, change: -0.7 },
    { symbol: "MSFT", price: 290, change: 1.1 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerData((prevData) =>
        prevData.map((item) => ({
          ...item,
          price: item.price * (1 + (Math.random() - 0.5) * 0.01),
          change: item.change + (Math.random() - 0.5) * 0.5,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-80 p-2 overflow-hidden">
      <div className="flex animate-ticker">
        {tickerData.map((item, index) => (
          <div key={index} className="flex items-center mr-8">
            <span className="font-bold mr-2">{item.symbol}</span>
            <span className="mr-2">${item.price.toFixed(2)}</span>
            <span
              className={item.change >= 0 ? "text-green-500" : "text-red-500"}
            >
              {item.change >= 0 ? "▲" : "▼"} {Math.abs(item.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LandinPage() {
  return (
    <>
     <Header />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-6xl font-bold mb-8 max-w-4xl mx-auto">
          AI-Powered Trading Across Markets
        </h1>
        <h2 className="text-xl mb-10">
          Trade stocks, crypto, and forex with intelligent insights
        </h2>
        <Link
          href="/chat"
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Start Trading
        </Link>
      </div>
      <Canvas
        shadows
        camera={{ position: [30, 30, 30], fov: 50 }}
        className="absolute inset-0"
      >
        <Scene />
      </Canvas>
      <MarketTicker />
    </>
  );
}
