// import Link from "next/link";

// const Navbar = () => (
//   <nav className="bg-gray-100 bg-opacity-50 backdrop-blur-md text-white py-4 lg:px-10 shadow-md">
//     <div className="lg:flex ">
//       <div className="flex lg:w-[20%]">
//         <Link href="/">
//           <img src="/logo.png" alt="Logo" className="h-[40px] md:h-[50px] rounded-lg" />
//         </Link>
//       </div>

//       <div className="bg-opacity-15 pr-20 lg:bg-none text-gray-900 lg:w-[80%] mt-2">
//         <ul className="md:flex md:text-center md:justify-center lg:text-right lg:float-right font-mont">
//           <li className="px-4 pt-2">
//             <Link href="/products" className="hover:text-gray-200 font-bold">
//               Product
//             </Link>
//           </li>
//           <li className="px-4 pt-2">
//             <Link href="/about" className="hover:text-gray-200 font-bold">
//               About
//             </Link>
//           </li>
//           <li className="px-4 pt-2">
//             <Link href="/robots" className="hover:text-gray-200">
//               Trade Robots
//             </Link>
//           </li>
//           <li className="px-4 py-2">
//             <Link href="/contact" className="hover:text-gray-200 font-bold">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;










// "use client"
// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-100 bg-opacity-50 backdrop-blur-md text-gray-900 py-4 lg:px-10 shadow-md">
//       <div className="lg:flex">
//         <div className="flex lg:w-[20%]">
//           <Link href="/">
//             <img src="/logo.png" alt="Logo" className="h-[40px] md:h-[50px] rounded-lg" />
//           </Link>
//         </div>

//         <div className="lg:w-[80%] mt-2">
//           {/* Mobile toggle button */}
//           <div className="lg:hidden flex justify-between items-center">
//             {/* <h1 className="text-lg font-bold">Menu</h1> */}
//             <button onClick={toggleNavbar} className="text-gray-900">
//               {isOpen ? "X" : "☰"} {/* X for close, ☰ for open */}
//             </button>
//           </div>

//           {/* Navbar links */}
//           <ul
//             className={`md:flex md:text-center md:justify-center lg:text-right lg:float-right font-mont ${
//               isOpen ? "block" : "hidden"
//             } lg:flex lg:justify-end`}
//           >
//             <li className="px-4 pt-2">
//               <Link href="/products" className="hover:text-gray-900 font-bold">
//                 Product
//               </Link>
//             </li>
//             <li className="px-4 pt-2">
//               <Link href="/about" className="hover:text-gray-900 font-bold">
//                 About
//               </Link>
//             </li>
//             <li className="px-4 pt-2">
//               <Link href="/robots" className="hover:text-gray-900">
//                 Trade Robots
//               </Link>
//             </li>
//             <li className="px-4 py-2">
//               <Link href="/contact" className="hover:text-gray-900 font-bold">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// "use client";
// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-100 bg-opacity-30 px-7 md:px-16 backdrop-blur-md text-gray-900 py-4 lg:px-10 shadow-md fixed w-full z-10">
//       <div className="flex items-center justify-between lg:flex-row">
//         <div className="flex lg:w-[20%]">
//           <Link href="/">
//             <img src="/logo.png" alt="Logo" className="h-[40px] md:h-[50px] rounded-lg" />
//           </Link>
//         </div>

//         <div className="lg:w-[80%] mt-2">
//           {/* Mobile toggle button */}
//           <div className="lg:hidden flex justify-between items-center">
//             <button onClick={toggleNavbar} className="text-gray-900">
//               {isOpen ? "X" : "☰"}
//             </button>
//           </div>

//           {/* Navbar links */}
//           <ul
//             className={`md:flex md:text-center md:justify-center lg:text-right lg:float-right font-mont ${
//               isOpen ? "block" : "hidden"
//             } lg:flex lg:justify-end`}
//           >
//             <li className="px-4 pt-2">
//               <Link href="/products" className="hover:text-gray-900 font-bold">
//                 Product
//               </Link>
//             </li>
//             <li className="px-4 pt-2">
//               <Link href="/about" className="hover:text-gray-900 font-bold">
//                 About
//               </Link>
//             </li>
//             <li className="px-4 pt-2">
//               <Link href="/robots" className="hover:text-gray-900">
//                 Trade Robots
//               </Link>
//             </li>
//             <li className="px-4 py-2">
//               <Link href="/contact" className="hover:text-gray-900 font-bold">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;










"use client";
import { useState } from "react";
import Link from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 bg-opacity-30 px-7 md:px-16 backdrop-blur-md text-gray-900 py-4 lg:px-10 shadow-md fixed w-full z-10">
      <div className="flex items-center justify-between lg:flex-row">
        <div className="flex lg:w-[20%]">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-[40px] md:h-[50px] rounded-lg" />
          </Link>
        </div>

        <div className="lg:w-[80%] mt-2 relative">
          {/* Mobile toggle button */}
          <div className="md:hidden flex justify-between items-center">
            <button onClick={toggleNavbar} className="text-gray-900 font-bold">
              {isOpen ? "X" : "☰"}
            </button>
          </div>

          {/* Navbar links */}
          <ul
            className={`md:flex md:text-center md:justify-center lg:text-right lg:float-right font-mont ${
              isOpen ? "absolute top-full right-1 mt-10 text-white bg-gray-900 bg-opacity-50" : "hidden"
            } lg:flex lg:justify-end`}
          >
            <li className="px-4 py-2">
              <Link href="/products" className="hover:text-white font-bold block">
                Product
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link href="/about" className="hover:text-white font-bold block">
                About
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link href="/robots" className="hover:text-white block">
                Trade Robots
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link href="/contact" className="hover:text-white font-bold block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;