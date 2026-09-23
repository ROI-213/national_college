import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Scale, Globe, BookOpen, Users, CheckCircle, Shield } from 'lucide-react';

const activities = [
  { icon: Scale, title: 'Rights Awareness', description: 'Seminars and workshops on fundamental rights, constitutional provisions, and human rights law.' },
  { icon: Globe, title: 'Social Campaigns', description: 'Awareness drives on child rights, gender equality, and anti-trafficking initiatives.' },
  { icon: BookOpen, title: 'Educational Programs', description: 'Lectures and panel discussions featuring human rights advocates and legal experts.' },
  { icon: Users, title: 'Community Engagement', description: 'Outreach programs in local communities to spread awareness about basic human rights.' },
];

const HumanRights = () => (
  <StudentServicesLayout pageTitle="Human Rights Association" breadcrumbPath="Human Rights">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-medium">Protecting Rights & Dignity</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Human Rights Association at The National College works to promote awareness and understanding of human rights among students and the wider community. Through educational programs, campaigns, and advocacy, the association fosters a culture of respect, dignity, and justice.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Activities</h2>
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
            {['Educate students about fundamental human rights', 'Promote awareness of constitutional provisions', 'Advocate for social justice and equality', 'Organize commemorative events on Human Rights Day', 'Collaborate with NGOs for community outreach', 'Foster a rights-conscious campus culture'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Stand Up for Human Rights</h2>
          <p className="text-xl opacity-90">Join us in building a just and equitable society.</p>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default HumanRights;
