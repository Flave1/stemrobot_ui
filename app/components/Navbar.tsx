import Link from "next/link";

const Navbar = () => (
  <nav className="bg-gray-100 bg-opacity-50 backdrop-blur-md text-white py-4 lg:px-10 shadow-md">
    <div className="lg:flex ">
      <div className="flex lg:w-[20%]">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-[40px] md:h-[50px] rounded-lg" />
        </Link>
      </div>

      <div className="bg-opacity-15 pr-20 lg:bg-none text-gray-900 lg:w-[80%] mt-2">
        <ul className="md:flex md:text-center md:justify-center lg:text-right lg:float-right font-mont">
          <li className="px-4 pt-2">
            <Link href="/products" className="hover:text-gray-200 font-bold">
              Product
            </Link>
          </li>
          <li className="px-4 pt-2">
            <Link href="/about" className="hover:text-gray-200 font-bold">
              About
            </Link>
          </li>
          <li className="px-4 pt-2">
            <Link href="/robots" className="hover:text-gray-200">
              Trade Robots
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link href="/contact" className="hover:text-gray-200 font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
