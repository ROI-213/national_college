import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Scale, FileText, Shield, User, CheckCircle } from 'lucide-react';

const DisciplinaryCommittee = () => {
  const mandates = [
    { icon: Scale, title: 'Investigation', description: 'Investigate reports of student misconduct thoroughly and fairly.' },
    { icon: Shield, title: 'Corrective Measures', description: 'Apply fair and proportionate corrective measures when warranted.' },
    { icon: FileText, title: 'Academic Integrity', description: 'Maintain campus discipline and academic integrity standards.' },
    { icon: Scale, title: 'Transparent Hearings', description: 'Conduct hearings with transparency and due process.' },
    { icon: Shield, title: 'Code Enforcement', description: 'Enforce college code of conduct uniformly across campus.' },
    { icon: FileText, title: 'Behavioral Guidance', description: 'Provide guidance on behavioral expectations and standards.' },
  ];

  const composition = [
    { role: 'Principal', description: 'Committee Chairperson and final authority' },
    { role: 'Senior Faculty Members', description: 'Academic and behavioral guidance' },
    { role: 'Student Representatives', description: 'Peer perspective and student voice' },
    { role: 'Administrative Officer', description: 'Process coordination and documentation' },
    { role: 'Counselor', description: 'Behavioral assessment and guidance' },
  ];

  return (
    <StudentServicesLayout pageTitle="Disciplinary Committee" breadcrumbPath="Disciplinary Committee">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Scale className="w-5 h-5 mr-2" />
              <span className="font-medium">Campus Discipline</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Maintaining campus decorum and upholding institutional values through fair, 
              transparent disciplinary processes and corrective guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Committee Mandate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mandates.map((mandate, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <mandate.icon className="w-6 h-6 text-logo-navy" />
                    </div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{mandate.title}</h3>
                    <p className="text-muted-foreground text-sm">{mandate.description}</p>
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Committee Composition</h2>
            <div className="space-y-4">
              {composition.map((member, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <User className="w-6 h-6 text-logo-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-logo-navy mb-1">{member.role}</h3>
                      <p className="text-muted-foreground">{member.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Understand Campus Conduct</h2>
            <p className="text-xl mb-8 opacity-90">
              Stay informed about our code of conduct and disciplinary processes.
            </p>
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
              Download Code of Conduct
            </Button>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default DisciplinaryCommittee;
