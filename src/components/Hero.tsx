import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 mt-16">
        <div className="text-center">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Grow Your Business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
              Smart SEO
            </span>
          </h1>
          <p 
            className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At TS Techy, we help your website rank higher and convert better with proven SEO strategies.
          </p>
          <button 
            className="group bg-teal-500 hover:bg-teal-400 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
            data-aos="fade-up"
            data-aos-delay="300"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;