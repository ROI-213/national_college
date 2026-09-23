import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Badge } from '../../components/ui/badge';
import { Quote } from 'lucide-react';
import principalImage from '@/assets/principal-photo.jpg';

const PrincipalMessagePage = () => {
  return (
    <AboutLayout pageTitle="Principal's Message" breadcrumbPath="Principal's Message">
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Image Section - 4 columns on desktop, full width on mobile */}
              <div className="col-span-12 lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm lg:max-w-none">
                  <img
                    src={principalImage}
                    alt="Dr. Ramesh P L - Principal"
                    className="w-full rounded-xl shadow-xl object-cover object-top border-4 border-primary/10"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg">
                    <Quote size={24} />
                  </div>
                </div>
              </div>
              
              {/* Content Section - 8 columns on desktop, full width on mobile */}
              <div className="col-span-12 lg:col-span-8">
                {/* Name */}
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  Dr. Ramesh P L
                </h2>
                
                {/* Designation */}
                <p className="text-xl lg:text-2xl text-accent font-semibold mb-4">
                  Principal
                </p>
                
                {/* Badges: Qualification & Experience */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge className="bg-accent text-accent-foreground">Ph.D.</Badge>
                  <Badge className="bg-primary text-primary-foreground">30+ Years Experience</Badge>
                  <Badge className="bg-green-600 text-white">Educational Leadership</Badge>
                </div>
                
                {/* Message paragraphs */}
                <div className="space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to The National College, Autonomous, Basavanagudi, Bengaluru — a college 
                    community where learning, innovation, and character-building come together to shape 
                    the leaders of tomorrow.
                  </p>
                  <p>
                    At our college, we believe that education extends far beyond the classroom. We strive 
                    to create an environment that encourages curiosity, nurtures talent, and promotes 
                    holistic development. Our dedicated faculty, modern infrastructure, and student-centered 
                    approach ensure that every learner receives the guidance and opportunities necessary 
                    to realize their full potential.
                  </p>
                  <p>
                    As Principal of the college, I am proud to lead a premier institution that values 
                    academic excellence, ethical responsibility, and social commitment. We aim not only 
                    to prepare students for successful careers but also to inspire them to contribute 
                    meaningfully to society.
                  </p>
                  <p>
                    I invite you to explore our website and learn more about the programs, activities, 
                    and initiatives that make The National College, Autonomous a vibrant and dynamic 
                    place to study. Together, let us work towards a future filled with knowledge, growth, 
                    and endless possibilities.
                  </p>
                </div>
                
                {/* Styled Closing Section */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-2">Warm regards,</p>
                  <p className="font-bold text-primary text-lg">Dr. Ramesh P L</p>
                  <p className="text-accent font-medium">Principal</p>
                  <p className="text-muted-foreground">The National College, Autonomous</p>
                  <p className="text-muted-foreground">Basavanagudi – 560004</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default PrincipalMessagePage;
