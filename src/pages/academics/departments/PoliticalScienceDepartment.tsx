import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { Faculty } from '../../../components/faculty/types';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock } from 'lucide-react';

const programOutcomes = [
  { id: 'po1', title: 'PO1: Disciplinary Knowledge', content: 'Demonstrate comprehensive knowledge of core areas of Political Science including political theory, political thought, Indian government and politics, comparative politics, public administration, and international relations.' },
  { id: 'po2', title: 'PO2: Critical Thinking', content: 'Critically analyze political ideas, institutions, public policies, and contemporary political developments using logical reasoning and evidence-based arguments.' },
  { id: 'po3', title: 'PO3: Research-Related Skills', content: 'Develop the ability to identify research problems, review literature, collect data, and apply basic qualitative and quantitative research methods in political analysis.' },
  { id: 'po4', title: 'PO4: Problem Solving', content: 'Apply theoretical knowledge to understand and propose solutions to social, political, administrative, and governance-related issues.' },
  { id: 'po5', title: 'PO5: Constitutional and Civic Awareness', content: 'Explain the features, principles, rights, and duties enshrined in the Constitution of India and evaluate the functioning of democratic institutions in India.' },
  { id: 'po6', title: 'PO6: Communication Skills', content: 'Communicate political arguments, policy analyses, and research findings effectively through oral presentations, debates, academic writing, and digital platforms.' },
  { id: 'po7', title: 'PO7: Moral and Ethical Awareness', content: 'Demonstrate commitment to constitutional values, social justice, equality, secularism, and democratic ethics in personal and professional life.' },
  { id: 'po8', title: 'PO8: Individual and Team Work', content: 'Work effectively both independently and collaboratively in academic projects, discussions, fieldwork, and civic engagements.' },
  { id: 'po9', title: 'PO9: Leadership and Citizenship', content: 'Exhibit leadership qualities and responsible citizenship by actively participating in democratic processes and community development initiatives.' },
  { id: 'po10', title: 'PO10: Employability and Lifelong Learning', content: 'Acquire foundational knowledge and transferable skills for careers in civil services, law, journalism, public administration, public policy, political consultancy, NGOs, and pursue higher studies in Political Science and related disciplines.' },
];

const missionPoints = [
  'Providing a strong foundation in political theory, Indian government and politics, public administration, and international relations.',
  'Strengthening constitutional literacy and awareness of democratic institutions.',
  'Developing critical thinking, analytical abilities, and ethical reasoning.',
  'Encouraging active citizenship through debates, seminars, and community engagement.',
  'Preparing students for higher studies and competitive examinations, including civil services and public sector careers.',
  'Upholding the values of justice, liberty, equality, and fraternity as enshrined in the Constitution of India.',
];

const PoliticalScienceDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const hod = facultyMembers.find(f => f.name === 'Dr. Padma T');
  const departmentFaculty = facultyMembers.filter(f => f.department === 'Political Science');

  return (
    <AcademicsLayout pageTitle="Department of Political Science" breadcrumbPath="Political Science" category="Departments">
      {/* About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">Vision</h3>
            <p>To foster informed, responsible, and constitutionally grounded citizens through excellence in undergraduate political science education, promoting democratic values, critical inquiry, and civic leadership.</p>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8">Mission</h3>
            <p>The Department of Political Science, established in 2024, builds upon the College's longstanding tradition of imparting constitutional education to students across all disciplines. The Department is committed to:</p>
            <ul className="space-y-3 mt-4">
              {missionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={22} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">B.A. Political Science</h3>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {programOutcomes.map((po) => (
              <AccordionItem key={po.id} value={po.id} className="border rounded-lg px-4 bg-background">
                <AccordionTrigger className="text-left font-semibold text-foreground">{po.title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">{po.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Scheme & Syllabus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="max-w-md mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-4">Political Science Syllabus</h3>
              <Button variant="outline" className="gap-2" asChild>
                <a href="/political-science-syllabus.pdf" target="_blank" rel="noopener noreferrer">
                  <Download size={16} /> Download
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* HOD Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">HOD Message</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {hod && (
              <div className="w-48 shrink-0 mx-auto md:mx-0">
                <img src={hod.image} alt={hod.name} className="w-48 h-56 object-cover object-top rounded-xl shadow-md" />
                <h3 className="text-center font-bold text-foreground mt-3">{hod.name}</h3>
                <p className="text-center text-sm text-muted-foreground">{hod.designation}</p>
              </div>
            )}
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>It gives me great pleasure to welcome you to the Department of Political Science at The National College, Basavanagudi. Established in 2024, our Department builds upon the College's longstanding academic tradition, particularly its commitment to teaching the Constitution of India to students across disciplines.</p>
              <p>Our goal is to provide strong foundational knowledge in political science while nurturing critical thinking, constitutional values, and responsible citizenship. We strive to create an engaging academic environment that encourages dialogue, debate, and informed understanding of contemporary political developments.</p>
              <p>We are committed to preparing our students not only for higher education and competitive examinations but also for meaningful participation in public life. I invite you to explore the opportunities our Department offers and to join us in the pursuit of knowledge, democratic values, and civic responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Members */}
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

export default PoliticalScienceDepartment;
