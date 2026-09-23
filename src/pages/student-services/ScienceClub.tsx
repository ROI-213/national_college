import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Atom, FlaskConical, Microscope, Lightbulb, CheckCircle, Rocket } from 'lucide-react';

const ScienceClub = () => {
  const activities = [
    { icon: FlaskConical, title: 'Experiments & Demos', description: 'Hands-on lab experiments and science demonstrations open to all students.' },
    { icon: Microscope, title: 'Research Projects', description: 'Guided undergraduate research projects in physics, chemistry, and biology.' },
    { icon: Lightbulb, title: 'Innovation Activities', description: 'Hackathons, science quizzes, and ideation challenges to spark creativity.' },
    { icon: Atom, title: 'Science Exhibitions', description: 'Annual exhibitions showcasing student projects, models, and innovations.' },
    { icon: Rocket, title: 'Guest Lectures', description: 'Talks by eminent scientists and industry professionals on emerging topics.' },
    { icon: FlaskConical, title: 'Field Visits', description: 'Visits to research labs, science centers, and industrial facilities.' },
  ];

  const innovations = [
    'Student-led projects on renewable energy solutions',
    'Bio-technology experiments and micro-biology research',
    'Participation in national-level science olympiads',
    'Collaborative projects with industry research labs',
    'Publication of student research papers',
    'Annual inter-college science fest organization',
  ];

  return (
    <StudentServicesLayout pageTitle="Science Club" breadcrumbPath="Science Club">
      {/* About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Atom className="w-5 h-5 mr-2" />
              <span className="font-medium">Discover. Experiment. Innovate.</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Science Club at The National College fosters scientific curiosity and inquiry among students. 
              Through experiments, research projects, and innovation challenges, the club provides a platform 
              for aspiring scientists to explore, discover, and contribute to the world of science.
            </p>
          </div>
        </div>
      </section>

      {/* Experiments & Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Experiments & Projects</h2>
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

      {/* Innovation Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Innovation Activities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {innovations.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Fuel Your Scientific Curiosity</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Science Club and turn your ideas into experiments, discoveries, and innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
                Join Science Club
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default ScienceClub;
