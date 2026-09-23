
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Users, Target, TrendingUp, Lightbulb, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const ManagementDepartment = () => {
  const curriculumHighlights = [
    { icon: Users, title: 'Organizational Behavior', description: 'Understanding human dynamics in workplace settings' },
    { icon: Target, title: 'Strategic Management', description: 'Long-term planning and competitive strategy development' },
    { icon: TrendingUp, title: 'Marketing Management', description: 'Consumer behavior and market analysis techniques' },
    { icon: Lightbulb, title: 'Human Resource Management', description: 'Talent acquisition, development, and retention strategies' }
  ];

  const careerPaths = [
    'Business Manager',
    'Marketing Executive',
    'HR Professional',
    'Management Consultant',
    'Project Manager',
    'Startup Founder',
    'Operations Manager',
    'Business Analyst'
  ];

  const activities = [
    'Case study competitions and analysis',
    'Business simulation games',
    'Guest lectures by industry leaders',
    'Management club activities',
    'Corporate internship programs',
    'Leadership development workshops'
  ];

  return (
    <AcademicsLayout pageTitle="Department of Management" breadcrumbPath="Management" category="Departments">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-logo-navy mb-6">Shaping Tomorrow's Leaders</h2>
                <p className="text-xl text-gray-700 mb-6">
                  The Department of Management offers comprehensive BBA and MBA programs designed to develop 
                  strategic thinking, leadership skills, and business acumen for the dynamic corporate world.
                </p>
                <p className="text-gray-600 mb-8">
                  Our management education combines theoretical foundations with practical applications, 
                  preparing students to lead organizations and drive innovation in various business sectors.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-logo-blue hover:bg-logo-navy">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white">
                    Request Information
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Business team collaboration"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Programs Offered</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                title: 'BBA', 
                duration: '3 Years', 
                description: 'Bachelor of Business Administration with specializations in various management domains',
                highlights: ['Leadership Development', 'Business Analytics', 'Entrepreneurship', 'Digital Marketing']
              },
              { 
                title: 'MBA', 
                duration: '2 Years', 
                description: 'Master of Business Administration for advanced management and leadership roles',
                highlights: ['Strategic Management', 'Corporate Finance', 'Operations Management', 'International Business']
              }
            ].map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-logo-navy text-2xl">{program.title}</CardTitle>
                  <p className="text-logo-blue font-semibold">{program.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Award size={16} className="text-logo-blue" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Core Curriculum Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumHighlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Activities & Learning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Experiential Learning</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-logo-navy mb-6">Beyond the Classroom</h3>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Target size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-logo-navy mb-3">Management Club Activities</h4>
                  <p className="text-gray-700">
                    Our active Management Club organizes regular events, workshops, and competitions 
                    that provide practical exposure to real-world business challenges and solutions.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Management students in presentation"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Career Opportunities</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerPaths.map((career, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow hover:bg-green-500 hover:text-white group">
                  <div className="flex items-center justify-center mb-3">
                    <Briefcase size={24} className="text-green-500 group-hover:text-white" />
                  </div>
                  <p className="font-semibold text-gray-800 group-hover:text-white">{career}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Excellence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-12">Faculty & Leadership</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-logo-navy mb-4">Industry-Academia Excellence</h3>
              <p className="text-gray-700 mb-6">
                Our Management faculty consists of accomplished academicians and industry practitioners 
                who bring cutting-edge knowledge and real-world experience to management education.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <GraduationCap className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">PhD Qualified Faculty</p>
                </div>
                <div>
                  <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Industry Veterans</p>
                </div>
                <div>
                  <BookOpen className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Published Researchers</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Lead the Future of Business</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Develop your leadership potential and business acumen with our comprehensive management programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Start Your Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Campus Visit
            </Button>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default ManagementDepartment;
