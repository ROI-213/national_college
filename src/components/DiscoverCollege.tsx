import React, { useState } from 'react';
import { ArrowRight, Users, Award, Globe, BookOpen, Target, Lightbulb, Heart, Play, X, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DiscoverCollege = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "NAAC A accredited institution with 80+ years of educational excellence since 1945",
      highlight: "NAAC A"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified and experienced faculty members with industry expertise",
      highlight: "100+ Faculty"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International collaborations and exchange programs for global exposure",
      highlight: "Global Reach"
    },
    {
      icon: Target,
      title: "Career Success",
      description: "90% placement rate with top recruiters and comprehensive career support",
      highlight: "90% Placements"
    }
  ];

  const achievements = [
    { number: "13500+", label: "Students", sublabel: "Enrolled (From last 5 years)" },
    { number: "30+", label: "Programs", sublabel: "Offered" },
    { number: "90%", label: "Placements", sublabel: "Success Rate" },
    { number: "80+", label: "Years", sublabel: "Legacy" }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-5 py-2.5 rounded-full border border-primary/20 mb-6">
            <Sparkles className="text-primary" size={18} />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Discover Excellence</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
            Discover
            <span className="block text-primary mt-2">
              The National College
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Where tradition meets innovation. For over eight decades, we have been nurturing minds, 
            building character, and creating leaders who shape the future of our society.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Stats & CTA */}
          <div className="space-y-10">
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="group relative bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-foreground font-semibold text-lg">
                      {achievement.label}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {achievement.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about/college" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all hover:shadow-xl shadow-lg">
                <span>Explore Our Journey</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="group bg-card border-2 border-border hover:border-primary/40 text-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all shadow-md hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Play size={18} className="text-primary ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>

            {/* Quick Highlights */}
            <div className="bg-card/50 rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                <CheckCircle2 className="text-primary" size={20} />
                <span>Why Students Choose Us</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['UGC Recognized', 'Industry Partnerships', 'Well-equipped Labs', 'Holistic Development'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-start space-x-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <feature.icon size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-r from-primary via-primary to-primary/90 rounded-3xl p-10 lg:p-12 text-primary-foreground shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-5 py-2 rounded-full border border-primary-foreground/20 mb-6">
                <Heart className="text-primary-foreground" size={18} />
                <span className="text-primary-foreground font-medium text-sm">Join Our Community</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Be Part of Our Legacy
              </h3>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Be part of a legacy that has shaped thousands of successful careers. 
                Your journey to excellence starts here at The National College, Basavanagudi.
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="/Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all inline-block"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X size={20} />
            </button>
            
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wG-4lNBk1ZU?autoplay=1"
                title="The National College Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};