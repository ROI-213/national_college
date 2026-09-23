
import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import { MapPin, Users, Calendar, Award } from 'lucide-react';

const CampusesIndia = () => {
  const campuses = [
    {
      name: 'National College, Basavanagudi',
      location: 'Bengaluru, Karnataka',
      established: '1964',
      students: '2500+',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      speciality: 'Main Campus - NAAC A Accredited'
    },
    {
      name: 'National College, Basavanagudi',
      location: 'Bengaluru, Karnataka',
      established: '1982',
      students: '1800+',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      speciality: 'Commerce & Management Focus'
    },
    {
      name: 'National College, Shimoga',
      location: 'Shimoga, Karnataka',
      established: '1995',
      students: '1200+',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      speciality: 'Regional Excellence Center'
    }
  ];

  return (
    <AboutLayout pageTitle="National College Campuses in India" breadcrumbPath="Campuses in India">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6 animate-fade-in-up">
              Our Network Across India
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-up animate-delay-200">
              National College has expanded its educational excellence across multiple locations in India, 
              bringing quality education closer to students in different regions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={campus.image}
                    alt={campus.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-logo-navy mb-2">{campus.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2 text-logo-blue" />
                      <span>{campus.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2 text-logo-blue" />
                      <span>Est. {campus.established}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users size={16} className="mr-2 text-logo-blue" />
                      <span>{campus.students} Students</span>
                    </div>
                    <div className="flex items-center text-logo-blue">
                      <Award size={16} className="mr-2" />
                      <span className="font-semibold">{campus.speciality}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default CampusesIndia;
