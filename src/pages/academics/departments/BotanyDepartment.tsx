import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { Faculty } from '../../../components/faculty/types';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock } from 'lucide-react';

const BotanyDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Botany"
  );

  const hodFaculty = facultyMembers.find((f) => f.name === "Dr. Tharakeshwari M");

  const programOutcomes = [
    {
      id: 'PO1',
      title: 'Disciplinary Knowledge',
      points: [
        'Plant diversity (Microbes to Angiosperms)',
        'Plant anatomy, embryology, and taxonomy',
        'Genetics, molecular biology, and plant physiology',
        'Ecology and environmental biology',
      ],
      intro: 'Graduates will acquire comprehensive knowledge of:',
    },
    {
      id: 'PO2',
      title: 'Practical & Laboratory Skills',
      points: [
        'Microscopy and slide preparation skills',
        'Plant identification and herbarium techniques',
        'Field survey and ecological data collection',
        'Basic molecular and biotechnological techniques',
      ],
      intro: 'Students will develop:',
    },
    {
      id: 'PO3',
      title: 'Analytical & Critical Thinking',
      points: [
        'Design and conduct experiments',
        'Interpret scientific data using statistical tools',
        'Solve biological problems logically',
        'Apply theoretical knowledge to practical situations',
      ],
      intro: 'Graduates will be able to:',
    },
    {
      id: 'PO4',
      title: 'Environmental Awareness & Sustainability',
      points: [
        'Understand biodiversity conservation principles',
        'Recognize climate change impacts on plant systems',
        'Promote sustainable utilization of plant resources',
      ],
      intro: 'Students will:',
    },
    {
      id: 'PO5',
      title: 'Research & Innovation',
      points: [
        'Develop research aptitude',
        'Prepare scientific reports and presentations',
        'Undertake minor research projects',
        'Apply ICT tools in biological research',
      ],
      intro: 'Graduates will:',
    },
    {
      id: 'PO6',
      title: 'Employability & Entrepreneurship',
      points: [
        'Nursery and garden management',
        'Mushroom cultivation',
        'Medicinal plant processing',
        'Biofertilizer and biopesticide production',
      ],
      intro: 'Students will gain skills in:',
      footer: 'This enhances job opportunities in agriculture, forestry, biotechnology, and environmental consultancy sectors.',
    },
    {
      id: 'PO7',
      title: 'Communication & Teamwork',
      points: [
        'Communicate scientific concepts effectively (oral & written)',
        'Work collaboratively in laboratories and field studies',
        'Demonstrate leadership and teamwork skills',
      ],
      intro: 'Graduates will:',
    },
    {
      id: 'PO8',
      title: 'Ethics & Social Responsibility',
      points: [
        'Follow ethical practices in research',
        'Respect biodiversity and environmental laws',
        'Contribute to community awareness on environmental protection',
      ],
      intro: 'Students will:',
    },
  ];

  const activities = [
    { name: 'Department Activities', file: '/Botany-Dept-Activities.pdf' },
  ];

  return (
    <AcademicsLayout pageTitle="Department of Botany" breadcrumbPath="Botany" category="Departments">

      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>The Department of Botany was established in 1964 as part of the undergraduate biological sciences, with a strong focus on excellence in teaching, research, and extension activities in plant sciences. The department fosters scientific curiosity, critical thinking, and innovation among students, while also promoting environmental responsibility and awareness.</p>
            <p>Over the years, the department has grown significantly through the contributions of distinguished faculty and strong academic leadership. It provides a comprehensive understanding of plant biology, ranging from molecular processes to ecosystem-level interactions.</p>
            <p>The vision of the department is to emerge as a center of excellence in plant sciences by encouraging research and promoting sustainable development. Its mission includes delivering quality education, advancing research in emerging areas, and creating awareness about environmental conservation.</p>
            <p>The undergraduate program is designed to integrate theoretical knowledge with practical training through laboratory work, field studies, and research projects. Core areas of study include plant anatomy, taxonomy, physiology, genetics, ecology, and microbiology.</p>
            <p>The department is equipped with well-established laboratories, including tissue culture, molecular biology, and environmental science facilities, along with a herbarium and museum. Graduates from the department find career opportunities in research, academia, environmental consultancy, pharmaceuticals, forestry, and agriculture.</p>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes (Accordion) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <Accordion type="multiple" className="space-y-3">
            {programOutcomes.map((po) => (
              <AccordionItem key={po.id} value={po.id} className="bg-card rounded-lg border border-border px-4">
                <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground hover:no-underline">
                  {po.id}: {po.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-3">{po.intro}</p>
                  <ul className="space-y-2">
                    {po.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {po.footer && (
                    <p className="text-muted-foreground mt-3 italic">{po.footer}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 3. Scheme & Syllabus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="max-w-sm mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-4">Botany Syllabus</h3>
              <a href="/BOT-SYLLABUS.pdf" target="_blank" rel="noopener noreferrer">
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
              <p>The Department of Botany, established in 1964, has been committed to excellence in plant science education and research. We strive to cultivate scientific curiosity, environmental awareness, and ethical responsibility among our students.</p>
              <p>With the dedicated service of our distinguished faculty, the department continues to grow in academic strength and innovation. We emphasize both theoretical knowledge and practical skills to prepare students for diverse career opportunities.</p>
              <p>I warmly welcome aspiring learners to join us in exploring the fascinating world of plant sciences and the diverse world of microbes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Department Activities */}
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

export default BotanyDepartment;
