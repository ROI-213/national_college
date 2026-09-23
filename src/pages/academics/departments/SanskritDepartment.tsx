import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock } from 'lucide-react';

const SanskritDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const hodFaculty = facultyMembers.find(f => f.name === "Dr. Selvappa");

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Sanskrit"
  );

  const psoItems = [
    { id: 'PSO1', title: 'Conceptual Knowledge', text: 'Develop a strong understanding of ancient Indian history, philosophy, and literature.' },
    { id: 'PSO2', title: 'Communication Skills', text: 'Enhance listening, speaking, reading, and writing abilities.' },
    { id: 'PSO3', title: 'Script Proficiency', text: 'Develop the ability to write Devanagari script and understand related modern languages.' },
    { id: 'PSO4', title: 'Subject Knowledge Depth', text: 'Gain in-depth knowledge of core subject areas.' },
    { id: 'PSO5', title: 'Collaborative Learning', text: 'Demonstrate skills in collaborative learning and knowledge sharing.' },
    { id: 'PSO6', title: 'Multidisciplinary Relevance', text: 'Understand the interdisciplinary nature of Sanskrit literature including Veda, philosophy, grammar, and shastra.' },
    { id: 'PSO7', title: 'Higher Education Readiness', text: 'Become eligible and prepared for higher education.' },
    { id: 'PSO8', title: 'Research Aptitude', text: 'Develop independent thinking and research skills.' },
    { id: 'PSO9', title: 'Career Opportunities', text: 'Prepare for careers in civil services, teaching, and related fields.' },
  ];

  const coItems = [
    { id: 'CO1', title: 'Literary Knowledge', text: 'Understand ancient and modern Sanskrit literature.' },
    { id: 'CO2', title: 'Cognitive Development', text: 'Develop mental clarity and emotional balance.' },
    { id: 'CO3', title: 'Literary Concepts', text: 'Understand Indian poetics and figures of speech.' },
    { id: 'CO4', title: 'Historical Understanding', text: 'Learn ancient Indian education systems and polity.' },
    { id: 'CO5', title: 'Epigraphy & Chronology', text: 'Understand inscriptions and historical documentation.' },
    { id: 'CO6', title: 'Global Relevance', text: 'Understand the global importance of Sanskrit.' },
    { id: 'CO7', title: 'Vedic Knowledge', text: 'Learn Vedic literature, grammar, and socio-cultural aspects.' },
    { id: 'CO8', title: 'Grammar Proficiency', text: 'Develop strong grammatical understanding for communication.' },
    { id: 'CO9', title: 'Linguistics', text: 'Understand language origins and relationships.' },
    { id: 'CO10', title: 'Philosophy', text: 'Gain knowledge of Indian philosophy and apply it in life.' },
  ];

  const generalPsoItems = [
    { id: 'PSO1', title: 'Conceptual Knowledge', text: 'Understanding of Indian history, philosophy, and literature.' },
    { id: 'PSO2', title: 'Communication Skills', text: 'Enhancement of LSRW skills.' },
    { id: 'PSO3', title: 'Script Knowledge', text: 'Ability to read and write Devanagari and related scripts.' },
    { id: 'PSO4', title: 'Collaborative Skills', text: 'Participate effectively in knowledge-building discussions.' },
    { id: 'PSO5', title: 'Literary Traditions', text: 'Understand major Sanskrit literary traditions.' },
    { id: 'PSO6', title: 'Higher Education Readiness', text: 'Preparedness for advanced studies.' },
    { id: 'PSO7', title: 'Career Readiness', text: 'Preparation for teaching and competitive exams.' },
  ];

  const generalCoItems = [
    { id: 'CO1', title: 'Literary History', text: 'Understand history of Sanskrit literature and criticism.' },
    { id: 'CO2', title: 'Grammar Application', text: 'Use grammar effectively in communication and comprehension.' },
    { id: 'CO3', title: 'Cultural Knowledge', text: 'Learn Indian philosophy, religion, and culture.' },
    { id: 'CO4', title: 'Personality Development', text: 'Develop personality through texts like the Gita.' },
    { id: 'CO5', title: 'Medical Knowledge', text: 'Understand Ayurveda and Indian medical traditions.' },
    { id: 'CO6', title: 'National Awareness', text: 'Learn about nationalism through Sanskrit literature.' },
    { id: 'CO7', title: 'Yoga Knowledge', text: 'Understand concepts and practices of Yoga.' },
  ];

  const syllabusFiles = [
    { title: '1st & 2nd Semester', file: '/1-2-syllabus.pdf' },
    { title: '3rd & 4th Semester', file: '/3-4-syllabus.pdf' },
  ];

  const activities = [
    { name: 'Sanskrit Department Activities', file: '/Department-Of-Sanskrit.pdf' },
  ];

  const renderAccordionSection = (title: string, items: { id: string; title: string; text: string }[]) => (
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left font-semibold">
              {item.id}: {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{item.text}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <AcademicsLayout pageTitle="Department of Sanskrit" breadcrumbPath="Sanskrit" category="Departments">

      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              The Department of Sanskrit, established in 1945, offers a deep exploration into one of the world's oldest and most systematic languages. Sanskrit is renowned for its richness and precision, with extensive vocabulary and expressive depth. The phrase "Satyameva Jayate," featured on India's national emblem, reflects the cultural significance of the language.
            </p>
            <p>
              The department has a distinguished legacy and has been appreciated by scholars worldwide, including European Indologists such as Heinrich Roth, Johann Ernst Hanxleden, and Sir William Jones. Sanskrit has also been widely recognized for its structured nature and linguistic clarity.
            </p>
            <p>
              Initially offering B.A./B.Sc. programmes, the department expanded in 1973 to include BCA and B.Com. The curriculum spans poetry, prose, Champukavya, and drama across semesters, providing a comprehensive understanding of literature and language.
            </p>
            <p>
              The department actively conducts debates, guest lectures, and seminars, while also integrating ICT-enabled learning methods. It remains committed to preserving, promoting, and advancing the cultural and historical significance of Sanskrit.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          {renderAccordionSection('Programme Specific Outcomes (PSO)', psoItems)}
          {renderAccordionSection('Course Outcomes (CO)', coItems)}
          {renderAccordionSection('Sanskrit General Programme Outcomes', generalPsoItems)}
          {renderAccordionSection('Sanskrit General Course Outcomes', generalCoItems)}
        </div>
      </section>

      {/* 3. Scheme & Syllabus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {syllabusFiles.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <FileText className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold text-foreground mb-4">{item.title}</h3>
                <a href={item.file} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Download size={16} /> Download
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOD Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">HOD Message</h2>
          {hodFaculty && (
            <div className="flex flex-col md:flex-row gap-8 items-start max-w-4xl mx-auto">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={hodFaculty.image}
                  alt={hodFaculty.name}
                  className="w-48 h-56 object-cover object-top rounded-xl shadow-lg"
                />
                <h3 className="font-bold text-foreground text-lg mt-3 text-center">{hodFaculty.name}</h3>
                <p className="text-primary font-medium text-sm text-center">{hodFaculty.designation}</p>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  Welcome to the Department of Sanskrit. Sanskrit, one of the oldest and most systematic languages, is a gateway to India's profound intellectual and cultural heritage.
                </p>
                <p>
                  Our department strives to preserve this rich tradition while connecting it to contemporary life through engaging teaching, co-curricular activities, and interdisciplinary exposure.
                </p>
                <p>
                  With dedicated faculty and a student-centric approach, we aim at holistic growth, echoing the ideal "sa vidyā yā vimuktaye" – that is knowledge which liberates.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Activities */}
      <section className="py-16 bg-background">
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

export default SanskritDepartment;
