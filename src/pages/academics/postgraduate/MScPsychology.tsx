
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Brain, Users, BarChart, BookOpen, Award, Target } from 'lucide-react';

const MScPsychology = () => {
  const coreModules = [
    {
      icon: Brain,
      title: 'Cognitive Psychology',
      description: 'Memory, attention, perception, and cognitive processes'
    },
    {
      icon: Users,
      title: 'Social Psychology',
      description: 'Group behavior, attitudes, and interpersonal relationships'
    },
    {
      icon: BarChart,
      title: 'Research Methods',
      description: 'Statistical analysis, experimental design, and data interpretation'
    },
    {
      icon: Target,
      title: 'Applied Psychology',
      description: 'Clinical, counseling, and organizational psychology applications'
    }
  ];

  const researchAreas = [
    'Cognitive Neuroscience',
    'Developmental Psychology',
    'Health Psychology',
    'Environmental Psychology',
    'Workplace Psychology',
    'Clinical Assessment'
  ];

  return (
    <AcademicsLayout pageTitle="MSc Psychology" breadcrumbPath="MSc Psychology" category="Postgraduate Programs">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Program Overview */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Advanced Psychological Studies</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              A rigorous 2-year MSc program combining cognitive, social, and biological psychology with advanced 
              research methods and statistical analysis, accredited for Graduate Basis for Chartered Membership (BPS).
            </p>
          </div>

          {/* Program Snapshot */}
          <div className="bg-gradient-to-r from-logo-navy/5 to-logo-blue/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-logo-navy mb-6 text-center">Program Snapshot</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-logo-navy mb-2">Duration</h4>
                <p className="text-gray-700">2 Years Full-time</p>
              </div>
              <div>
                <h4 className="font-semibold text-logo-navy mb-2">Credits</h4>
                <p className="text-gray-700">180 Credits</p>
              </div>
              <div>
                <h4 className="font-semibold text-logo-navy mb-2">Accreditation</h4>
                <p className="text-gray-700">BPS Aligned</p>
              </div>
              <div>
                <h4 className="font-semibold text-logo-navy mb-2">Research</h4>
                <p className="text-gray-700">60-Credit Dissertation</p>
              </div>
            </div>
          </div>

          {/* Core Modules */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-logo-navy mb-8 text-center">Core Modules</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreModules.map((module, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <module.icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-logo-navy mb-3">{module.title}</h4>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Curriculum Structure */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-logo-navy mb-8 text-center">Curriculum Structure</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h4 className="text-xl font-bold text-logo-navy mb-4">Year 1: Foundation</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BookOpen size={16} className="text-logo-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cognitive & Biological Psychology (30 credits)</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen size={16} className="text-logo-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Social & Developmental Psychology (30 credits)</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen size={16} className="text-logo-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Research Methods & Statistics (30 credits)</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen size={16} className="text-logo-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Individual Differences & Conceptual Issues (30 credits)</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h4 className="text-xl font-bold text-logo-navy mb-4">Year 2: Specialization</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BookOpen size={16} className="text-logo-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Advanced Research Methods (30 credits)</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen size={16} className="text-logo-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Option Modules (30 credits)</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen size={16} className="text-logo-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Supervised Dissertation (60 credits)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Research Areas */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-3xl font-bold text-logo-navy mb-6 text-center">Research Specializations</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <p className="font-medium text-logo-navy">{area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hands-on Learning */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-logo-navy mb-8 text-center">Hands-on Learning</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Brain size={48} className="text-logo-blue mx-auto mb-4" />
                <h4 className="font-semibold text-logo-navy mb-2">Psychology Labs</h4>
                <p className="text-gray-600">State-of-the-art facilities for cognitive and behavioral research</p>
              </div>
              <div className="text-center">
                <BarChart size={48} className="text-logo-blue mx-auto mb-4" />
                <h4 className="font-semibold text-logo-navy mb-2">Statistical Software</h4>
                <p className="text-gray-600">SPSS, R, and MATLAB training for data analysis</p>
              </div>
              <div className="text-center">
                <Users size={48} className="text-logo-blue mx-auto mb-4" />
                <h4 className="font-semibold text-logo-navy mb-2">Clinical Training</h4>
                <p className="text-gray-600">Assessment techniques and therapeutic intervention methods</p>
              </div>
            </div>
          </div>

          {/* Accreditation & Career Pathways */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-logo-blue mr-3" />
                <h4 className="text-xl font-bold text-logo-navy">BPS Accreditation</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Our MSc Psychology program is aligned with British Psychological Society standards, 
                providing Graduate Basis for Chartered Membership (GBC).
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Meets BPS academic requirements</li>
                <li>• Pathway to chartered psychologist status</li>
                <li>• International recognition</li>
              </ul>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Target size={24} className="text-logo-blue mr-3" />
                <h4 className="text-xl font-bold text-logo-navy">Career Outcomes</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Clinical Psychology (further training required)</li>
                <li>• Research Psychology & Academia</li>
                <li>• Occupational & Organizational Psychology</li>
                <li>• Health Psychology & Wellness</li>
                <li>• Educational Psychology</li>
                <li>• Human Resources & Consulting</li>
              </ul>
            </Card>
          </div>

          {/* Dissertation Project */}
          <div className="bg-logo-navy/5 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-logo-navy mb-4 text-center">Supervised Dissertation</h3>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700 mb-4">
                The 60-credit dissertation represents the culmination of your MSc journey, demonstrating 
                highest degree-level research competence under expert supervision.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-semibold text-logo-navy mb-2">Original Research</h5>
                  <p className="text-sm text-gray-600">Independent investigation of a psychological phenomenon</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-semibold text-logo-navy mb-2">Expert Supervision</h5>
                  <p className="text-sm text-gray-600">One-on-one guidance from faculty researchers</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-semibold text-logo-navy mb-2">Professional Standards</h5>
                  <p className="text-sm text-gray-600">Meets BPS requirements for research competence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="space-x-4">
              <button className="bg-logo-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-logo-navy transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-logo-blue text-logo-blue px-8 py-3 rounded-lg font-semibold hover:bg-logo-blue hover:text-white transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default MScPsychology;
