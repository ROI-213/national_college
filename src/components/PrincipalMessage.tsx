import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import principalImage from '@/assets/principal-photo.jpg';

export const PrincipalMessage = () => {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Quote className="text-primary" size={16} />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Leadership</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Principal's <span className="text-primary">Message</span>
          </h2>
        </div>

        {/* Clean Card Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Principal Image */}
              <div className="md:w-1/3 relative">
                <div className="h-64 md:h-full min-h-[280px]">
                  <img
                    src={principalImage}
                    alt="Ramesh P L - Principal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/20"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-2/3 p-6 lg:p-8 flex flex-col justify-center">
                {/* Name & Designation */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">Ramesh P L</h3>
                  <p className="text-primary font-semibold">Principal, The National College</p>
                </div>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                  <p className="pl-5 text-lg text-muted-foreground italic leading-relaxed">
                    "Education transforms knowledge into wisdom for the betterment of humanity. Welcome to The National College, Autonomous, Basavanagudi, Bengaluru, where we nurture academic excellence since 1945."
                  </p>
                </div>
                
                {/* CTA */}
                <div>
                  <Link 
                    to="/about/principal-message"
                    className="group inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] text-sm"
                  >
                    <span>Read Full Message</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
