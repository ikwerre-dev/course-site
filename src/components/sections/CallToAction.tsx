import { FaArrowRight } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Join Me & Let&lsquo;s Make 2025 Your Wealthiest Year Ever
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Don&lsquo;t let another year pass by living paycheck to paycheck. 
          Take control of your financial future today.
        </p>
        <a 
          href="https://t.me/+9Jq-Eb18NuQ1MDI8" 
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy course for $150 <FaArrowRight />
        </a>
        <p className="mt-4 text-blue-200">Limited Time Offer - Don&lsquo;t Miss Out!</p>
      </div>
    </section>
  );
}