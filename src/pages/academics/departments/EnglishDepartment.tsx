import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock } from 'lucide-react';

const sem12Objectives = [
  'To demonstrate a comprehensive understanding of major and minor writers, texts, and contexts.',
  'To gain familiarity with Indian and global literatures and their styles.',
  'To enhance literary and linguistic skills across all cognitive levels.',
  'To understand the importance of literature and related cultural debates.',
  'To develop proficiency in articulation and writing skills.',
  'To foster inquiry and critical thinking.',
  'To contextualize texts across theoretical and cultural frameworks.',
  'To develop academic and professional writing skills.',
];

const sem12Outcomes = [
  'Demonstrate understanding of literary texts and contexts.',
  'Gain knowledge of diverse literary traditions, especially Indian literature.',
  'Develop analytical and creative literary skills.',
  'Understand literary significance and cultural discourse.',
  'Improve communication and writing skills.',
  'Apply theoretical perspectives to texts.',
  'Develop skills relevant to media, advertising, and content creation.',
];

const sem34Objectives = [
  'Improve LSRW (Listening, Speaking, Reading, Writing) skills',
  'Develop interpersonal communication',
  'Introduce drama and dramatists',
  'Enhance analytical and presentation skills',
  'Enable critical interpretation of texts',
  'Build awareness of cultural diversity',
  'Support employability in emerging fields',
  'Prepare for competitive exams',
];

const sem34Outcomes = [
  'Acquire LSRW skills',
  'Develop interpersonal communication',
  'Understand drama and literary movements',
  'Improve analytical and presentation skills',
  'Critically interpret literary texts',
  'Gain cultural awareness',
  'Enhance employability skills',
  'Prepare for competitive examinations',
];

const activities = [
  { name: 'Educational Trip to Wayanadu', file: '/Educational-Trip-Wayanadu.pdf' },
  { name: "Literary Event Titled 'Words That Live'", file: '/Words-That-Live.pdf' },
];

const EnglishDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "English"
  );

  const hodFaculty = facultyMembers.find((f) => f.name === "Uma H R");

  return (
    <AcademicsLayout pageTitle="Department of English" breadcrumbPath="English" category="Departments">

      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              The Department of English came into existence in 1945. The college initially catered to Science students and later expanded to include Arts, Honours courses, Computer Applications, and Commerce.
            </p>
            <p>
              The department takes pride in its legacy of eminent scholars such as Prof. Sampathgiri Rao, Dr. K. Dwarakanath, and Dr. G. Ramakrishna, who laid a strong academic foundation. Successive Heads and faculty members have built upon this legacy and contributed significantly to the department's growth.
            </p>
            <p>
              The department has consistently ensured that a large number of students benefit from the study of English language and literature, enabling them to engage deeply with literary works.
            </p>
            <p>
              A major milestone was the introduction of the Communicative Skills Program, designed to meet the evolving needs of students. To further strengthen language proficiency, a Language Laboratory was established, facilitating both language learning and the study of visual texts.
            </p>
            <p>
              Today, English skills—especially writing—are in high demand across industries such as law, public relations, business, medicine, and technology. More importantly, the study of English and the Humanities equips students with a lifelong ability to understand the world with clarity, depth, and perspective.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>

          {/* 1st & 2nd Semester */}
          <h3 className="text-2xl font-bold text-foreground mt-4 mb-6">1st & 2nd Semester</h3>

          <h4 className="text-xl font-semibold text-foreground mb-4">Course Objectives</h4>
          <ul className="space-y-3 mb-8">
            {sem12Objectives.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-muted-foreground text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-xl font-semibold text-foreground mb-4">Course Outcomes</h4>
          <ul className="space-y-3 mb-10">
            {sem12Outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-muted-foreground text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          {/* 3rd & 4th Semester */}
          <h3 className="text-2xl font-bold text-foreground mt-10 mb-6">3rd & 4th Semester</h3>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            English Language course focuses on equipping students with language skills and introducing them to different literary genres. The course enhances communication through grammar, vocabulary, and pronunciation, along with practical components such as seminars, assignments, and presentations.
          </p>

          <h4 className="text-xl font-semibold text-foreground mb-4">Course Objectives</h4>
          <ul className="space-y-3 mb-8">
            {sem34Objectives.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-muted-foreground text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-xl font-semibold text-foreground mb-4">Course Outcomes</h4>
          <ul className="space-y-3">
            {sem34Outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-muted-foreground text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. HOD Message */}
      <section className="py-16 bg-background">
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
              <p>
                In our Department of English, we believe that teaching goes beyond completing a syllabus. It is about understanding students—their thoughts, perspectives, and experiences. Our faculty share a warm and friendly rapport with students, creating classrooms where ideas are openly discussed and respected.
              </p>
              <p>
                As an autonomous department, we have the flexibility to design a curriculum that resonates with today's generation. With a blend of Gen Z and millennial educators, we effectively bridge generational gaps and make literature more meaningful, relatable, and engaging.
              </p>
              <p>
                Above all, we strive to nurture confident speakers, thoughtful readers, and socially responsible individuals who can approach the world with clarity, empathy, and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Activities</h2>
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

      {/* 5. Faculty Members */}
      <section className="py-16 bg-background">
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

export default EnglishDepartment;
