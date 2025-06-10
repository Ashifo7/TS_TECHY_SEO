import React from 'react';
import { Mail, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
              TS Techy
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted partner for SEO services. We help businesses grow their online presence with proven strategies and measurable results.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-5 h-5 text-teal-400" />
              <a 
                href="mailto:support@tstechy.com" 
                className="hover:text-teal-400 transition-colors duration-300"
              >
                support@tstechy.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-teal-400 transition-colors duration-300 cursor-pointer">
                  Keyword Research
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-teal-400 transition-colors duration-300 cursor-pointer">
                  On-Page Optimization
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-teal-400 transition-colors duration-300 cursor-pointer">
                  Monthly SEO Reports
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-teal-400 transition-colors duration-300 cursor-pointer">
                  Technical SEO Audit
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 group"
              >
                <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Stay connected for SEO tips, industry insights, and company updates.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className="border-t border-gray-800 mt-12 pt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 TS Techy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> for your success
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;