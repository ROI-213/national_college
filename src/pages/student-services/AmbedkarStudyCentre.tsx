import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { BookOpen, Scale, Users, Landmark, CheckCircle, GraduationCap } from 'lucide-react';

const activities = [
  { icon: BookOpen, title: 'Study Programs', description: 'Lectures, seminars, and workshops on Dr. Ambedkar\'s philosophy and social justice.' },
  { icon: Scale, title: 'Constitutional Awareness', description: 'Programs promoting awareness of constitutional rights and democratic values.' },
  { icon: Users, title: 'Social Justice Initiatives', description: 'Activities aimed at promoting equality, inclusivity, and social harmony.' },
  { icon: GraduationCap, title: 'Scholarship Support', description: 'Guidance and support for SC/ST students in accessing government scholarships.' },
];

const AmbedkarStudyCentre = () => (
  <StudentServicesLayout pageTitle="Dr. B.R. Ambedkar Study Centre" breadcrumbPath="Ambedkar Study Centre">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <Landmark className="w-5 h-5 mr-2" />
            <span className="font-medium">Equality & Social Justice</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Dr. B.R. Ambedkar Study Centre is dedicated to promoting the ideals of social justice, equality, and constitutional awareness as envisioned by Dr. Bhimrao Ramji Ambedkar. The centre organizes academic programs, awareness campaigns, and support services for marginalized communities.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Activities & Programs</h2>
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
            {['Promote Dr. Ambedkar\'s philosophy of social justice', 'Create awareness about constitutional rights', 'Support SC/ST students academically and financially', 'Organize commemorative events and lectures', 'Foster inclusive campus culture', 'Encourage research on social reform movements'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Building an Inclusive Society</h2>
          <p className="text-xl opacity-90">Join us in promoting equality, justice, and the vision of Dr. B.R. Ambedkar.</p>
          <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8 mt-8">Learn More</Button>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default AmbedkarStudyCentre;
