
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Brain, Monitor, Cpu, Users, Code, Zap, Award, Clock, Briefcase, BookOpen, Lightbulb, Database } from 'lucide-react';

const BScComputerPsychology = () => {
  const coreModules = [
    {
      category: 'Computer Science Foundation',
      icon: Monitor,
      modules: [
        'Machine Learning & Artificial Intelligence',
        'Human-Computer Interaction Design',
        'Data Structures & Algorithm Analysis',
        'Software Engineering & Development'
      ]
    },
    {
      category: 'Psychology Core',
      icon: Brain,
      modules: [
        'Cognitive Psychology & Mental Processes',
        'Social Psychology & Group Behavior',
        'Research Methods & Statistical Analysis',
        'Behavioral Data Analysis Techniques'
      ]
    },
    {
      category: 'Interdisciplinary Integration',
      icon: Zap,
      modules: [
        'Computational Psychology Methods',
        'User Experience Research & Testing',
        'Digital Therapeutics & Mental Health',
        'AI Ethics & Behavioral Implications'
      ]
    }
  ];

  const handsOnLabs = [
    {
      icon: Code,
      title: 'AI-Driven User Testing',
      description: 'Develop machine learning models to analyze user behavior patterns and predict interface preferences'
    },
    {
      icon: Brain,
      title: 'Cognitive Experiments',
      description: 'Design and conduct digital psychology experiments using specialized software and data collection tools'
    },
    {
      icon: Database,
      title: 'Research Software Stacks',
      description: 'Build comprehensive research platforms integrating data collection, analysis, and visualization tools'
    },
    {
      icon: Users,
      title: 'Behavioral Analytics',
      description: 'Create applications that track and analyze human behavior for UX optimization and psychological insights'
    }
  ];

  const capstoneProjects = [
    {
      title: 'Emotion-Aware Interface',
      description: 'Design and develop an adaptive user interface that responds to user emotional states using facial recognition and behavioral analysis',
      techStack: 'Python, TensorFlow, React, Computer Vision'
    },
    {
      title: 'Mental Health Chatbot',
      description: 'Create an AI-powered mental health support system incorporating cognitive behavioral therapy principles',
      techStack: 'Natural Language Processing, Machine Learning, Web Development'
    },
    {
      title: 'Cognitive Load Assessment Tool',
      description: 'Build a comprehensive platform for measuring and optimizing cognitive load in digital learning environments',
      techStack: 'Data Analytics, Psychology Research Methods, Full-Stack Development'
    }
  ];

  const careerPaths = [
    { title: 'UX Researcher', description: 'Design user experience studies combining psychological principles with technical implementation' },
    { title: 'AI Developer (Human-Centered)', description: 'Develop AI systems that account for human psychology and behavioral patterns' },
    { title: 'Cognitive Data Scientist', description: 'Analyze behavioral data to derive insights for product development and user experience' },
    { title: 'Digital Therapeutics Developer', description: 'Create technology-based interventions for mental health and behavioral change' },
    { title: 'Human-Computer Interaction Specialist', description: 'Research and design interfaces that optimize human-technology interaction' },
    { title: 'Behavioral Product Manager', description: 'Lead product development with deep understanding of user psychology and technical constraints' }
  ];

  const industryApplications = [
    {
      title: 'Healthcare Technology',
      description: 'Digital mental health platforms, telemedicine interfaces, patient behavior tracking systems'
    },
    {
      title: 'Educational Technology',
      description: 'Adaptive learning systems, cognitive load optimization, personalized learning interfaces'
    },
    {
      title: 'Gaming & Entertainment',
      description: 'Player behavior analysis, engagement optimization, immersive experience design'
    },
    {
      title: 'Enterprise Software',
      description: 'Workplace productivity tools, employee behavior analytics, organizational psychology applications'
    }
  ];

  return (
    <AcademicsLayout pageTitle="BSc Computer Science & Psychology" breadcrumbPath="BSc Computer Science & Psychology" category="Graduate Programs">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Cutting-Edge Interdisciplinary</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Technology Meets Human Mind</h1>
            <p className="text-xl leading-relaxed mb-8 text-blue-100">
              A revolutionary bachelor's program blending computer science with cognitive science, 
              perfect for the next generation of UX designers, AI developers, and digital therapeutics innovators 
              who understand both technology and human behavior.
            </p>
            <div className="bg-blue-800/50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <blockquote className="text-lg italic">
                "Where algorithms meet empathy, and data understands humanity."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Core Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Core Curriculum</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {coreModules.map((module, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <module.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-logo-navy">{module.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {module.modules.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

      {/* Hands-On Labs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Hands-On Laboratory Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {handsOnLabs.map((lab, index) => (
                <Card key={index} className="p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <lab.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{lab.title}</h3>
                    <p className="text-gray-600">{lab.description}</p>
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Capstone Project Options</h2>
            <div className="space-y-8">
              {capstoneProjects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-logo-navy mb-3">{project.title}</h3>
                      <p className="text-gray-700 mb-3">{project.description}</p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <span className="text-sm font-medium text-blue-700">Tech Stack: </span>
                        <span className="text-sm text-blue-600">{project.techStack}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Industry Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industryApplications.map((application, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-logo-navy mb-3">{application.title}</h3>
                  <p className="text-gray-600">{application.description}</p>
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
                    <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
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

      {/* Technical Excellence */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-logo-navy mb-8">Technical Excellence & Innovation</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-logo-navy mb-2">Programming Languages</h3>
                  <p className="text-gray-600 text-sm">Python, JavaScript, R, MATLAB</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-logo-navy mb-2">Technologies</h3>
                  <p className="text-gray-600 text-sm">TensorFlow, React, MongoDB, Docker</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-logo-navy mb-2">Research Tools</h3>
                  <p className="text-gray-600 text-sm">SPSS, PsychoPy, Eye-tracking, EEG</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details & CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
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
                <p>Maximum 20 Students</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Download Course Guide
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
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

export default BScComputerPsychology;
