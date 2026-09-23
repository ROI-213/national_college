
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Calculator, FileText, TrendingUp, Shield, Award, Target, Clock, Download } from 'lucide-react';

const TaxFiling = () => {
  const curriculumModules = [
    {
      title: 'Income Tax Fundamentals',
      topics: [
        'Tax Structure & Slabs',
        'Income Classification',
        'Deductions & Exemptions',
        'TDS Provisions & Compliance'
      ]
    },
    {
      title: 'GST Mastery',
      topics: [
        'GST Registration Process',
        'Input Tax Credit Rules',
        'Return Filing (GSTR-1, 3B)',
        'Compliance & Penalties'
      ]
    },
    {
      title: 'Professional Practice',
      topics: [
        'Client Management',
        'Tax Planning Strategies',
        'Audit & Assessment',
        'Digital Filing Systems'
      ]
    },
    {
      title: 'Compliance & Ethics',
      topics: [
        'Professional Standards',
        'Legal Framework',
        'Documentation Requirements',
        'Risk Management'
      ]
    }
  ];

  const practicalSkills = [
    {
      icon: Calculator,
      title: 'Tax Calculation',
      description: 'Master complex tax computations and optimization strategies'
    },
    {
      icon: FileText,
      title: 'Digital Filing',
      description: 'Proficiency in e-filing portals and digital documentation'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure adherence to tax laws and regulatory requirements'
    },
    {
      icon: TrendingUp,
      title: 'Tax Planning',
      description: 'Strategic planning for tax efficiency and legal compliance'
    }
  ];

  const careerRoles = [
    'Tax Consultant',
    'GST Practitioner',
    'Professional Accountant',
    'Compliance Officer',
    'Tax Advisor',
    'CA Firm Associate',
    'Corporate Tax Executive',
    'Independent Tax Practitioner'
  ];

  return (
    <AcademicsLayout pageTitle="Tax Filing and Compliance" breadcrumbPath="Tax Filing" category="Certificate Courses">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-blue/10 text-logo-blue px-4 py-2 rounded-full mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Professional Tax Practice</span>
            </div>
            <h1 className="text-5xl font-bold text-logo-navy mb-6">Taxation Expertise</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Master the complexities of Indian tax laws through comprehensive training in 
              income tax, GST, and compliance procedures. Develop expertise that positions 
              you as a trusted professional in the growing field of tax consultation.
            </p>
            <div className="bg-logo-navy/5 border-l-4 border-logo-blue p-6 rounded-r-lg">
              <blockquote className="text-lg italic text-logo-navy">
                "Navigating tax complexity with precision, integrity, and professional excellence."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Skills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Core Competencies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {practicalSkills.map((skill, index) => (
                <Card key={index} className="p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-logo-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <skill.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
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

      {/* Professional Development */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Professional Readiness</h2>
            <div className="bg-gradient-to-r from-logo-blue/10 to-logo-navy/10 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-logo-navy mb-4">Industry-Ready Skills</h3>
                  <p className="text-gray-700 mb-6">
                    Our comprehensive program combines theoretical knowledge with practical 
                    application, ensuring graduates are immediately productive in professional 
                    tax practice environments.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">Professional Certification</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">Practical Case Studies</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-logo-blue mr-3" />
                      <span className="text-gray-700">Real-time Updates</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-logo-navy mb-4">Program Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">6-12 Months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-medium">Practical + Theory</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">Professional</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Updates:</span>
                      <span className="font-medium">Continuous</span>
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Career Pathways</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerRoles.map((role, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-logo-navy text-sm">{role}</h3>
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
            <h2 className="text-3xl font-bold mb-6">Master Professional Tax Practice</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our comprehensive tax filing and compliance program to build expertise 
              in India's evolving tax landscape and establish a successful career in tax consultation.
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

export default TaxFiling;
