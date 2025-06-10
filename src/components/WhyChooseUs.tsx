import React from 'react';
import { DollarSign, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Affordable Plans',
    description: 'Get premium SEO services without breaking the bank. Our flexible pricing fits every budget.',
  },
  {
    icon: Users,
    title: 'Expert SEO Team',
    description: 'Work with certified SEO professionals who stay updated with the latest algorithm changes.',
  },
  {
    icon: TrendingUp,
    title: 'Real Measurable Results',
    description: 'Track your progress with detailed analytics and see your rankings improve month over month.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Why Choose TS Techy?
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We deliver results that matter to your business growth and online presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;