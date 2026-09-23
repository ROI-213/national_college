import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Globe, Users, BarChart3, Heart, CheckCircle, Megaphone } from 'lucide-react';

const SocialScienceClub = () => {
  const activities = [
    { icon: Globe, title: 'Field Activities', description: 'Community visits, social surveys, and field studies on contemporary issues.' },
    { icon: Users, title: 'Panel Discussions', description: 'Expert-led discussions on politics, economics, and social justice topics.' },
    { icon: BarChart3, title: 'Data & Research', description: 'Student-driven social research projects with data collection and analysis.' },
    { icon: Heart, title: 'Awareness Programs', description: 'Campaigns on social issues including gender equality, mental health, and environment.' },
    { icon: Megaphone, title: 'Debates & Seminars', description: 'Regular debates and seminars on current affairs and policy issues.' },
    { icon: Globe, title: 'Cultural Exchange', description: 'Programs promoting cross-cultural understanding and global citizenship.' },
  ];

  const awarenessPrograms = [
    'Mental health awareness and support campaigns',
    'Environmental sustainability and green campus drives',
    'Gender sensitization workshops and sessions',
    'Financial literacy programs for students',
    'Voter awareness and civic responsibility drives',
    'Community outreach and social service initiatives',
  ];

  return (
    <StudentServicesLayout pageTitle="Social Science Club" breadcrumbPath="Social Science Club">
      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-medium">Understanding Society, Shaping Change</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Social Science Club encourages students to engage with society through critical thinking, 
              research, and community involvement. We explore the complex dynamics of human behavior, 
              governance, and social structures to build informed and responsible citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Field Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Field Activities & Events</h2>
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

      {/* Awareness Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Awareness Programs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {awarenessPrograms.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Be the Change You Wish to See</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Social Science Club and contribute to building a more aware and equitable society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
                Participate
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default SocialScienceClub;
