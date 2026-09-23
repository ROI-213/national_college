import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { HandCoins, BookOpen, Shield, Users, CheckCircle, Briefcase } from 'lucide-react';

const PlacementCell = () => {
  const functions = [
    { icon: Briefcase, title: 'Industry Outreach', description: 'Building and maintaining relationships with top employers and recruiters.' },
    { icon: Users, title: 'Campus Recruitment', description: 'Organizing campus recruitment drives and job fairs for students.' },
    { icon: HandCoins, title: 'Internship Coordination', description: 'Facilitating internship opportunities with leading companies.' },
    { icon: BookOpen, title: 'Skill Development', description: 'Professional skill development, resume building, and interview prep.' },
    { icon: Shield, title: 'Career Counseling', description: 'Personalized career counseling and guidance sessions.' },
    { icon: Users, title: 'Mock Interviews', description: 'Mock interviews, group discussions, and soft skills workshops.' },
  ];

  const outcomes = [
    '85% placement rate for final year students',
    'Average package of ₹4.5 lakhs per annum',
    'Top recruiters from IT, Banking, and Consulting',
    'Internship opportunities with leading companies',
    'Industry mentorship and guidance programs',
    'Alumni network support for job referrals',
  ];

  return (
    <StudentServicesLayout pageTitle="Placement Cell" breadcrumbPath="Placement Cell">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <HandCoins className="w-5 h-5 mr-2" />
              <span className="font-medium">Career Development</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Facilitating student recruitment and career readiness through industry partnerships, 
              professional development, and comprehensive placement support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Core Functions</h2>
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Placement Impact</h2>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Career?</h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with our Placement Cell for industry opportunities and career resources.
            </p>
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
              Register for Placements
            </Button>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default PlacementCell;
