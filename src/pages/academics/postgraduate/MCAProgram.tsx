import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Code, Database, Cloud, Brain, Shield, Smartphone, CheckCircle, GraduationCap, Briefcase, Target, BookOpen, Users, Sparkles, ArrowRight, Download, Eye } from 'lucide-react';

const highlights = [
  { icon: Code, title: 'Advanced Programming', description: 'Java, Python, C#, and modern frameworks for enterprise application development.' },
  { icon: Database, title: 'Database & Big Data', description: 'Advanced DBMS, data warehousing, big data analytics, and NoSQL technologies.' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'Cloud infrastructure, containerization, CI/CD pipelines, and microservices architecture.' },
  { icon: Brain, title: 'AI & Machine Learning', description: 'Deep learning, NLP, computer vision, and intelligent system development.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Network security, ethical hacking, cryptography, and security governance.' },
  { icon: Smartphone, title: 'Mobile & Web Technologies', description: 'Full-stack development, React, Flutter, and progressive web applications.' },
];

const whyChoose = [
  { icon: CheckCircle, text: 'AICTE-approved program with industry-aligned curriculum' },
  { icon: BookOpen, text: 'Advanced lab infrastructure with latest technologies' },
  { icon: Target, text: 'Capstone project and industry internship in final semester' },
  { icon: Users, text: 'Faculty with Ph.D qualifications and IT industry experience' },
  { icon: GraduationCap, text: 'Pathway to Ph.D in Computer Science and research careers' },
  { icon: Briefcase, text: 'Excellent placement record with top IT companies' },
];

const careers = [
  'Software Architect',
  'Full-Stack Developer',
  'Data Engineer',
  'Cloud Solutions Architect',
  'AI/ML Engineer',
  'Cybersecurity Consultant',
  'IT Project Manager',
  'Technical Lead',
];

const MCAProgram = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/admissions/mca-application');
  };

  return (
    <AcademicsLayout pageTitle="MCA (AICTE)" breadcrumbPath="MCA (AICTE)" category="Post Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-300 text-xs font-semibold mb-3">
            <Sparkles size={14} className="text-amber-600" />
            Admissions Open for MCA 2026-27 Batch
          </div>
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The AICTE-approved MCA program provides advanced computer science education focusing on software development, AI, cloud computing, and cybersecurity. Designed for graduates seeking leadership roles in the IT industry, the program combines theoretical depth with extensive hands-on project experience.
          </p>
          <div>
            <Button
              onClick={handleApplyClick}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <GraduationCap size={18} />
              <span>Apply for MCA 2026-27 Admission</span>
              <ArrowRight size={16} />
            </Button>
          </div>
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
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose MCA at National College?</h2>
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
 
      {/* MCA Brochure Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-logo-navy mb-3">
            <Sparkles size={14} className="text-logo-blue" />
            Admissions 2026-27 | PGCET College Code: C608
          </div>
          <h2 className="text-3xl font-bold text-logo-navy mb-2">MCA Brocher</h2>
          <p className="text-gray-600 mb-6 text-sm max-w-xl mx-auto">
            Explore the official admission brochure for the Master of Computer Applications (MCA) 2-Year Postgraduate Programme.
          </p>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/mca-brochure.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-logo-navy hover:bg-logo-navy-dark text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm"
            >
              <Eye size={17} />
              <span>View MCA Brocher</span>
            </a>
            <a
              href="/mca-brochure.jpg"
              download="MCA-Brochure-2026-27.jpg"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm"
            >
              <Download size={17} />
              <span>Download MCA Brocher</span>
            </a>
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

      {/* MCA Admission CTA Section */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <Sparkles size={14} className="text-amber-600" />
            Admissions Open for MCA 2026-27 Batch
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-logo-navy mb-3">
            Ready to Apply for MCA?
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base max-w-xl mx-auto">
            Take the first step towards joining our AICTE-approved MCA programme at The National College, Basavanagudi.
          </p>
          <Button
            onClick={() => navigate('/admissions/mca-application')}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 text-base"
          >
            <GraduationCap size={19} />
            <span>Apply for MCA 2026-27 Admission</span>
            <ArrowRight size={17} />
          </Button>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default MCAProgram;
