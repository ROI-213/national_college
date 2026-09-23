import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Trophy, Award, CheckCircle, Medal, Target, Bike } from 'lucide-react';

const SportsClub = () => {
  const sports = [
    { icon: Trophy, title: 'Basketball', description: 'Inter-college tournaments, training camps, and competitive leagues.' },
    { icon: Medal, title: 'Football', description: 'Regular practice sessions, friendly matches, and university-level representation.' },
    { icon: Target, title: 'Cricket', description: 'Box cricket, inter-class matches, and cricket coaching programs.' },
    { icon: Bike, title: 'Athletics', description: 'Track and field events, cross-country running, and athletic meets.' },
    { icon: Trophy, title: 'Volleyball & Badminton', description: 'Indoor and outdoor games with competitive and recreational formats.' },
    { icon: Medal, title: 'E-Sports', description: 'Digital gaming championships and e-sports tournament participation.' },
  ];

  const achievements = [
    'University-level representation in multiple sports',
    'Over 50 inter-college tournament victories',
    '300+ active athletes across disciplines',
    '15+ sports offered on campus',
    'Professional coaching and fitness training',
    'Annual sports day with 100+ events organized',
  ];

  return (
    <StudentServicesLayout pageTitle="Sports Club" breadcrumbPath="Sports Club">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Trophy className="w-5 h-5 mr-2" />
              <span className="font-medium">Athletic Excellence</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Multi-sport opportunities across intramurals and outdoor events. Where champions are made 
              and lifelong friendships are forged through the spirit of competition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Sports & Activities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sports.map((sport, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <sport.icon className="w-6 h-6 text-logo-navy" />
                    </div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{sport.title}</h3>
                    <p className="text-muted-foreground text-sm">{sport.description}</p>
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

      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Play Your Best Game?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our athletic community and discover your competitive spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Join Sports Club</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">View Schedule</Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default SportsClub;
