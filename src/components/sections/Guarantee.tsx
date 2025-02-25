import { FaShieldAlt, FaClock, FaUserGraduate } from 'react-icons/fa';

export default function Guarantee() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Triple Guarantee</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaShieldAlt className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Money Back</h3>
              <p className="text-blue-100">30-day no-questions-asked refund policy</p>
            </div>
            <div className="flex flex-col items-center">
              <FaClock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Lifetime Access</h3>
              <p className="text-blue-100">Including all future updates</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUserGraduate className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-blue-100">Direct access to our community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}