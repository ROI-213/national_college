import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Heart, Shield, BookOpen, GraduationCap, Briefcase, Phone, Mail, Clock, Star, Target, HandHeart } from 'lucide-react';

const StudentSupport = () => {
  const supportServices = [
    { icon: BookOpen, title: 'Academic Support', description: 'Comprehensive academic guidance, tutoring, and mentorship programs', services: ['Peer Tutoring', 'Study Groups', 'Academic Mentoring', 'Research Guidance'], contact: 'academic.support@college.edu' },
    { icon: Heart, title: 'Counselling Services', description: 'Professional counselling for personal, academic, and career guidance', services: ['Personal Counselling', 'Career Guidance', 'Stress Management', 'Mental Health Support'], contact: 'counselling@college.edu' },
    { icon: Shield, title: 'Student Safety', description: 'Comprehensive safety measures and support systems for student welfare', services: ['Anti-Ragging Cell', 'Women Safety', 'Emergency Support', '24/7 Security'], contact: 'security@college.edu' },
    { icon: Briefcase, title: 'Career Services', description: 'Career development, placement assistance, and industry connections', services: ['Placement Cell', 'Internship Programs', 'Skill Development', 'Industry Mentoring'], contact: 'placements@college.edu' },
    { icon: GraduationCap, title: 'Academic Excellence', description: 'Programs to enhance academic performance and scholarly pursuits', services: ['Research Support', 'Publication Assistance', 'Conference Participation', 'Scholarship Programs'], contact: 'academics@college.edu' },
    { icon: HandHeart, title: 'Financial Aid', description: 'Financial assistance and scholarship programs for deserving students', services: ['Merit Scholarships', 'Need-based Aid', 'Fee Concessions', 'Education Loans'], contact: 'finance@college.edu' },
  ];

  const emergencyContacts = [
    { service: 'Emergency Helpline', number: '+91 9876543210', available: '24/7' },
    { service: 'Medical Emergency', number: '+91 9876543211', available: '24/7' },
    { service: 'Campus Security', number: '+91 9876543212', available: '24/7' },
    { service: 'Student Affairs', number: '+91 9876543213', available: '9 AM - 6 PM' },
  ];

  return (
    <StudentServicesLayout pageTitle="Student Support" breadcrumbPath="Student Support">
      {/* Support Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-logo-navy mb-12">Support Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {supportServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-logo-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="text-logo-navy" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="text-logo-blue" size={12} />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-2 text-sm text-logo-blue">
                      <Mail size={14} />
                      <span>{service.contact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-logo-navy mb-12">Emergency & Important Contacts</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Phone className="text-logo-blue" size={20} />
                      <span>{contact.service}</span>
                    </CardTitle>
                    <Badge variant={contact.available === '24/7' ? 'default' : 'secondary'}>{contact.available}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-logo-navy mb-2">{contact.number}</div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>Available: {contact.available}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default StudentSupport;
