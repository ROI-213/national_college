
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Brain, Camera, Users, FileText, Microscope, Globe, Award, Clock, Briefcase, BookOpen } from 'lucide-react';

const BAPsychologyJournalism = () => {
  const curriculumPillars = [
    {
      category: 'Psychology Foundation',
      icon: Brain,
      modules: [
        'Cognitive Psychology & Human Behavior',
        'Social Psychology & Group Dynamics',
        'Research Methods & Statistical Analysis',
        'Introduction to Counseling Psychology'
      ]
    },
    {
      category: 'Journalism Practice',
      icon: Camera,
      modules: [
        'Reporting & News Writing',
        'Media Ethics & Psychology',
        'Multimedia Production Techniques',
        'Digital Media & Content Strategy'
      ]
    },
    {
      category: 'Interdisciplinary Integration',
      icon: Users,
      modules: [
        'Psychology of Media Influence',
        'Behavioral Reporting Techniques',
        'Mental Health Journalism',
        'Crisis Communication Psychology'
      ]
    }
  ];

  const capstoneOptions = [
    {
      title: 'Research-Based Thesis',
      description: 'Empirical study on media influence on behavior, public perception psychology, or social media impact on mental health',
      example: 'Example: "Social Media Echo Chambers and Political Polarization: A Behavioral Analysis"'
    },
    {
      title: 'Psychology-Informed Documentary',
      description: 'Multimedia project exploring psychological themes through journalistic storytelling and evidence-based reporting',
      example: 'Example: Documentary on teenage mental health featuring expert interviews and case studies'
    },
    {
      title: 'Behavioral Journalism Portfolio',
      description: 'Collection of articles demonstrating psychological insight in reporting on social issues, healthcare, or human interest stories',
      example: 'Example: Series on workplace psychology, addiction recovery, or educational psychology'
    }
  ];

  const careerOutcomes = [
    { title: 'Psychology-Aware Journalist', description: 'Reporter specializing in mental health, behavior, and social psychology topics' },
    { title: 'Health & Wellness Editor', description: 'Editorial roles focusing on psychological well-being and public health communication' },
    { title: 'Policy Reporter', description: 'Covering education, healthcare, and social policy with psychological understanding' },
    { title: 'Crisis Communication Specialist', description: 'Managing sensitive communications during emergencies or traumatic events' },
    { title: 'Media Psychology Researcher', description: 'Academic or industry research on media effects and audience behavior' },
    { title: 'Content Strategist (Mental Health)', description: 'Digital platforms focusing on psychological well-being and behavioral change' }
  ];

  const uniqueFeatures = [
    {
      icon: Microscope,
      title: 'Behavioral Insight Graphics',
      description: 'Learn to create data visualizations and infographics that effectively communicate psychological research'
    },
    {
      icon: Globe,
      title: 'Community Psychology Projects',
      description: 'Real-world reporting on local mental health initiatives and community psychology programs'
    },
    {
      icon: FileText,
      title: 'Ethics Integration',
      description: 'Deep focus on ethical considerations when reporting on psychological topics and vulnerable populations'
    },
    {
      icon: Users,
      title: 'Interview Psychology',
      description: 'Advanced techniques for interviewing trauma survivors, mental health professionals, and research subjects'
    }
  ];

  return (
    <AcademicsLayout pageTitle="BA Psychology and Journalism" breadcrumbPath="BA Psychology & Journalism" category="Graduate Programs">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Brain className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Interdisciplinary Innovation</span>
            </div>
            <h1 className="text-5xl font-bold text-logo-navy mb-6">Human Behavior & Media Convergence</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A groundbreaking interdisciplinary program merging the study of human behavior with media communication, 
              creating journalists who understand the psychological dimensions of storytelling and social impact.
            </p>
            <div className="bg-purple-100 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <blockquote className="text-lg italic text-logo-navy">
                "Understanding the mind behind every story, and the story behind every mind."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Program Balance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Perfect Balance of Disciplines</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {curriculumPillars.map((pillar, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <pillar.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-logo-navy">{pillar.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {pillar.modules.map((module, moduleIndex) => (
                      <li key={moduleIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

      {/* Unique Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Distinctive Program Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {uniqueFeatures.map((feature, index) => (
                <Card key={index} className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Capstone Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Capstone Options</h2>
            <div className="space-y-8">
              {capstoneOptions.map((option, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold text-logo-navy mb-3">{option.title}</h3>
                  <p className="text-gray-700 mb-3">{option.description}</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-700 italic">{option.example}</p>
                  </div>
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Career Pathways</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerOutcomes.map((career, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
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

      {/* Student Success */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-logo-navy mb-8">Student Success Story</h2>
            <Card className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "This program gave me the tools to report on mental health issues with both journalistic rigor and psychological sensitivity. 
                I now work as a health correspondent, covering stories that truly make a difference in people's lives."
              </blockquote>
              <cite className="text-purple-600 font-semibold">- Priya Sharma, Health Correspondent, News24</cite>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details & CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
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
                <p>Maximum 25 Students</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Download Course Guide
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
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

export default BAPsychologyJournalism;
