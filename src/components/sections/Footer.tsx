import { FaTelegram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Wealth Accelerator</h3>
            <p className="text-sm">Transform your financial future with proven strategies and expert guidance.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#modules" className="hover:text-white transition">Modules</a></li>
              <li><a href="#guarantee" className="hover:text-white transition">Guarantee</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <a href="https://t.me/+9Jq-Eb18NuQ1MDI8" 
                 className="flex items-center gap-2 hover:text-white transition"
                 target="_blank"
                 rel="noopener noreferrer">
                <FaTelegram /> Join on Telegram
              </a>
              <a href="mailto:support@wealthaccelerator.com" 
                 className="flex items-center gap-2 hover:text-white transition">
                <FaEnvelope /> Email Support
              </a>
            </div>
          </div>
          <div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">Limited Time Offer</h4>
              <p className="text-sm mb-4">Join now and save 90% on your enrollment</p>
              <a 
                href="https://t.me/+9Jq-Eb18NuQ1MDI8" 
                className="block text-center bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Wealth Accelerator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}