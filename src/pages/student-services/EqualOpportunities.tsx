import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Scale, Users, HandHeart, Accessibility, CheckCircle, Shield } from 'lucide-react';

const activities = [
  { icon: Scale, title: 'Equal Access', description: 'Ensuring equal access to education, resources, and opportunities for all students.' },
  { icon: Accessibility, title: 'Inclusivity Programs', description: 'Special programs for differently-abled students and marginalized communities.' },
  { icon: HandHeart, title: 'Support Services', description: 'Counseling, mentoring, and financial support for underprivileged students.' },
  { icon: Users, title: 'Awareness Campaigns', description: 'Programs to promote diversity, inclusion, and anti-discrimination awareness.' },
];

const EqualOpportunities = () => (
  <StudentServicesLayout pageTitle="Equal Opportunity Cell" breadcrumbPath="Equal Opportunities">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-medium">Diversity & Inclusion</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Equal Opportunity Cell at The National College is committed to providing equal opportunities for all students regardless of their social, economic, or physical background. The cell works to eliminate barriers and create an inclusive academic environment where every student can excel.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Programs & Services</h2>
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
            {['Ensure equal access to educational resources', 'Provide support for differently-abled students', 'Promote anti-discrimination policies', 'Facilitate access to government welfare schemes', 'Create awareness about equal rights', 'Build an inclusive and welcoming campus'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Equal Opportunities for All</h2>
          <p className="text-xl opacity-90">Building a campus where everyone has the chance to succeed.</p>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default EqualOpportunities;
