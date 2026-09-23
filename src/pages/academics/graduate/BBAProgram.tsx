import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Calculator, Rocket, Table2, Megaphone, Database, FileSpreadsheet, Code, Receipt, BarChart, LineChart, Terminal, Warehouse, TrendingUp, CheckCircle, GraduationCap, Briefcase, Target, BookOpen, Users, FileText } from 'lucide-react';

const specializations = [
  { icon: Calculator, title: 'Financial Accounting', description: 'Accounting principles, financial statements, and business bookkeeping.' },
  { icon: Rocket, title: 'Business Dynamics & Entrepreneurship', description: 'Startup ecosystem, business planning, and entrepreneurial thinking.' },
  { icon: Table2, title: 'Fundamentals of MS-EXCEL', description: 'Data management, formulas, pivot tables, and business reporting in Excel.' },
  { icon: Megaphone, title: 'Modern Marketing', description: 'Digital marketing, consumer behavior, and brand management strategies.' },
  { icon: Database, title: 'Fundamentals of DBMS & SQL', description: 'Database design, SQL querying, and data management for business applications.' },
  { icon: FileSpreadsheet, title: 'Advanced Excel', description: 'Advanced functions, macros, VBA, and dashboard creation for analytics.' },
  { icon: Code, title: 'Computer Fundamentals & C Programming', description: 'Programming logic, C language, and computational problem-solving.' },
  { icon: Receipt, title: 'Goods & Service Tax', description: 'GST framework, tax compliance, invoicing, and filing procedures.' },
  { icon: BarChart, title: 'Data Science Life Cycle', description: 'Data collection, cleaning, analysis, visualization, and decision-making.' },
  { icon: LineChart, title: 'Financial Analytics', description: 'Financial modeling, ratio analysis, and data-driven financial decisions.' },
  { icon: Terminal, title: 'Application of Python in Business', description: 'Python programming for business automation and data analysis.' },
  { icon: Warehouse, title: 'Data Warehousing & Data Mining', description: 'Data storage architectures, mining techniques, and pattern discovery.' },
  { icon: TrendingUp, title: 'Marketing Analytics', description: 'Customer analytics, campaign measurement, and market research tools.' },
  { icon: BarChart, title: 'Business Analytics', description: 'Leverage data-driven insights for strategic business decisions, forecasting, and performance optimization.' },
];

const whyChoose = [
  { icon: CheckCircle, text: '13 specialized subjects blending business with technology' },
  { icon: BookOpen, text: 'Practical, industry-relevant curriculum with hands-on projects' },
  { icon: Target, text: 'Strong focus on data analytics and digital business skills' },
  { icon: Users, text: 'Experienced faculty from management and IT backgrounds' },
  { icon: GraduationCap, text: 'Pathway to MBA, PGDM, and professional certifications' },
  { icon: Briefcase, text: 'Internship programs with corporate and startup partners' },
];

const careers = [
  'Business Analyst',
  'Marketing Manager',
  'Operations Manager',
  'Financial Analyst',
  'Entrepreneur / Startup Founder',
  'Data Analyst',
  'HR Manager',
  'Sales Executive',
];

const BBAProgram = () => {
  return (
    <AcademicsLayout pageTitle="BBA in Business Analytics" breadcrumbPath="BBA in Business Analytics (AICTE)" category="Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The BBA program at National College prepares students for management roles through a unique curriculum that integrates core business administration with data analytics, programming, and digital marketing. With 13 specialized subjects, graduates are equipped for leadership in both traditional and tech-driven business environments.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-logo-blue rounded-full flex items-center justify-center shrink-0">
                    <spec.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-logo-navy">{spec.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{spec.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose BBA in Business Analytics (AICTE) at National College?</h2>
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

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Activities</h2>
          <div className="flex justify-center">
            <a
              href="/BBA-Activities-Updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open BBA Activities PDF in new tab"
              className="group inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-logo-blue/10 hover:border-logo-blue hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <FileText size={56} className="text-logo-blue group-hover:text-logo-navy transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default BBAProgram;
