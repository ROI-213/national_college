import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Building2, Users, ClipboardList, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommitteesOverview = () => {
  const committees = [
    { name: 'Anti-Ragging Committee', description: 'Ensures a ragging-free campus with zero-tolerance enforcement and student safety.', href: '/student-services/anti-ragging', icon: Shield },
    { name: 'Disciplinary Committee', description: 'Maintains campus discipline through fair processes and corrective guidance.', href: '/student-services/disciplinary', icon: ClipboardList },
    { name: 'SC/ST Cell', description: 'Supports SC/ST students through counseling, grievance redressal, and scholarship facilitation.', href: '/student-services/sc-st', icon: Users },
    { name: 'Student Council', description: 'Elected student body representing campus community and bridging students with administration.', href: '/student-services/council', icon: Users },
    { name: 'Hostel Committee', description: 'Manages hostel operations, student welfare, and residential life.', href: '/student-services/hostel-committee', icon: Building2 },
    { name: 'Website Committee', description: 'Manages college website content, updates, and technical maintenance.', href: '/student-services/website-committee', icon: Building2 },
  ];

  const roles = [
    'Policy development and institutional governance support',
    'Student grievance redressal and conflict resolution',
    'Event planning, coordination, and execution',
    'Compliance with UGC and university guidelines',
    'Student welfare and safety monitoring',
    'Liaison between students and college administration',
  ];

  return (
    <StudentServicesLayout pageTitle="Committees" breadcrumbPath="Committees">
      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Building2 className="w-5 h-5 mr-2" />
              <span className="font-medium">Institutional Governance</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The National College operates through a robust committee structure that ensures transparent 
              governance, student welfare, and institutional excellence. Each committee plays a vital role 
              in maintaining the college's standards and supporting the student community.
            </p>
          </div>
        </div>
      </section>

      {/* Committee Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Our Committees</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.map((committee, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <committee.icon className="w-6 h-6 text-logo-navy" />
                    </div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{committee.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{committee.description}</p>
                    <Link to={committee.href} className="text-logo-blue hover:text-logo-navy text-sm font-medium inline-flex items-center">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Responsibilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Roles & Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {roles.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-logo-blue mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved in Campus Governance</h2>
            <p className="text-xl mb-8 opacity-90">
              Student participation in committees is encouraged. Make your voice heard.
            </p>
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
              Contact Administration
            </Button>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default CommitteesOverview;
