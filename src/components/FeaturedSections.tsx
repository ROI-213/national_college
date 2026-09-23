
import React from 'react';
import { BookOpen, Award, Building, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FeaturedSections = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t('features.academics.title'),
      description: t('features.academics.desc'),
      image: '🎓',
      stats: '15+ Programs'
    },
    {
      icon: Award,
      title: t('features.naac.title'),
      description: t('features.naac.desc'),
      image: '🏆',
      stats: 'CGPA 3.2'
    },
    {
      icon: Building,
      title: t('features.facilities.title'),
      description: t('features.facilities.desc'),
      image: '🏢',
      stats: '50+ Labs'
    },
    {
      icon: Briefcase,
      title: t('features.placements.title'),
      description: t('features.placements.desc'),
      image: '💼',
      stats: '85% Placement'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose NDC Basavanagudi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes our college a premier destination for higher education in Bengaluru
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 animate-fade-in-up hover-lift hover-glow animate-delay-${(index + 1) * 100}`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-logo-blue/10 to-logo-blue-light/10 rounded-bl-2xl"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-logo-blue to-logo-blue-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform animate-bounce-in">
                  <feature.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl mb-2 animate-float">{feature.image}</div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-logo-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-logo-blue bg-blue-50 px-3 py-1 rounded-full animate-scale-in">
                    {feature.stats}
                  </span>
                  
                  <button className="text-logo-blue hover:text-logo-blue-light font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Explore →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
