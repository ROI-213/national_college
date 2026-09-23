import React from 'react';
import { AboutLayout } from '@/components/layout/AboutLayout';
import { Card } from '@/components/ui/card';
import { Building2, Handshake, Users, GraduationCap, Briefcase, Award, Target, BookOpen } from 'lucide-react';

const partnerTypes = [
  { icon: Building2, title: 'IT & Software Companies', desc: 'Collaborations with leading IT firms for internships, training, and campus recruitment drives.' },
  { icon: Briefcase, title: 'Financial Institutions', desc: 'Partnerships with banks and financial firms for commerce and management student placements.' },
  { icon: Handshake, title: 'Manufacturing & Industrial', desc: 'Tie-ups with manufacturing companies for practical training and project-based learning.' },
  { icon: Award, title: 'Research Organizations', desc: 'Academic partnerships with research institutions for joint research projects and knowledge exchange.' },
];

const activities = [
  { title: 'Internship Programs', desc: 'Structured 4-8 week internships with partner companies providing hands-on industry experience to students.' },
  { title: 'Guest Lectures & Workshops', desc: 'Industry professionals conduct regular sessions on emerging technologies, career skills, and industry trends.' },
  { title: 'Industry Projects', desc: 'Real-world capstone projects and case studies developed in collaboration with corporate partners.' },
  { title: 'Campus to Corporate Training', desc: 'Bridge programs that prepare students for corporate environments through soft skills and technical training.' },
];

const IndustrialCollaboration = () => {
  return (
    <AboutLayout pageTitle="Industrial Collaboration" breadcrumbPath="Industrial Collaboration">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Overview */}
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The National College maintains strategic partnerships with industry leaders to bridge the gap between academic learning and professional practice, ensuring our students are well-prepared for successful careers.
              </p>
            </div>

            {/* Partner Organizations */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Partner Organizations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {partnerTypes.map((partner, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                    <partner.icon className="w-10 h-10 text-logo-blue mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{partner.title}</h3>
                    <p className="text-sm text-muted-foreground">{partner.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Collaboration Activities */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Collaboration Activities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {activities.map((activity, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Student Benefits */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Student Benefits</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <GraduationCap className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Industry Exposure</h3>
                  <p className="text-sm text-muted-foreground">Hands-on experience through internships and live projects with corporate partners.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <Target className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Skill Development</h3>
                  <p className="text-sm text-muted-foreground">Technical and soft skills training aligned with current industry requirements.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <BookOpen className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Career Readiness</h3>
                  <p className="text-sm text-muted-foreground">Enhanced employability through industry certifications and practical knowledge.</p>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-logo-navy to-logo-blue rounded-2xl p-8 text-center text-white">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Partner With Us</h3>
              <p className="text-white/80 max-w-xl mx-auto mb-4">
                Interested in collaborating with The National College? We welcome industry partnerships for internships, recruitment, and knowledge sharing.
              </p>
              <a href="/contact" className="inline-block bg-white text-logo-navy px-6 py-2.5 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default IndustrialCollaboration;
