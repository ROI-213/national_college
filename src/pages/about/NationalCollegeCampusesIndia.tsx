
import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { MapPin, Calendar, Users, BookOpen, Award, Building, Target, Globe } from 'lucide-react';

const NationalCollegeCampusesIndia = () => {
  const campuses = [
    {
      name: 'National College Basavanagudi',
      location: 'Basavanagudi, Bengaluru',
      established: '1919',
      type: 'Flagship Campus',
      description: 'Our heritage campus that started it all, offering comprehensive arts and science programs with a rich tradition of academic excellence.',
      programs: ['BA', 'BSc', 'BCom', 'Pre-University', 'Certificate Courses'],
      specialFeatures: ['Heritage Building', 'Science Centre', 'Arts Forum', 'Central Library', 'Research Facilities'],
      studentStrength: '2000+',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'National College Basavanagudi',
      location: 'Basavanagudi, Bengaluru',
      established: '1965',
      type: 'Main Campus',
      description: 'Modern campus with strong degree offerings across arts, science, and commerce, known for innovation and student development.',
      programs: ['BBA', 'BCA', 'BCom', 'BA', 'MA', 'MSc', 'Professional Courses'],
      specialFeatures: ['Digital Labs', 'Professional Studio', 'Sports Complex', 'Modern Auditorium', 'Industry Partnerships'],
      studentStrength: '2500+',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'National College Bagepalli',
      location: 'Bagepalli, Chikkaballapur',
      established: '1985',
      type: 'Rural Campus',
      description: 'Serving the educational needs of rural Karnataka, focusing on accessible quality education and community development.',
      programs: ['BA', 'BCom', 'BSc', 'Pre-University', 'Skill Development'],
      specialFeatures: ['Community Outreach', 'Rural Development Programs', 'Agricultural Studies', 'Local Language Support'],
      studentStrength: '1200+',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'National College Gowribidanur',
      location: 'Gowribidanur, Chikkaballapur',
      established: '1992',
      type: 'Community Campus',
      description: 'Community-focused institution promoting local educational development and vocational training for regional growth.',
      programs: ['BA', 'BCom', 'Diploma Courses', 'Vocational Training', 'Adult Education'],
      specialFeatures: ['Vocational Training Center', 'Community Programs', 'Local Industry Ties', 'Adult Education Center'],
      studentStrength: '800+',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const expansionPlans = [
    {
      icon: Target,
      title: 'New Geo-Regional Branches',
      description: 'Planned expansion to underserved regions of Karnataka to increase educational accessibility.',
      timeline: '2025-2027'
    },
    {
      icon: Building,
      title: 'Infrastructure Modernization',
      description: 'Upgrading existing campuses with modern facilities and technology integration.',
      timeline: '2024-2026'
    },
    {
      icon: Globe,
      title: 'Digital Campus Initiative',
      description: 'Implementing digital learning platforms across all campuses for enhanced education delivery.',
      timeline: '2024-2025'
    }
  ];

  return (
    <AboutLayout pageTitle="National College Campuses in India" breadcrumbPath="Campuses in India">
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-logo-navy/10 to-logo-blue/10 px-6 py-2 rounded-full mb-6 border border-logo-navy/20">
              <MapPin className="text-logo-navy" size={20} />
              <span className="text-logo-navy font-semibold">Pan-India Presence</span>
            </div>
            <h2 className="text-4xl font-bold text-logo-navy mb-6 animate-fade-in-up">
              Our Network Across Karnataka
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-up animate-delay-200">
              From our flagship campus in Basavanagudi to our community-focused institutions in rural Karnataka, 
              the National Education Society operates a network of colleges that serve diverse educational needs 
              across the state, maintaining our commitment to accessible, quality education for over a century.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { number: '4', label: 'Active Campuses', icon: Building },
              { number: '6500+', label: 'Total Students', icon: Users },
              { number: '25+', label: 'Academic Programs', icon: BookOpen },
              { number: '100+', label: 'Years of Service', icon: Award }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-logo-navy mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Details */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Our Campuses
          </h2>
          
          <div className="max-w-7xl mx-auto space-y-12">
            {campuses.map((campus, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={campus.image}
                        alt={campus.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-logo-navy rounded-full flex items-center justify-center mr-4">
                          <Building size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-logo-navy">{campus.name}</h3>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin size={16} className="mr-1" />
                            <span className="mr-4">{campus.location}</span>
                            <Calendar size={16} className="mr-1" />
                            <span>Est. {campus.established}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Badge className="w-fit mb-4 bg-logo-blue text-white">
                        {campus.type}
                      </Badge>
                      
                      <p className="text-gray-700 mb-4">{campus.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-logo-navy mb-2">Academic Programs:</h4>
                        <div className="flex flex-wrap gap-2">
                          {campus.programs.map((program, programIndex) => (
                            <Badge key={programIndex} variant="outline" className="text-xs">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-logo-navy mb-2">Special Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {campus.specialFeatures.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-logo-blue rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-logo-blue font-semibold">
                        <Users size={16} className="mr-2" />
                        <span>{campus.studentStrength} Students</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-4 animate-fade-in-up">
            Future Expansion Plans
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            As we continue our journey of educational excellence, we are committed to expanding our reach 
            and modernizing our facilities to serve more communities across Karnataka.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {expansionPlans.map((plan, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-logo-navy to-logo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <plan.icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-logo-navy mb-3">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <Badge className="bg-logo-blue text-white">
                  {plan.timeline}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in-up">
            Transforming Education Across Karnataka
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 opacity-90 animate-fade-in-up animate-delay-200">
            For over a century, our network of campuses has been instrumental in democratizing education 
            across Karnataka, from urban centers to rural communities, ensuring that quality education 
            reaches every corner of our state.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <button className="bg-white text-logo-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Our Campuses
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-logo-navy transition-colors">
              Join Our Network
            </button>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default NationalCollegeCampusesIndia;
