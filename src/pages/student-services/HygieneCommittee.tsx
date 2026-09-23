import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Sparkles, Leaf, Droplets, Shield, CheckCircle, HeartPulse } from 'lucide-react';

const activities = [
  { icon: Sparkles, title: 'Cleanliness Drives', description: 'Regular campus cleanliness campaigns and Swachh Bharat activities.' },
  { icon: Leaf, title: 'Green Campus Initiative', description: 'Waste management, recycling programs, and environmental sustainability efforts.' },
  { icon: Droplets, title: 'Sanitation Monitoring', description: 'Ensuring clean washrooms, drinking water quality, and hygienic food facilities.' },
  { icon: HeartPulse, title: 'Health & Hygiene Awareness', description: 'Workshops on personal hygiene, disease prevention, and healthy lifestyle practices.' },
];

const HygieneCommittee = () => (
  <StudentServicesLayout pageTitle="Hygiene Committee" breadcrumbPath="Hygiene Committee">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-medium">Clean & Green Campus</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Hygiene Committee is responsible for maintaining cleanliness and hygiene standards across the campus. Through regular inspections, awareness campaigns, and sustainability initiatives, the committee ensures a healthy and pleasant environment for all students and staff.
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
            {['Maintain a clean and hygienic campus environment', 'Promote waste segregation and recycling', 'Monitor food safety and water quality', 'Organize regular sanitation drives', 'Create awareness about personal hygiene', 'Support Swachh Bharat and green campus initiatives'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">A Clean Campus is a Happy Campus</h2>
          <p className="text-xl opacity-90">Together, let's keep our campus green, clean, and sustainable.</p>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default HygieneCommittee;
