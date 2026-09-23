import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { HeartHandshake, GraduationCap, Wallet, Users, CheckCircle, Shield } from 'lucide-react';

const activities = [
  { icon: Wallet, title: 'Financial Assistance', description: 'Helping economically weaker students access scholarships, fee waivers, and financial aid.' },
  { icon: GraduationCap, title: 'Academic Support', description: 'Mentoring, remedial classes, and academic guidance for students in need.' },
  { icon: HeartHandshake, title: 'Counseling Services', description: 'Personal and career counseling to address student concerns and mental well-being.' },
  { icon: Users, title: 'Student Grievances', description: 'Addressing student complaints, concerns, and suggestions through a structured process.' },
];

const StudentWelfare = () => (
  <StudentServicesLayout pageTitle="Student Welfare Committee" breadcrumbPath="Student Welfare">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-medium">Student Well-being</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Student Welfare Committee is dedicated to ensuring the overall well-being and development of every student at The National College. From financial assistance to counseling services, the committee works tirelessly to create a supportive and nurturing educational environment.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Services</h2>
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
            {['Ensure holistic student development', 'Provide financial aid to deserving students', 'Offer personal and academic counseling', 'Address student grievances promptly', 'Create an inclusive campus environment', 'Support students with special needs'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Your Welfare is Our Priority</h2>
          <p className="text-xl mb-8 opacity-90">We are here to support you through every step of your academic journey.</p>
          <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Reach Out</Button>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default StudentWelfare;
