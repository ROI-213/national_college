import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Home, Shield, HeartHandshake, Users, CheckCircle, ClipboardList } from 'lucide-react';

const HostelCommittee = () => {
  const activities = [
    { icon: Home, title: 'Hostel Management', description: 'Overseeing day-to-day hostel operations, room allocation, and maintenance.' },
    { icon: Shield, title: 'Safety & Security', description: 'Ensuring 24/7 security, CCTV monitoring, and emergency response protocols.' },
    { icon: HeartHandshake, title: 'Student Welfare', description: 'Addressing student grievances, health support, and counseling services.' },
    { icon: Users, title: 'Community Building', description: 'Organizing cultural events, sports, and bonding activities for residents.' },
    { icon: ClipboardList, title: 'Discipline & Rules', description: 'Enforcing hostel rules, maintaining discipline, and ensuring a safe environment.' },
    { icon: Home, title: 'Facilities Upkeep', description: 'Regular maintenance of rooms, common areas, mess, and recreational spaces.' },
  ];

  const support = [
    'Round-the-clock warden availability for emergencies',
    'Medical first-aid facility within hostel premises',
    'Regular inspection of hygiene and cleanliness standards',
    'Nutritious and balanced meal planning in mess',
    'Wi-Fi connectivity and study room access',
    'Parent communication and feedback mechanisms',
  ];

  return (
    <StudentServicesLayout pageTitle="Hostel Committee" breadcrumbPath="Hostel Committee">
      {/* About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Home className="w-5 h-5 mr-2" />
              <span className="font-medium">A Home Away From Home</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Hostel Committee ensures that residential students enjoy a safe, comfortable, and 
              supportive living environment. From security and discipline to welfare and community 
              building, the committee works to make hostel life a positive and enriching experience.
            </p>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Responsibilities</h2>
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

      {/* Student Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Student Support</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {support.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Need Hostel Assistance?</h2>
            <p className="text-xl mb-8 opacity-90">
              Reach out to the Hostel Committee for any queries, concerns, or support.
            </p>
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
              Contact Hostel Committee
            </Button>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default HostelCommittee;
