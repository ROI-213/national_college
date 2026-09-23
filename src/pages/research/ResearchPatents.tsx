import React from 'react';
import { ResearchLayout } from '@/components/layout/ResearchLayout';
import { Card } from '@/components/ui/card';
import { Lightbulb, ScrollText, User, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const patentData = [
  {
    id: 1,
    facultyName: 'Dr. Jagadeesha B G',
    department: 'Computer Science',
    designation: 'Professor',
    patents: [
      { title: 'AI-Based Black Pepper Leaf Disease Detection System', year: '2024', status: 'Filed' },
    ],
  },
  {
    id: 2,
    facultyName: 'Prof. Poornima Hegde',
    department: 'Electronics',
    designation: 'Professor & HoD',
    patents: [
      { title: 'IoT-Based Smart Classroom Monitoring System', year: '2023', status: 'Filed' },
    ],
  },
  {
    id: 3,
    facultyName: 'Dr. Ramya Nagesh',
    department: 'Sociology',
    designation: 'Assistant Professor & HoD',
    patents: [
      { title: 'Community-Based Digital Survey Framework for Rural Studies', year: '2024', status: 'Filed' },
    ],
  },
  {
    id: 4,
    facultyName: 'Prof. Alakananda K P',
    department: 'Computer Science',
    designation: 'Vice Principal',
    patents: [
      { title: 'Cloud-Based Institutional Management Platform', year: '2023', status: 'Published' },
    ],
  },
];

const ResearchPatents = () => {
  return (
    <ResearchLayout pageTitle="Patents" breadcrumbPath="Patents">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Innovation & Intellectual Property</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovation and intellectual property development through patent applications and grants by our faculty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {patentData.map((entry) => (
              <Card key={entry.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-logo-blue/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-logo-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{entry.facultyName}</h3>
                    <p className="text-sm text-muted-foreground">{entry.designation}</p>
                    <p className="text-xs text-logo-blue font-medium">{entry.department}</p>
                  </div>
                </div>
                <Separator className="my-3" />
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ScrollText className="w-4 h-4 text-logo-navy" />
                    <span className="text-sm font-semibold text-foreground">Patents</span>
                  </div>
                  {entry.patents.map((patent, idx) => (
                    <div key={idx} className="bg-muted/50 rounded-lg p-3 mb-2 last:mb-0">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 mt-0.5 text-logo-navy/60 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{patent.title}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" /> {patent.year}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-logo-blue/10 text-logo-blue font-medium">
                              {patent.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ResearchLayout>
  );
};

export default ResearchPatents;
