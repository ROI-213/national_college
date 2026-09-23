
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Clock, Users, Award, BookOpen, Target, TrendingUp, FileText, Briefcase } from 'lucide-react';

const CivilServiceCoaching = () => {
  const courseModules = [
    { module: 'Module 1', title: 'Preliminary Exam Preparation', duration: '8 Weeks', topics: ['General Studies Paper I & II', 'CSAT (Aptitude)', 'Current Affairs', 'Mock Tests'] },
    { module: 'Module 2', title: 'Mains Examination', duration: '12 Weeks', topics: ['Essay Writing', 'General Studies I-IV', 'Optional Subject', 'Answer Writing Practice'] },
    { module: 'Module 3', title: 'Interview Preparation', duration: '4 Weeks', topics: ['Personality Development', 'Mock Interviews', 'Current Affairs Discussion', 'Communication Skills'] },
    { module: 'Module 4', title: 'State PSC Preparation', duration: '6 Weeks', topics: ['State-specific Syllabus', 'Local Issues', 'State History & Geography', 'Mock Tests'] }
  ];

  const features = [
    'Expert Faculty with UPSC Background',
    'Comprehensive Study Materials',
    'Regular Mock Tests & Assessments',
    'Personal Mentoring & Guidance',
    'Current Affairs Updates',
    'Answer Writing Practice'
  ];

  const examsCovered = [
    'UPSC Civil Services (IAS/IPS/IFS)',
    'State Public Service Commissions',
    'Karnataka PSC (KAS)',
    'Delhi Subordinate Services',
    'Central Armed Police Forces',
    'Staff Selection Commission (SSC)'
  ];

  return (
    <AcademicsLayout pageTitle="Civil Service Coaching" breadcrumbPath="Civil Service Coaching" category="Certificate Courses">
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-logo-blue text-white">Professional Coaching</Badge>
                <Badge variant="outline" className="border-logo-navy text-logo-navy">12-18 Months</Badge>
              </div>
              <h2 className="text-4xl font-bold text-logo-navy mb-6">Civil Service Excellence</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Comprehensive coaching program for UPSC and State PSC examinations with expert faculty, 
                personalized mentoring, and proven success strategies to help you achieve your dream of serving the nation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">500+</div>
                  <div className="text-sm text-gray-600">Successful Candidates</div>
                </div>
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Civil Service Preparation"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-logo-navy text-center mb-12">Program Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: 'Expert Faculty', description: 'Experienced educators with UPSC background' },
              { icon: FileText, title: 'Study Materials', description: 'Comprehensive notes and practice papers' },
              { icon: Target, title: 'Mock Tests', description: 'Regular assessments and performance tracking' },
              { icon: Users, title: 'Personal Mentoring', description: 'One-on-one guidance and support' }
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
          <h2 className="text-4xl font-bold text-logo-navy text-center mb-12">Course Structure</h2>
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

      {/* Exams Covered */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-logo-navy mb-6">Examinations Covered</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive coaching program prepares you for various civil service examinations 
                at both central and state levels.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {examsCovered.map((exam, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded border">
                    <Briefcase size={16} className="text-logo-blue" />
                    <span className="font-medium text-logo-navy">{exam}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Government Building"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <Award className="mr-3" size={28} />
                Program Highlights
              </h3>
              <ul className="space-y-3 text-gray-700">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
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
                  Morning batch: 6 AM - 9 AM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Evening batch: 6 PM - 9 PM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Weekend batch: 9 AM - 4 PM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Online classes available
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start Your Civil Service Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who achieved their dreams with our expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-logo-navy rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Enroll Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-logo-navy transition-colors font-semibold">
              Download Syllabus
            </button>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default CivilServiceCoaching;
