import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-red-400 text-white py-4 lg:px-10">


    <div className=" lg:flex ">

      <div className=" flex  lg:w-[20%] ">
        <Link href="/">
          <img src="/logo.png" alt="" className="h-[40px] md:h-[50px] rounded-lg border-red-700" />
        </Link>
      </div>

      <div className=" bg-slate-400 bg-opacity-15 pr-20 lg:bg-none text-gray-200 lg:w-[80%] mt-2">
        <ul className=" md:flex md:text-center md:justify-center lg:text-right lg:float-right">
          {/* <li className="px-4 pt-2 "><Link href="/products" className="hover:text-white font-bold">Product</Link></li> */}
          {/* <li className="px-4 pt-2 "><Link href="/about" className="hover:text-white font-bold">About</Link></li> */}
          {/* <li className="px-4 pt-2 "><Link href="/robots" className="hover:text-white">Trade Robots</Link></li> */}
          {/* <li className="px-4 py-2 "><Link href="/contact" className="hover:text-white font-bold">Contact</Link></li> */}
        </ul>
      </div>

    </div>













    {/* <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">ForexAI</Link>
      <div className="space-x-6">
        <Link href="/products" className="hover:text-teal-500">Products</Link>
        <Link href="/about" className="hover:text-teal-500">About</Link>
        <Link href="/robots" className="hover:text-teal-500">Trade Robots</Link>
        <Link href="/contact" className="hover:text-teal-500">Contact</Link>
      </div>
    </div> */}
  </nav>
);
export default Navbar;
