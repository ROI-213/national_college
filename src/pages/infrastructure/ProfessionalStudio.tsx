
import React from 'react';
import { InfrastructureLayout } from '../../components/layout/InfrastructureLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Camera, Mic, Monitor, Edit, Film, Radio, Calendar, Phone } from 'lucide-react';

const ProfessionalStudio = () => {
  const studioFeatures = [
    {
      icon: Camera,
      title: 'HD Video Production',
      description: 'Professional-grade cameras and lighting setup for high-quality video production'
    },
    {
      icon: Mic,
      title: 'Sound Recording',
      description: 'Acoustically treated recording booth with professional microphones and mixing console'
    },
    {
      icon: Monitor,
      title: 'Multi-Camera Setup',
      description: 'Multiple camera angles with live switching capabilities for professional broadcasts'
    },
    {
      icon: Edit,
      title: 'Post-Production Suite',
      description: 'Advanced editing workstations with industry-standard software for video and audio editing'
    },
    {
      icon: Film,
      title: 'Green Screen Technology',
      description: 'Chroma key setup for virtual backgrounds and special effects production'
    },
    {
      icon: Radio,
      title: 'Radio Station',
      description: 'Fully equipped radio station for live broadcasting and audio program production'
    }
  ];

  const equipment = [
    'Professional 4K Cameras',
    'Wireless Microphone Systems',
    'Professional Lighting Rigs',
    'Teleprompter Systems',
    'Audio Mixing Console',
    'Video Switcher',
    'Green Screen Setup',
    'Editing Workstations'
  ];

  const useCases = [
    {
      title: 'Student Film Projects',
      description: 'Final year students produce short films and documentaries for their portfolios'
    },
    {
      title: 'News Production',
      description: 'Journalism students create and broadcast campus news programs'
    },
    {
      title: 'Podcast Creation',
      description: 'Audio content creation for educational and entertainment purposes'
    },
    {
      title: 'Live Event Coverage',
      description: 'Professional coverage of campus events and guest lectures'
    }
  ];

  return (
    <InfrastructureLayout pageTitle="Professional Studio" breadcrumbPath="Professional Studio" subtitle="Creativity Meets Technology">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Professional Studio"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Studio Description */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-logo-navy mb-6">High-End Media Production Hub</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our state-of-the-art professional studio rivals industry standards, providing students 
                  with hands-on experience in television, film, audio, and photography production. 
                  Designed with input from media professionals, the facility bridges the gap between 
                  academic learning and real-world application.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The studio complex includes soundproof recording rooms, a professional control room, 
                  multiple editing suites, advanced lighting systems, and green screen technology. 
                  Students gain experience with the same equipment used in professional broadcast 
                  and production environments.
                </p>
                
                {/* Student Testimonial */}
                <div className="bg-gradient-to-r from-logo-blue/10 to-logo-navy/10 p-6 rounded-lg border-l-4 border-logo-blue">
                  <blockquote className="text-logo-navy italic mb-3">
                    "Working in the professional studio has been transformative. The quality of equipment 
                    and technical support has allowed me to create content that I'm genuinely proud of. 
                    It's like having access to a commercial production house right on campus."
                  </blockquote>
                  <cite className="text-sm font-semibold text-logo-navy">
                    — Priya Sharma, Final Year Journalism Student
                  </cite>
                </div>
              </div>
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Studio Equipment"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="bg-logo-navy text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Studio Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-300">1200</div>
                      <div className="text-sm">Sq Ft Area</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-300">4K</div>
                      <div className="text-sm">Video Quality</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-300">8</div>
                      <div className="text-sm">Camera Setup</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-300">24/7</div>
                      <div className="text-sm">Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Professional Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studioFeatures.map((feature, index) => (
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

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Real-World Applications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="p-6 border-l-4 border-logo-blue">
                    <h3 className="text-xl font-semibold text-logo-navy mb-3">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Equipment and Support */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-logo-navy mb-6">Professional Equipment</h3>
                <div className="grid grid-cols-2 gap-4">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-logo-navy mb-6">Technical Support</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Dedicated technical staff available during studio hours</li>
                  <li>• Equipment training sessions for new users</li>
                  <li>• Project consultation and guidance</li>
                  <li>• Regular equipment maintenance and updates</li>
                  <li>• Emergency technical support for live productions</li>
                </ul>
              </Card>
            </div>

            {/* Booking Information */}
            <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Studio Access & Booking</h3>
                <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                  The professional studio is available to all enrolled students for academic projects. 
                  Advance booking is required, and technical orientation is mandatory for first-time users.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-xl font-semibold mb-2">Booking Hours</div>
                    <div className="text-blue-200">Mon-Fri: 9 AM - 8 PM<br />Sat: 9 AM - 5 PM</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">Advanced Booking</div>
                    <div className="text-blue-200">2-7 days in advance<br />via online portal</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">Session Duration</div>
                    <div className="text-blue-200">2-8 hours<br />based on project needs</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Ready to Create?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience professional-grade media production. Book a studio session or schedule 
                a tour to see our facilities and learn about our equipment training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-logo-blue hover:bg-logo-navy text-white px-8 py-3">
                  <Calendar className="mr-2" size={20} />
                  Book Studio Time
                </Button>
                <Button variant="outline" className="border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white px-8 py-3">
                  <Phone className="mr-2" size={20} />
                  Request Studio Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InfrastructureLayout>
  );
};

export default ProfessionalStudio;
