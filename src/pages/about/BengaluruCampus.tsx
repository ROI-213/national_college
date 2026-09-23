
import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { MapPin, Clock, Bus, Wifi, Car, Coffee, Shield, Heart } from 'lucide-react';
import campusImage from '@/assets/campus-building.jpg';
import facilityLibrary from '@/assets/facility-library.jpg';
import facilityScienceLab from '@/assets/facility-science-lab.jpg';
import facilitySports from '@/assets/facility-sports.jpg';
import facilityAuditorium from '@/assets/facility-auditorium.jpg';
import facilityComputerLab from '@/assets/facility-computer-lab.jpg';
import facilityCanteen from '@/assets/facility-canteen.jpg';

const BengaluruCampus = () => {
  const campusFeatures = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Located in the heart of Basavanagudi, easily accessible from all parts of Bengaluru',
      color: 'bg-red-500'
    },
    {
      icon: Bus,
      title: 'Transport Connectivity',
      description: 'Excellent public transport connectivity with metro and bus services nearby',
      color: 'bg-blue-500'
    },
    {
      icon: Wifi,
      title: 'Digital Infrastructure',
      description: 'Campus-wide WiFi, smart classrooms, and digital learning resources',
      color: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: '24/7 security, CCTV surveillance, and dedicated safety protocols',
      color: 'bg-green-500'
    }
  ];

  const facilities = [
    {
      name: 'Library & Information Center',
      description: 'Modern library with over 50,000 books and digital resources',
      image: facilityLibrary,
      features: ['Digital Catalog', 'Research Journals', 'Reading Rooms', 'Online Resources']
    },
    {
      name: 'Science Laboratories',
      description: 'Well-equipped labs for Physics, Chemistry, Biology, and Computer Science',
      image: facilityScienceLab,
      features: ['Modern Equipment', 'Safety Standards', 'Research Facilities', 'Expert Supervision']
    },
    {
      name: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities for various games and activities',
      image: facilitySports,
      features: ['Basketball Court', 'Volleyball Court', 'Indoor Games', 'Fitness Center']
    },
    {
      name: 'Auditorium',
      description: 'State-of-the-art auditorium for events, seminars, and cultural programs',
      image: facilityAuditorium,
      features: ['500 Seating', 'Audio-Visual', 'Air Conditioned', 'Stage Facilities']
    },
    {
      name: 'Computer Centers',
      description: 'Advanced computer labs with latest software and high-speed internet',
      image: facilityComputerLab,
      features: ['Latest Hardware', 'Software Licenses', 'Internet Access', 'Technical Support']
    },
    {
      name: 'Cafeteria',
      description: 'Hygienic cafeteria serving nutritious and affordable meals',
      image: facilityCanteen,
      features: ['Nutritious Food', 'Affordable Prices', 'Hygienic Environment', 'Variety Menu']
    }
  ];

  return (
    <AboutLayout pageTitle="Campus" breadcrumbPath="Campus">
      {/* Campus Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-4xl font-bold text-logo-navy mb-6">
                  Welcome to Our Campus
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our Basavanagudi Campus, nestled in the vibrant neighborhood of Basavanagudi, offers 
                  an ideal environment for learning and personal growth. Spread across 10 acres of 
                  green landscape, our campus combines modern infrastructure with a serene atmosphere.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Since 1964, this campus has been home to thousands of students who have gone on 
                  to achieve remarkable success in their chosen fields. The strategic location in 
                  South Bengaluru provides easy accessibility while maintaining a peaceful academic environment.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-logo-blue text-white">10 Acres Campus</Badge>
                  <Badge className="bg-logo-navy text-white">Well-equipped Labs</Badge>
                  <Badge className="bg-green-600 text-white">Green Environment</Badge>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <img
                  src={campusImage}
                  alt="The National College Campus"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Why Choose Our Campus?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {campusFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-logo-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Campus Facilities
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-logo-navy mb-3">{facility.name}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
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

      {/* Location & Accessibility */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Location & Accessibility
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 animate-scale-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-logo-navy mb-4 flex items-center">
                    <MapPin className="mr-3 text-logo-blue" size={28} />
                    Address
                  </h3>
                  <p className="text-gray-700 mb-6">
                    The National College<br />
                    Pampa Mahakavi Rd, Basavanagudi<br />
                    Bengaluru, Karnataka 560004<br />
                    India
                  </p>
                  
                  <h4 className="text-xl font-semibold text-logo-navy mb-3">Nearby Landmarks</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• National College Metro Station – 200 m</li>
                    <li>• Lalbagh Botanical Garden – 900 m</li>
                    <li>• Bull Temple – 1.5 km</li>
                    <li>• Banashankari Temple – 4 km</li>
                    <li>• Ramakrishna Ashram – 1 KM</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-logo-navy mb-4 flex items-center">
                    <Bus className="mr-3 text-logo-blue" size={28} />
                    Transportation
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="mr-3 mt-1 text-logo-blue" size={20} />
                      <div>
                        <h4 className="font-semibold text-logo-navy">Metro Connectivity</h4>
                        <p className="text-gray-600 text-sm">Green Line – National College</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Bus className="mr-3 mt-1 text-logo-blue" size={20} />
                      <div>
                        <h4 className="font-semibold text-logo-navy">Bus Services</h4>
                        <p className="text-gray-600 text-sm">Multiple BMTC & KSRTC bus routes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Car className="mr-3 mt-1 text-logo-blue" size={20} />
                      <div>
                        <h4 className="font-semibold text-logo-navy">Parking</h4>
                        <p className="text-gray-600 text-sm">On-campus parking available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12 animate-fade-in-up">
            Campus Life
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Student Community',
                description: 'Vibrant student community with diverse cultural backgrounds and shared academic goals.'
              },
              {
                icon: Coffee,
                title: 'Social Spaces',
                description: 'Common areas, student lounges, and recreational spaces for interaction and relaxation.'
              },
              {
                icon: Shield,
                title: 'Safe Environment',
                description: 'Secure campus with 24/7 security, ensuring a safe learning environment for all.'
              }
            ].map((aspect, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <aspect.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-logo-navy mb-4">{aspect.title}</h3>
                <p className="text-gray-600">{aspect.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default BengaluruCampus;
