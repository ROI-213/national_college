import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { FileSearch, BookOpen, Shield, CheckCircle, Lightbulb, GraduationCap } from 'lucide-react';

const ResearchPromotionCell = () => {
  const functions = [
    { icon: FileSearch, title: 'Grant Support', description: 'Research grant application support and guidance for faculty and students.' },
    { icon: GraduationCap, title: 'Research Collaboration', description: 'Faculty-student research collaboration facilitation and mentorship.' },
    { icon: BookOpen, title: 'Methodology Workshops', description: 'Workshops on research methodology, writing, and publication.' },
    { icon: Lightbulb, title: 'Innovation Showcase', description: 'Innovation showcase and research exhibition events.' },
    { icon: FileSearch, title: 'Publication Assistance', description: 'Journal submission guidance and publication assistance.' },
    { icon: GraduationCap, title: 'Conference Support', description: 'Conference participation and paper presentation support.' },
  ];

  const outcomes = [
    '50+ student research projects annually',
    '20+ faculty-student collaborative publications',
    'Research grants worth ₹10 lakhs secured',
    'International conference presentations by students',
    'Patent applications filed by research teams',
    'Industry partnerships for applied research',
  ];

  return (
    <StudentServicesLayout pageTitle="Research Promotion Cell" breadcrumbPath="Research Promotion Cell">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <FileSearch className="w-5 h-5 mr-2" />
              <span className="font-medium">Research Excellence</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nurturing academic inquiry and fostering a vibrant research culture through grants, 
              collaborations, and innovative scholarly pursuits.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Research Support Functions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {functions.map((func, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <func.icon className="w-6 h-6 text-logo-navy" />
                    </div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{func.title}</h3>
                    <p className="text-muted-foreground text-sm">{func.description}</p>
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Research Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
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
            <h2 className="text-3xl font-bold mb-6">Start Your Research Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our research community and contribute to advancing knowledge.
            </p>
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
              Apply for Research Grant
            </Button>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default ResearchPromotionCell;
