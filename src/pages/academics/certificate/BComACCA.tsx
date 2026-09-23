
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { GraduationCap, Globe, TrendingUp, Award, BookOpen, Target, Users, Download } from 'lucide-react';

const BComACCA = () => {
  const programBenefits = [
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'ACCA qualification recognized in 180+ countries worldwide'
    },
    {
      icon: TrendingUp,
      title: 'Dual Credentials',
      description: 'Earn both academic degree and professional certification simultaneously'
    },
    {
      icon: Award,
      title: 'Career Acceleration',
      description: 'Fast-track to chartered accountancy and international finance roles'
    },
    {
      icon: Users,
      title: 'Industry Network',
      description: 'Access to ACCA global network of 227,000+ members'
    }
  ];

  const curriculumStructure = [
    {
      year: 'Year 1',
      subjects: [
        'Financial Accounting Fundamentals',
        'Business Mathematics & Statistics',
        'ACCA F1 - Accountant in Business',
        'ACCA F2 - Management Accounting'
      ]
    },
    {
      year: 'Year 2', 
      subjects: [
        'Corporate Accounting',
        'Business Law & Ethics',
        'ACCA F3 - Financial Accounting',
        'ACCA F4 - Corporate & Business Law'
      ]
    },
    {
      year: 'Year 3',
      subjects: [
        'Advanced Financial Management',
        'Auditing & Assurance',
        'Strategic Management',
        'ACCA Professional Papers (F5-F9)'
      ]
    }
  ];

  const careerOpportunities = [
    'Chartered Accountant',
    'Financial Analyst',
    'International Finance Manager',
    'Management Consultant',
    'Audit Executive',
    'Tax Consultant',
    'Investment Banking Analyst',
    'Corporate Finance Specialist'
  ];

  return (
    <AcademicsLayout pageTitle="B.Com/BBA with ACCA" breadcrumbPath="B.Com/BBA with ACCA" category="Certificate Courses">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-blue/10 text-logo-blue px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Global Professional Qualification</span>
            </div>
            <h1 className="text-5xl font-bold text-logo-navy mb-6">Global Accounting Excellence</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Combine the rigor of a comprehensive business degree with the prestige of ACCA 
              professional qualification, opening doors to international career opportunities 
              in finance, accounting, and business leadership.
            </p>
            <div className="bg-logo-navy/5 border-l-4 border-logo-blue p-6 rounded-r-lg">
              <blockquote className="text-lg italic text-logo-navy">
                "Preparing tomorrow's financial leaders for a globally connected world."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Why Choose This Program</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programBenefits.map((benefit, index) => (
                <Card key={index} className="p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-logo-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Integrated Curriculum</h2>
            <div className="space-y-8">
              {curriculumStructure.map((year, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold text-logo-navy mb-4">{year.year}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {year.subjects.map((subject, subjectIndex) => (
                      <div key={subjectIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-logo-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACCA Pathway */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">ACCA Professional Path</h2>
            <div className="bg-gradient-to-r from-logo-blue/10 to-logo-navy/10 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-logo-navy mb-4">Fast-Track to Membership</h3>
                  <p className="text-gray-700 mb-6">
                    Our integrated approach allows students to complete ACCA foundation papers 
                    alongside their degree, significantly reducing the time to professional 
                    qualification and membership.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">F1-F4 Papers Integrated</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">Professional Skills Development</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">Global Certification Ready</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-logo-navy mb-4">Program Structure</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">3 Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ACCA Papers:</span>
                      <span className="font-medium">F1-F4 Integrated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Degree:</span>
                      <span className="font-medium">B.Com/BBA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recognition:</span>
                      <span className="font-medium">Global</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Global Career Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerOpportunities.map((career, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap size={24} className="text-white" />
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
            <h2 className="text-3xl font-bold mb-6">Begin Your Global Finance Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Combine academic excellence with professional qualification and position yourself 
              for international success in accounting and finance careers.
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

export default BComACCA;
