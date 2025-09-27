import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const images = [banner1, banner2, banner3, banner4];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-screen mt-25 px-4 md:px-8 gap-6">
      {/* Left: Carousel */}
      <div className="relative w-full md:w-7/12 h-64 sm:h-80 md:h-full rounded-3xl overflow-hidden shadow-xl">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows - bottom right */}
        <div className="absolute bottom-6 right-6 flex gap-3">
          <button
            onClick={prevSlide}
            className="text-white text-xl bg-black/50 px-3 py-2 rounded-full hover:bg-blue-600 transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="text-white text-xl bg-black/50 px-3 py-2 rounded-full hover:bg-blue-600 transition"
          >
            ›
          </button>
        </div>

        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-white/70"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      <div className="w-full md:w-5/12 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-3xl shadow-xl">
        <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Register for IELTS Exam
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Most reliable English proficiency test. Get IELTS on Computer
            results in just 1 day. 140+ test locations near you.
          </p>

          {/* Test Type */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Test Type</label>
            <select className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
              <option>Academic</option>
              <option>General Training</option>
            </select>
          </div>

          {/* Test Format */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Test Format</label>
            <select className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
              <option>Computer-based</option>
              <option>Paper-based</option>
            </select>
          </div>

          {/* Test City */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Test City</label>
            <select className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Dehradun</option>
              <option>Noida</option>
            </select>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition transform"
          >
            Check Availability
          </button>
        </form>
      </div>
    </div>
  );
}
