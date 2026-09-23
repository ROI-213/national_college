import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Brain, Cpu, Cloud, Smartphone, Database, Terminal, Wifi, Code, Shield, Lock, Link, CheckCircle, GraduationCap, Briefcase, Target, BookOpen, Users } from 'lucide-react';

const specializations = [
  { icon: Brain, title: 'Artificial Intelligence', description: 'Machine perception, natural language processing, and intelligent system design.' },
  { icon: Cpu, title: 'Machine Learning', description: 'Supervised & unsupervised learning, neural networks, and predictive modeling.' },
  { icon: Cloud, title: 'Cloud Computing', description: 'AWS, Azure, GCP fundamentals, cloud architecture, and deployment models.' },
  { icon: Smartphone, title: 'Android', description: 'Mobile app development using Android SDK, Kotlin, and Material Design.' },
  { icon: Database, title: 'Data Mining', description: 'Pattern recognition, clustering, classification, and knowledge discovery.' },
  { icon: Terminal, title: 'Python', description: 'Python programming for automation, data science, and web development.' },
  { icon: Wifi, title: 'Mobile Computing', description: 'Mobile networks, wireless protocols, and pervasive computing systems.' },
  { icon: Code, title: 'J2EE', description: 'Enterprise Java development, servlets, JSP, and web application frameworks.' },
  { icon: Shield, title: 'Network Security', description: 'Firewalls, intrusion detection, cryptography, and secure network design.' },
  { icon: Lock, title: 'Data Security', description: 'Encryption, access control, data privacy, and security compliance.' },
  { icon: Link, title: 'Blockchain Technology', description: 'Distributed ledgers, smart contracts, cryptocurrency, and decentralized apps.' },
];

const whyChoose = [
  { icon: CheckCircle, text: 'AICTE-approved program with 11 cutting-edge specializations' },
  { icon: BookOpen, text: 'Hands-on lab sessions and project-based learning approach' },
  { icon: Target, text: 'Curriculum aligned with industry requirements and emerging technologies' },
  { icon: Users, text: 'Faculty with IT industry experience and research expertise' },
  { icon: GraduationCap, text: 'Pathway to MCA, M.Sc IT, MBA, and global certifications' },
  { icon: Briefcase, text: 'Strong placement record with leading IT companies' },
];

const careers = [
  'Software Developer',
  'AI/ML Engineer',
  'Cloud Architect',
  'Mobile App Developer',
  'Cybersecurity Analyst',
  'Data Scientist',
  'Blockchain Developer',
  'System Administrator',
];

const BCAProgram = () => {
  return (
    <AcademicsLayout pageTitle="BCA (AICTE)" breadcrumbPath="BCA (AICTE)" category="Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The AICTE-approved BCA program offers a comprehensive computer applications curriculum with 11 specialized tracks in emerging technologies. From AI and machine learning to blockchain and cybersecurity, students gain industry-ready skills for thriving careers in the global IT sector.
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
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose BCA at National College?</h2>
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

export default BCAProgram;
