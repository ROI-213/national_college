
import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Academics', href: '#academics' },
    { label: 'Campus Life', href: '#campus' },
    { label: 'Placements', href: '#placements' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const academicPrograms = [
    { label: 'B.A', href: '/academics/graduate/ba' },
    { label: 'B.Sc. Animation', href: '/academics/graduate/bsc-animation' },
    { label: 'B.Sc', href: '/academics/graduate/bsc' },
    { label: 'B.Com', href: '/academics/graduate/bcom' },
    { label: 'BBA in Business Analytics', href: '/academics/graduate/bba-business-analytics' },
    { label: 'BCA (AICTE)', href: '/academics/graduate/bca' },
    { label: 'M.Com', href: '/academics/postgraduate/mcom' },
    { label: 'MCA (AICTE)', href: '/academics/postgraduate/mca' }
  ];

  const resources = [
    { label: 'Library', href: '#library' },
    { label: 'E-Learning Portal', href: '#elearning' },
    { label: 'Research Publications', href: '#publications' },
    { label: 'Alumni Network', href: '#alumni' },
    { label: 'Career Services', href: '#careers' },
    { label: 'Student Portal', href: '#portal' }
  ];

  const accreditations = [
    { name: 'AICTE', logo: '/lovable-uploads/bb23823b-8027-4472-aab8-70db07b82bd6.png' },
    { name: 'UGC', logo: '/lovable-uploads/4dd1f883-fae5-4197-b87f-cacac7796f8c.png' },
    { name: 'NAAC A', logo: '/lovable-uploads/ea68989a-ad6f-4290-9958-a29fc74f99c7.png' },
    { name: '5 Star Rating', logo: '/lovable-uploads/76e80886-b9b0-4987-94f5-dd0a7d13cbca.png' }
  ];

  return (
    <footer className="bg-logo-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-logo-navy-light rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="border-b border-blue-800">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* College Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/lovable-uploads/new-college-logo.png" 
                      alt="The National College Logo"
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">The National College</h3>
                    <p className="text-blue-200 text-sm">Excellence in Education Since 1945</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Committed to providing quality education and fostering holistic development of students 
                  through innovative teaching methodologies and comprehensive learning experiences.
                </p>
                
                {/* Accreditation Logos */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {accreditations.map((acc, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-3 text-center hover:bg-white/20 transition-all">
                      <img src={acc.logo} alt={acc.name} className="w-8 h-8 mx-auto mb-1" />
                      <div className="text-xs text-blue-200">{acc.name}</div>
                    </div>
                  ))}
                </div>
                
                {/* Social Media */}
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-blue-300">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-blue-300 transition-colors flex items-center space-x-2 group"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academic Programs */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-blue-300">Academic Programs</h4>
                <ul className="space-y-3">
                  {academicPrograms.map((program, index) => (
                    <li key={index}>
                      <a
                        href={program.href}
                        className="text-gray-300 hover:text-blue-300 transition-colors flex items-center space-x-2 group"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
                        <span>{program.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources & Contact */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-blue-300">Resources</h4>
                <ul className="space-y-3 mb-8">
                  {resources.slice(0, 4).map((resource, index) => (
                    <li key={index}>
                      <a
                        href={resource.href}
                        className="text-gray-300 hover:text-blue-300 transition-colors flex items-center space-x-2 group"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
                        <span>{resource.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <h5 className="text-lg font-bold mb-4 text-blue-300">Contact Info</h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">
                      The National College, Basavanagudi, Bengaluru - 560004, Karnataka, India
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">080 2667 4441</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-500 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">nationalbgudiautonomous@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Globe className="text-blue-500 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">www.tndcbasavanagudi.edu.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 The National College, Basavanagudi. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Affiliated to Bengaluru University • Recognized by UGC • NAAC Accredited A Grade
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <a href="/privacy-policy" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="/terms-of-use" className="hover:text-blue-300 transition-colors">Terms of Use</a>
              <a href="/accessibility" className="hover:text-blue-300 transition-colors">Accessibility</a>
              <a href="/sitemap" className="hover:text-blue-300 transition-colors">Sitemap</a>
              <a href="/contact" className="hover:text-blue-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
