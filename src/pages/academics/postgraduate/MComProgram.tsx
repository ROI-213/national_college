import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Calculator, TrendingUp, BarChart, FileText, BookOpen, Users, CheckCircle, GraduationCap, Briefcase, Target } from 'lucide-react';

const highlights = [
  { icon: Calculator, title: 'Advanced Accounting', description: 'Corporate accounting, international accounting standards, and advanced financial reporting.' },
  { icon: TrendingUp, title: 'Financial Management', description: 'Strategic financial planning, investment management, and capital market analysis.' },
  { icon: BarChart, title: 'Research Methodology', description: 'Quantitative and qualitative research methods for commerce and business studies.' },
  { icon: FileText, title: 'Taxation & Auditing', description: 'Advanced direct and indirect taxation, audit procedures, and forensic accounting.' },
  { icon: BookOpen, title: 'Business Law & Ethics', description: 'Corporate law, governance frameworks, and ethical business practices.' },
  { icon: Users, title: 'Marketing & HRM', description: 'Strategic marketing management and human resource development practices.' },
];

const whyChoose = [
  { icon: CheckCircle, text: 'Advanced commerce education building on B.Com foundations' },
  { icon: BookOpen, text: 'Research-oriented curriculum with dissertation component' },
  { icon: Target, text: 'Preparation for UGC NET, SET, and doctoral programs' },
  { icon: Users, text: 'Faculty with doctoral degrees and professional certifications' },
  { icon: GraduationCap, text: 'Pathway to Ph.D in Commerce, MBA, and academic careers' },
  { icon: Briefcase, text: 'Placement support with financial institutions and corporates' },
];

const careers = [
  'Chartered Accountant',
  'University Lecturer',
  'Financial Controller',
  'Tax Advisor',
  'Research Analyst',
  'Corporate Auditor',
  'Banking Manager',
  'Business Consultant',
];

const MComProgram = () => {
  return (
    <AcademicsLayout pageTitle="Master of Commerce (M.Com)" breadcrumbPath="M.Com" category="Post Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The M.Com program provides advanced knowledge in accounting, finance, taxation, and business management. Designed for students aspiring to academic careers, professional certifications, or leadership roles in finance and commerce, the program emphasizes research skills and analytical thinking.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Program Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-logo-blue rounded-full flex items-center justify-center shrink-0">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-logo-navy">{item.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose M.Com at National College?</h2>
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

export default MComProgram;
