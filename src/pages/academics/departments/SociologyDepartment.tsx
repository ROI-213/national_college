import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock, Calendar } from 'lucide-react';

const SociologyDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Sociology"
  );

  const hodFaculty = facultyMembers.find((f) => f.name === "Dr. Ramya Nagesh");

  const outcomes = [
    { id: 'PSO 1', text: 'Develop a strong foundation in Sociology as a distinct discipline within the social sciences, including its nature, scope, and relationship with other fields.' },
    { id: 'PSO 2', text: 'Critically understand classical and contemporary sociological theories, including the emergence of Sociology and contributions of pioneers in both Western and Indian contexts.' },
    { id: 'PSO 3', text: 'Understand the process of social change, development of modern organizations, and the role of demography in shaping society.' },
    { id: 'PSO 4', text: 'Recognize the importance of Sociology in studying human societies through Social Anthropology across different stages of development.' },
    { id: 'PSO 5', text: 'Learn sociological research methodologies and apply them to analyze and address social issues effectively.' },
    { id: 'PSO 6', text: 'Gain hands-on research experience through survey-based dissertations on chosen social issues.' },
    { id: 'PSO 7', text: 'Develop the ability to frame research questions, conduct literature reviews, choose appropriate methodologies, and analyze data objectively.' },
    { id: 'PSO 8', text: 'Build conceptual understanding of rural development.' },
    { id: 'PSO 9', text: 'Understand ethical and moral values in industrial relations and social service organizations.' },
    { id: 'PSO 10', text: 'Evaluate contemporary social problems and contribute to policy-making perspectives.' },
  ];

  const activities = [
    { name: 'Department Activities', file: '/sociology-activities.pdf' },
  ];

  return (
    <AcademicsLayout pageTitle="Department of Sociology" breadcrumbPath="Sociology" category="Departments">

      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>The Department of Sociology at National College Basavanagudi was established in 1972 as a major subject. It is offered in combination with Economics, Optional Kannada, Optional English, Journalism, and Political Science. The postgraduate program in Sociology was introduced in 2011.</p>
            <p>The curriculum is thoughtfully designed to support students' career development and higher education aspirations. It opens up diverse opportunities in teaching, research, policy-making, and administrative fields. Students are also prepared for self-employment and various competitive examinations.</p>
            <p>The department follows student-centric learning methods to enhance engagement and understanding. These include peer learning, field studies, interactive sessions, and project presentations. Activities such as NGO visits and model presentations provide valuable practical exposure.</p>
            <p>Overall, the department focuses on building strong personalities and imparting in-depth subject knowledge, enabling students to pursue promising career paths.</p>
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
              <h3 className="font-semibold text-foreground mb-4">Syllabus</h3>
              <Button variant="outline" className="gap-2" disabled><Download size={16} /> Coming Soon</Button>
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
              <p>It is a great pleasure to introduce the subject of Sociology and its development in recent times. As the Head of the Department, I have witnessed remarkable growth and transformation among our Sociology students at The National College Basavanagudi, Bengaluru.</p>
              <p>In an ever-changing world, Sociology provides deep insights into understanding human society. It equips students with analytical skills to assess social issues and challenges effectively. We encourage students to explore diverse dimensions of society through experiential and innovative learning, creative and critical thinking, and field-based exposure.</p>
              <p>Our department is committed to guiding students toward research opportunities, employment readiness, and skill development, enabling them to contribute meaningfully across various sectors and industries.</p>
              <p>I wholeheartedly invite students to join our department, deepen their understanding of Sociology, and build a strong and fulfilling career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Time Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Time Table</h2>
          <div className="max-w-lg mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Calendar className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-2">Current Semester Time Table</h3>
              <Button variant="outline" className="gap-2" disabled><Download size={16} /> Coming Soon</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Department Activities */}
      <section className="py-16 bg-muted/30">
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

      {/* 7. Faculty Members */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Faculty Members</h2>
          {departmentFaculty.length > 0 ? (
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
          ) : (
            <p className="text-center text-muted-foreground">Faculty information will be updated soon.</p>
          )}
        </div>
      </section>

      <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    </AcademicsLayout>
  );
};

export default SociologyDepartment;
