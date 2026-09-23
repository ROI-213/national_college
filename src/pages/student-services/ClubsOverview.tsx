import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Users, Target, Leaf, Briefcase, Camera, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ClubsOverview = () => {
  const majorClubs = [
    { name: 'Cultural Club', description: 'Celebrating diversity through music, dance, art, and festival celebrations.', icon: Users, href: '/student-services/cultural-club', },
    { name: 'Drama & Theatre', description: 'Exploring performing arts through productions, workshops, and street theatre.', icon: Users, href: '/student-services/drama-theatre', },
    { name: 'Literary Club', description: 'Fostering literary critique, creative writing, and the art of storytelling.', icon: Users, href: '/student-services/literary', },
    { name: 'Science Club', description: 'Discovering through experiments, research projects, and innovation challenges.', icon: Target, href: '/student-services/science-club', },
    { name: 'Film Club (Cinephelics)', description: 'Cinema appreciation and creation hub for film enthusiasts.', icon: Film, href: '/student-services/film', },
    { name: 'Health Club', description: 'Promoting physical and mental wellness through exercise and workshops.', icon: Leaf, href: '/student-services/health', },
    { name: 'Sports Club', description: 'Multi-sport opportunities across intramurals and outdoor events.', icon: Target, href: '/student-services/sports', },
    { name: 'Journalism Club', description: 'Hub for aspiring journalists, writers, and media enthusiasts.', icon: Camera, href: '/student-services/journo-club', },
    { name: 'Humanities Club', description: 'Exploring human thought, culture, and intellectual traditions.', icon: Briefcase, href: '/student-services/humanities-club', },
  ];

  const otherClubs = [
    'National Service Scheme (NSS)', 'National Cadet Corps (NCC)', 'Competitive Exams Club',
    'Environmental Club', 'Business Club', 'Management Club', 'Photography Club',
    'Fashion Club', 'Peer Empowerment Club', 'Public Speaking Club', 'Commerce Club',
    'Pegasus (CS Association)', 'Sarvam (Diversity Club)', 'Bibliophile Book Club',
    'Language Club', 'Rotaract Club',
  ];

  return (
    <StudentServicesLayout pageTitle="Student Clubs & Organizations" breadcrumbPath="Clubs & Organizations">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover a vibrant ecosystem of student-led organizations that foster leadership, creativity, 
              and community engagement. From academic excellence to artistic expression, find your passion.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center mt-10">
              <Card className="p-6"><div className="text-3xl font-bold text-logo-blue mb-2">25+</div><div className="text-sm text-muted-foreground">Active Clubs</div></Card>
              <Card className="p-6"><div className="text-3xl font-bold text-logo-blue mb-2">1000+</div><div className="text-sm text-muted-foreground">Active Members</div></Card>
              <Card className="p-6"><div className="text-3xl font-bold text-logo-blue mb-2">50+</div><div className="text-sm text-muted-foreground">Annual Events</div></Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Featured Clubs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {majorClubs.map((club, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <club.icon className="w-6 h-6 text-logo-navy" />
                    </div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{club.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{club.description}</p>
                    <Link to={club.href} className="text-logo-blue hover:text-logo-navy text-sm font-medium inline-flex items-center">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-logo-navy mb-8">Complete Club Directory</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {otherClubs.map((club, index) => (
                <div key={index} className="bg-muted/30 p-4 rounded-lg border hover:border-logo-blue transition-colors">
                  <span className="text-sm font-medium text-muted-foreground">{club}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default ClubsOverview;
