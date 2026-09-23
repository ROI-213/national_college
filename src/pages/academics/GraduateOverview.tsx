
import React from 'react';
import { AcademicsLayout } from '../../components/layout/AcademicsLayout';
import { Card } from '../../components/ui/card';
import { BookOpen, Monitor, Calculator, Users, Palette, Atom, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraduateOverview = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'B.A',
      description: 'Bachelor of Arts under SEP',
      link: '/academics/graduate/ba',
      duration: '3 Years',
      specializations: [
        'Economics (Optional Kannada / English)',
        'Sociology',
        'Journalism',
        'Political Science',
        'Sports'
      ]
    },
    {
      icon: Palette,
      title: 'B.Sc. Animation',
      description: 'Bachelor of Science in Animation',
      link: '/academics/graduate/bsc-animation',
      duration: '3 Years',
      specializations: []
    },
    {
      icon: Atom,
      title: 'B.Sc',
      description: 'Bachelor of Science – 6 combinations',
      link: '/academics/graduate/bsc',
      duration: '3 Years',
      specializations: [
        'Chemistry, Botany, Zoology',
        'Physics, Chemistry, Mathematics',
        'Physics, Mathematics, Electronics',
        'Physics, Mathematics, Computer Science',
        'Electronics, Mathematics, Computer Science',
        'Physics, Electronics, Computer Science'
      ]
    },
    {
      icon: Calculator,
      title: 'B.Com - Logistics',
      description: 'Bachelor of Commerce with Logistics specialization',
      link: '/academics/graduate/bcom-logistics',
      duration: '3 Years',
      specializations: [
        'Financial Accounting',
        'Materials Management',
        'Fundamentals of Logistics & Supply Chain',
        'Purchasing & Supply Chain Management',
        'Facilities Management',
        'Managing Procurement Contracts & Relationship',
        'Project Management & Supply Chain Process Redesign',
        'Sourcing for Logistics & Supply Chain Management'
      ]
    },
    {
      icon: Calculator,
      title: 'B.Com - Regular',
      description: 'Bachelor of Commerce',
      link: '/academics/graduate/bcom',
      duration: '3 Years',
      specializations: [
        'Financial Accounting',
        'Corporate Accounting',
        'Financial Management',
        'Income Tax',
        'Goods & Service Tax',
        'Cost Accounting',
        'Corporate Administration',
        'Management Accounting',
        'Financial Analytics & Investment',
        'Principles & Practice of Auditing'
      ]
    },
    {
      icon: Users,
      title: 'BBA in Business Analytics (AICTE)',
      description: 'Bachelor of Business Administration',
      link: '/academics/graduate/bba-business-analytics',
      duration: '3 Years',
      specializations: [
        'Financial Accounting',
        'Business Dynamics & Entrepreneurship',
        'Fundamentals of MS-Excel',
        'Modern Marketing',
        'Fundamentals of Database',
        'Management System & SQL',
        'Advanced Excel',
        'Computer Fundamentals & C Programming',
        'Goods & Service Tax',
        'Data Science Life Cycle',
        'Financial Analytics',
        'Application of Python in Business',
        'Data Warehousing & Data Mining',
        'Marketing Analytics',
        'Business Analytics'
      ]
    },
    {
      icon: Monitor,
      title: 'BCA (AICTE)',
      description: 'Bachelor of Computer Applications',
      link: '/academics/graduate/bca',
      duration: '3 Years',
      specializations: [
        'Artificial Intelligence',
        'Machine Learning',
        'Cloud Computing',
        'Android',
        'Data Mining',
        'Python',
        'Mobile Computing',
        'J2EE',
        'Network Security',
        'Data Security',
        'Blockchain Technology'
      ]
    }
  ];

  const maxVisible = 3;

  return (
    <AcademicsLayout pageTitle="UG Programs (Under SEP)" breadcrumbPath="UG Programs" category="Academics">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-logo-navy mb-3">UG Programs (Under SEP)</h2>
            <div className="w-20 h-1 bg-logo-blue mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build a strong foundation for your career with our comprehensive undergraduate programs
              designed to provide both theoretical knowledge and practical skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Link key={index} to={program.link} className="block group">
                <Card className="border-l-4 border-l-logo-blue p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 min-w-[3.5rem] bg-gradient-to-br from-logo-blue to-logo-navy rounded-xl flex items-center justify-center">
                      <program.icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="text-xl font-bold text-logo-navy">{program.title}</h3>
                        <span className="shrink-0 bg-logo-blue/10 text-logo-navy px-3 py-0.5 rounded-full text-xs font-semibold">
                          {program.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{program.description}</p>

                      {program.specializations.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {program.specializations.slice(0, maxVisible).map((spec, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-xs">
                              {spec}
                            </span>
                          ))}
                          {program.specializations.length > maxVisible && (
                            <span className="bg-logo-blue/10 text-logo-blue px-2.5 py-1 rounded-md text-xs font-medium">
                              +{program.specializations.length - maxVisible} more
                            </span>
                          )}
                        </div>
                      )}

                      <span className="inline-flex items-center gap-1 text-logo-blue font-semibold text-sm group-hover:gap-2 transition-all">
                        Explore <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default GraduateOverview;
