import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">ForexAI</Link>
      <div className="space-x-6">
        <Link href="/products" className="hover:text-teal-500">Products</Link>
        <Link href="/about" className="hover:text-teal-500">About</Link>
        <Link href="/robots" className="hover:text-teal-500">Trade Robots</Link>
        <Link href="/contact" className="hover:text-teal-500">Contact</Link>
      </div>
    </div>
  </nav>
);
export default Navbar;
