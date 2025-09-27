import React from "react";
import indiaImg from "../assets/india.jpg";
import ukImg from "../assets/uk.jpg";
import usaImg from "../assets/usa.jpg";
import canadaImg from "../assets/canada.jpg";
import australiaImg from "../assets/australia.jpg";
import newzealandImg from "../assets/newzealand.jpg";

const countries = [
  { name: "India", image: indiaImg },
  { name: "UK", image: ukImg },
  { name: "USA", image: usaImg },
  { name: "Canada", image: canadaImg },
  { name: "Australia", image: australiaImg },
  { name: "New Zealand", image: newzealandImg },
];

export default function Destinations() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Where IELTS Can Take You
        </h1>

        {/* 6 Divs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {country.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
