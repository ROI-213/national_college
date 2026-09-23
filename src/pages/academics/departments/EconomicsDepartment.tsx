import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock } from 'lucide-react';

const EconomicsDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Economics"
  );

  const hodFaculty = facultyMembers.find((f) => f.name === "Dr. Prathima PS");

  const outcomes = [
    { id: 'PSO1', text: 'Acquire comprehensive knowledge of core areas of Economics such as Microeconomics, Macroeconomics, Public Finance, International Economics, Development Economics, Environmental Economics, and Indian Economy.' },
    { id: 'PSO2', text: 'Apply economic theories, models, and analytical tools to examine and interpret economic issues at local, national, and global levels.' },
    { id: 'PSO3', text: 'Identify economic problems, formulate appropriate solutions, and evaluate alternatives using logical and evidence-based reasoning.' },
    { id: 'PSO4', text: 'Develop skills in research methodology including data collection, statistical analysis, interpretation, and report preparation.' },
    { id: 'PSO5', text: 'Integrate knowledge of statistics and mathematics to assess economic conditions such as population, income, development patterns, savings, investments, and social security measures.' },
    { id: 'PSO6', text: 'Understand economic growth, development, structural transformation, poverty, inequality, and sustainability.' },
    { id: 'PSO7', text: 'Conduct research through literature review, methodology design, data analysis, and unbiased conclusion formulation.' },
    { id: 'PSO8', text: 'Evaluate economic policies, fiscal and monetary measures, and their impact on development and welfare.' },
    { id: 'PSO9', text: 'Demonstrate ethical awareness and professional responsibility in economic decision-making.' },
    { id: 'PSO10', text: 'Develop career-oriented skills for banking, finance, civil services, research, corporate sector, NGOs, entrepreneurship, and higher education.' },
    { id: 'PSO11', text: 'Understand sustainable development, environmental protection, and inclusive growth.' },
    { id: 'PSO12', text: 'Cultivate continuous learning and adaptability to changing global economic trends.' },
  ];

  const activities = [
    { name: 'Departmental Activities from 2021 to 2025-26', file: '/DeptActivitiespoliticalscience.pdf' },
    { name: 'UG & PG students visited to Karnataka Veterinary', file: '/Website-Department_Activities-ECONOMICS.pdf' },
  ];

  return (
    <AcademicsLayout pageTitle="Department of Economics" breadcrumbPath="Economics" category="Departments">

      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <p className="text-center text-primary font-semibold text-lg md:text-xl mb-8">EXCELLENCE IN ECONOMICS: A LEGACY SINCE 1975</p>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>The Department of Economics, established in 1975, has a strong legacy of academic excellence.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>It was initially led by Prof. Sheshappa, who laid a solid foundation for its growth.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>The introduction of the M.A. Economics program in 2012 marked a major milestone.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>Over the years, many distinguished professors have contributed to its academic strength.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>Their efforts have built a culture of quality teaching, research, and mentorship.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>The department is currently headed by Dr. Prathima P. S. since 2019.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>It focuses on fostering critical thinking, ethical values, and social responsibility.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>The curriculum prepares students for careers, higher studies, and informed citizenship.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>Programs offered include B.A. and M.A. in Economics along with add-on courses.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>Additional courses like Digital Money and Data Analysis enhance practical knowledge and skills.</span></li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Department Infrastructure</h3>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>The Department's library comprises 100 books and four journals. These are available to staff and students as per guidelines. Study materials are also printed within the department.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>The department has internet connectivity, enabling access to essential academic resources.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>E-learning methods such as PowerPoint presentations, videos, and digital content are used in classrooms.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>The department is equipped with a projector, printer, and computer, accessible to students for academic use.</span></li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Memorandum of Understanding</h3>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>The Department of Economics has signed an MoU with WE CARE Society (NGO), Bengaluru (effective December 2025) to collaborate on government research projects. Four final-year BA Economics students participated in January 2026, working on evaluation of Ganga Kalyana Scheme, Land Purchase Scheme, and Micro Credit Scheme, contributing to literature review, field survey, data collection, and data editing.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span>The department has also entered into an MoU with Sparda Academy to provide structured coaching for competitive exams and certificate courses. An orientation session was conducted on 14 February 2026 with participation from 35 aspirants (UPSC, KAS, etc.). Weekly coaching sessions will be conducted as part of this collaboration.</span></li>
            </ul>
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
              <h3 className="font-semibold text-foreground mb-4">BA Economics Syllabus</h3>
              <a href="/BA-ECONOMICS-SYLLABUS.pdf" target="_blank" rel="noopener noreferrer">
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
              <p>
                Welcome to the Department of Economics at The National College Autonomous, Basavanagudi, Bengaluru. In our department, Economics is more than just a subject—it is a powerful tool to understand society, address real-world challenges, and drive meaningful change.
              </p>
              <p>
                Through experiential learning, field visits, research presentations, budget analysis, internships, and community engagement, we nurture students to think critically, act responsibly, and lead with confidence.
              </p>
              <p>
                Our commitment to innovation, research, and social awareness transforms classrooms into centers of inquiry and creativity. We nurture young economists who are not only academically strong but socially sensitive and ethically grounded. Together, we strive to build informed citizens and future leaders who contribute positively to the nation's development.
              </p>
            </div>
          </div>
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

export default EconomicsDepartment;
