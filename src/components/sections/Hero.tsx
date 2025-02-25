import CountdownTimer from "../CountdownTimer";
import Image from "next/image";
import { FaCheckCircle, FaArrowRight, FaPlay, FaShieldAlt, FaCertificate } from "react-icons/fa";

export default function Hero() {
  const benefits = [
    "Stop Living Paycheck to Paycheck",
    "Master Stocks, Bonds & Crypto",
    "Build Generational Wealth",
    "Join 6000+ Successful Students"
  ];

  const stats = [
    { number: "96%", label: "Success Rate" },
    { number: "6000+", label: "Graduates" },
    { number: "107", label: "Countries" }
  ];

  return (
    <section className="pt-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-left space-y-6">
          
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Create Generational Wealth
              <span className="block text-blue-600">In Six Simple Steps</span>
            </h1>

            <div className="animate-pulse bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 text-white p-3 rounded-lg text-center">
              <span className="text-lg font-bold">🔥 Special Offer - 90% OFF 🔥</span>
              <p className="text-sm">Regular Price: $4000 → Now Only $400</p>
            </div>

            <p className="text-xl text-gray-600 max-w-xl">
              Transform your financial future with our proven system that has helped thousands achieve financial freedom.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl border-2 border-transparent hover:border-blue-500 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-3 px-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
              <a 
                href="https://t.me/+9Jq-Eb18NuQ1MDI8" 
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg w-full animate-bounce"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now - Only $400 <FaArrowRight />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:block hidden">
              <a 
                href="https://t.me/+9Jq-Eb18NuQ1MDI8" 
                className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg group overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 animate-pulse opacity-75 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Join Now - Only $400</span>
                <FaArrowRight className="relative" />
              </a>
              
            </div>

             
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-6 rounded-3xl shadow-xl">
              <div className="aspect-video relative bg-gray-100 rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-110">
                    <FaPlay className="text-xl" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Brian Rose</p>
                      <p className="text-sm text-gray-500">Founder, London Real</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600">
                    "The primary difference between a rich person and a poor person is how they manage fear."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-semibold text-blue-600">6 Modules</div>
                    <div className="text-sm text-gray-600">Comprehensive Training</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-semibold text-green-600">Lifetime</div>
                    <div className="text-sm text-gray-600">Access to Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}