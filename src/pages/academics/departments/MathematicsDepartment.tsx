import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { Faculty } from '../../../components/faculty/types';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock } from 'lucide-react';

const MathematicsDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Mathematics"
  );

  const hodFaculty = facultyMembers.find((f) => f.name === "Yashashwini N");

  const outcomes = [
    { id: 'PSO 1', text: 'Familiar with different areas of Mathematics.' },
    { id: 'PSO 2', text: 'Formulate and develop mathematical arguments in a logical manner.' },
    { id: 'PSO 3', text: 'Acquire good knowledge and understanding in advanced areas of Mathematics.' },
    { id: 'PSO 4', text: 'Able to solve problems using a broad range of mathematical techniques.' },
    { id: 'PSO 5', text: 'Think critically and communicate mathematical concepts and solutions to real-world problems clearly.' },
    { id: 'PSO 6', text: 'Develop skills to formulate and understand proofs and provide proper justification.' },
    { id: 'PSO 7', text: 'Enable students to cultivate a mathematical way of thinking.' },
    { id: 'PSO 8', text: 'Provide high-quality mathematical education essential for scientific and technological development.' },
    { id: 'PSO 9', text: 'Understand, formulate, and use quantitative models in social sciences, business, and other contexts.' },
    { id: 'PSO 10', text: 'Identify applications of Mathematics in other disciplines and society.' },
  ];

  const activities = [
    { name: 'Department Activities', file: '/maths-activity1.pdf' },
    { name: 'IQAC with Department of Mathematics held a special lecture on Quantitative Technique', file: '/maths-activity2.pdf' },
    { name: '"A NEW LOOK INTO MATHEMATICS" & "IMPORTANCE OF MATHEMATICS"', file: '/maths-activity3.pdf' },
  ];

  return (
    <AcademicsLayout pageTitle="Department of Mathematics" breadcrumbPath="Mathematics" category="Departments">

      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>The Department of Mathematics was established in 1945 and has a long legacy of academic excellence with inspiring teachers. Early leaders like Prof. T. S. Nanjundaiah and Prof. V. Gopalswamy Iyengar played a key role in shaping the department. Over the years, many distinguished professors have contributed through innovative teaching and leadership. Notable among them is Dr. S. Balachandra Rao, an internationally recognized scholar in Vedic Mathematics and Indian astronomy.</p>
            <p>The department has produced several eminent alumni who have excelled in academia and research across prestigious institutions. Its objective is to promote problem-solving, discovery-based learning, and the effective use of ICT in mathematics education.</p>
            <p>The department emphasizes active student participation and aims to make learning meaningful, practical, and engaging. Modern teaching methods include the use of models, charts, and digital tools to simplify abstract concepts.</p>
            <p>Mathematics is offered in various undergraduate combinations such as Physics, Chemistry, Electronics, and Computer Science. It is also taught in the BCA program with courses like Discrete Mathematics. The department continues to nurture analytical thinking and prepare students for diverse academic and professional careers.</p>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <ul className="space-y-4">
            {outcomes.map((outcome) => (
              <li key={outcome.id} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 shrink-0" size={22} />
                <span className="text-muted-foreground text-base md:text-lg">
                  <strong className="text-foreground">{outcome.id}:</strong> {outcome.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Scheme & Syllabus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="max-w-sm mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-4">Mathematics Syllabus</h3>
              <a href="/maths-syllabus.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Download size={16} /> Download
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. HOD Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">HOD Message</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {hodFaculty && (
              <div className="w-48 shrink-0 mx-auto md:mx-0">
                <img
                  src={hodFaculty.image}
                  alt={hodFaculty.name}
                  className="w-48 h-56 object-cover object-top rounded-xl shadow-md"
                />
                <h3 className="text-center font-bold text-foreground mt-3">{hodFaculty.name}</h3>
                <p className="text-center text-sm text-muted-foreground">{hodFaculty.designation}</p>
              </div>
            )}
            <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
              <p>Welcome to the Department of Mathematics. It is my privilege, as Head of the Department, to extend a warm greeting to all students, faculty, researchers, and visitors to our website.</p>
              <p>Mathematics is the foundation of scientific discovery, technological advancement, and informed decision-making, and our department is committed to nurturing analytical thinking, creativity, and problem-solving skills in our learners.</p>
              <p>We strive to provide a dynamic academic environment that blends rigorous theoretical knowledge with practical applications, supported by dedicated faculty and a culture of research and innovation.</p>
              <p>I invite you to explore our programs, achievements, and initiatives, and join us in our pursuit of excellence in mathematical education and research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Department Activities</h2>
          <Card className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="font-bold text-foreground">Activity</TableHead>
                  <TableHead className="font-bold text-foreground text-right">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((act, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{act.name}</TableCell>
                    <TableCell className="text-right">
                      <a href={act.file} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="gap-1 text-primary">
                          <Download size={14} /> PDF
                        </Button>
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* 6. Faculty Members */}
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

export default MathematicsDepartment;
