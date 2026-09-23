import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Music, Palette, PartyPopper, Star, Users, Award, CheckCircle } from 'lucide-react';

const CulturalClub = () => {
  const activities = [
    { icon: Music, title: 'Music Performances', description: 'Solo and group performances across classical, folk, and contemporary genres.' },
    { icon: Palette, title: 'Art & Craft Exhibitions', description: 'Showcasing student creativity through painting, sculpture, and mixed media.' },
    { icon: PartyPopper, title: 'Festival Celebrations', description: 'Grand celebrations of national and regional festivals with cultural programs.' },
    { icon: Users, title: 'Dance Competitions', description: 'Inter-class and inter-college dance competitions across multiple styles.' },
    { icon: Star, title: 'Talent Shows', description: 'Platform for students to showcase unique talents and creative abilities.' },
    { icon: Award, title: 'Cultural Fests', description: 'Annual cultural festival with events spanning multiple days and categories.' },
  ];

  const achievements = [
    'First prize in Inter-College Cultural Fest 2024',
    'Best Cultural Club Award by Bengaluru University',
    'Over 500 students participate in annual cultural events',
    'Represented college in state-level cultural competitions',
    'Organized 20+ cultural events annually',
    'Collaborated with professional artists for workshops',
  ];

  return (
    <StudentServicesLayout pageTitle="Cultural Club" breadcrumbPath="Cultural Club">
      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Music className="w-5 h-5 mr-2" />
              <span className="font-medium">Celebrating Diversity Through Art</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Cultural Club of The National College is a vibrant platform that nurtures artistic talent 
              and celebrates the rich cultural diversity of our student community. Through music, dance, drama, 
              and visual arts, we provide students with opportunities to express themselves creatively, build 
              confidence, and develop a deeper appreciation for India's cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Activities & Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Activities & Events</h2>
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

      {/* Student Participation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Student Participation</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <Card className="p-6">
                <div className="text-3xl font-bold text-logo-blue mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold text-logo-blue mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Annual Events</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold text-logo-blue mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Art Forms</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold text-logo-blue mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Join the Cultural Club</h2>
            <p className="text-xl mb-8 opacity-90">
              Unleash your creativity and be part of a vibrant community that celebrates art and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
                Join Now
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

export default CulturalClub;
