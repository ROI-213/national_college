
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Globe, Scale, Users, FileText, Gavel, Mic, Award, Clock, Briefcase, BookOpen } from 'lucide-react';

const BAJournalismPolitical = () => {
  const academicModules = [
    {
      category: 'Political Theory & Analysis',
      icon: Scale,
      modules: [
        'Comparative Political Systems',
        'Public Policy Analysis & Implementation',
        'International Relations & Diplomacy',
        'Political Philosophy & Democratic Theory'
      ]
    },
    {
      category: 'Journalism Specialization',
      icon: Mic,
      modules: [
        'Political Reporting & Analysis',
        'Parliamentary Procedure & Coverage',
        'Investigative Journalism Methods',
        'Media Ethics & Press Freedom'
      ]
    },
    {
      category: 'Communication Strategy',
      icon: Globe,
      modules: [
        'Political Communication Theory',
        'Public Affairs & Campaign Coverage',
        'Digital Media & Political Engagement',
        'Crisis Communication in Politics'
      ]
    }
  ];

  const experientialElements = [
    {
      icon: Users,
      title: 'Live Press Briefings',
      description: 'Simulated government press conferences with real-time questioning and deadline reporting'
    },
    {
      icon: Gavel,
      title: 'Policy Roundtables',
      description: 'Direct coverage of policy discussions with government officials and policy experts'
    },
    {
      icon: Mic,
      title: 'Parliament Correspondent Seminars',
      description: 'Mentorship sessions with veteran political journalists and parliamentary correspondents'
    },
    {
      icon: Globe,
      title: 'Election Coverage Simulation',
      description: 'Comprehensive election reporting including exit polls, result analysis, and stakeholder interviews'
    }
  ];

  const careerTrajectories = [
    { title: 'Political Correspondent', description: 'Capitol beat reporter covering legislature, elections, and government policy' },
    { title: 'Policy Analyst & Communicator', description: 'Research and communication roles in think tanks and policy institutes' },
    { title: 'Public Relations Expert', description: 'Strategic communication for political campaigns and government agencies' },
    { title: 'Public Affairs Analyst', description: 'Corporate or NGO roles focusing on government relations and policy impact' },
    { title: 'International Correspondent', description: 'Foreign affairs reporting and diplomatic coverage' },
    { title: 'Editorial Writer', description: 'Opinion journalism and political commentary for major publications' }
  ];

  const specializations = [
    {
      title: 'Election & Campaign Coverage',
      description: 'Specialized training in electoral processes, campaign finance, voter behavior analysis'
    },
    {
      title: 'Policy Journalism',
      description: 'Deep-dive coverage of healthcare, education, economic, and social policy development'
    },
    {
      title: 'International Affairs',
      description: 'Foreign policy reporting, diplomatic relations, and global political movements'
    },
    {
      title: 'Investigative Political Reporting',
      description: 'Long-form investigations into government accountability and political corruption'
    }
  ];

  return (
    <AcademicsLayout pageTitle="BA Journalism and Political Science" breadcrumbPath="BA Journalism & Political Science" category="Graduate Programs">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
              <Scale className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Political Journalism Excellence</span>
            </div>
            <h1 className="text-5xl font-bold text-logo-navy mb-6">Political Analysis & Democratic Discourse</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A versatile major combining rigorous political analysis with dynamic journalistic practice, 
              preparing students to cover governance, public policy, and democratic processes with depth and integrity.
            </p>
            <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
              <blockquote className="text-lg italic text-logo-navy">
                "Democracy thrives when informed journalism meets political understanding."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Edge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Academic Excellence</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {academicModules.map((module, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <module.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-logo-navy">{module.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {module.modules.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiential Learning */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Experiential Learning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {experientialElements.map((element, index) => (
                <Card key={index} className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <element.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{element.title}</h3>
                    <p className="text-gray-600">{element.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Specialization Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {specializations.map((spec, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-logo-navy mb-3">{spec.title}</h3>
                  <p className="text-gray-600">{spec.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Career Trajectories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerTrajectories.map((career, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-logo-navy mb-2">{career.title}</h3>
                      <p className="text-gray-600 text-sm">{career.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Faculty Excellence</h2>
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-logo-navy mb-2">Distinguished Faculty</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-logo-navy mb-2">Political Science Department</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Former government advisors</li>
                    <li>• International relations experts</li>
                    <li>• Policy research specialists</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-logo-navy mb-2">Journalism Department</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Award-winning political reporters</li>
                    <li>• Former news editors</li>
                    <li>• Media ethics specialists</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details & CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Program Details</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Duration</h3>
                <p>3 Years (6 Semesters)</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Credits</h3>
                <p>180 Credits Total</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Class Size</h3>
                <p>Maximum 28 Students</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  Download Course Guide
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  Connect with Admissions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default BAJournalismPolitical;
