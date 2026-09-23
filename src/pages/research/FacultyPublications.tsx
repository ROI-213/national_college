import React from 'react';
import { ResearchLayout } from '@/components/layout/ResearchLayout';
import { Card } from '@/components/ui/card';
import { BookOpen, FileText, User } from 'lucide-react';
import { facultyMembers } from '@/components/faculty/facultyData';
import { Separator } from '@/components/ui/separator';

const FacultyPublications = () => {
  const facultyWithPublications = facultyMembers.filter(f => f.publications.length > 0);

  return (
    <ResearchLayout pageTitle="Faculty Publications" breadcrumbPath="Faculty Publications">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Scholarly Contributions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing our faculty's contributions to academic knowledge through peer-reviewed publications, conference papers, and books.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {facultyWithPublications.map((faculty) => (
              <Card key={faculty.id} className="p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-logo-blue/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-logo-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{faculty.name}</h3>
                    <p className="text-sm text-muted-foreground">{faculty.designation}</p>
                    <p className="text-xs text-logo-blue font-medium">{faculty.department}</p>
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-logo-navy" />
                    <span className="text-sm font-semibold text-foreground">Publications</span>
                  </div>
                  <ul className="space-y-2">
                    {faculty.publications.map((pub, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <BookOpen className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-logo-blue/60" />
                        <span>{pub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ResearchLayout>
  );
};

export default FacultyPublications;
