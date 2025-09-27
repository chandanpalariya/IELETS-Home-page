import React from "react";
import { ShieldCheck, Star, Globe, Users } from "lucide-react"; 

export default function Highlights() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Leading English test for study, work, or migration abroad
        </h1>

        {/* 4 Divs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Div 1 */}
          <div className="bg-white p-6 rounded-2xl transition transform hover:-translate-y-1">
            <ShieldCheck className="w-10 h-10 mx-auto text-blue-600 mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">Trusted</h2>
            <p className="text-sm text-gray-600 mt-2">
              Setting the benchmark for 35 years
            </p>
          </div>

          {/* Div 2 */}
          <div className="bg-white p-6 rounded-2xl transition transform hover:-translate-y-1">
            <Star className="w-10 h-10 mx-auto text-yellow-500 mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">Popular</h2>
            <p className="text-sm text-gray-600 mt-2">
              3.5 million IELTS tests booked last year
            </p>
          </div>

          {/* Div 3 */}
          <div className="bg-white p-6 rounded-2xl transition transform hover:-translate-y-1">
            <Globe className="w-10 h-10 mx-auto text-green-600 mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">Recognized</h2>
            <p className="text-sm text-gray-600 mt-2">
              Accepted by 12,000+ Institutions
            </p>
          </div>

          {/* Div 4 */}
          <div className="bg-white p-6 rounded-2xl transition transform hover:-translate-y-1">
            <Users className="w-10 h-10 mx-auto text-purple-600 mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">Flexible</h2>
            <p className="text-sm text-gray-600 mt-2">
              Your Choice: Computer or Paper
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
