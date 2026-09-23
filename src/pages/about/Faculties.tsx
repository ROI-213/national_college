import React, { useState } from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Button } from '../../components/ui/button';
import { facultyMembers } from '../../components/faculty/facultyData';
import { Faculty } from '../../components/faculty/types';
import { FacultyModal } from '../../components/faculty/FacultyModal';
import { Building2, GraduationCap, Clock } from 'lucide-react';

const Faculties = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  return (
    <AboutLayout 
      pageTitle="Our Faculty" 
      breadcrumbPath="Faculties"
    >
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Distinguished Faculty
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our dedicated faculty members bring years of experience and expertise to guide students towards academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((faculty) => (
              <div
                key={faculty.id}
                className="group bg-card rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-foreground text-lg leading-tight">
                    {faculty.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {faculty.designation}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Building2 size={15} className="text-primary shrink-0" />
                    <span>{faculty.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <GraduationCap size={15} className="text-primary shrink-0" />
                    <span>{faculty.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock size={15} className="text-primary shrink-0" />
                    <span>{faculty.experience} Experience</span>
                  </div>
                  <Button
                    onClick={() => setSelectedFaculty(faculty)}
                    variant="outline"
                    className="w-full mt-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    </AboutLayout>
  );
};

export default Faculties;
