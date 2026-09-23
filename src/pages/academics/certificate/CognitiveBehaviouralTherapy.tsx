
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Brain, BookOpen, Users, Award, Clock, Download, Calendar, Target } from 'lucide-react';

const CognitiveBehaviouralTherapy = () => {
  const curriculumModules = [
    {
      title: 'Foundations & Theory',
      topics: [
        'History and Evolution of CBT',
        'Cognitive Models of Mental Health',
        'Behavioral Theory Fundamentals',
        'Evidence-Based Practice Principles'
      ]
    },
    {
      title: 'Core Interventions',
      topics: [
        'Cognitive Restructuring Techniques',
        'Behavioral Activation Methods',
        'Exposure Therapy Principles',
        'Mindfulness Integration'
      ]
    },
    {
      title: 'Clinical Applications',
      topics: [
        'Anxiety Disorders Treatment',
        'Depression Intervention Strategies',
        'Trauma-Informed CBT Approaches',
        'Case Formulation Skills'
      ]
    },
    {
      title: 'Professional Practice',
      topics: [
        'Ethical Guidelines & Standards',
        'Therapeutic Relationship Building',
        'Session Planning & Documentation',
        'Professional Development Pathways'
      ]
    }
  ];

  const deliveryFeatures = [
    {
      icon: BookOpen,
      title: 'Online Modules',
      description: 'Self-paced learning with interactive content and video demonstrations'
    },
    {
      icon: Users,
      title: 'Case Studies',
      description: 'Real-world scenarios and practical application exercises'
    },
    {
      icon: Clock,
      title: 'Lifetime Access',
      description: 'Continuous access to course materials and updates'
    },
    {
      icon: Brain,
      title: 'Tutor Support',
      description: 'Expert guidance and personalized feedback throughout the program'
    }
  ];

  const careerOutcomes = [
    'Entry-level Counseling Positions',
    'CBT Therapy Assistant Roles',
    'Mental Health Support Worker',
    'Private Practice Preparation',
    'Corporate Wellness Consultant',
    'Community Mental Health Advocate'
  ];

  return (
    <AcademicsLayout pageTitle="Cognitive Behavioural Therapy (CBT)" breadcrumbPath="CBT Diploma" category="Certificate Courses">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-blue/10 text-logo-blue px-4 py-2 rounded-full mb-6">
              <Brain className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Professional Mental Health Training</span>
            </div>
            <h1 className="text-5xl font-bold text-logo-navy mb-6">Evidence-Based Therapeutic Excellence</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Master the gold standard of psychotherapy through our comprehensive CBT diploma program, 
              designed for aspiring mental health professionals seeking certification in cognitive 
              behavioural therapy techniques and ethical practice.
            </p>
            <div className="bg-logo-navy/5 border-l-4 border-logo-blue p-6 rounded-r-lg">
              <blockquote className="text-lg italic text-logo-navy">
                "Transforming lives through evidence-based therapeutic intervention and compassionate care."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Program Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliveryFeatures.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-logo-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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

      {/* Certification Path */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Certification Pathway</h2>
            <div className="bg-gradient-to-r from-logo-blue/10 to-logo-navy/10 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-logo-navy mb-4">Professional Recognition</h3>
                  <p className="text-gray-700 mb-6">
                    Our diploma prepares you for certification with recognized bodies including 
                    NACBT's CCBT/DCBT credentials, positioning you for professional practice 
                    and career advancement in mental health services.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">NACBT Certification Preparation</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">Entry-level Counseling Qualification</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">Continuing Education Credits</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-logo-navy mb-4">Program Format</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">12-18 Months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery:</span>
                      <span className="font-medium">Online + Practical</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Support:</span>
                      <span className="font-medium">Expert Tutors</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Access:</span>
                      <span className="font-medium">Lifetime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Career Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerOutcomes.map((career, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-logo-navy">{career}</h3>
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
            <h2 className="text-3xl font-bold mb-6">Start Your CBT Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our comprehensive CBT diploma program and make a meaningful impact 
              in mental health care through evidence-based therapeutic practice.
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

export default CognitiveBehaviouralTherapy;
