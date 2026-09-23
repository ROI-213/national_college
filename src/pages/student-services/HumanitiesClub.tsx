import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { BookOpen, Landmark, GraduationCap, MessageCircle, CheckCircle, Globe } from 'lucide-react';

const HumanitiesClub = () => {
  const activities = [
    { icon: BookOpen, title: 'Seminars & Talks', description: 'Academic seminars on philosophy, history, literature, and social thought.' },
    { icon: MessageCircle, title: 'Discussion Forums', description: 'Open discussions on ethics, culture, identity, and contemporary issues.' },
    { icon: Landmark, title: 'Heritage Visits', description: 'Visits to museums, historical sites, and cultural institutions.' },
    { icon: GraduationCap, title: 'Academic Workshops', description: 'Workshops on critical thinking, academic writing, and research methods.' },
    { icon: Globe, title: 'Cultural Studies', description: 'Exploring diverse cultures, traditions, and their impact on modern society.' },
    { icon: BookOpen, title: 'Book Clubs', description: 'Monthly reading circles discussing classic and contemporary works.' },
  ];

  const culturalStudies = [
    'Interdisciplinary approaches to understanding culture',
    'Comparative religion and philosophy sessions',
    'Language and literature appreciation programs',
    'History and heritage documentation projects',
    'Art history and aesthetics workshops',
    'Collaboration with other humanities departments',
  ];

  return (
    <StudentServicesLayout pageTitle="Humanities Club" breadcrumbPath="Humanities Club">
      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Landmark className="w-5 h-5 mr-2" />
              <span className="font-medium">Exploring the Human Experience</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Humanities Club is dedicated to exploring the breadth of human thought, culture, and 
              creativity. Through discussions, seminars, and cultural excursions, we encourage students 
              to think critically, appreciate diversity, and engage with the world's intellectual traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Discussions & Seminars */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Discussions & Seminars</h2>
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

      {/* Cultural Studies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Cultural Studies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {culturalStudies.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Expand Your Horizons</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Humanities Club and engage with ideas that have shaped civilizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
                Join Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">
                Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default HumanitiesClub;
