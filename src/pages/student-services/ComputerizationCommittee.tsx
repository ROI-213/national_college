import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Monitor, Database, Cpu, Globe, CheckCircle, Settings } from 'lucide-react';

const activities = [
  { icon: Monitor, title: 'Digital Administration', description: 'Computerization of administrative processes including admissions, attendance, and records.' },
  { icon: Database, title: 'Data Management', description: 'Centralized database systems for student records, examination, and academic data.' },
  { icon: Cpu, title: 'Hardware & Software', description: 'Procurement, installation, and maintenance of computer systems and licensed software.' },
  { icon: Globe, title: 'E-Governance', description: 'Implementing online platforms for academic management and student services.' },
];

const ComputerizationCommittee = () => (
  <StudentServicesLayout pageTitle="Computerization Committee" breadcrumbPath="Computerization">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Settings className="w-5 h-5 mr-2" />
            <span className="font-medium">Digital Transformation</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Computerization Committee oversees the digital transformation of The National College's administrative and academic processes. From maintaining computer infrastructure to implementing e-governance solutions, the committee ensures smooth and efficient operations across all departments.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Key Functions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((a, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <a.icon className="w-6 h-6 text-logo-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-logo-navy mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm">{a.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Digitize all administrative processes', 'Maintain robust IT infrastructure', 'Implement online examination systems', 'Ensure data security and backup', 'Support faculty with digital teaching tools', 'Promote paperless campus initiatives'].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-logo-blue mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Building a Digital Campus</h2>
          <p className="text-xl opacity-90">Embracing technology for a smarter, more efficient institution.</p>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default ComputerizationCommittee;
