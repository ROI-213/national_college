import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { BookOpen, Pen, MessageSquare, Award, CheckCircle, Quote } from 'lucide-react';

const LiteraryClub = () => {
  const activities = [
    { icon: MessageSquare, title: 'Debates & Elocution', description: 'Regular inter-class and inter-college debate competitions on diverse topics.' },
    { icon: Pen, title: 'Creative Writing', description: 'Writing workshops covering poetry, essays, short stories, and journalistic pieces.' },
    { icon: BookOpen, title: 'Book Discussion Circles', description: 'Weekly book reading and discussion sessions exploring classic and modern literature.' },
    { icon: Quote, title: 'Poetry Recitation', description: 'Poetry reading events celebrating literary expression in multiple languages.' },
    { icon: Award, title: 'Literary Competitions', description: 'Quiz bowls, spelling bees, and essay competitions with prizes and recognition.' },
    { icon: BookOpen, title: 'Author Interactions', description: 'Meet-and-greet sessions with published authors and literary critics.' },
  ];

  const eventsCompetitions = [
    'Annual literary fest with inter-college participation',
    'Monthly creative writing contests across genres',
    'Parliamentary-style debate championship',
    'Poetry slam and spoken word events',
    'College magazine editorial and publication',
    'Book donation drives and reading campaigns',
  ];

  return (
    <StudentServicesLayout pageTitle="Literary Club" breadcrumbPath="Literary Club">
      {/* Club Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <BookOpen className="w-5 h-5 mr-2" />
              <span className="font-medium">Words That Inspire</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Literary Club at The National College is a haven for avid readers and writers, fostering 
              literary critique, creative expression, and the timeless art of storytelling. Through debates, 
              writing workshops, and author interactions, we nurture the literary spirit in every student.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Activities</h2>
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

      {/* Events & Competitions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Events & Competitions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {eventsCompetitions.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Join Our Literary Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover the power of words and connect with fellow literature enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
                Join Literary Club
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">
                View Reading List
              </Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default LiteraryClub;
