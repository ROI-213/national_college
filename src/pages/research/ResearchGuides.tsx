import React from 'react';
import { ResearchLayout } from '@/components/layout/ResearchLayout';
import { Card } from '@/components/ui/card';
import { User, BookOpen, Star, FlaskConical } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const researchGuides = [
  {
    name: 'Dr. Jagadeesha B G',
    department: 'Computer Science',
    designation: 'Professor',
    specialization: 'Image Processing, Artificial Intelligence, Machine Learning',
    scholars: 3,
  },
  {
    name: 'Dr. Ramya Nagesh',
    department: 'Sociology',
    designation: 'Assistant Professor & HoD',
    specialization: 'Research Methodology, Gender Studies, Sociology of Marginalised Groups',
    scholars: 4,
  },
  {
    name: 'Dr. B. Papanna',
    department: 'Kannada',
    designation: 'Associate Professor',
    specialization: 'Folklore Studies, Kannada Literature',
    scholars: 2,
  },
  {
    name: 'Dr. Padma T',
    department: 'Political Science',
    designation: 'Associate Professor',
    specialization: 'Public Administration, Gandhian Studies',
    scholars: 2,
  },
  {
    name: 'Dr. Tharakeshwari M',
    department: 'Botany',
    designation: 'Assistant Professor',
    specialization: 'Environmental Science, Plant Physiology',
    scholars: 2,
  },
  {
    name: 'Dr. Selvappa',
    department: 'Zoology',
    designation: 'Assistant Professor',
    specialization: 'Entomology, Biodiversity Studies',
    scholars: 1,
  },
];

const ResearchGuides = () => {
  return (
    <ResearchLayout pageTitle="Research Guides" breadcrumbPath="Research Guides">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our approved research supervisors bring deep expertise across multiple disciplines, guiding scholars through their doctoral and post-graduate research journey under Bengaluru University.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Approved Research Supervisors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchGuides.map((guide, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-logo-blue/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-logo-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{guide.name}</h3>
                        <p className="text-sm text-muted-foreground">{guide.designation}</p>
                        <p className="text-xs text-logo-blue font-medium">{guide.department}</p>
                      </div>
                    </div>
                    <Separator className="my-3" />
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <FlaskConical className="w-4 h-4 mt-0.5 text-logo-navy/60 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{guide.specialization}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-logo-navy/60" />
                        <p className="text-sm text-muted-foreground">{guide.scholars} research scholar(s) guided</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Areas of Specialization</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Image Processing & AI',
                  'Gender & Social Studies',
                  'Folklore & Kannada Literature',
                  'Public Administration',
                  'Environmental Science',
                  'Entomology & Biodiversity',
                ].map((area, idx) => (
                  <Card key={idx} className="p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
                    <BookOpen className="w-5 h-5 text-logo-blue flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{area}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ResearchLayout>
  );
};

export default ResearchGuides;
