import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Shield, Scale, MessageSquare, Users, CheckCircle, Lock } from 'lucide-react';

const activities = [
  { icon: Shield, title: 'Prevention', description: 'Awareness campaigns, workshops, and orientation programs to prevent sexual harassment on campus.' },
  { icon: MessageSquare, title: 'Complaint Mechanism', description: 'Secure and confidential process for filing complaints regarding harassment incidents.' },
  { icon: Scale, title: 'Investigation & Action', description: 'Fair and thorough investigation of complaints with appropriate disciplinary action.' },
  { icon: Users, title: 'Support Services', description: 'Counseling, legal guidance, and emotional support for affected individuals.' },
];

const SexualHarassmentCell = () => (
  <StudentServicesLayout pageTitle="Sexual Harassment Cell / Women Cell" breadcrumbPath="ASHC">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Lock className="w-5 h-5 mr-2" />
            <span className="font-medium">Safe Campus Initiative</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Anti-Sexual Harassment Cell (ASHC) / Women Cell is constituted as per the UGC guidelines and the Sexual Harassment of Women at Workplace Act, 2013. The cell is committed to creating a safe, respectful, and harassment-free environment for all students and staff at The National College.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Key Functions</h2>
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
            {['Create a harassment-free campus environment', 'Provide a safe platform for reporting incidents', 'Ensure swift and fair investigation of complaints', 'Offer counseling and support to affected individuals', 'Conduct regular awareness and sensitization programs', 'Comply with UGC and statutory guidelines'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Your Safety is Our Commitment</h2>
          <p className="text-xl mb-8 opacity-90">If you or someone you know needs help, reach out to us confidentially.</p>
          <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Report an Incident</Button>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default SexualHarassmentCell;
