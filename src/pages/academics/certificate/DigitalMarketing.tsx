
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Clock, Users, Award, BookOpen, Target, TrendingUp, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const courseModules = [
    { module: 'Module 1', title: 'Digital Marketing Fundamentals', duration: '2 Weeks', topics: ['Introduction to Digital Marketing', 'Digital Marketing Ecosystem', 'Consumer Behavior Online', 'Digital Strategy Planning'] },
    { module: 'Module 2', title: 'Search Engine Optimization (SEO)', duration: '3 Weeks', topics: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'SEO Tools & Analytics'] },
    { module: 'Module 3', title: 'Search Engine Marketing (SEM)', duration: '2 Weeks', topics: ['Google Ads', 'Keyword Research', 'Ad Creation', 'Campaign Management'] },
    { module: 'Module 4', title: 'Social Media Marketing', duration: '3 Weeks', topics: ['Platform Strategies', 'Content Creation', 'Community Management', 'Social Media Analytics'] },
    { module: 'Module 5', title: 'Content Marketing & Email Marketing', duration: '2 Weeks', topics: ['Content Strategy', 'Blog Writing', 'Email Campaigns', 'Marketing Automation'] },
    { module: 'Module 6', title: 'Analytics & Performance Measurement', duration: '2 Weeks', topics: ['Google Analytics', 'Social Media Analytics', 'ROI Measurement', 'Reporting'] }
  ];

  const tools = [
    'Google Analytics', 'Google Ads', 'Facebook Ads Manager', 'Instagram Business',
    'LinkedIn Ads', 'Twitter Ads', 'YouTube Analytics', 'SEMrush', 'Mailchimp',
    'Hootsuite', 'Canva', 'WordPress', 'Google Tag Manager', 'HubSpot'
  ];

  const careerPaths = [
    'Digital Marketing Specialist', 'SEO Specialist', 'SEM Specialist', 'Social Media Manager',
    'Content Marketing Manager', 'Email Marketing Specialist', 'Digital Marketing Analyst',
    'Growth Hacker', 'E-commerce Marketing Manager', 'Brand Manager'
  ];

  return (
    <AcademicsLayout pageTitle="Advanced Digital Marketing" breadcrumbPath="Digital Marketing" category="Certificate Courses">
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-logo-blue text-white">Certificate Course</Badge>
                <Badge variant="outline" className="border-logo-navy text-logo-navy">6 Months</Badge>
              </div>
              <h2 className="text-4xl font-bold text-logo-navy mb-6">Master Digital Marketing</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Comprehensive digital marketing course covering SEO, SEM, social media marketing, 
                content marketing, email marketing, and analytics. Get hands-on experience with 
                industry-standard tools and real campaigns.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">100%</div>
                  <div className="text-sm text-gray-600">Practical Training</div>
                </div>
                <div className="text-center p-4 bg-logo-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-logo-navy">96%</div>
                  <div className="text-sm text-gray-600">Job Placement</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Course"
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
              { icon: Clock, title: '6 Months Duration', description: 'Intensive training with flexible schedules' },
              { icon: Users, title: 'Expert Instructors', description: 'Industry professionals with 10+ years experience' },
              { icon: Award, title: 'Industry Certification', description: 'Google & Facebook certified training' },
              { icon: Monitor, title: 'Live Projects', description: 'Work on real client campaigns' }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
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

      {/* Tools & Technologies */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-logo-navy text-center mb-12">Tools & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Industry-Standard Tools</h3>
              <p className="text-lg text-gray-700 mb-6">
                Get hands-on experience with the most popular digital marketing tools used by professionals worldwide.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-white rounded border">
                    <Monitor size={16} className="text-logo-blue" />
                    <span className="text-sm font-medium text-logo-navy">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Tools"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Admission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <Target className="mr-3" size={28} />
                Eligibility Criteria
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Graduate in any discipline
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Basic computer knowledge
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  English proficiency
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  No prior marketing experience required
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <BookOpen className="mr-3" size={28} />
                Course Schedule
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Weekday batches: 10 AM - 12 PM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Weekend batches: 9 AM - 1 PM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                  Evening batches: 6 PM - 8 PM
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

      {/* Career Opportunities */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-logo-navy text-center mb-12">Career Opportunities</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Career Growth"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">High-Demand Career Paths</h3>
              <p className="text-lg text-gray-700 mb-6">
                Digital marketing professionals are in high demand across all industries with excellent growth prospects.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {careerPaths.map((career, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded border">
                    <Smartphone size={16} className="text-logo-blue" />
                    <span className="font-medium text-logo-navy">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-logo-navy mb-8">Related Courses</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/academics/certificate/advanced-excel"
                className="px-6 py-3 bg-logo-blue text-white rounded-lg hover:bg-logo-navy transition-colors font-semibold"
              >
                Advanced Excel
              </Link>
              <Link 
                to="/academics/certificate/data-analytics"
                className="px-6 py-3 bg-logo-navy text-white rounded-lg hover:bg-logo-blue transition-colors font-semibold"
              >
                Data Analytics
              </Link>
              <Link 
                to="/academics/graduate/bba-business-analytics"
                className="px-6 py-3 bg-logo-blue text-white rounded-lg hover:bg-logo-navy transition-colors font-semibold"
              >
                BBA Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default DigitalMarketing;
