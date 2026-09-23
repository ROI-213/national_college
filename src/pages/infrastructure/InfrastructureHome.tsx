
import React from 'react';
import { InfrastructureLayout } from '../../components/layout/InfrastructureLayout';
import { Card } from '../../components/ui/card';
import { Building, Wifi, Users, BookOpen, Dumbbell, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfrastructureHome = () => {
  const facilities = [
    {
      icon: Building,
      title: 'Campus Overview',
      description: 'Our sprawling 15-acre campus in the heart of Basavanagudi, featuring modern architecture and green spaces.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/infrastructure/campus-overview',
      stats: '15 Acres'
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Comprehensive library with over 50,000 books, digital resources, and quiet study spaces.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/infrastructure/library',
      stats: '50,000+ Books'
    },
    {
      icon: Dumbbell,
      title: 'Sports Facilities',
      description: 'Modern sports complex with indoor and outdoor facilities for cricket, basketball, volleyball, and more.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/infrastructure/sports-facilities',
      stats: '10+ Sports'
    },
    {
      icon: Wifi,
      title: 'Smart Classrooms',
      description: 'Technology-enabled classrooms with projectors, smart boards, and high-speed internet connectivity.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/infrastructure/classrooms',
      stats: '50+ Classrooms'
    },
    {
      icon: Volume2,
      title: 'Auditorium',
      description: 'Main auditorium with seating for 500+ people, equipped with modern sound and lighting systems.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/infrastructure/auditorium',
      stats: '500+ Seats'
    }
  ];

  return (
    <InfrastructureLayout pageTitle="Infrastructure" breadcrumbPath="Home" category="Infrastructure">
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-logo-navy mb-6">World-Class Infrastructure</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our campus is designed to provide students with the best possible learning environment. 
              From modern classrooms to state-of-the-art laboratories, every facility is crafted to 
              enhance your educational experience and prepare you for future challenges.
            </p>
          </div>

          {/* Infrastructure Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <Link to={facility.href}>
                  <div className="relative">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-logo-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {facility.stats}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-logo-blue rounded-lg flex items-center justify-center mr-4">
                        <facility.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-logo-navy group-hover:text-logo-blue transition-colors">
                        {facility.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-200">Acres Campus</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Smart Classrooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-200">Laboratories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Auditorium Capacity</div>
            </div>
          </div>
        </div>
      </section>
    </InfrastructureLayout>
  );
};

export default InfrastructureHome;
