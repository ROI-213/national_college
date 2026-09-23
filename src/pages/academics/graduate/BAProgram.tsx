import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { TrendingUp, Users, Newspaper, Landmark, Dumbbell, CheckCircle, GraduationCap, Briefcase, BookOpen, Target, Languages } from 'lucide-react';

const specializations = [
  { icon: TrendingUp, title: 'Economics', subtitle: '', description: 'Study micro & macroeconomic theories, public finance, and Indian economic development with optional language elective.' },
  { icon: Users, title: 'Sociology', subtitle: '', description: 'Explore social structures, institutions, cultural dynamics, and contemporary societal issues through empirical research.' },
  { icon: Newspaper, title: 'Journalism', subtitle: '', description: 'Develop skills in media writing, reporting, editing, and digital communication for modern media careers.' },
  { icon: Landmark, title: 'Political Science', subtitle: '', description: 'Understand governance, political theory, international relations, and public administration systems.' },
  { icon: Dumbbell, title: 'Physical Education', subtitle: '', description: 'Combine academic learning with physical education, sports training, and athletic management for holistic development.' },
  { icon: Languages, title: 'Optional Kannada and English', subtitle: '', description: 'Strengthen literary and linguistic foundations through Kannada and English as optional language subjects, building strong reading, writing, and communication skills.' },
];

const whyChoose = [
  { icon: CheckCircle, text: 'Choice-based credit system with flexible electives' },
  { icon: BookOpen, text: 'Strong foundation in critical thinking and analytical skills' },
  { icon: Target, text: 'Ideal preparation for competitive exams like UPSC, KPSC' },
  { icon: Users, text: 'Experienced faculty with industry and research expertise' },
  { icon: GraduationCap, text: 'Pathway to MA, MBA, Law, and other postgraduate programs' },
  { icon: Briefcase, text: 'Internship and fieldwork opportunities across disciplines' },
];

const careers = [
  'Civil Services (IAS, IPS, IFS)',
  'KAS',
  'Journalism & Media',
  'Teaching & Academia',
  'Social Work & NGOs',
  'Public Relations',
  'Sports Management',
  'Content Writing & Editing',
  'Research & Policy Analysis',
  'Law & Advocacy',
  'HR Department',
];

const BAProgram = () => {
  return (
    <AcademicsLayout pageTitle="Bachelor of Arts (B.A)" breadcrumbPath="B.A" category="Graduate Programs">
      {/* Course Overview */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Bachelor of Arts program at National College offers a well-rounded liberal arts education designed to cultivate critical thinking, effective communication, and cultural awareness. With five distinct specializations, students gain deep subject expertise alongside transferable skills valued across industries and higher education pathways.
          </p>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Combinations & Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-logo-blue rounded-full flex items-center justify-center shrink-0">
                    <spec.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-logo-navy">{spec.title}</h3>
                    {spec.subtitle && <span className="text-sm text-logo-blue font-medium">{spec.subtitle}</span>}
                    <p className="text-gray-600 mt-1 text-sm">{spec.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose B.A at National College?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon size={22} className="text-logo-blue shrink-0 mt-0.5" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Career Opportunities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {careers.map((c, i) => (
              <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-4 shadow-sm border">
                <Briefcase size={18} className="text-logo-blue shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default BAProgram;
