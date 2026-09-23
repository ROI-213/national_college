
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Camera, Video, Edit, Play, Award, Users, Clock, Target } from 'lucide-react';

const FilmMaking = () => {
  const courseModules = [
    { module: 'Module 1', title: 'Pre-Production', duration: '4 Weeks', topics: ['Scriptwriting Fundamentals', 'Storyboarding', 'Production Planning', 'Casting & Location Scouting'] },
    { module: 'Module 2', title: 'Production Techniques', duration: '6 Weeks', topics: ['Camera Operation', 'Lighting Techniques', 'Sound Recording', 'Directing Actors'] },
    { module: 'Module 3', title: 'Post-Production', duration: '6 Weeks', topics: ['Video Editing (Premiere Pro)', 'Color Grading (DaVinci Resolve)', 'Sound Design', 'Visual Effects Basics'] },
    { module: 'Module 4', title: 'Distribution & Marketing', duration: '2 Weeks', topics: ['Film Festival Submissions', 'Digital Distribution', 'Marketing Strategies', 'Portfolio Development'] }
  ];

  const equipment = [
    'Professional DSLR Cameras',
    'Professional Lighting Kits',
    'Audio Recording Equipment',
    'Tripods & Stabilizers',
    'Editing Workstations',
    'Color Grading Monitors'
  ];

  const careerPaths = [
    'Film Director',
    'Cinematographer',
    'Video Editor',
    'Screenwriter',
    'Producer',
    'Content Creator',
    'Documentary Filmmaker',
    'Commercial Video Producer'
  ];

  return (
    <AcademicsLayout pageTitle="Film Making" breadcrumbPath="Film Making" category="Certificate Courses">
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-logo-blue text-white">Diploma Course</Badge>
                <Badge variant="outline" className="border-logo-navy text-logo-navy">18 Weeks</Badge>
              </div>
              <h2 className="text-4xl font-bold text-logo-navy mb-6">Cinematic Arts & Production</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Comprehensive filmmaking course covering direction, cinematography, editing, and production 
                with hands-on experience using industry-standard equipment and software.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">15+</div>
                  <div className="text-sm text-gray-600">Short Films Produced</div>
                </div>
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">90%</div>
                  <div className="text-sm text-gray-600">Industry Placement</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <img 
                src="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Film Production"
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
              { icon: Camera, title: 'Professional Equipment', description: 'Industry-standard cameras and gear' },
              { icon: Video, title: 'Hands-on Production', description: 'Create multiple short films and projects' },
              { icon: Edit, title: 'Post-Production Mastery', description: 'Professional editing and color grading' },
              { icon: Play, title: 'Portfolio Development', description: 'Build impressive showreel and portfolio' }
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
          <div className="grid md:grid-cols-2 gap-8">
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

      {/* Equipment & Facilities */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Film Equipment"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <h3 className="text-3xl font-bold text-logo-navy mb-6">Professional Equipment</h3>
              <p className="text-lg text-gray-700 mb-6">
                Access to industry-standard equipment and facilities for hands-on learning experience.
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
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
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
                  Master professional filming techniques
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Create compelling visual narratives
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Professional post-production skills
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Industry networking opportunities
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <Users className="mr-3" size={28} />
                Career Pathways
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {careerPaths.map((career, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2">
                    <Play size={14} className="text-logo-blue" />
                    <span className="text-gray-700">{career}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start Your Filmmaking Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your creative vision into professional films with our comprehensive training program.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-logo-navy rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Enroll Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-logo-navy transition-colors font-semibold">
              Request Info
            </button>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default FilmMaking;
