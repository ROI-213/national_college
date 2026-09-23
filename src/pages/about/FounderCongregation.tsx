
import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Heart, BookOpen, Users, Award, Star, History, Lightbulb, Globe } from 'lucide-react';

const FounderCongregation = () => {
  const founders = [
    {
      name: 'Sampath Giri Rao',
      title: 'Founder of National College Basavanagudi',
      year: '1919',
      contribution: 'Visionary educator who established our flagship campus with a commitment to accessible quality education.',
      legacy: 'Laid the foundation for over a century of educational excellence in Bengaluru.'
    },
    {
      name: 'Dr. H. Narasimhaiah',
      title: 'Former Chairman, National Education Society',
      year: '1917-Present',
      contribution: 'Gandhian pioneer and educational leader who shaped the philosophical foundations of our institution.',
      legacy: 'Champion of Gandhian values in education and advocate for inclusive, value-based learning.'
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Truth (Satya)',
      description: 'Commitment to honesty, transparency, and intellectual integrity in all endeavors'
    },
    {
      icon: Users,
      title: 'Non-Violence (Ahimsa)',
      description: 'Fostering peace, harmony, and respectful dialogue in our educational community'
    },
    {
      icon: BookOpen,
      title: 'Service (Seva)',
      description: 'Dedication to serving society through education and community engagement'
    },
    {
      icon: Award,
      title: 'Self-Reliance (Swadeshi)',
      description: 'Empowering students to become independent thinkers and self-sufficient individuals'
    },
    {
      icon: Star,
      title: 'Simple Living',
      description: 'Emphasizing values over materialism and character over status'
    },
    {
      icon: Globe,
      title: 'Universal Brotherhood',
      description: 'Promoting unity, diversity, and global citizenship among our students'
    }
  ];

  return (
    <AboutLayout pageTitle="Founder & Congregation" breadcrumbPath="Founder & Congregation">
      {/* Foundation Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange/10 to-green/10 px-6 py-2 rounded-full mb-6 border border-orange/20">
                  <History className="text-orange" size={20} />
                  <span className="text-orange font-semibold">Our Foundation</span>
                </div>
                <h2 className="text-4xl font-bold text-logo-navy mb-6">
                  Rooted in Gandhian Ideals
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our institution was born from the vision of educational pioneers who believed in Mahatma Gandhi's 
                  philosophy of holistic education. Founded in 1917, the National Education Society of Karnataka 
                  established our first college in Basavanagudi in 1919, marking the beginning of a journey 
                  dedicated to truth, service, and societal transformation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The founding vision was revolutionary for its time - to create educational institutions that 
                  would not merely impart knowledge but would shape character, foster critical thinking, and 
                  prepare students to serve society with integrity and purpose.
                </p>
                <div className="bg-gradient-to-r from-orange/5 to-green/5 p-6 rounded-lg border-l-4 border-orange">
                  <p className="text-orange font-semibold italic">
                    "Education must train the individual to think, to reason, to question, and to serve humanity 
                    with humility and dedication."
                  </p>
                  <p className="text-gray-600 text-sm mt-2">- Founding Philosophy, NES Karnataka</p>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <img
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Gandhi and Education Heritage"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Figures */}
      <section className="py-16 bg-gradient-to-br from-orange/5 to-green/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Visionary Founders
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {founders.map((founder, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mr-4">
                          <Lightbulb size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-logo-navy">{founder.name}</h3>
                          <p className="text-orange font-semibold">{founder.title}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="inline-block bg-green/10 text-green px-3 py-1 rounded-full text-sm font-medium">
                          Since {founder.year}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{founder.contribution}</p>
                      <div className="bg-logo-navy/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-logo-navy mb-2">Legacy:</h4>
                        <p className="text-gray-600 text-sm">{founder.legacy}</p>
                      </div>
                    </div>
                    <div className={`h-64 md:h-auto ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gandhian Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-4 animate-fade-in-up">
            Gandhian Values in Education
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Our educational philosophy is deeply rooted in Mahatma Gandhi's principles, which continue to guide 
            our approach to holistic development and character building.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-orange to-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-logo-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* National Education Society */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-logo-navy mb-8 animate-fade-in-up">
              National Education Society of Karnataka
            </h2>
            <Card className="p-8 animate-scale-in">
              <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <History size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-logo-navy mb-2">Established 1917</h3>
                  <p className="text-gray-600 text-sm">Over a century of educational service</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-logo-navy mb-2">Community Driven</h3>
                  <p className="text-gray-600 text-sm">Serving southern Karnataka region</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-logo-navy mb-2">Value-Based</h3>
                  <p className="text-gray-600 text-sm">Gandhian principles at the core</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The National Education Society of Karnataka was established in 1917 by a group of dedicated 
                educationists who shared Mahatma Gandhi's vision of education as a tool for social transformation. 
                The society has grown into a network of institutions serving southern Karnataka, with a 
                strong emphasis on community-driven initiatives and value-based education that prepares 
                students for both professional success and social responsibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Legacy & Continuing Vision */}
      <section className="py-16 bg-gradient-to-r from-orange to-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in-up">
            Continuing the Legacy
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 opacity-90 animate-fade-in-up animate-delay-200">
            For over a century, the vision of our founders continues to inspire and guide us. Their commitment 
            to education as a means of character building and social transformation remains at the heart of 
            everything we do, as we prepare students to be responsible global citizens grounded in timeless values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <button className="bg-white text-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn About Our Heritage
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange transition-colors">
              Join Our Mission
            </button>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default FounderCongregation;
