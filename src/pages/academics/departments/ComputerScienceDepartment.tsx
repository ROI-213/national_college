import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { Building2, GraduationCap, Clock, FileText, Download, CheckCircle } from 'lucide-react';

const bscProgramOutcomes = [
  { id: 'PO1', title: 'Computational Knowledge', description: 'Acquire in-depth computational and mathematical knowledge with an ability to abstract and conceptualise from defined problems and requirements.' },
  { id: 'PO2', title: 'Dynamic Problem Solving Skill', description: 'Identify, formulate, and exhibit strong analytical and dynamic problem-solving skills to address evolving computational challenges.' },
  { id: 'PO3', title: 'Innovative System Analysis and Design/Development', description: 'Design and evaluate solutions for complex problems in Data Science, AI & ML, and Full Stack Development, considering societal, cultural, and environmental factors.' },
  { id: 'PO4', title: 'Investigate complex computing problem', description: 'Conduct literature surveys, analyze information, and design experiments using appropriate research methods to derive valid conclusions in relevant domains.' },
  { id: 'PO5', title: 'Use of modern tools/Adaptive programming proficiency', description: 'Select, adapt, and apply modern IT tools and programming languages effectively in Data Science, AI & ML, and Full Stack Development to solve diverse computing challenges.' },
  { id: 'PO6', title: 'Knowledge Optimization', description: 'Modify algorithms or software systems to improve efficiency or resource utilization.' },
  { id: 'PO7', title: 'Life Long Continuous learning and Technology Adaptability', description: 'Pursue lifelong learning to stay updated with emerging technologies in Data Science, AI & ML, and Full Stack Development for sustained employability.' },
  { id: 'PO8', title: 'Soft skills and collaborative teamwork', description: 'Communicate effectively, enhance interpersonal skills, and collaborate in multidisciplinary teams essential for success in professional environments.' },
  { id: 'PO9', title: 'Cyber Security Proficiency', description: 'Understand cyber threats, develop secure software, and protect sensitive data in Data Science, AI & ML, and Full Stack Development applications.' },
  { id: 'PO10', title: 'Ethical and Professional Conduct', description: 'Adhere to ethical standards and professional practices in Data Science, AI & ML, and Full Stack Development roles and responsibilities.' },
  { id: 'PO11', title: 'Employability', description: 'Identify market trends, upgrade skills accordingly, and enhance employability in Data Science, AI & ML, and Full Stack Development careers.' },
  { id: 'PO12', title: 'Innovation and Entrepreneurship', description: 'Encourage innovation, startup mindset, and entrepreneurial thinking in technology-driven environments.' },
];

const bcaProgramOutcomes = [
  { id: 'PO1', title: 'Computational Knowledge', description: 'Acquire in-depth computational and mathematical knowledge with an ability to abstract and conceptualise from defined problems and requirements.' },
  { id: 'PO2', title: 'Dynamic Problem-Solving Skill', description: 'Identify, formulate, and exhibit strong analytical and dynamic problem-solving skills to address evolving computational challenges.' },
  { id: 'PO3', title: 'Innovative System Analysis and Design/ Development', description: 'Design and evaluate solutions for complex problems in Data Science, AI & ML, and Full Stack Development, considering societal, cultural, and environmental factors.' },
  { id: 'PO4', title: 'Investigate complex computing problem', description: 'Conduct literature surveys, analyze information, and design experiments using appropriate research methods to derive valid conclusions in relevant domains.' },
  { id: 'PO5', title: 'Use of modern tools/ Adaptive programming proficiency', description: 'Select, adapt, and apply modern IT tools and programming languages effectively in Data Science, AI & ML, and Full Stack Development to solve diverse computing challenges.' },
  { id: 'PO6', title: 'Knowledge Optimization', description: 'Modify algorithms or software systems to improve efficiency or resource utilization.' },
  { id: 'PO7', title: 'Life Long Continuous learning and Technology Adaptability', description: 'Pursue lifelong learning to stay updated with emerging technologies in Data Science, AI & ML, and Full Stack Development for sustained employability.' },
  { id: 'PO8', title: 'Soft skills and Collaborative teamwork', description: 'Communicate effectively, enhance interpersonal skills, and collaborate in multidisciplinary teams essential for success in professional environments.' },
  { id: 'PO9', title: 'Cyber Security Proficiency', description: 'Understand cyber threats, develop secure software, and protect sensitive data in Data Science, AI & ML, and Full Stack Development applications.' },
  { id: 'PO10', title: 'Ethical and Professional Conduct', description: 'Adhere to ethical standards and professional practices in Data Science, AI & ML, and Full Stack Development roles and responsibilities.' },
  { id: 'PO11', title: 'Employability', description: 'Identify market trends, upgrade skills accordingly, and enhance employability in Data Science, AI & ML, and Full Stack Development careers.' },
  { id: 'PO12', title: 'Innovation and Entrepreneurship', description: 'Identify opportunities, innovate, and create value through Data Science, AI & ML, and Full Stack Development projects for personal growth and societal impact.' },
];

