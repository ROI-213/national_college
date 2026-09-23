
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { CampusTourModal } from './CampusTourModal';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-logo-navy via-logo-blue to-logo-navy-dark text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">NAAC A Accredited • Since 1964</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {t('hero.title')}
                <span className="block text-3xl lg:text-4xl text-blue-200 mt-2">
                  {t('hero.subtitle')}
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/admissions/online-application"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
              >
                <span>{t('hero.cta.admissions')}</span>
                <ArrowRight size={20} />
              </Link>
              
              <button className="bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all">
                <Play size={20} />
                <span>{t('hero.cta.explore')}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">60+</div>
                <div className="text-blue-200 text-sm">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-blue-200 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-blue-200 text-sm">Faculty Members</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <CampusTourModal>
              {(openModal) => (
                <div className="relative">
                  <div onClick={openModal} className="relative bg-white/10 backdrop-blur rounded-2xl p-8 shadow-2xl cursor-pointer group">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl flex items-center justify-center group-hover:from-blue-400 group-hover:to-blue-600 transition-all">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-3xl">🏛️</span>
                        </div>
                        <p className="text-white font-semibold">Campus Virtual Tour</p>
                        <p className="text-blue-100 text-sm mt-2">Click to watch</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg">
                    <span className="text-lg">🎓</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-logo-navy to-blue-600 text-white p-3 rounded-full shadow-lg">
                    <span className="text-lg">📚</span>
                  </div>
                </div>
              )}
            </CampusTourModal>
          </div>
        </div>
      </div>
    </section>
  );
};
