
import React from 'react';
import { InfrastructureLayout } from '../../components/layout/InfrastructureLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { BookOpen, Database, Wifi, Users, Clock, Search, Calendar, HelpCircle } from 'lucide-react';
import libraryPage1 from '@/assets/lib1.jpg';
import libraryPage2 from '@/assets/lib2.jpg';

const Library = () => {
  const libraryFeatures = [
    {
      icon: BookOpen,
      title: 'Extensive Collection',
      description: 'Over 50,000 books covering all academic disciplines and reference materials'
    },
    {
      icon: Database,
      title: 'Digital Resources',
      description: 'Access to online databases, e-journals, and digital libraries'
    },
    {
      icon: Wifi,
      title: 'Free Wi-Fi',
      description: 'High-speed internet access throughout the library premises'
    },
    {
      icon: Users,
      title: 'Study Spaces',
      description: 'Quiet study areas, group discussion rooms, and collaborative spaces'
    },
    {
      icon: Clock,
      title: 'Extended Hours',
      description: 'Open from 8 AM to 10 PM on weekdays and 9 AM to 6 PM on weekends'
    },
    {
      icon: Search,
      title: 'OPAC System',
      description: 'Online catalog system for easy search and reservation of books'
    }
  ];

  const services = [
    {
      title: 'Reference Assistance',
      description: 'Professional librarians available to help with research and reference queries'
    },
    {
      title: 'Inter-Library Loan',
      description: 'Access to books and resources from other libraries through our network'
    },
    {
      title: 'Digital Archive',
      description: 'Access to historical documents, theses, and institutional publications'
    },
    {
      title: 'Research Support',
      description: 'Guidance on citation styles, research methodology, and academic writing'
    }
  ];

  return (
    <InfrastructureLayout pageTitle="Library" breadcrumbPath="Library">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src={libraryPage1}
                alt="Library"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Library Overview */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-logo-navy mb-6">The Heart of Academic Excellence</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our library serves as the intellectual nucleus of the campus, providing students 
                  and faculty with comprehensive access to knowledge resources. More than just a 
                  repository of books, it's a dynamic learning environment that supports research, 
                  collaboration, and academic growth through both traditional and digital means.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Designed with modern learning needs in mind, the library features distinct zones 
                  for quiet study, group collaboration, multimedia learning, and digital research. 
                  Our professional staff provides expert assistance, ensuring that every user can 
                  effectively access and utilize our extensive resources.
                </p>
                
                {/* Student Testimonial */}
                <div className="bg-gradient-to-r from-logo-blue/10 to-logo-navy/10 p-6 rounded-lg border-l-4 border-logo-blue">
                  <blockquote className="text-logo-navy italic mb-3">
                    "The library has been my second home throughout my studies. The peaceful environment, 
                    extensive collection, and helpful staff have made my research projects so much easier. 
                    The 24/7 access during exam periods is a real lifesaver!"
                  </blockquote>
                  <cite className="text-sm font-semibold text-logo-navy">
                    — Ananya Patel, Master's in Psychology Student
                  </cite>
                </div>
              </div>
              <div>
                <img 
                  src={libraryPage2}
                  alt="Reading Area"
                  className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
                />
                <div className="bg-logo-blue text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Library Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold">50,000+</div>
                      <div className="text-sm text-blue-200">Books & Volumes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm text-blue-200">Journals & Periodicals</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">200</div>
                      <div className="text-sm text-blue-200">Seating Capacity</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">14</div>
                      <div className="text-sm text-blue-200">Hours Daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Library Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Library Features & Facilities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {libraryFeatures.map((feature, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mb-4">
                      <feature.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-logo-navy mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Specialized Spaces */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Specialized Learning Spaces</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                  <div className="w-20 h-20 bg-logo-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">Q</span>
                  </div>
                  <h3 className="text-xl font-semibold text-logo-navy mb-3">Quiet Study Zone</h3>
                  <p className="text-gray-600">Silent area with individual study carrels for focused research and reading</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="w-20 h-20 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-logo-navy mb-3">Group Study Rooms</h3>
                  <p className="text-gray-600">Bookable discussion rooms equipped with whiteboards and presentation tools</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="w-20 h-20 bg-logo-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">M</span>
                  </div>
                  <h3 className="text-xl font-semibold text-logo-navy mb-3">Multimedia Lab</h3>
                  <p className="text-gray-600">Computer workstations with access to digital resources and AV materials</p>
                </Card>
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Library Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 border-l-4 border-logo-blue">
                    <h3 className="text-xl font-semibold text-logo-navy mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Access Information */}
            <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Access & Booking Information</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <Clock size={48} className="mx-auto mb-4 text-blue-200" />
                    <h4 className="text-xl font-semibold mb-2">Library Hours</h4>
                    <p className="text-blue-100">
                      Mon-Fri: 8 AM - 10 PM<br />
                      Sat-Sun: 9 AM - 6 PM<br />
                      <span className="text-sm">Extended hours during exams</span>
                    </p>
                  </div>
                  <div>
                    <Calendar size={48} className="mx-auto mb-4 text-blue-200" />
                    <h4 className="text-xl font-semibold mb-2">Reservation System</h4>
                    <p className="text-blue-100">
                      Book group study rooms<br />
                      Reserve rare books<br />
                      <span className="text-sm">Online booking available</span>
                    </p>
                  </div>
                  <div>
                    <HelpCircle size={48} className="mx-auto mb-4 text-blue-200" />
                    <h4 className="text-xl font-semibold mb-2">Research Support</h4>
                    <p className="text-blue-100">
                      Librarian assistance<br />
                      Research consultations<br />
                      <span className="text-sm">By appointment</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Discover Our Resources</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore our extensive collection and services. Schedule a library orientation 
                or book a study space to make the most of your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-logo-blue hover:bg-logo-navy text-white px-8 py-3">
                  <Search className="mr-2" size={20} />
                  Search Catalog
                </Button>
                <Button variant="outline" className="border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white px-8 py-3">
                  <Calendar className="mr-2" size={20} />
                  Book Study Room
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InfrastructureLayout>
  );
};

export default Library;
