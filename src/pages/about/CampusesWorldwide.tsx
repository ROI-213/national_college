
import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Globe, MapPin, Users, Calendar } from 'lucide-react';

const CampusesWorldwide = () => {
  const internationalCampuses = [
    {
      name: 'National College International',
      location: 'Singapore',
      established: '2010',
      students: '800+',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      programs: 'Business & Technology'
    },
    {
      name: 'National College Dubai',
      location: 'Dubai, UAE',
      established: '2015',
      students: '600+',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      programs: 'Management & Commerce'
    }
  ];

  return (
    <AboutLayout pageTitle="National College Campuses Worldwide" breadcrumbPath="Campuses Worldwide">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Globe size={48} className="text-logo-blue mr-4" />
              <h2 className="text-4xl font-bold text-logo-navy animate-fade-in-up">
                Global Reach
              </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-up animate-delay-200">
              National College has extended its educational excellence internationally, 
              offering world-class education to students across different continents.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {internationalCampuses.map((campus, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={campus.image}
                    alt={campus.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-logo-navy mb-4">{campus.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2 text-logo-blue" />
                      <span>{campus.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2 text-logo-blue" />
                      <span>Established {campus.established}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users size={16} className="mr-2 text-logo-blue" />
                      <span>{campus.students} International Students</span>
                    </div>
                    <p className="text-logo-blue font-semibold">{campus.programs}</p>
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

export default CampusesWorldwide;
