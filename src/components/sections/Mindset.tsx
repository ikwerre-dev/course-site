import { FaBrain, FaLightbulb } from 'react-icons/fa';

export default function Mindset() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            &ldquo; The Primary Difference Between A Rich Person And A Poor Person Is How They Manage Fear.&ldquo; 
          </h2>
          <p className="text-xl text-gray-600">
            Are you tired of living paycheck to paycheck? Inside the Wealth Accelerator, 
            we believe that overcoming limiting beliefs is the key to creating a better financial future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <FaBrain className="text-blue-600 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Transform Your Mindset</h3>
            <p className="text-gray-600 mb-6">
              Learn to manage fear and use it as a motivator rather than a roadblock. 
              Successful people face fear head-on and use it as a catalyst for action.
            </p>
            <ul className="space-y-3">
              {[
                "Eliminate Your 'Broke' Mentality",
                "Build Unshakeable Confidence",
                "Develop Wealth Consciousness"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Your Journey Begins Here</h3>
            <div className="space-y-6">
              <p>
                &ldquo; It&ldquo; s not the fancy degrees. It&ldquo; s not the wealthy connections. 
                It&ldquo; s not having a &ldquo; private banker.&ldquo;  It&ldquo; s solely how you manage FEAR.&ldquo; 
              </p>
              <div className="border-t border-white/20 pt-6">
                <p className="font-bold">Brian Rose</p>
                <p className="text-blue-200">Founder, London Real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}