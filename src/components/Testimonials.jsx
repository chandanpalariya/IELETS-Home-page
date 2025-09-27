import React from "react";

const testimonials = [
  {
    name: "Riya Sharma",
    location: "Delhi",
    review:
      "IELTS booking process was very easy. Results came in just 1 day. Highly recommended!",
    rating: 5,
  },
  {
    name: "Aditya Verma",
    location: "Bangalore",
    review:
      "Exam centre was professional. Registration was smooth and quick.",
    rating: 4,
  },
  {
    name: "Sana Khan",
    location: "Mumbai",
    review:
      "Booking the test through the website was super easy. Thank you!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Student Reviews
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow hover:shadow-md transition transform hover:-translate-y-1"
            >
              <p className="text-gray-700 text-sm mb-10">"{t.review}"</p>
              <h2 className="text-lg font-semibold text-gray-900">{t.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{t.location}</p>

              {/* Rating stars bottom-right */}
              <div className="absolute bottom-4 right-4 flex space-x-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
