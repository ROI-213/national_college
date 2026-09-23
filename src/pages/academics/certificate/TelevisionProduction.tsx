
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Video, Camera, Mic, Monitor, Film, Award, Clock, Users, Target, Download } from 'lucide-react';

const TelevisionProduction = () => {
  const curriculumModules = [
    {
      title: 'Pre-Production',
      topics: [
        'Script Writing & Development',
        'Storyboarding Techniques',
        'Production Planning',
        'Budget & Schedule Management'
      ]
    },
    {
      title: 'Production Techniques',
      topics: [
        'Camera Operations & Techniques',
        'Professional Lighting Setup',
        'Sound Recording & Engineering',
        'Multi-Camera Production'
      ]
    },
    {
      title: 'Post-Production',
      topics: [
        'Video Editing (Premiere Pro)',
        'Final Cut Pro Mastery',
        'Color Correction & Grading',
        'Audio Mixing & Mastering'
      ]
    },
    {
      title: 'Broadcast Technology',
      topics: [
        'Studio Control Room Operations',
        'Live Broadcasting Techniques',
        'Graphics & Animation',
        'Streaming Technology'
      ]
    }
  ];

  const handsOnFeatures = [
    {
      icon: Video,
      title: 'Studio Labs',
      description: 'Professional TV studio with industry-standard equipment and control rooms'
    },
    {
      icon: Camera,
      title: 'Location Shooting',
      description: 'Field production training with portable equipment and outdoor setups'
    },
    {
      icon: Monitor,
      title: 'Control Room Projects',
      description: 'Live switching, graphics operation, and broadcast management'
    },
    {
      icon: Film,
      title: 'Live Simulations',
      description: 'Real-time broadcasting scenarios and emergency response training'
    }
  ];

  const softwareTraining = [
    'Adobe Premiere Pro',
    'Final Cut Pro X',
    'DaVinci Resolve',
    'After Effects',
    'Avid Media Composer',
    'Pro Tools Audio'
  ];

  const careerPaths = [
    'TV Producer/Director',
    'Video Editor',
    'Camera Operator',
    'Sound Engineer',
    'Broadcast Technician',
    'Content Creator',
    'Live Event Producer',
    'Multimedia Specialist'
  ];

  return (
    <AcademicsLayout pageTitle="Television Production & Software Training" breadcrumbPath="TV Production" category="Certificate Courses">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-blue/10 text-logo-blue px-4 py-2 rounded-full mb-6">
              <Video className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Professional Media Production</span>
            </div>
            <h1 className="text-5xl font-bold text-logo-navy mb-6">Broadcast Media Excellence</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Master the art and technology of television production through comprehensive training 
              in video creation, broadcasting techniques, and industry-standard software, preparing 
              you for dynamic careers in media and entertainment.
            </p>
            <div className="bg-logo-navy/5 border-l-4 border-logo-blue p-6 rounded-r-lg">
              <blockquote className="text-lg italic text-logo-navy">
                "Creating compelling visual narratives that captivate and inspire audiences worldwide."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-On Learning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Immersive Learning Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {handsOnFeatures.map((feature, index) => (
                <Card key={index} className="p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-logo-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Comprehensive Curriculum</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {curriculumModules.map((module, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold text-logo-navy mb-4">{module.title}</h3>
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-logo-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Training */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Industry Software Mastery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareTraining.map((software, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-logo-navy">{software}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Exposure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Industry Integration</h2>
            <div className="bg-gradient-to-r from-logo-blue/10 to-logo-navy/10 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-logo-navy mb-4">Real-World Experience</h3>
                  <p className="text-gray-700 mb-6">
                    Gain practical experience through structured on-set work, internships with 
                    broadcasting companies, and apprenticeships that bridge classroom learning 
                    with industry practice.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">Media House Internships</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">On-Set Work Experience</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">Industry Mentorship</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-logo-navy mb-4">Program Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">18-24 Months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-medium">Studio + Field Work</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Equipment:</span>
                      <span className="font-medium">Industry Standard</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Diploma + Portfolio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Career Pathways</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerPaths.map((career, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Film size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-logo-navy text-sm">{career}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-logo-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Launch Your Media Career</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our comprehensive television production program and master the skills 
              needed to excel in the dynamic world of broadcast media and content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-logo-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-logo-navy transition-colors flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Syllabus
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-logo-navy transition-colors">
                Request Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default TelevisionProduction;
