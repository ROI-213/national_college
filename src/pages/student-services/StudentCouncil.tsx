import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Users, Megaphone, Shield, User, CheckCircle } from 'lucide-react';

const StudentCouncil = () => {
  const functions = [
    { icon: Megaphone, title: 'Student Voice', description: 'Voice student issues and concerns to college administration.' },
    { icon: Users, title: 'Event Organization', description: 'Organize campus events and cultural activities for all students.' },
    { icon: Shield, title: 'Student Liaison', description: 'Liaise between students and college management on policy decisions.' },
    { icon: Users, title: 'Fundraising', description: 'Coordinate fundraising for student initiatives and causes.' },
    { icon: Megaphone, title: 'Policy Representation', description: 'Represent student interests in institutional governance.' },
    { icon: Shield, title: 'Community Building', description: 'Foster community building and campus spirit among students.' },
  ];

  const leadership = [
    { role: 'President', description: 'Overall leadership and representation' },
    { role: 'Vice President', description: 'Support president and specific portfolios' },
    { role: 'Secretary', description: 'Meeting coordination and documentation' },
    { role: 'Treasurer', description: 'Financial management and budgeting' },
    { role: 'Class Representatives', description: 'Voice of individual classes and departments' },
  ];

  return (
    <StudentServicesLayout pageTitle="Student Council" breadcrumbPath="Student Council">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-medium">Student Representation</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The elected student body representing the campus community, bridging students and 
              administration to create meaningful change and foster campus engagement.
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Leadership Structure</h2>
            <div className="space-y-4">
              {leadership.map((position, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <User className="w-6 h-6 text-logo-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-logo-navy mb-1">{position.role}</h3>
                      <p className="text-muted-foreground">{position.description}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Lead?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Student Council and become the voice of change in our campus community.
            </p>
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default StudentCouncil;
