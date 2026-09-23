import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { FileText, Download, Building2, GraduationCap, Clock, CheckCircle } from 'lucide-react';

const programOutcomes = [
  { id: "POC 1", text: "Students get graduation with the ability to know the importance and propagation of the Hindi language across the world." },
  { id: "POC 2", text: "After the program, students acquire skills in advanced Hindi language communication." },
  { id: "POC 3", text: "Students become efficient in the Hindi language." },
  { id: "POC 4", text: "The course enables students to familiarize themselves with leading classical works and individual literary styles of authors." },
];

const HindiDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Hindi"
  );

  return (
    <AcademicsLayout pageTitle="Department of Hindi" breadcrumbPath="Hindi" category="Departments">
      
      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <div>
              <strong className="text-foreground">History:</strong>
              <p className="mt-1">
                The Department of Hindi was established in 1946. The department was led by Prof. Kulkarni up to 2006 and Prof. Kamalarani up to 2013. From the year 2013 to present, Prof. Vedamurthy C. R. is leading the department.
              </p>
              <p className="mt-2">
                In 2006, the college and department got autonomous status. The syllabi are revised once every three years and are designed to meet current challenges. In the year 2022, the department adopted the NEP 2021 syllabus. From the academic year 2024, the department adopted SEP.
              </p>
            </div>

            <div>
              <strong className="text-foreground">Course Offered:</strong>
              <p className="mt-1">
                BA, B.Sc, B.Sc Animation, B.Com, B.Com (LG &amp; SDM), BBA, and BCA. Hindi subject is adopted as a First Language.
              </p>
            </div>

            <div>
              <strong className="text-foreground">Special Achievement:</strong>
              <p className="mt-1">
                Maximum students of the Hindi department from all streams participate in co-curricular activities like drama, dance, music, and sports competitions, and have won prizes for the college.
              </p>
            </div>

            <div>
              <strong className="text-foreground">Special Features of the Syllabus:</strong>
              <p className="mt-1">
                The syllabus is designed in such a way that students get a good grip on the language. It also provides a glimpse of Hindi literature. Hindi being an administrative language, the syllabus is framed to help students feel confident and develop a sense of national-level job security.
              </p>
            </div>

            <div>
              <strong className="text-foreground">Evaluation System:</strong>
              <p className="mt-1">
                Students have to choose topics for seminars based on the prescribed syllabus. Module-wise tests are conducted after the completion of each module.
              </p>
            </div>

            <div>
              <strong className="text-foreground">Innovative Activities:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Conversation sessions</li>
                <li>Group discussions</li>
                <li>Class seminars</li>
                <li>Translation of technical, commercial, and administrative terminology</li>
                <li>Interactive sessions based on movies</li>
                <li>Quiz, debate, and impromptu</li>
              </ul>
            </div>

            <div>
              <strong className="text-foreground">Department Library and Other Infrastructure:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Books in the department library – 300</li>
                <li>Computer in the department – 01</li>
                <li>Teachers attended workshops/seminars during the last two years – 20</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {programOutcomes.map((po) => (
              <div key={po.id} className="flex items-start gap-3 bg-background rounded-xl p-5 shadow-sm border border-border">
                <CheckCircle className="text-primary mt-1 shrink-0" size={22} />
                <p className="text-muted-foreground text-base md:text-lg">
                  <strong className="text-foreground">{po.id}:</strong> {po.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Scheme & Syllabus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="max-w-sm mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-4">Hindi Scheme & Syllabus</h3>
              <a href="/Hindi-Scheme-Syllabus.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Download size={16} /> Download
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Faculty Members */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Faculty Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentFaculty.map((faculty) => (
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
                  <h3 className="font-bold text-foreground text-lg leading-tight">{faculty.name}</h3>
                  <p className="text-primary font-medium text-sm">{faculty.designation}</p>
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
    </AcademicsLayout>
  );
};

export default HindiDepartment;
