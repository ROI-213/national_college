
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { BookOpen, Users, Globe, Brain, Award, GraduationCap, Briefcase, Heart } from 'lucide-react';

const HumanitiesDepartment = () => {
  const curriculumHighlights = [
    { icon: BookOpen, title: 'History & Heritage', description: 'Understanding historical contexts and cultural evolution' },
    { icon: Brain, title: 'Psychology', description: 'Human behavior and mental processes analysis' },
    { icon: Users, title: 'Sociology', description: 'Social structures and community dynamics' },
    { icon: Globe, title: 'Economics', description: 'Economic theories and policy analysis' }
  ];

  const careerPaths = [
    'Civil Services (IAS/IPS)',
    'Teaching & Academia',
    'Social Work & NGOs',
    'Research Scholar',
    'Policy Analyst',
    'Journalist',
    'Cultural Officer',
    'Community Development'
  ];

  const activities = [
    'Field research and community studies',
    'Social awareness campaigns',
    'Interdisciplinary seminars',
    'Cultural documentation projects',
    'Policy research initiatives',
    'Community service programs'
  ];

  return (
    <AcademicsLayout pageTitle="Department of Humanities & Social Sciences" breadcrumbPath="Humanities" category="Departments">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-logo-navy mb-6">Understanding Society & Human Nature</h2>
                <p className="text-xl text-gray-700 mb-6">
                  The Department of Humanities & Social Sciences explores the complexities of human behavior, 
                  social structures, and cultural heritage through comprehensive programs in history, economics, 
                  sociology, and psychology.
                </p>
                <p className="text-gray-600 mb-8">
                  Our interdisciplinary approach develops critical thinking, research skills, and social awareness, 
                  preparing students for meaningful careers in public service, academia, and social development.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-logo-blue hover:bg-logo-navy">
                    Explore Programs
                  </Button>
                  <Button variant="outline" className="border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white">
                    Research Opportunities
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Students in library research"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Academic Disciplines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumHighlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-logo-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Methodology */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Research & Methodology</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-logo-navy mb-6">Critical Thinking & Analysis</h3>
                <div className="space-y-4">
                  {[
                    'Qualitative and quantitative research methods',
                    'Social theory and philosophical foundations',
                    'Data collection and statistical analysis',
                    'Ethnographic and fieldwork techniques',
                    'Policy analysis and evaluation',
                    'Interdisciplinary research approaches'
                  ].map((method, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Brain size={20} className="text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Research methodology"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Community & Fieldwork</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Community fieldwork"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-logo-navy mb-6">Practical Learning Experiences</h3>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Heart size={20} className="text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-logo-navy mb-3">Social Impact Projects</h4>
                  <p className="text-gray-700">
                    Students engage in real-world projects addressing social issues, working directly 
                    with communities to understand challenges and develop sustainable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Career Opportunities</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerPaths.map((career, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow hover:bg-purple-500 hover:text-white group">
                  <div className="flex items-center justify-center mb-3">
                    <Briefcase size={24} className="text-purple-500 group-hover:text-white" />
                  </div>
                  <p className="font-semibold text-gray-800 group-hover:text-white">{career}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-logo-navy mb-6">Special Focus: Civil Services Preparation</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <p className="text-gray-700 mb-4">
                Our humanities programs provide excellent foundation for civil services preparation with 
                comprehensive coverage of history, polity, economics, and current affairs.
              </p>
              <Button className="bg-purple-500 hover:bg-purple-600">
                Learn More About UPSC Preparation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Research */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Faculty & Research Excellence</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-logo-navy mb-4">Distinguished Faculty</h3>
              <p className="text-gray-700 mb-6">
                Our faculty members are renowned scholars and researchers who contribute significantly 
                to academic discourse in humanities and social sciences through publications, conferences, and community engagement.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <GraduationCap className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="font-semibold">PhD Scholars</p>
                </div>
                <div>
                  <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="font-semibold">Published Authors</p>
                </div>
                <div>
                  <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="font-semibold">Research Mentors</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Shape Society Through Understanding</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our humanities programs and develop the knowledge and skills to make meaningful contributions to society.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Explore Research Areas
            </Button>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default HumanitiesDepartment;
