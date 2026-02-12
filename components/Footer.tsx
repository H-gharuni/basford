import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-serif">Basford Welfare</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A historic social club in the heart of Nottingham. We pride ourselves on great beer, 
              great company, and fantastic entertainment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Goldcrest Road, Basford,<br />Nottingham, NG6 8PT</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>0115 927 8977</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>info@basfordwelfare.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between"><span>Mon - Thu</span> <span>16:00 - 23:00</span></li>
              <li className="flex justify-between"><span>Fri</span> <span>15:00 - 00:00</span></li>
              <li className="flex justify-between text-white font-medium"><span>Sat</span> <span>12:00 - 00:00</span></li>
              <li className="flex justify-between text-white font-medium"><span>Sun</span> <span>12:00 - 23:00</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on upcoming gigs and special offers.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-4 py-2 focus:outline-none focus:border-amber-500"
              />
              <button className="bg-amber-600 text-white text-sm font-medium py-2 rounded hover:bg-amber-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Basford Miners Welfare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;