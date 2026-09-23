import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Newspaper, Camera, Mic, FileText, CheckCircle, Pen } from 'lucide-react';

const JournoClub = () => {
  const activities = [
    { icon: Newspaper, title: 'News Reporting', description: 'Campus news coverage, event reporting, and feature writing by student journalists.' },
    { icon: Camera, title: 'Photojournalism', description: 'Visual storytelling through photography, capturing campus life and events.' },
    { icon: Mic, title: 'Broadcasting & Podcasts', description: 'Student-run podcasts and broadcasting covering campus and current affairs.' },
    { icon: FileText, title: 'Publications', description: 'College magazine, newsletters, and digital content creation by students.' },
    { icon: Pen, title: 'Editorial Workshops', description: 'Workshops on editing, layout design, and journalistic writing standards.' },
    { icon: Newspaper, title: 'Media Visits', description: 'Visits to media houses, newsrooms, and press conferences for real-world exposure.' },
  ];

  const publications = [
    'Annual college magazine — "The National Voice"',
    'Monthly newsletters covering campus events',
    'Digital blog and social media content',
    'Event coverage and photo essays',
    'Student opinion columns and editorials',
    'Department-specific newsletters and bulletins',
  ];

  return (
    <StudentServicesLayout pageTitle="Journalism Club" breadcrumbPath="Journalism Club">
      {/* About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Newspaper className="w-5 h-5 mr-2" />
              <span className="font-medium">Report. Write. Inspire.</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Journalism Club at The National College is a hub for aspiring journalists, writers, and 
              media enthusiasts. We train students in news reporting, editorial writing, photojournalism, 
              and digital media — equipping them with skills for the evolving media landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Media Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Media Activities</h2>
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

      {/* Publications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Publications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {publications.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Tell Stories That Matter</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Journalism Club and develop your voice as a writer, reporter, or media creator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
                Join the Club
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">
                Read Publications
              </Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default JournoClub;
