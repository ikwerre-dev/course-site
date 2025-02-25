import { FaGraduationCap, FaVideo, FaUsersCog, FaGlobeAmericas } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Six Module Roadmap",
      description: "A comprehensive plan to create generational wealth & financial freedom",
      stat: "96%",
      statText: "Completion Rate"
    },
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: "Weekly Live Calls",
      description: "One hour 'No Holds Barred' live video check-in calls with open Q&A",
      stat: "52+",
      statText: "Live Sessions/Year"
    },
    {
      icon: <FaUsersCog className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Triple-tiered accountability system with private app access",
      stat: "24/7",
      statText: "Active Support"
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Global Community",
      description: "Join our thriving community of wealth builders worldwide",
      stat: "6000+",
      statText: "Graduates"
    }
  ];

  const reviews = [
    {
      text: "Thanks to the blueprint I just completed a $1.6 million dollar launch for my digital product.",
      author: "Jon Mcmahon",
      role: "Digital Entrepreneur"
    },
    {
      text: "This program is not just about learning, it is more about taking action and doing more stuff!",
      author: "Andreea Bordas",
      role: "Business Owner"
    },
    {
      text: "My two passions have discovered not only a way to coexist but to benefit from each other.",
      author: "Jan Reuter",
      role: "Holistic Pharmacy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Transform Your Financial Future
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} 
                 className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 group">
              <div className="absolute -top-4 left-6 bg-yellow-500 p-2 rounded-lg text-black">
                {feature.icon}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-yellow-400">{feature.stat}</span>
                  <span className="text-sm text-gray-500">{feature.statText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            What Our Students Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
                <div className="mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-300 mb-6 italic">&ldquo;{review.text}&ldquo;</p>
                <div>
                  <p className="font-semibold text-white">{review.author}</p>
                  <p className="text-yellow-400 text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}