
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import Link from "next/link";

const Header = () => {
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
    return(
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
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <Link href="/signup" className="hover:text-gray-300">
                Try it out
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;