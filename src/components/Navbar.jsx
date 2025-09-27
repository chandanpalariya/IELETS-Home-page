import { useState } from "react";
import { Menu, X, CircleStar } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>

          {/*  Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tests" className="text-gray-700 hover:text-blue-600">
              IELTS tests
            </a>
            <a href="#preparation" className="text-gray-700 hover:text-blue-600">
              IELTS Preparation
            </a>
            <a href="#results" className="text-gray-700 hover:text-blue-600">
              IELTS Results
            </a>
            <a href="#info" className="text-gray-700 hover:text-blue-600">
              Information
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </a>

            {/* btn */}
            <div className="flex items-center gap-2">
              <CircleStar size={22} className="text-blue-600" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <a
              href="#tests"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              IELTS tests
            </a>
            <a
              href="#preparation"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              IELTS Preparation
            </a>
            <a
              href="#results"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              IELTS Results
            </a>
            <a
              href="#info"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Information
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contact Us
            </a>

            {/* CTA Button with Icon Outside in Mobile */}
            <div className="flex items-center gap-2">
              <CircleStar size={22} className="text-blue-600" />
              <button
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={toggleMenu}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
