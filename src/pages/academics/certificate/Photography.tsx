
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Camera, Image, Sun, Monitor, Award, Users, Clock, Target } from 'lucide-react';

const Photography = () => {
  const courseModules = [
    { module: 'Module 1', title: 'Camera Fundamentals', duration: '3 Weeks', topics: ['Camera Controls & Settings', 'Exposure Triangle', 'Focus & Depth of Field', 'Camera Types & Lenses'] },
    { module: 'Module 2', title: 'Composition & Lighting', duration: '4 Weeks', topics: ['Rule of Thirds', 'Leading Lines', 'Natural Light Photography', 'Studio Lighting Setup'] },
    { module: 'Module 3', title: 'Photography Genres', duration: '5 Weeks', topics: ['Portrait Photography', 'Landscape Photography', 'Street Photography', 'Product Photography'] },
    { module: 'Module 4', title: 'Digital Processing', duration: '4 Weeks', topics: ['Adobe Lightroom', 'Adobe Photoshop', 'Color Correction', 'Photo Retouching'] },
    { module: 'Module 5', title: 'Professional Practice', duration: '2 Weeks', topics: ['Portfolio Development', 'Client Management', 'Pricing & Business', 'Exhibition Preparation'] }
  ];

  const equipment = [
    'DSLR & Mirrorless Cameras',
    'Prime & Zoom Lenses',
    'Professional Lighting Kits',
    'Tripods & Stabilizers',
    'Light Meters & Reflectors',
    'Editing Workstations'
  ];

  const specializations = [
    'Portrait Photography',
    'Wedding Photography',
    'Commercial Photography',
    'Fashion Photography',
    'Nature & Wildlife',
    'Architectural Photography',
    'Photojournalism',
    'Fine Art Photography'
  ];

  return (
    <AcademicsLayout pageTitle="Photography" breadcrumbPath="Photography" category="Certificate Courses">
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-logo-blue text-white">Professional Course</Badge>
                <Badge variant="outline" className="border-logo-navy text-logo-navy">18 Weeks</Badge>
              </div>
              <h2 className="text-4xl font-bold text-logo-navy mb-6">Visual Storytelling</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Professional photography course covering technical skills, composition, lighting, 
                and digital processing for commercial and artistic photography careers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">1000+</div>
                  <div className="text-sm text-gray-600">Photos in Portfolio</div>
                </div>
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">95%</div>
                  <div className="text-sm text-gray-600">Student Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <img 
                src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Photography Course"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-logo-navy text-center mb-12">Course Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Camera, title: 'Hands-on Practice', description: 'Extensive shooting experience with professional gear' },
              { icon: Sun, title: 'Lighting Mastery', description: 'Natural and studio lighting techniques' },
              { icon: Image, title: 'Portfolio Building', description: 'Create professional photography portfolio' },
              { icon: Monitor, title: 'Digital Processing', description: 'Advanced editing with industry software' }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-logo-navy text-center mb-12">Course Curriculum</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-logo-navy">{module.module}</h3>
                    <Badge variant="outline">{module.duration}</Badge>
                  </div>
                  <h4 className="font-semibold text-logo-blue mb-3">{module.title}</h4>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-logo-blue rounded-full"></div>
                        <span className="text-sm text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Specializations */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold text-logo-navy mb-6">Professional Equipment</h3>
              <p className="text-lg text-gray-700 mb-6">
                Learn with industry-standard photography equipment and software used by professionals worldwide.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded border">
                    <Camera size={16} className="text-logo-blue" />
                    <span className="font-medium text-logo-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <h3 className="text-3xl font-bold text-logo-navy mb-6">Photography Specializations</h3>
              <p className="text-lg text-gray-700 mb-6">
                Explore various photography genres and find your artistic specialization.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {specializations.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded border">
                    <Image size={16} className="text-logo-blue" />
                    <span className="font-medium text-logo-navy">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <Target className="mr-3" size={28} />
                Learning Outcomes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Master camera controls and technical settings
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Develop strong composition skills
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Professional lighting techniques
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Advanced photo editing skills
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <Clock className="mr-3" size={28} />
                Course Schedule
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Weekend workshops: Saturday 9 AM - 4 PM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Evening classes: 6 PM - 8 PM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Outdoor shoots: Weekends
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Studio sessions: Flexible timing
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Capture Your Creative Vision</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your passion for photography into professional skills with expert guidance and hands-on practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-logo-navy rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Enroll Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-logo-navy transition-colors font-semibold">
              View Gallery
            </button>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default Photography;
