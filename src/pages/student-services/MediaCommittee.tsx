import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Camera, Video, Newspaper, Share2, CheckCircle, Megaphone } from 'lucide-react';

const activities = [
  { icon: Camera, title: 'Event Photography', description: 'Documenting college events, functions, and academic activities through professional photography.' },
  { icon: Video, title: 'Video Production', description: 'Creating promotional videos, event coverage, and educational content for the institution.' },
  { icon: Newspaper, title: 'Press Releases', description: 'Drafting and distributing press releases and media communications for college events.' },
  { icon: Share2, title: 'Social Media', description: 'Managing the college\'s social media presence and digital communication channels.' },
];

const MediaCommittee = () => (
  <StudentServicesLayout pageTitle="Media Committee" breadcrumbPath="Media Committee">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Megaphone className="w-5 h-5 mr-2" />
            <span className="font-medium">Communication & Outreach</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Media Committee manages all aspects of the college's media presence and communication. From event photography to social media management, the committee ensures that the achievements and activities of The National College reach a wider audience.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Responsibilities</h2>
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
            {['Document all major college events professionally', 'Maintain an active and engaging social media presence', 'Create promotional content for admissions and outreach', 'Build media relations with local and national press', 'Train students in media production skills', 'Archive institutional media for posterity'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Telling Our Story</h2>
          <p className="text-xl opacity-90">Showcasing the vibrant life and achievements of The National College.</p>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default MediaCommittee;
