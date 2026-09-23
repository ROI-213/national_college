
import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Globe, Users, BookOpen, Award, Target, Heart, Lightbulb, MapPin } from 'lucide-react';

const NationalCollegeCampusesWorldwide = () => {
  const globalInitiatives = [
    {
      icon: Globe,
      title: 'International Partnerships',
      description: 'Collaborations with global educational institutions for student and faculty exchange programs',
      examples: ['University partnerships', 'Research collaborations', 'Academic exchanges']
    },
    {
      icon: Users,
      title: 'Global Alumni Network',
      description: 'Our graduates serve in leadership positions across continents, maintaining strong ties with their alma mater',
      examples: ['Alumni chapters worldwide', 'Professional networks', 'Mentorship programs']
    },
    {
      icon: BookOpen,
      title: 'Cross-Cultural Learning',
      description: 'Programs that prepare students for global citizenship while maintaining local cultural values',
      examples: ['International curricula', 'Cultural exchange', 'Language programs']
    },
    {
      icon: Award,
      title: 'Global Recognition',
      description: 'International recognition for our educational model based on Gandhian values and holistic development',
      examples: ['Educational awards', 'Best practices sharing', 'Global conferences']
    }
  ];

  const uwcConnection = [
    {
      title: 'United World Colleges Model',
      description: 'Drawing inspiration from the UWC movement that emphasizes international understanding and peace education through diverse, value-based learning communities.',
      values: ['Global citizenship', 'Peace education', 'Cultural diversity', 'Service learning']
    },
    {
      title: 'Gandhian Philosophy in Global Context',
      description: 'Our Gandhian values of truth, non-violence, and service resonate with international educational movements focused on creating responsible global citizens.',
      values: ['Truth and integrity', 'Non-violence', 'Social responsibility', 'Sustainable development']
    },
    {
      title: 'Educational Innovation',
      description: 'Adopting global best practices in education while maintaining our unique identity rooted in Indian philosophy and values.',
      values: ['Innovation in teaching', 'Technology integration', 'Research excellence', 'Practical learning']
    }
  ];

  const futureVision = [
    {
      icon: Target,
      title: 'Global Education Hub',
      description: 'Aspiring to become a recognized center for value-based education that attracts international students and faculty.'
    },
    {
      icon: Heart,
      title: 'International Student Exchange',
      description: 'Developing comprehensive programs for students to experience diverse cultures while sharing our values.'
    },
    {
      icon: Lightbulb,
      title: 'Research Collaborations',
      description: 'Partnering with global institutions on research projects that address worldwide challenges.'
    }
  ];

  return (
    <AboutLayout pageTitle="National College Campuses Worldwide" breadcrumbPath="Campuses Worldwide">
      {/* Global Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue/10 to-green/10 px-6 py-2 rounded-full mb-6 border border-blue/20">
                  <Globe className="text-blue" size={20} />
                  <span className="text-blue font-semibold">Global Reach</span>
                </div>
                <h2 className="text-4xl font-bold text-logo-navy mb-6">
                  A Global Vision Rooted in Local Values
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  While our physical campuses are primarily located in Karnataka, our educational philosophy 
                  and impact extend far beyond geographical boundaries. National College has cultivated 
                  global connections through our alumni network, international partnerships, and alignment 
                  with worldwide educational movements that share our values.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our commitment to Gandhian principles of truth, service, and global citizenship resonates 
                  with international educational frameworks, making us part of a worldwide community of 
                  institutions dedicated to creating responsible global leaders.
                </p>
                <div className="bg-gradient-to-r from-blue/5 to-green/5 p-6 rounded-lg border-l-4 border-blue">
                  <p className="text-blue font-semibold italic">
                    "Education must enable students to think globally while acting locally, maintaining 
                    deep roots in their culture while embracing universal human values."
                  </p>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Global Education Network"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Initiatives */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-4 animate-fade-in-up">
            Our Global Educational Initiatives
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Connecting with the world through educational partnerships, alumni networks, and shared values 
            that transcend geographical boundaries.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {globalInitiatives.map((initiative, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <initiative.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-logo-navy mb-3">{initiative.title}</h3>
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    <div className="space-y-1">
                      {initiative.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue rounded-full mr-2"></div>
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UWC Connection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-4 animate-fade-in-up">
            Global Educational Movements & Connections
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Our educational philosophy aligns with international movements like the United World Colleges, 
            sharing common goals of peace education, global citizenship, and value-based learning.
          </p>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {uwcConnection.map((connection, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-3 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`h-48 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt={connection.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`lg:col-span-2 p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h3 className="text-2xl font-bold text-logo-navy mb-4">{connection.title}</h3>
                      <p className="text-gray-700 mb-6">{connection.description}</p>
                      <div>
                        <h4 className="font-semibold text-logo-navy mb-3">Shared Values:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {connection.values.map((value, valueIndex) => (
                            <div key={valueIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-green rounded-full mr-2"></div>
                              {value}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Global Presence */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Our Global Alumni Network
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                region: 'North America',
                count: '500+',
                description: 'Alumni in leadership positions across USA and Canada in technology, healthcare, and academia.',
                icon: '🇺🇸'
              },
              {
                region: 'Europe',
                count: '300+',
                description: 'Graduates contributing to research, business, and social initiatives across European nations.',
                icon: '🇪🇺'
              },
              {
                region: 'Asia-Pacific',
                count: '800+',
                description: 'Strong presence in Australia, Singapore, Japan, and other Asia-Pacific countries.',
                icon: '🌏'
              },
              {
                region: 'Middle East',
                count: '400+',
                description: 'Alumni serving in various sectors including healthcare, engineering, and education.',
                icon: '🌍'
              },
              {
                region: 'Africa',
                count: '200+',
                description: 'Graduates involved in development work, education, and healthcare initiatives.',
                icon: '🌍'
              },
              {
                region: 'Other Regions',
                count: '300+',
                description: 'Alumni spread across South America and other regions, maintaining global connections.',
                icon: '🌎'
              }
            ].map((region, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-4">{region.icon}</div>
                <h3 className="text-xl font-bold text-logo-navy mb-2">{region.region}</h3>
                <div className="text-3xl font-bold text-blue mb-3">{region.count}</div>
                <p className="text-gray-600 text-sm">{region.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Our Global Future Vision
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {futureVision.map((vision, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue to-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <vision.icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-logo-navy mb-4">{vision.title}</h3>
                <p className="text-gray-600">{vision.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue to-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in-up">
            Join Our Global Educational Mission
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 opacity-90 animate-fade-in-up animate-delay-200">
            Be part of our expanding global network of educators, students, and alumni who are committed 
            to creating a more peaceful, sustainable, and just world through value-based education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <button className="bg-white text-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Connect with Alumni Worldwide
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue transition-colors">
              Explore Partnerships
            </button>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default NationalCollegeCampusesWorldwide;
