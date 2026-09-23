import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { MessageSquare, Shield, FileText, Users, CheckCircle, Scale } from 'lucide-react';

const activities = [
  { icon: MessageSquare, title: 'Complaint Resolution', description: 'Structured process for receiving, investigating, and resolving student grievances.' },
  { icon: Shield, title: 'Confidential Handling', description: 'Ensuring privacy and confidentiality in all grievance proceedings.' },
  { icon: FileText, title: 'Documentation', description: 'Systematic recording and tracking of complaints and their resolutions.' },
  { icon: Users, title: 'Mediation Services', description: 'Facilitating dialogue and mediation between concerned parties for amicable resolution.' },
];

const GrievanceCell = () => (
  <StudentServicesLayout pageTitle="Grievance Redressal Cell" breadcrumbPath="Grievance Redressal">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Scale className="w-5 h-5 mr-2" />
            <span className="font-medium">Fair & Transparent Resolution</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Grievance Redressal Cell provides a transparent and efficient mechanism for students, staff, and parents to voice their concerns. The cell ensures that all complaints are addressed promptly and fairly, maintaining a harmonious campus environment.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">How It Works</h2>
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
            {['Provide a platform for voicing concerns', 'Ensure timely resolution of grievances', 'Maintain confidentiality and fairness', 'Promote a harmonious campus environment', 'Document and track complaint patterns', 'Implement preventive measures'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Your Voice Matters</h2>
          <p className="text-xl mb-8 opacity-90">We are committed to addressing your concerns with fairness and transparency.</p>
          <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Submit a Grievance</Button>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default GrievanceCell;
