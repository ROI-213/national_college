import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Handshake, Users, BookOpen, Shield, CheckCircle } from 'lucide-react';

const AlumniAssociation = () => {
  const activities = [
    { icon: Handshake, title: 'Networking Meets', description: 'Alumni networking meets and reunions connecting graduates across industries.' },
    { icon: Users, title: 'Mentorship Programs', description: 'Connecting alumni with current students for career guidance and mentorship.' },
    { icon: BookOpen, title: 'Guest Lectures', description: 'Distinguished alumni sharing industry insights and professional experiences.' },
    { icon: Shield, title: 'Fundraising', description: 'Fundraising for college development projects and student scholarships.' },
    { icon: Users, title: 'Career Guidance', description: 'Professional development sessions and industry trend workshops.' },
    { icon: Handshake, title: 'Industry Insights', description: 'Workshops sharing the latest industry insights and career opportunities.' },
  ];

  const impact = [
    'Over 500 active alumni members worldwide',
    'Monthly mentorship sessions for current students',
    'Annual scholarship fund worth ₹5 lakhs',
    'Industry placement support and referrals',
    'Research collaboration opportunities',
    'Global networking across diverse industries',
  ];

  return (
    <StudentServicesLayout pageTitle="Alumni Association" breadcrumbPath="Alumni Association">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Handshake className="w-5 h-5 mr-2" />
              <span className="font-medium">Alumni Network</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Connecting past and present students for mentoring, networking, and lifelong engagement. 
              Building bridges between generations of achievers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Activities & Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <activity.icon className="w-6 h-6 text-logo-navy" />
                    </div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground text-sm">{activity.description}</p>
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {impact.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Alumni Family</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with fellow graduates, mentor current students, and stay engaged with your alma mater.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Join Alumni Network</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">Become a Mentor</Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default AlumniAssociation;
