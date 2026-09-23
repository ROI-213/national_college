import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Film, Star, Award, CheckCircle, Clapperboard, Tv } from 'lucide-react';

const FilmClub = () => {
  const activities = [
    { icon: Film, title: 'Film Screenings', description: 'Themed film screenings and post-screening discussions across genres.' },
    { icon: Clapperboard, title: 'Short Film Production', description: 'Student-produced short films with mentorship on scripting, filming, and editing.' },
    { icon: Tv, title: 'Script Writing', description: 'Workshops on screenplay writing, dialogue, and story structure.' },
    { icon: Star, title: 'Cinema Trivia', description: 'Fun quiz events and trivia nights celebrating world cinema.' },
    { icon: Award, title: 'Festival Submissions', description: 'Submitting student films to local and national film festivals.' },
    { icon: Film, title: 'Creative Editing', description: 'Film mashups and creative editing sessions using professional tools.' },
  ];

  const achievements = [
    'Over 25 short films produced by student teams',
    'Participation in national film festival competitions',
    '100+ active members across all departments',
    'Regular collaboration with professional filmmakers',
    'Annual film appreciation and screening fest',
    'Portfolio development support for media careers',
  ];

  return (
    <StudentServicesLayout pageTitle="Film Club" breadcrumbPath="Film Club (Cinephelics)">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Film className="w-5 h-5 mr-2" />
              <span className="font-medium">Cinephelics</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A vibrant cinema society exploring the art of film through screenings, creative discussions, 
              and hands-on production. Where passion for cinema meets creative expression.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Club Activities & Events</h2>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Create Cinema Magic?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of film enthusiasts and turn your passion into creative reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Join Film Club</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">View Our Films</Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default FilmClub;
