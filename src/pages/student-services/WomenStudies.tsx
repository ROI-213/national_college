import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Heart, Shield, BookOpen, Users, CheckCircle, Sparkles } from 'lucide-react';

const activities = [
  { icon: BookOpen, title: 'Gender Studies', description: 'Seminars and workshops on gender equality, women\'s rights, and feminist perspectives.' },
  { icon: Shield, title: 'Safety Awareness', description: 'Self-defense workshops, safety campaigns, and awareness programs for women students.' },
  { icon: Users, title: 'Mentorship Programs', description: 'Career guidance, leadership development, and mentorship for women students.' },
  { icon: Sparkles, title: 'Skill Development', description: 'Vocational training, entrepreneurship workshops, and professional development sessions.' },
];

const WomenStudies = () => (
  <StudentServicesLayout pageTitle="Centre for Women Studies" breadcrumbPath="Women Studies">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Heart className="w-5 h-5 mr-2" />
            <span className="font-medium">Empowering Women</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Centre for Women Studies at The National College is committed to promoting gender equality, empowering women students, and fostering an inclusive academic environment. Through research, awareness programs, and skill development initiatives, the centre works towards creating a safe and supportive campus for all.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Programs & Activities</h2>
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
            {['Promote gender sensitization across campus', 'Empower women through education and skill building', 'Create a safe and supportive environment for women', 'Conduct research on women-centric issues', 'Organize awareness campaigns on women\'s rights', 'Provide counseling and support services'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Empowering Futures</h2>
          <p className="text-xl opacity-90">Building a campus where every woman can thrive and lead.</p>
          <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8 mt-8">Get Involved</Button>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default WomenStudies;
