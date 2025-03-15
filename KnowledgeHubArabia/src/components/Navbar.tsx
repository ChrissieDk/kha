const Navbar = ({ className = "" }) => {
  return (
    <div
      className={`flex justify-between items-center py-4 md:py-8 ${className}`}
    >
      {/* Logo */}
      <div className="text-white text-lg font-black">
        <a
          href="/"
          className="text-md sm:text-sm md:text-base hover:text-[#51a687] transition-colors"
        >
          kha.
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-2 text-sm md:text-md text-gray-400 font-bold">
        {/* <a
          href="/payment"
          className="text-xs sm:text-sm md:text-base hover:text-[#51a687] transition-colors"
        >
          About
        </a>
        <span className="text-xs sm:text-sm md:text-base">/</span> */}
        <a
          href="/services"
          className="text-xs sm:text-sm md:text-base hover:text-[#51a687] transition-colors"
        >
          Services
        </a>
      </div>
    </div>
  );
};

export default Navbar;
