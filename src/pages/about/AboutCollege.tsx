import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { GraduationCap, Award, Users, Calendar, Building, BookOpen, MapPin, Heart } from 'lucide-react';
import aboutCollegeCampus from '@/assets/about-page-2.jpg';
import { CampusTourModal } from '@/components/CampusTourModal';

const AboutCollege = () => {
  const achievements = [
    { year: '1917', milestone: 'National Education Society (NES) Established' },
    { year: '1945', milestone: 'Degree College' },
    { year: '2006', milestone: 'Autonomous Granted' },
    { year: '2025', milestone: '4th Cycle NAAC A Grade' },
  ];

  const highlights = [
    { icon: GraduationCap, title: 'Academic Excellence', value: 'NAAC A Grade', color: 'bg-blue-500' },
    { icon: Users, title: 'Student Strength', value: '1000+ Students', color: 'bg-green-500' },
    { icon: BookOpen, title: 'Programs Offered', value: '15+ Courses', color: 'bg-purple-500' },
    { icon: Award, title: 'Success Rate', value: '90% Placement', color: 'bg-orange-500' },
  ];

  const campuses = [
    {
      name: 'Basavanagudi Campus',
      established: '1945',
      description: 'Modern campus offering strong pre-university and degree programs across arts & sciences',
      features: ['Well-equipped Labs', 'Digital Labs', 'Sports Complex', 'Student Center']
    }
  ];

  return (
    <AboutLayout pageTitle="About the College" breadcrumbPath="About the College">
      {/* Legacy Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-logo-navy/10 to-logo-navy-light/10 px-6 py-2 rounded-full mb-6 border border-logo-navy/20">
                <Heart className="text-logo-navy" size={20} />
                <span className="text-logo-navy font-semibold">Heritage & Legacy</span>
              </div>
              <h2 className="text-3xl font-bold text-logo-navy mb-6">
                A Century of Educational Excellence
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The National College stands as a testament to over a century of educational excellence,
                tracing its roots back to 1917 with the establishment of the National Education Society of Karnataka (NES).
                The Degree College was established in 1945, building on this strong foundation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Managed by the prestigious National Education Society of Karnataka, we have remained steadfast
                in our commitment to providing accessible, quality education while fostering innovation,
                critical thinking, and community engagement. Our legacy is built on Gandhian values of
                truth, non-violence, and service to society.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-logo-blue text-white">UGC Recognized</Badge>
                <Badge variant="secondary" className="bg-logo-navy text-white">NAAC A Accredited</Badge>
                <Badge variant="secondary" className="bg-green-600 text-white">NES Managed</Badge>
                <Badge variant="secondary" className="bg-purple-600 text-white">100+ Years Legacy</Badge>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <img
                src={aboutCollegeCampus}
                alt="The National College Heritage Campus"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            College at a Glance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-logo-navy mb-2">{item.title}</h3>
                  <p className="text-2xl font-bold text-logo-blue">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Our Campus
          </h2>
          <div className="grid lg:grid-cols-1 gap-8 max-w-xl mx-auto">
            {campuses.map((campus, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="h-48 bg-gradient-to-br from-logo-navy to-logo-blue flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">{campus.name}</h3>
                    <p className="text-blue-200">Established {campus.established}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{campus.description}</p>
                  <h4 className="font-semibold text-logo-navy mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {campus.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs justify-center">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Our Journey Through Time
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-logo-blue"></div>
              {achievements.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <Card className={`w-80 ${index % 2 === 0 ? 'mr-8' : 'ml-8'} hover:shadow-lg transition-shadow`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-logo-navy rounded-full flex items-center justify-center">
                          <Calendar size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-logo-blue">{item.year}</h3>
                          <p className="text-gray-700">{item.milestone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-logo-blue rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-logo-navy mb-8 animate-fade-in-up">
              Community Impact & Academic Excellence
            </h2>
            <div className="bg-gradient-to-r from-logo-navy to-logo-blue text-white p-12 rounded-lg shadow-2xl animate-scale-in">
              <p className="text-xl leading-relaxed mb-6">
                "For over a century, we have been committed to fostering holistic education grounded in Gandhian values, 
                innovation, and societal impact. Our mission extends beyond academic excellence to cultivate critical thinking, 
                leadership, and community engagement among our students."
              </p>
              <p className="text-lg opacity-90">
                From our historic roots in Basavanagudi to our modern campus, we continue to serve as 
                a beacon of quality education, preparing students to become responsible citizens and leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Join Our Legacy of Excellence
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up animate-delay-200">
            Become part of a tradition that has shaped generations of leaders and innovators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <button className="bg-white text-logo-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <CampusTourModal>
              {(openModal) => (
                <button onClick={openModal} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-logo-navy transition-colors">
                  Campus Tour
                </button>
              )}
            </CampusTourModal>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default AboutCollege;
