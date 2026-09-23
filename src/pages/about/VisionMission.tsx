
import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Eye, Target, Heart, Lightbulb, Users, Globe, Award, Star, Compass, CheckCircle2 } from 'lucide-react';

const missionPoints = [
  'To stimulate the academic environment for the promotion of quality in teaching-learning and research on campus.',
  'To encourage self-evaluation, accountability, autonomy, and innovation.',
  'To undertake quality-related research studies, consultancy, and training programmes.',
  'To familiarize stakeholders with the latest technological developments in the field of information and communication.',
];

const VisionMission = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'Gandhian Values',
      description: 'Upholding truth, non-violence, and service to society as our foundational principles.',
      color: 'bg-red-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Fostering creativity and embracing new ideas to enhance learning experiences.',
      color: 'bg-yellow-500'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Building strong connections between education and social responsibility.',
      color: 'bg-green-500'
    },
    {
      icon: Globe,
      title: 'Holistic Excellence',
      description: 'Striving for comprehensive development in academics, character, and leadership.',
      color: 'bg-blue-500'
    }
  ];

  return (
    <AboutLayout pageTitle="Vision & Mission" breadcrumbPath="Vision & Mission">
      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mr-4">
                    <Eye size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-logo-navy">Our Vision</h2>
                </div>
                <Card className="p-8 shadow-lg border-l-4 border-logo-blue rounded-2xl">
                  <p className="text-xl text-gray-700 leading-relaxed italic">
                    "To make quality the defining element of higher education through a combination of self and external quality evaluation, promotion, and sustenance initiatives."
                  </p>
                </Card>
              </div>
              <div className="animate-fade-in-right flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/20 to-logo-navy/20 rounded-full" />
                  <div className="absolute inset-4 bg-gradient-to-br from-logo-blue/30 to-logo-navy/30 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Award size={80} className="text-logo-blue" strokeWidth={1.2} />
                      <Star size={28} className="text-logo-navy absolute -top-2 -right-2" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex items-center justify-center animate-fade-in-left">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-logo-navy/20 to-logo-blue/20 rounded-full" />
                  <div className="absolute inset-4 bg-gradient-to-br from-logo-navy/30 to-logo-blue/30 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Compass size={80} className="text-logo-navy" strokeWidth={1.2} />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in-right">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-logo-navy rounded-full flex items-center justify-center mr-4">
                    <Target size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-logo-navy">Our Mission</h2>
                </div>
                <Card className="p-8 shadow-lg rounded-2xl">
                  <div className="space-y-5">
                    {missionPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={22} className="text-logo-blue mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-4 animate-fade-in-up">
            Our Core Values
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Rooted in Gandhian philosophy, these fundamental principles guide our decisions, shape our culture, 
            and define our institutional character.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className={`w-20 h-20 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <value.icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-logo-navy mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-logo-navy mb-8 animate-fade-in-up">
              Our Educational Philosophy
            </h2>
            <div className="bg-gradient-to-r from-logo-navy to-logo-blue text-white p-12 rounded-lg shadow-2xl animate-scale-in">
              <p className="text-xl leading-relaxed mb-6">
                "Education is not merely the acquisition of knowledge, but the development of the whole person. 
                We believe in nurturing not just intellectual capabilities, but also emotional intelligence, 
                moral values, and social consciousness, following the Gandhian ideals of truth and service."
              </p>
              <p className="text-lg opacity-90">
                Our approach emphasizes experiential learning, critical thinking, and practical application, 
                ensuring that our graduates are well-prepared to face the challenges of an ever-evolving world 
                while remaining grounded in timeless values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Future */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
              Our Legacy & Future Commitment
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Heritage Foundation',
                  description: 'Building on over a century of educational excellence rooted in Gandhian values and principles.',
                  icon: '🏛️'
                },
                {
                  title: 'Present Excellence',
                  description: 'Maintaining NAAC A standards while fostering innovation and community engagement.',
                  icon: '🌟'
                },
                {
                  title: 'Future Vision',
                  description: 'Preparing globally competent citizens who are locally committed and ethically grounded.',
                  icon: '🚀'
                }
              ].map((commitment, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-6xl mb-6">{commitment.icon}</div>
                  <h3 className="text-2xl font-bold text-logo-navy mb-4">{commitment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default VisionMission;
