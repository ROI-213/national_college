import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { BarChart3, Target, FileCheck, Users, CheckCircle, Award } from 'lucide-react';

const activities = [
  { icon: Target, title: 'Quality Assurance', description: 'Developing and implementing quality benchmarks for academic and administrative processes.' },
  { icon: BarChart3, title: 'Performance Review', description: 'Regular assessment of teaching quality, student feedback, and institutional performance.' },
  { icon: FileCheck, title: 'Accreditation Support', description: 'Preparing documentation and coordinating with NAAC and other accreditation bodies.' },
  { icon: Users, title: 'Stakeholder Engagement', description: 'Involving faculty, students, and industry partners in quality improvement initiatives.' },
];

const IqacCommittee = () => (
  <StudentServicesLayout pageTitle="IQAC Committee" breadcrumbPath="IQAC Committee">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Award className="w-5 h-5 mr-2" />
            <span className="font-medium">Quality Excellence</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Internal Quality Assurance Cell (IQAC) works towards maintaining and enhancing the quality of education at The National College. The committee ensures continuous improvement in academic, administrative, and research activities through systematic planning and evaluation.
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
            {['Ensure continuous quality improvement', 'Prepare for NAAC accreditation cycles', 'Promote research and innovation culture', 'Enhance teaching-learning processes', 'Implement best practices in governance', 'Develop institutional development plans'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Committed to Excellence</h2>
          <p className="text-xl opacity-90">Driving quality and innovation in every aspect of education.</p>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default IqacCommittee;
