const Footer = () => (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="mb-2">
              <span className="font-semibold">Phone: </span>
              <a href="tel:+1234567890" className="text-teal-500 hover:text-teal-300">
                +44 7881 153992
              </a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email: </span>
              <a href="mailto:info@forextech.com" className="text-teal-500 hover:text-teal-300">
                info@stembots.com
              </a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Address: </span>
              Chancellor Pl, London NW9 5JB
            </p>
          </div>
  
          {/* Logo */}
          <div className="text-center">
            <img
              src="logo.png"  // Replace this with your actual logo image
              alt="Company Logo"
              className="w-60 h-auto mb-4"
            />
            <p className="text-gray-400">&copy; 2024 Stemvisions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  