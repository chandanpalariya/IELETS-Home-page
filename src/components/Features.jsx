import React from "react";
import { CalendarDays, BookOpen, FileCheck } from "lucide-react";

const features = [
  {
    icon: <CalendarDays className="w-12 h-12 text-blue-600 mb-4 mx-auto" />,
    title: "Book IELTS Test",
    desc: "Easily register and schedule your IELTS test at the nearest center. Hassle-free process for all candidates.",
    link: "#book-test",
    bottomText: "Check available dates",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-600 mb-4 mx-auto" />,
    title: "IELTS Preparation",
    desc: "Get access to expert study materials and guidance to prepare for your exam effectively.",
    link: "#preparation",
    bottomText: "View study resources",
  },
  {
    icon: <FileCheck className="w-12 h-12 text-purple-600 mb-4 mx-auto" />,
    title: "Check Your IELTS Results",
    desc: "View your IELTS results online quickly as soon as they are released, no waiting around.",
    link: "#results",
    bottomText: "See your results online",
  },
];

export default function Features() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          How IELTS Can Help You
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, index) => (
            <a
              key={index}
              href={f.link}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 hover:scale-105 cursor-pointer block text-left"
            >
              {f.icon}
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              <p className="text-blue-600 text-sm mt-4 hover:underline">
                {f.bottomText}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
