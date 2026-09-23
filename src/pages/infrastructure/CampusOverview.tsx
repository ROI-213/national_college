
import React from 'react';
import { InfrastructureLayout } from '../../components/layout/InfrastructureLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { MapPin, Trees, Wifi, Car, Coffee, Shield, Eye, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CampusTourModal } from '../../components/CampusTourModal';
import campo1 from '@/assets/campo1.jpg';
import campo2 from '@/assets/campo2.jpg';
import campo3 from '@/assets/campo3.jpg';
import campo4 from '@/assets/campo4.jpg';

const CampusOverview = () => {
  const campusFeatures = [
    {
      icon: Trees,
      title: 'Green Campus',
      description: 'Over 40% green cover with beautiful gardens and landscaped areas'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Enabled',
      description: 'High-speed internet connectivity across the entire campus'
    },
    {
      icon: Car,
      title: 'Parking Facilities',
      description: 'Ample parking space for students, faculty, and visitors'
    },
    {
      icon: Coffee,
      title: 'Cafeteria',
      description: 'Multiple dining options with healthy and affordable meals'
    },
    {
      icon: Shield,
      title: 'Security',
      description: '24/7 security with CCTV surveillance and trained personnel'
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Located in the heart of Basavanagudi with excellent connectivity'
    }
  ];

  return (
    <InfrastructureLayout pageTitle="Campus Overview" breadcrumbPath="Campus Overview" subtitle="A Vibrant Learning Environment">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Campus Image */}
            <div className="mb-12">
              <img 
                src={campo1}
                alt="The National College Campus"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Campus Walk-through */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-logo-navy mb-6">A Campus That Inspires</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Step into our thoughtfully designed 15-acre campus in Basavanagudi, where modern architecture 
                  meets nature's tranquility. Our campus layout reflects our core values of innovation, 
                  sustainability, and community. From the moment you enter through our main gates, you'll 
                  experience an environment crafted to inspire learning, creativity, and personal growth.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The campus seamlessly integrates academic excellence with student life, featuring 
                  state-of-the-art facilities, green spaces for reflection, and vibrant areas for 
                  collaboration. Every corner tells a story of our commitment to holistic education 
                  and sustainable development.
                </p>
                
                {/* Testimonial */}
                <div className="bg-gradient-to-r from-logo-blue/10 to-logo-navy/10 p-6 rounded-lg border-l-4 border-logo-blue">
                  <blockquote className="text-logo-navy italic mb-3">
                    "The campus environment here is truly exceptional. The blend of modern facilities 
                    with green spaces creates the perfect atmosphere for both academic pursuit and 
                    personal development. It's a place where ideas flourish."
                  </blockquote>
                  <cite className="text-sm font-semibold text-logo-navy">
                    — Dr. Rajesh Kumar, Dean of Student Affairs
                  </cite>
                </div>
              </div>
              <div>
                <img 
                  src={campo2}
                  alt="Campus Gardens"
                  className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
                />
                <img 
                  src={campo3}
                  alt="Campus Walkway"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Key Facilities Highlight */}
            <div className="mb-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Campus Facilities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">50K+</div>
                  <div className="text-sm">Books in Library</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">2</div>
                  <div className="text-sm">Auditoriums</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">5</div>
                  <div className="text-sm">Sports Facilities</div>
                </div>
              </div>
            </div>

            {/* Campus Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Campus Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {campusFeatures.map((feature, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-logo-navy mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Architecture & Accessibility */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-logo-navy mb-4">Modern Architecture</h3>
                <p className="text-gray-700 mb-4">
                  Our campus architecture reflects contemporary design principles while honoring 
                  traditional educational values. The buildings feature:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sustainable construction materials</li>
                  <li>• Energy-efficient lighting and HVAC systems</li>
                  <li>• Barrier-free accessibility compliance</li>
                  <li>• Natural lighting in all academic spaces</li>
                  <li>• Eco-friendly waste management systems</li>
                </ul>
              </Card>
              
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-logo-navy mb-4">Campus Map & Navigation</h3>
                <p className="text-gray-700 mb-4">
                  Easy navigation with clearly marked zones and digital wayfinding:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Academic blocks with department signage</li>
                  <li>• Recreational areas and sports facilities</li>
                  <li>• Administrative and support services</li>
                  <li>• Emergency assembly points</li>
                  <li>• Visitor information centers</li>
                </ul>
              </Card>
            </div>

            {/* Location & Accessibility */}
            <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Prime Location in Basavanagudi</h2>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Our campus is situated in one of Bengaluru's most sought-after residential 
                    areas, providing students with easy access to the city's cultural, commercial, 
                    and technological hubs.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin size={20} className="mr-3 text-blue-300" />
                      <span>5 minutes from National College Metro Station</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={20} className="mr-3 text-blue-300" />
                      <span>Well-connected by BMTC bus routes</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={20} className="mr-3 text-blue-300" />
                      <span>Close to shopping centers and hospitals</span>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src={campo4}
                    alt="Basavanagudi Location"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Experience Our Campus</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover what makes our campus special. Schedule a visit or take our virtual tour 
                to see our facilities and experience the vibrant campus life firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CampusTourModal>
                  {(openModal) => (
                    <Button onClick={openModal} className="bg-logo-blue hover:bg-logo-navy text-white px-8 py-3">
                      <Eye className="mr-2" size={20} />
                      Take Virtual Tour
                    </Button>
                  )}
                </CampusTourModal>
                <Link to="/contact">
                  <Button variant="outline" className="border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white px-8 py-3">
                    <Users className="mr-2" size={20} />
                    Schedule a Visit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InfrastructureLayout>
  );
};

export default CampusOverview;
