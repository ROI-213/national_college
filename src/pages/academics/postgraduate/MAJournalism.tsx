
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Camera, Mic, Edit, Globe, BookOpen, Users } from 'lucide-react';

const MAJournalism = () => {
  const specializations = [
    {
      icon: Camera,
      title: 'Print Media',
      description: 'Newspaper journalism, magazine writing, and editorial skills'
    },
    {
      icon: Mic,
      title: 'Electronic Media',
      description: 'Television and radio broadcasting, production techniques'
    },
    {
      icon: Globe,
      title: 'Digital Media',
      description: 'Online journalism, social media, and multimedia storytelling'
    },
    {
      icon: Edit,
      title: 'Media Research',
      description: 'Audience analysis, media ethics, and communication theory'
    }
  ];

  const curriculum = [
    {
      semester: 'Semester 1',
      subjects: ['Mass Communication Theory', 'Media Law & Ethics', 'Reporting & Editing', 'Media Research Methods']
    },
    {
      semester: 'Semester 2', 
      subjects: ['Broadcast Journalism', 'Digital Media Production', 'Public Relations', 'Media Management']
    },
    {
      semester: 'Semester 3',
      subjects: ['Investigative Journalism', 'Documentary Production', 'Advertising & Marketing', 'International Communication']
    },
    {
      semester: 'Semester 4',
      subjects: ['Dissertation/Project', 'Media Internship', 'Portfolio Development', 'Industry Interface']
    }
  ];

  return (
    <AcademicsLayout pageTitle="MA Journalism & Mass Communication" breadcrumbPath="MA Journalism" category="Postgraduate Programs">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Program Overview */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Advanced Media Studies</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              A comprehensive 2-year postgraduate program combining mass communication theory, research methods, 
              media ethics, and practical skills for leadership roles in journalism, PR, advertising, and academic research.
            </p>
          </div>

          {/* Program Snapshot */}
          <div className="bg-gradient-to-r from-logo-navy/5 to-logo-blue/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-logo-navy mb-6 text-center">Program Snapshot</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-logo-navy mb-2">Duration</h4>
                <p className="text-gray-700">2 Years (4 Semesters)</p>
              </div>
              <div>
                <h4 className="font-semibold text-logo-navy mb-2">Credits</h4>
                <p className="text-gray-700">96 Credits</p>
              </div>
              <div>
                <h4 className="font-semibold text-logo-navy mb-2">Format</h4>
                <p className="text-gray-700">Full-time</p>
              </div>
              <div>
                <h4 className="font-semibold text-logo-navy mb-2">Specializations</h4>
                <p className="text-gray-700">4 Major Tracks</p>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-logo-navy mb-8 text-center">Specialization Tracks</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializations.map((spec, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <spec.icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-logo-navy mb-3">{spec.title}</h4>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Curriculum Breakdown */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-logo-navy mb-8 text-center">Curriculum Structure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {curriculum.map((sem, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-xl font-bold text-logo-navy mb-4">{sem.semester}</h4>
                  <ul className="space-y-2">
                    {sem.subjects.map((subject, subIndex) => (
                      <li key={subIndex} className="flex items-center text-gray-700">
                        <BookOpen size={16} className="text-logo-blue mr-2 flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Experiential Learning */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-3xl font-bold text-logo-navy mb-6 text-center">Experiential Learning</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Users size={48} className="text-logo-blue mx-auto mb-4" />
                <h4 className="font-semibold text-logo-navy mb-2">Newsroom Simulations</h4>
                <p className="text-gray-600">Real-world newsroom experience with deadline pressure</p>
              </div>
              <div className="text-center">
                <Camera size={48} className="text-logo-blue mx-auto mb-4" />
                <h4 className="font-semibold text-logo-navy mb-2">Media Labs</h4>
                <p className="text-gray-600">State-of-the-art equipment for multimedia production</p>
              </div>
              <div className="text-center">
                <Globe size={48} className="text-logo-blue mx-auto mb-4" />
                <h4 className="font-semibold text-logo-navy mb-2">Industry Internships</h4>
                <p className="text-gray-600">Mandatory internships with leading media organizations</p>
              </div>
            </div>
          </div>

          {/* Career Outcomes */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-logo-navy mb-8 text-center">Career Pathways</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-logo-navy mb-4">Media & Journalism</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Political Reporter & Correspondent</li>
                  <li>• News Editor & Content Manager</li>
                  <li>• Broadcast Journalist & Anchor</li>
                  <li>• Digital Media Specialist</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-logo-navy mb-4">Communications & Research</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• PR Specialist & Communications Manager</li>
                  <li>• Media Researcher & Academic</li>
                  <li>• Corporate Communications Executive</li>
                  <li>• Social Media Strategist</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Capstone Project */}
          <div className="bg-logo-navy/5 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-logo-navy mb-4 text-center">Capstone Options</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-logo-navy mb-3">Research Thesis</h4>
                <p className="text-gray-700">Original research project exploring contemporary media issues, communication theory, or industry analysis.</p>
              </div>
              <div>
                <h4 className="font-semibold text-logo-navy mb-3">Professional Portfolio</h4>
                <p className="text-gray-700">Comprehensive portfolio showcasing investigative journalism, multimedia projects, and professional writing samples.</p>
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

export default MAJournalism;
