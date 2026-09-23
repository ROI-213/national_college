import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Calculator, Building, TrendingUp, Receipt, FileText, PieChart, Users, BarChart, LineChart, Search, CheckCircle, GraduationCap, Briefcase, Target, BookOpen } from 'lucide-react';

const specializations = [
  { icon: Calculator, title: 'Financial Accounting', description: 'Preparation of financial statements, ledger management, and accounting standards.' },
  { icon: Building, title: 'Corporate Accounting', description: 'Company accounts, mergers, amalgamations, and holding company procedures.' },
  { icon: TrendingUp, title: 'Financial Management', description: 'Capital budgeting, working capital management, and investment decisions.' },
  { icon: Receipt, title: 'Income Tax', description: 'Tax computation, assessment procedures, deductions, and tax planning.' },
  { icon: FileText, title: 'Goods & Service Tax', description: 'GST framework, registration, invoicing, returns, and compliance procedures.' },
  { icon: PieChart, title: 'Cost Accounting', description: 'Cost analysis, budgeting, variance analysis, and cost control techniques.' },
  { icon: Users, title: 'Corporate Administration', description: 'Corporate governance, company law, regulatory compliance, and business ethics.' },
  { icon: BarChart, title: 'Management Accounting', description: 'Decision-making tools, ratio analysis, fund flow, and cash flow statements.' },
  { icon: LineChart, title: 'Financial Analytics & Investment', description: 'Investment analysis, portfolio management, stock markets, and financial modeling.' },
  { icon: Search, title: 'Principles & Practice of Auditing', description: 'Audit planning, internal controls, verification procedures, and audit reports.' },
];

const whyChoose = [
  { icon: CheckCircle, text: 'Comprehensive curriculum covering 10 specialization areas' },
  { icon: BookOpen, text: 'Strong focus on practical accounting and tax applications' },
  { icon: Target, text: 'Ideal foundation for CA, CMA, and CS professional courses' },
  { icon: Users, text: 'Faculty with chartered accountancy and industry experience' },
  { icon: GraduationCap, text: 'Pathway to M.Com, MBA, and professional certifications' },
  { icon: Briefcase, text: 'Placement assistance with top accounting and finance firms' },
];

const careers = [
  'Chartered Accountant',
  'Tax Consultant',
  'Financial Analyst',
  'Cost Accountant',
  'Auditor',
  'Banking & Insurance',
  'Corporate Finance Manager',
  'GST Practitioner',
];

const BComProgram = () => {
  return (
    <AcademicsLayout pageTitle="B.Com - Regular" breadcrumbPath="B.Com" category="Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The B.Com Regular program delivers comprehensive business education spanning accounting, finance, taxation, and corporate administration. With ten specialized subjects, students build a strong foundation for professional careers in commerce, banking, and finance, or for pursuing CA/CS/CMA certifications.
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
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose B.Com at National College?</h2>
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

export default BComProgram;
