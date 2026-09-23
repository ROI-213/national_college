
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const NewsAnnouncements = () => {
  const { t } = useLanguage();

  const news = [
    {
      type: 'Admission',
      title: 'Admissions Open for Academic Year 2024-25',
      description: 'Applications are now being accepted for all undergraduate programs. Early bird discount available until March 31st.',
      date: '2024-03-15',
      urgent: true
    },
    {
      type: 'Results',
      title: 'Semester Results Published',
      description: 'Results for the current semester have been published. Students can check their results on the student portal.',
      date: '2024-03-10',
      urgent: false
    },
    {
      type: 'Event',
      title: 'Annual Cultural Fest - Basavanagudi Utsav 2024',
      description: 'Join us for our annual cultural celebration featuring music, dance, drama, and various competitions.',
      date: '2024-03-20',
      urgent: false
    },
    {
      type: 'Academic',
      title: 'Guest Lecture Series on Emerging Technologies',
      description: 'Industry experts will share insights on AI, Blockchain, and Cybersecurity trends.',
      date: '2024-03-18',
      urgent: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-logo-navy/5 via-blue-50 to-logo-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-logo-navy mb-4 animate-slide-up">
            {t('news.title')}
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-up animate-delay-200">
            Stay updated with the latest happenings at our college
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured News */}
          <div className="lg:col-span-1 animate-fade-in-left">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift hover-glow border border-logo-navy/10">
              <div className="bg-gradient-to-r from-logo-navy to-logo-blue p-6 animate-fade-in-up">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce-in">
                    {news[0].type}
                  </span>
                  {news[0].urgent && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Urgent
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 animate-slide-up animate-delay-200">
                  {news[0].title}
                </h3>
                <div className="flex items-center text-blue-200 text-sm animate-fade-in-up animate-delay-300">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(news[0].date).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="p-6 animate-fade-in-up animate-delay-200">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {news[0].description}
                </p>
                
                <button className="bg-logo-navy hover:bg-logo-blue text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors hover:scale-105 transform animate-bounce-in animate-delay-400">
                  <span>Read More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-6 animate-fade-in-right">
            {news.slice(1).map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-logo-navy hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-logo-navy/10 text-logo-navy px-3 py-1 rounded-full text-sm font-medium animate-scale-in">
                    {item.type}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-logo-navy mb-2 hover:text-logo-blue cursor-pointer transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* View All News Button */}
            <div className="text-center pt-4 animate-fade-in-up animate-delay-500">
              <button className="bg-logo-navy/10 hover:bg-logo-navy/20 text-logo-navy px-8 py-3 rounded-lg font-semibold transition-colors hover:scale-105 transform border border-logo-navy/20">
                View All Announcements
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
