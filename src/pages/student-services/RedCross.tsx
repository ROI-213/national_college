import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Heart, Droplets, Stethoscope, Users, CheckCircle, ShieldPlus } from 'lucide-react';

const activities = [
  { icon: Droplets, title: 'Blood Donation Drives', description: 'Regular blood donation camps organized in collaboration with local hospitals and blood banks.' },
  { icon: Stethoscope, title: 'Health Awareness', description: 'Campaigns on hygiene, first aid, disease prevention, and healthy living practices.' },
  { icon: ShieldPlus, title: 'First Aid Training', description: 'Basic and advanced first aid training sessions for students and staff.' },
  { icon: Users, title: 'Community Outreach', description: 'Volunteering in disaster relief, elderly care, and community health programs.' },
];

const RedCross = () => (
  <StudentServicesLayout pageTitle="Red Cross" breadcrumbPath="Red Cross">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Heart className="w-5 h-5 mr-2" />
            <span className="font-medium">Humanitarian Service</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Red Cross unit at The National College promotes humanitarian values and community health awareness. Through blood donation drives, first aid training, and health campaigns, students learn to serve society with compassion and urgency.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Activities & Programs</h2>
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
            {['Promote blood donation and health awareness', 'Train students in first aid and emergency response', 'Instill humanitarian values and empathy', 'Contribute to disaster relief efforts', 'Build a network of socially responsible youth', 'Foster a culture of voluntary service'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Join the Red Cross Unit</h2>
          <p className="text-xl mb-8 opacity-90">Be a part of the humanitarian movement and make a difference in people's lives.</p>
          <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Join Now</Button>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default RedCross;
