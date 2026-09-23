import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Globe, Code, Settings, Monitor, CheckCircle, Shield } from 'lucide-react';

const WebsiteCommittee = () => {
  const activities = [
    { icon: Globe, title: 'Content Management', description: 'Regular updates to college website with latest news, events, and announcements.' },
    { icon: Code, title: 'Technical Development', description: 'Website development, feature enhancements, and performance optimization.' },
    { icon: Settings, title: 'Maintenance & Updates', description: 'Routine maintenance, bug fixes, security patches, and server management.' },
    { icon: Monitor, title: 'Digital Presence', description: 'Managing college social media accounts and digital communication channels.' },
    { icon: Shield, title: 'Data Security', description: 'Ensuring website security, data protection, and compliance with regulations.' },
    { icon: Globe, title: 'User Experience', description: 'Improving website accessibility, navigation, and user interface design.' },
  ];

  const techSupport = [
    'Training faculty and staff on content management systems',
    'Providing technical support for online application portals',
    'Managing email systems and internal communication tools',
    'Documentation and archival of institutional digital assets',
    'Accessibility compliance and mobile responsiveness',
    'Analytics monitoring and performance reporting',
  ];

  return (
    <StudentServicesLayout pageTitle="Website Committee" breadcrumbPath="Website Committee">
      {/* About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-medium">Digital Excellence</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Website Committee is responsible for maintaining and enhancing the college's digital 
              presence. From content updates and technical development to security and user experience, 
              the committee ensures that the college website serves as a reliable and informative resource 
              for students, parents, and the wider community.
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

      {/* Technical Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Technical Support</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {techSupport.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Have Feedback or Suggestions?</h2>
            <p className="text-xl mb-8 opacity-90">
              Help us improve the college website. Share your ideas and report issues.
            </p>
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
              Contact Website Committee
            </Button>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default WebsiteCommittee;
