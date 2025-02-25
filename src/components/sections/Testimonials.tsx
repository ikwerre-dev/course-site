import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Thanks to the blueprint Brian gave me I just completed a $1.6 million dollar launch for my digital product...and plan on making double that before year end.",
      author: "Jon Mcmahon",
      role: "Digital Entrepreneur"
    },
    {
      quote: "During this course my two passions, holistic pharmacy and speaking, have discovered not only a way to coexist, but to benefit from each other.",
      author: "Jan Reuter",
      role: "Holistic Pharmacy"
    },
    {
      quote: "This program is not just about learning, it is more about taking action and doing more stuff!",
      author: "Andreea Bordas",
      role: "Business Owner"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Success Stories
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl relative">
              <FaQuoteLeft className="text-blue-500 text-4xl mb-6" />
              <p className="text-lg mb-8">&ldquo{testimonial.quote}&ldquo</p>
              <div className="mt-auto">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-blue-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}