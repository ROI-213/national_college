import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Drama, Mic, Users, Award, CheckCircle, Clapperboard } from 'lucide-react';

const DramaTheatre = () => {
  const activities = [
    { icon: Drama, title: 'Stage Productions', description: 'Full-length plays and one-act performances covering classical and modern theatre.' },
    { icon: Mic, title: 'Theatre Workshops', description: 'Acting, voice modulation, and stagecraft workshops led by theatre professionals.' },
    { icon: Clapperboard, title: 'Street Theatre', description: 'Nukkad Natak performances addressing social issues and community awareness.' },
    { icon: Users, title: 'Improv Sessions', description: 'Regular improvisation and script reading sessions to hone acting skills.' },
    { icon: Award, title: 'Inter-College Competitions', description: 'Participation in prestigious inter-college drama and theatre festivals.' },
    { icon: Drama, title: 'Annual Theatre Fest', description: 'College-wide theatre festival featuring multiple performances and competitions.' },
  ];

  const engagementPoints = [
    'Open auditions for all students regardless of experience',
    'Backstage crew opportunities in lighting, sound, and set design',
    'Script writing and direction mentorship programs',
    'Costume and makeup design workshops',
    'Collaboration with professional theatre groups',
    'Annual theatre appreciation and film screening events',
  ];

  return (
    <StudentServicesLayout pageTitle="Drama & Theatre" breadcrumbPath="Drama & Theatre">
      {/* About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Drama className="w-5 h-5 mr-2" />
              <span className="font-medium">The Art of Performance</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Drama & Theatre Club at The National College provides a creative space for students 
              to explore the performing arts. From classical Indian theatre to contemporary experimental 
              performances, our club fosters artistic expression, teamwork, and confidence through 
              the transformative power of theatre.
            </p>
          </div>
        </div>
      </section>

      {/* Theatre Workshops & Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Workshops & Performances</h2>
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

      {/* Student Engagement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Student Engagement</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {engagementPoints.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Step Into the Spotlight</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you want to act, direct, or work behind the scenes — there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
                Join the Club
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">
                View Past Performances
              </Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default DramaTheatre;
