import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Shield, HandHeart, FileText, Users, CheckCircle } from 'lucide-react';

const SCSTCell = () => {
  const functions = [
    { icon: HandHeart, title: 'Academic Counseling', description: 'Counsel and support SC/ST students academically and personally.' },
    { icon: Shield, title: 'Discrimination Monitoring', description: 'Monitor and investigate cases of discrimination on campus.' },
    { icon: FileText, title: 'Complaint Processing', description: 'Process complaints with confidentiality and diligence.' },
    { icon: Users, title: 'Scholarship Facilitation', description: 'Facilitate access to government scholarships and benefits.' },
    { icon: Shield, title: 'Awareness Programs', description: 'Organize programs on rights, opportunities, and empowerment.' },
    { icon: HandHeart, title: 'Career Guidance', description: 'Career counseling and placement support for SC/ST students.' },
  ];

  const services = [
    'Academic mentoring and tutoring support',
    'Grievance redressal within 15-30 days',
    'Scholarship guidance and application assistance',
    'Regular counseling sessions and workshops',
    'Safe reporting mechanisms for discrimination',
    'Career guidance and placement support',
  ];

  return (
    <StudentServicesLayout pageTitle="SC/ST Cell" breadcrumbPath="SC/ST Cell">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-medium">Student Rights & Support</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upholding the rights of SC/ST students through dedicated support, academic guidance, 
              and safe reporting mechanisms for a discrimination-free campus environment.
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Student Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Need Support or Want to Report?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our dedicated team ensures your rights are protected and concerns are addressed.
            </p>
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
              Report a Grievance
            </Button>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default SCSTCell;
