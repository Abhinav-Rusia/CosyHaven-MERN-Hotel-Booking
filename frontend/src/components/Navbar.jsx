import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/90 shadow-md text-gray-700 backdrop-blur-lg py-1 md:py-2"
          : "bg-transparent py-1.5 md:py-2 text-white"
      }`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <img
          src={assets.logo}
          alt="logo"
          className={`transition-all duration-300 ${
            isScrolled
              ? "h-14 md:h-16 lg:h-18 invert opacity-90"
              : "h-16 md:h-20 lg:h-24"
          }`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 font-medium transition-colors duration-300 ${
              isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
        <button
          className={`relative overflow-hidden border px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-all duration-300 hover:scale-105 group ${
            isScrolled
              ? "text-gray-700 border-gray-300 hover:text-white"
              : "text-white border-white/50 hover:text-gray-900"
          }`}
        >
          <span className="relative z-10">Dashboard</span>
          <div className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-out ${
            isScrolled
              ? "bg-gray-700"
              : "bg-white"
          }`}></div>
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-6">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`h-6 cursor-pointer transition-all duration-300 hover:scale-110 ${
            isScrolled ? "invert opacity-70 hover:opacity-100" : "opacity-80 hover:opacity-100"
          }`}
        />
        <button className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
          isScrolled
            ? "bg-gray-900 text-white hover:bg-gray-800"
            : "bg-white text-gray-900 hover:bg-gray-100"
        }`}>
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
        >
          <img
            src={assets.menuIcon}
            alt="menu"
            className={`h-5 transition-all duration-300 ${
              isScrolled ? "invert" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-lg flex flex-col md:hidden items-center justify-center gap-8 font-medium text-gray-800 transition-all duration-500 z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close" className="h-6" />
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-gray-600 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}

        <button className="relative overflow-hidden border border-gray-300 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 hover:text-white group">
          <span className="relative z-10">Dashboard</span>
          <div className="absolute inset-0 w-0 group-hover:w-full bg-gray-700 transition-all duration-500 ease-out"></div>
        </button>

        <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
