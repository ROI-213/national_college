
import React from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ProgramsSection = () => {
  const { t } = useLanguage();

  const undergraduatePrograms = [
    {
      code: 'B.A',
      name: 'Bachelor of Arts',
      duration: '3 Years',
      seats: '100',
      icon: '📚',
      highlights: ['Economics', 'Sociology', 'Journalism', 'Political Science', 'Sports']
    },
    {
      code: 'B.Sc. Animation',
      name: 'B.Sc. Animation',
      duration: '3 Years',
      seats: '60',
      icon: '🎨',
      highlights: ['Animation', 'Visual Effects', 'Digital Media']
    },
    {
      code: 'B.Sc',
      name: 'Bachelor of Science',
      duration: '3 Years',
      seats: '80',
      icon: '🔬',
      highlights: ['PCM', 'PCB', 'PME', 'PMCS', 'EMCS', 'PECS']
    },
    {
      code: 'B.Com',
      name: 'Bachelor of Commerce',
      duration: '3 Years',
      seats: '120',
      icon: '📊',
      highlights: ['Regular', 'Logistics', 'Financial Accounting']
    },
    {
      code: 'BBA',
      name: 'Bachelor of Business Administration',
      duration: '3 Years',
      seats: '60',
      icon: '💼',
      highlights: ['Marketing Analytics', 'Data Science', 'Financial Analytics']
    },
    {
      code: 'BCA (AICTE)',
      name: 'Bachelor of Computer Applications',
      duration: '3 Years',
      seats: '60',
      icon: '💻',
      highlights: ['AI & ML', 'Cloud Computing', 'Blockchain']
    }
  ];

  const postgraduatePrograms = [
    {
      code: 'M.Com',
      name: 'Master of Commerce',
      duration: '2 Years',
      seats: '40',
      icon: '📊',
      highlights: ['Advanced Accounting', 'Corporate Finance', 'Research']
    },
    {
      code: 'MCA (AICTE)',
      name: 'Master of Computer Applications',
      duration: '2 Years',
      seats: '30',
      icon: '🖥️',
      highlights: ['Advanced Programming', 'System Design', 'AI & ML']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of programs designed to prepare you for tomorrow's challenges
          </p>
        </div>

        {/* Undergraduate Programs */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-md">
              <GraduationCap className="text-blue-600" size={24} />
              <h3 className="text-2xl font-bold text-gray-800">{t('programs.ug')}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {undergraduatePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{program.icon}</div>
                  <div className="text-lg font-bold text-blue-600 mb-1">{program.code}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{program.name}</h4>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-800">{program.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Seats:</span>
                    <span className="font-semibold text-gray-800">{program.seats}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Areas:</h5>
                  <div className="space-y-1">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-xs text-gray-600 flex items-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Postgraduate Programs */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-md">
              <Award className="text-orange-600" size={24} />
              <h3 className="text-2xl font-bold text-gray-800">{t('programs.pg')}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {postgraduatePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{program.icon}</div>
                  <div className="text-xl font-bold text-orange-600 mb-1">{program.code}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{program.name}</h4>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-800">{program.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Seats:</span>
                    <span className="font-semibold text-gray-800">{program.seats}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h5 className="font-semibold text-gray-700 mb-3">Specializations:</h5>
                  <div className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Explore Program
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful graduates who started their careers at National College
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
              <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
