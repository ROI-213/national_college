
import React from 'react';
import { AcademicsLayout } from '../../components/layout/AcademicsLayout';
import { Card } from '../../components/ui/card';
import { Calculator, Monitor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PostgraduateOverview = () => {
  const programs = [
    {
      icon: Calculator,
      title: 'M.Com',
      description: 'Master of Commerce – Advance your expertise in accounting, finance, and business management with research-oriented learning.',
      link: '/academics/postgraduate/mcom',
      duration: '2 Years',
    },
    {
      icon: Monitor,
      title: 'MCA (AICTE)',
      description: 'Master of Computer Applications – Develop advanced computing skills with industry-aligned curriculum and practical training.',
      link: '/academics/postgraduate/mca',
      duration: '2 Years',
    }
  ];

  return (
    <AcademicsLayout pageTitle="Post Graduate Programs" breadcrumbPath="Post Graduate Programs" category="Academics">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-logo-navy mb-3">Post Graduate Programs</h2>
            <div className="w-20 h-1 bg-logo-blue mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advance your expertise with our specialized postgraduate programs that combine
              rigorous academic study with practical application and research opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <Link key={index} to={program.link} className="block group">
                <Card className="border-l-4 border-l-logo-blue p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-logo-blue to-logo-navy rounded-xl flex items-center justify-center">
                      <program.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-logo-navy">{program.title}</h3>
                        <span className="bg-logo-blue/10 text-logo-navy px-3 py-0.5 rounded-full text-xs font-semibold">
                          {program.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-5">{program.description}</p>
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

export default PostgraduateOverview;
