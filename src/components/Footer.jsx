import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            Leading IELTS institute providing easy booking, preparation resources, and quick results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">Contact</h2>
          <p className="text-sm text-gray-400">Email: info@ieltsinstitute.com</p>
          <p className="text-sm text-gray-400">Phone: +91 9876543210</p>
          <p className="text-sm text-gray-400">Address: 123, English Street, Delhi</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><Facebook className="w-6 h-6"/></a>
            <a href="#" className="hover:text-white transition"><Twitter className="w-6 h-6"/></a>
            <a href="#" className="hover:text-white transition"><Instagram className="w-6 h-6"/></a>
            <a href="#" className="hover:text-white transition"><Linkedin className="w-6 h-6"/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
}
