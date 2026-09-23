import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Monitor, Wifi, Server, Shield, CheckCircle, Settings } from 'lucide-react';

const activities = [
  { icon: Monitor, title: 'Lab Management', description: 'Maintenance and upgradation of computer labs with latest hardware and software.' },
  { icon: Wifi, title: 'Campus Network', description: 'Ensuring reliable Wi-Fi and network connectivity across the campus.' },
  { icon: Server, title: 'Digital Infrastructure', description: 'Managing servers, databases, and digital platforms for academic use.' },
  { icon: Shield, title: 'Cyber Security', description: 'Implementing security protocols and educating students on safe digital practices.' },
];

const InformationTechnology = () => (
  <StudentServicesLayout pageTitle="Information Technology" breadcrumbPath="Information Technology">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Settings className="w-5 h-5 mr-2" />
            <span className="font-medium">Technology & Innovation</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Information Technology Committee ensures the smooth functioning of the college's digital infrastructure. From maintaining computer labs to managing campus networks, the committee plays a vital role in supporting technology-driven education at The National College.
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
            {['Maintain state-of-the-art computer labs', 'Provide seamless campus-wide internet connectivity', 'Support digital learning and e-governance', 'Ensure data security and privacy', 'Train students in emerging technologies', 'Facilitate online examination systems'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Driving Digital Excellence</h2>
          <p className="text-xl opacity-90">Empowering education through technology and innovation.</p>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default InformationTechnology;
