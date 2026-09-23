import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Wallet, GraduationCap, HeartHandshake, FileText, CheckCircle, HandCoins } from 'lucide-react';

const activities = [
  { icon: Wallet, title: 'Financial Aid', description: 'Providing monetary assistance to students facing financial hardship for tuition and expenses.' },
  { icon: GraduationCap, title: 'Merit Scholarships', description: 'Recognizing and rewarding academic excellence with merit-based financial support.' },
  { icon: HeartHandshake, title: 'Emergency Assistance', description: 'Immediate support for students dealing with unforeseen personal or family emergencies.' },
  { icon: FileText, title: 'Application Support', description: 'Guidance in applying for government and private scholarships and financial schemes.' },
];

const StudentAidFund = () => (
  <StudentServicesLayout pageTitle="Student Aid Fund Committee" breadcrumbPath="Student Aid Fund">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <HandCoins className="w-5 h-5 mr-2" />
            <span className="font-medium">Supporting Student Success</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Student Aid Fund Committee manages financial assistance programs to support deserving and economically disadvantaged students. Through scholarships, emergency funds, and fee waivers, the committee ensures that no student is deprived of education due to financial constraints.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Services Offered</h2>
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
            {['Provide financial support to needy students', 'Administer merit-based scholarships', 'Offer emergency financial assistance', 'Guide students in scholarship applications', 'Ensure transparent fund allocation', 'Collaborate with donors and alumni for fund generation'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Invest in a Student's Future</h2>
          <p className="text-xl mb-8 opacity-90">Your support can change a student's life. Apply for aid or contribute to the fund.</p>
          <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Apply for Aid</Button>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default StudentAidFund;
