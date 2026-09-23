
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { BookOpen, PenTool, Camera, Mic, Globe, Award, Users, FileText, Clock, Briefcase } from 'lucide-react';

const BAEnglishJournalism = () => {
  const curriculumHighlights = [
    {
      category: 'Literary Studies',
      modules: [
        'Classical Literature & Modern Contexts',
        'Contemporary Global Narratives',
        'Critical Theory & Literary Analysis',
        'Creative Writing Workshop'
      ]
    },
    {
      category: 'Journalism Core',
      modules: [
        'ENGL 534: 21st Century Journalism',
        'ENGL 621: Newswriting & Reporting',
        'Media Ethics & Law',
        'Digital Storytelling Capstone'
      ]
    },
    {
      category: 'Multimedia Production',
      modules: [
        'Multimedia Content Creation',
        'Interview Techniques & Feature Writing',
        'Investigative Journalism Methods',
        'Content Strategy & Digital Publishing'
      ]
    }
  ];

  const experientialLearning = [
    {
      icon: Camera,
      title: 'Multimedia Labs',
      description: 'State-of-the-art production facilities for video, audio, and digital content creation'
    },
    {
      icon: PenTool,
      title: 'Writing Workshops',
      description: 'Small-group intensive sessions with published authors and veteran journalists'
    },
    {
      icon: Globe,
      title: 'Internship Credits',
      description: 'Real-world experience with leading media houses, publishing companies, and digital platforms'
    },
    {
      icon: Mic,
      title: 'Live Reporting',
      description: 'Campus radio, college magazine, and community journalism projects'
    }
  ];

  const careerPaths = [
    { title: 'Multimedia Journalist', description: 'Cross-platform storytelling for digital and traditional media' },
    { title: 'Literary Editor', description: 'Publishing house editor specializing in fiction and non-fiction' },
    { title: 'Content Strategist', description: 'Digital marketing and brand storytelling professional' },
    { title: 'Literary Critic', description: 'Academic and commercial literary analysis and review' },
    { title: 'Digital Publisher', description: 'Independent publishing and online content platform management' },
    { title: 'Investigative Reporter', description: 'In-depth research journalism for print and broadcast media' }
  ];

  const capstoneOptions = [
    {
      title: 'Digital Storytelling Project',
      description: 'Multimedia narrative combining text, video, audio, and interactive elements on a social issue'
    },
    {
      title: 'Investigative Report',
      description: 'Long-form investigative piece with original research, interviews, and fact-checking'
    },
    {
      title: 'Literary Analysis Portfolio',
      description: 'Comprehensive analysis of contemporary works with journalistic interview components'
    }
  ];

  return (
    <AcademicsLayout pageTitle="BA English and Journalism" breadcrumbPath="BA English & Journalism" category="Graduate Programs">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-blue/10 text-logo-blue px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Interdisciplinary Excellence</span>
            </div>
            <h1 className="text-5xl font-bold text-logo-navy mb-6">Language & Media Convergence</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A refined dual degree combining critical literary insight with modern media storytelling, 
              training the next generation of narrative professionals who understand both the art of language 
              and the craft of contemporary communication.
            </p>
            <div className="bg-logo-navy/5 border-l-4 border-logo-blue p-6 rounded-r-lg">
              <blockquote className="text-lg italic text-logo-navy">
                "Crafting narratives that matter in an age where every story shapes society."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Special */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Why Choose This Program</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <FileText className="w-12 h-12 text-logo-blue mx-auto mb-4" />
                <h3 className="font-semibold text-logo-navy mb-2">Critical Analysis</h3>
                <p className="text-gray-600 text-sm">Deep literary insight meets journalistic fact-checking and verification skills</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Globe className="w-12 h-12 text-logo-blue mx-auto mb-4" />
                <h3 className="font-semibold text-logo-navy mb-2">Digital Storytelling</h3>
                <p className="text-gray-600 text-sm">Multimedia content production for modern platforms and audiences</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-logo-blue mx-auto mb-4" />
                <h3 className="font-semibold text-logo-navy mb-2">Interview Mastery</h3>
                <p className="text-gray-600 text-sm">Advanced interviewing techniques and feature writing capabilities</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 text-logo-blue mx-auto mb-4" />
                <h3 className="font-semibold text-logo-navy mb-2">Industry Ready</h3>
                <p className="text-gray-600 text-sm">Investigative writing and multimedia storytelling for immediate career impact</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Curriculum Excellence</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {curriculumHighlights.map((section, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold text-logo-navy mb-4">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.modules.map((module, moduleIndex) => (
                      <li key={moduleIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-logo-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{module}</span>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Hands-On Learning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {experientialLearning.map((item, index) => (
                <Card key={index} className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-logo-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capstone Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Capstone Experience</h2>
            <div className="space-y-6">
              {capstoneOptions.map((option, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold text-logo-navy mb-3">{option.title}</h3>
                  <p className="text-gray-700">{option.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Career Pathways</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPaths.map((career, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-6 h-6 text-logo-blue mt-1 flex-shrink-0" />
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

      {/* Program Details */}
      <section className="py-16 bg-logo-navy text-white">
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
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Credits</h3>
                <p>180 Credits Total</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Class Size</h3>
                <p>Maximum 30 Students</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-logo-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-logo-navy transition-colors">
                  Download Course Guide
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-logo-navy transition-colors">
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

export default BAEnglishJournalism;
