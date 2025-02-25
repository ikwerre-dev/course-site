import { FaLightbulb, FaChartLine, FaBrain, FaUsers, FaRocket, FaInfinity } from 'react-icons/fa';

export default function Modules() {
  const modules = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Mindset Mastery",
      description: "Break free from limiting beliefs and develop a wealth mindset"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Investment Strategies",
      description: "Master stocks, bonds, crypto, and early-stage investing"
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "Wealth Psychology",
      description: "Understand and overcome fear in financial decision-making"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Network Building",
      description: "Connect with successful investors and entrepreneurs"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Wealth Acceleration",
      description: "Implement strategies to multiply your income"
    },
    {
      icon: <FaInfinity className="w-8 h-8" />,
      title: "Legacy Planning",
      description: "Create lasting generational wealth"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Your Path to Financial Freedom
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 mb-4">{module.icon}</div>
              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}