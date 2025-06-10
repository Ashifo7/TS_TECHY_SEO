import React from 'react';
import { Search, FileText, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Keyword Research',
    description: 'Find the best keywords to boost traffic.',
    details: 'Comprehensive keyword analysis to identify high-converting opportunities for your business.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'On-Page Optimization',
    description: 'Improve your content, meta tags, and speed.',
    details: 'Complete website optimization including content, technical SEO, and user experience improvements.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: BarChart3,
    title: 'Monthly SEO Reports',
    description: 'Get clear, actionable reports every month.',
    details: 'Detailed performance reports with insights and recommendations for continuous improvement.',
    color: 'from-purple-500 to-purple-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Our SEO Services
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Comprehensive SEO solutions designed to drive traffic and boost your online presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <p className="text-sm text-gray-500">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;