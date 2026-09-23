import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Shield, Phone, Users, FileText, CheckCircle } from 'lucide-react';

const AntiRaggingCell = () => {
  const activities = [
    { icon: Shield, title: 'Awareness Sessions', description: 'Regular awareness sessions for new students on UGC regulations.' },
    { icon: Phone, title: '24/7 Helpline', description: 'Round-the-clock helpline services for immediate assistance.' },
    { icon: Users, title: 'Campus Patrols', description: 'Surprise campus patrols and monitoring for student safety.' },
    { icon: FileText, title: 'Complaint Handling', description: 'Swift investigation and resolution of reported incidents.' },
    { icon: Shield, title: 'Undertaking Collection', description: 'Collection of signed anti-ragging undertakings from students.' },
    { icon: Users, title: 'Law Enforcement Coordination', description: 'Coordination with local law enforcement when required.' },
  ];

  const preventiveMeasures = [
    'Orientation programs on UGC regulations for all students',
    'Display of anti-ragging posters across campus',
    'Student mentorship and buddy systems',
    'Regular hostel and campus inspections',
    'Anonymous reporting mechanisms',
    'Psychological counseling for affected students',
  ];

  return (
    <StudentServicesLayout pageTitle="Anti-Ragging Cell" breadcrumbPath="Anti-Ragging Cell">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-medium">Safe Campus Initiative</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enforcing UGC anti-ragging regulations to promote a safe, welcoming campus environment 
              where every student can thrive without fear or intimidation. Zero tolerance for ragging.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Prevention Activities & Services</h2>
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

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Preventive Measures</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {preventiveMeasures.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-logo-blue mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Helpline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-logo-navy mb-8">Emergency Helpline</h2>
            <Card className="p-8 border-destructive/20 bg-destructive/5">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Phone className="w-8 h-8 text-destructive" />
                <div className="text-3xl font-bold text-destructive">1800-180-5522</div>
              </div>
              <p className="text-muted-foreground">UGC Helpline — Report incidents immediately. All calls are confidential.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Report. Protect. Prevent.</h2>
            <p className="text-xl mb-8 opacity-90">
              Your safety is our priority. Report any incident and help us maintain a ragging-free campus.
            </p>
            <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">
              File a Complaint
            </Button>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default AntiRaggingCell;
