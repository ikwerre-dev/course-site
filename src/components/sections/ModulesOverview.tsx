import { FaUnlock, FaChartLine, FaBrain, FaUsers, FaRocket, FaInfinity } from 'react-icons/fa';

export default function ModulesOverview() {
  const modules = [
    {
      icon: <FaUnlock />,
      number: "Module 1",
      title: "Recognize The Trap & Plan Your Escape",
      description: "Understand the reality you have been sold and unplug from the Matrix."
    },
    {
      icon: <FaBrain />,
      number: "Module 2",
      title: "The Mindset of Money",
      description: "Learn how money is energy and how to start attracting it now."
    },
    {
      icon: <FaChartLine />,
      number: "Module 3",
      title: "Make Money Work For You",
      description: "Transform from employee to investor and 10x your income."
    },
    {
      icon: <FaRocket />,
      number: "Module 4",
      title: "Investment Mastery",
      description: "Master stocks, bonds, crypto, and early-stage investing."
    },
    {
      icon: <FaUsers />,
      number: "Module 5",
      title: "Build Your Network",
      description: "Connect with successful investors and entrepreneurs."
    },
    {
      icon: <FaInfinity />,
      number: "Module 6",
      title: "Create Lasting Legacy",
      description: "Establish systems for generational wealth transfer."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Six Step Roadmap To Financial Freedom
          </h2>
          <p className="text-xl text-gray-600">
            A comprehensive plan designed to help you take action, face your fears, and build long-term wealth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-600 text-2xl">
                  {module.icon}
                </div>
                <span className="text-blue-600 font-bold">{module.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}