const mcaProgramOutcomes = [
  'PO1: Apply knowledge of mathematics, science and computing appropriately to model the software applications',
  'PO2: Assimilate and use state of the art computing technologies, tools and techniques necessary for computing practices',
  'PO3: Design a system, component, or process to meet desired needs within realistic constraints such as economic, environmental, social and ethical contexts',
  'PO4: Have an ability to design, implement and evaluate sustainable computational solutions for various complex problems as per needs and specifications',
  'PO5: Communicate effectively with the computing community, and with society, about complex computing activities by being able to comprehend and write effective reports, design documentation, and make effective presentations',
  'PO6: Manage projects and function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings',
  'PO7: Recognize the need for and prepare themselves to engage in independent and lifelong learning',
  'PO8: Apply ethical principles and commit to professional responsibilities and human values',
  'PO9: Utilize the education necessary to understand the impact of computing solutions in a global and societal context',
  'PO10: Innovate and contribute value and wealth for the benefit of the society',
  'PO11: Identify market trends, upgrade skills accordingly, and enhance employability',
  'PO12: Identify opportunities, innovate, and create value through projects for personal growth and societal impact',
];

const syllabusFiles = [
  { name: 'B.Sc. Syllabus', file: '/BSc-syllabus.pdf' },
  { name: 'BCA Syllabus', file: '/BCA-syllabus.pdf' },
];

const activities = [
  { name: 'Report on Soft Skills Training for BCA Students by Magic Bus 2024', file: '/BCA-Students-Magic-Bus.pdf' },
  { name: 'OmniTrics 2025 Tech Symposium', file: '/Omnitrics-Report.pdf' },
];

const ComputerScienceDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Computer Science"
  );

  return (
    <AcademicsLayout pageTitle="Department of Computer Science" breadcrumbPath="Computer Science" category="Departments">
      
      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              The Computer Science Department, established in 1989, has grown into a hub for quality education and research in computing. It offers programs like B.Sc. Computer Science, BCA, and MCA to meet academic and industry needs.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>The department is supported by experienced faculty specializing in AI, Machine Learning, Data Analytics, IoT, Cloud Computing, and Cyber Security.</li>
              <li>Faculty members actively contribute to research through national and international publications.</li>
              <li>Students benefit from modern facilities, including advanced computer labs and smart classrooms.</li>
              <li>The campus is Wi-Fi enabled and includes a well-stocked departmental library.</li>
              <li>Academic activities include projects, workshops, guest lectures, and hackathons.</li>
              <li>The department also organizes industrial visits and internship opportunities for practical exposure.</li>
              <li>Students receive placement training along with soft skill development programs.</li>
              <li>Strong placement records and consistent academic achievements highlight the department's success.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          
          {/* B.Sc. Programme Outcome */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">B.Sc. Computer Science Programme Outcome</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {bscProgramOutcomes.map((po) => (
                <AccordionItem key={po.id} value={`bsc-${po.id}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {po.id}: {po.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {po.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* BCA Programme Outcome */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">BCA Computer Science Programme Outcome</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {bcaProgramOutcomes.map((po) => (
                <AccordionItem key={po.id} value={`bca-${po.id}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {po.id}: {po.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {po.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* MCA Programme Outcome */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-6">MCA Computer Science Programme Outcome</h3>
            <ul className="space-y-4">
              {mcaProgramOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={22} />
                  <span className="text-muted-foreground text-base md:text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Scheme & Syllabus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {syllabusFiles.map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <FileText className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold text-foreground mb-4">{item.name}</h3>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default ComputerScienceDepartment;
