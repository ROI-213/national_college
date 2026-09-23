
import React from 'react';
import { FileText, Award, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const QuickLinks = () => {
  const { t } = useLanguage();

  const quickLinks = [
    {
      icon: FileText,
      title: t('quick.admissions'),
      description: 'Apply for admission to various programs',
      color: 'bg-logo-navy',
      href: '#admissions'
    },
    {
      icon: Award,
      title: t('quick.results'),
      description: 'Check examination results',
      color: 'bg-logo-blue',
      href: '#results'
    },
    {
      icon: FileText,
      title: t('quick.naac'),
      description: 'Access NAAC documents and reports',
      color: 'bg-logo-navy-dark',
      href: '#naac'
    },
    {
      icon: MapPin,
      title: t('quick.virtual.tour'),
      description: 'Explore our campus virtually',
      color: 'bg-logo-blue-light',
      href: '#tour'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up hover-lift hover-glow animate-delay-${(index + 1) * 100} border border-blue-200`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${link.color} rounded-lg mb-4 group-hover:scale-110 transition-transform animate-bounce-in animate-delay-${(index + 1) * 200}`}>
                <link.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-lg font-semibold text-logo-navy mb-2 group-hover:text-logo-blue transition-colors animate-slide-up animate-delay-300">
                {link.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed animate-fade-in-up animate-delay-400">
                {link.description}
              </p>
              
              <div className="mt-4 text-logo-blue text-sm font-medium group-hover:text-logo-navy transition-colors animate-fade-in-right animate-delay-500">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
