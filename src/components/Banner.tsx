import React from 'react';
import { CampusTourModal } from './CampusTourModal';
import { ArrowRight, Users, Trophy, BookOpen, Calendar, Play, GraduationCap, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import heroFacultyGroup from '@/assets/hero-faculty-group.jpg';
import heroConvocation from '@/assets/hero-convocation.jpg';
import heroLampLighting from '@/assets/hero-lamp-lighting.jpg';

export const Banner = () => {
  const { t } = useLanguage();

  const banners = [
    {
      title: "Shape Your Future at",
      subtitle: "The National College",
      description: "Excellence in education since 1945. Join our distinguished academic legacy in Basavanagudi, Bengaluru.",
      badge: "Admission Year 2026",
      image: heroFacultyGroup,
      primaryButton: "Apply Now",
      secondaryButton: "Academic Calendar"
    },
    {
      title: "Excellence in Education | NAAC A Accredited",
      subtitle: "",
      description: "Experience world-class education with state-of-the-art facilities and industry-expert faculty members.",
      badge: "NAAC A Grade • UGC Recognized",
      image: heroConvocation,
      primaryButton: "Explore Programs",
      secondaryButton: "Campus Tour"
    },
    {
      title: "Build Your Career",
      subtitle: "100% Placement Assistance",
      description: "Join thousands of successful alumni who have built remarkable careers with top companies worldwide.",
      badge: "90% Placement Rate • Top Recruiters",
      image: heroLampLighting,
      primaryButton: "View Placements",
      secondaryButton: "Alumni Network"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-[700px] lg:min-h-[650px] overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={banner.image}
                    alt="Campus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-20 right-20 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 h-full flex items-start justify-start px-6 md:px-12 lg:px-16 py-12 pt-36 lg:pt-40">
                  <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-12 items-start w-full">
                    {/* Content */}
                    <div className="space-y-8 animate-fade-in-up max-w-2xl">
                      <div className="space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-5 py-2.5 rounded-full">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                          <span className="text-sm font-medium text-primary-foreground">{banner.badge}</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-primary-foreground">
                          {banner.title.includes('|') ? (
                            <>
                              <span className="block">{banner.title.split('|')[0].trim()} |</span>
                              <span className="block text-primary-foreground/90 mt-2 text-3xl md:text-4xl lg:text-4xl">{banner.title.split('|')[1].trim()}</span>
                            </>
                          ) : (
                            <>
                              {banner.title}
                              <span className="block text-primary-foreground/90 mt-2 text-3xl md:text-4xl lg:text-4xl">
                                {banner.subtitle}
                              </span>
                            </>
                          )}
                        </h1>
                        
                        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
                          {banner.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={banner.primaryButton === 'Apply Now' ? '/admissions/online-application' : '#'}
                          className="bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
                        >
                          <span>{banner.primaryButton}</span>
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        {banner.secondaryButton === "Academic Calendar" ? (
                          <a href="/Academic-Calendar.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300">
                            <Calendar size={20} />
                            <span>{banner.secondaryButton}</span>
                          </a>
                        ) : banner.secondaryButton === "Campus Tour" ? (
                          <CampusTourModal>
                            {(openModal) => (
                              <button onPointerDown={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); openModal(); }} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300">
                                <Play size={20} />
                                <span>{banner.secondaryButton}</span>
                              </button>
                            )}
                          </CampusTourModal>
                        ) : (
                          <button className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300">
                            <Calendar size={20} />
                            <span>{banner.secondaryButton}</span>
                          </button>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-1">
                            <Users size={20} className="text-primary-foreground/70" />
                            <span className="text-2xl lg:text-3xl font-bold text-primary-foreground">13500+</span>
                          </div>
                          <div className="text-primary-foreground/70 text-sm font-medium">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-1">
                            <BookOpen size={20} className="text-primary-foreground/70" />
                            <span className="text-2xl lg:text-3xl font-bold text-primary-foreground">30+</span>
                          </div>
                          <div className="text-primary-foreground/70 text-sm font-medium">Programs</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-1">
                            <Trophy size={20} className="text-primary-foreground/70" />
                            <span className="text-2xl lg:text-3xl font-bold text-primary-foreground">A</span>
                          </div>
                          <div className="text-primary-foreground/70 text-sm font-medium">NAAC Grade</div>
                        </div>
                      </div>
                    </div>

                    {/* Feature Cards - Right Side */}
                    <div className="hidden xl:block w-full">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 hover:bg-primary-foreground/15 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                          <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                            <GraduationCap className="text-primary-foreground" size={28} />
                          </div>
                          <h3 className="text-primary-foreground font-semibold text-lg mb-2 xl:whitespace-nowrap">Quality Education</h3>
                          <p className="text-primary-foreground/70 text-sm xl:whitespace-nowrap">Excellence in teaching since 1945</p>
                        </div>
                        
                        <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 hover:bg-primary-foreground/15 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                          <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                            <Award className="text-primary-foreground" size={28} />
                          </div>
                          <h3 className="text-primary-foreground font-semibold text-lg mb-2 xl:whitespace-nowrap">NAAC A Rated</h3>
                          <p className="text-primary-foreground/70 text-sm xl:whitespace-nowrap">Nationally recognized excellence</p>
                        </div>
                        
                        <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 hover:bg-primary-foreground/15 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                          <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                            <Users className="text-primary-foreground" size={28} />
                          </div>
                          <h3 className="text-primary-foreground font-semibold text-lg mb-2 xl:whitespace-nowrap">Expert Faculty</h3>
                          <p className="text-primary-foreground/70 text-sm xl:whitespace-nowrap">100+ experienced educators</p>
                        </div>
                        
                        <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 hover:bg-primary-foreground/15 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                          <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                            <Trophy className="text-primary-foreground" size={28} />
                          </div>
                          <h3 className="text-primary-foreground font-semibold text-lg mb-2 xl:whitespace-nowrap">Top Placements</h3>
                          <p className="text-primary-foreground/70 text-sm xl:whitespace-nowrap">90% placement success rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-primary-foreground/90 hover:bg-primary-foreground border-0 text-primary shadow-lg" />
        <CarouselNext className="right-4 bg-primary-foreground/90 hover:bg-primary-foreground border-0 text-primary shadow-lg" />
      </Carousel>
    </section>
  );
};
