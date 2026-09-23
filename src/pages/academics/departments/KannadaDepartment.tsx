import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { CheckCircle, FileText, Download, Calendar, Building2, GraduationCap, Clock } from 'lucide-react';

const KannadaDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.name === "Dr. B. PAPANNA" || f.name === "Srinivasa Murthy T"
  );

  const hodFaculty = facultyMembers.find((f) => f.name === "Dr. B. PAPANNA");

  const syllabusFiles = [
    { name: 'Syllabus (I–IV Sem)', file: '/syllabus.pdf' },
    { name: 'Syllabus (V–VI Sem)', file: '/syllabus-V-VI-SEM.pdf' },
  ];

  const activities = [
    { name: '70th Kannada Rajyotsava Report 2025', file: '/70th-Kannada-Rajyotsava-Report-2025.pdf' },
    { name: 'Angaladalli Tingala Pustaka - 2026', file: '/Angaladalli-Tingala-pustaka-2026.pdf' },
    { name: 'Chaaru Vasantha Book Release', file: '/Chaaru-Vasantha-Book-Release.pdf' },
    { name: 'Kannada Department Activity 2025', file: '/Kannada-Department-Activity-2025.pdf' },
  ];

  const outcomes = [
    'It helps students develop human values and cultural understanding',
    'Prepares students to face modern technological and academic challenges',
    'Encourages responsible citizenship and social awareness',
    'Motivates students to pursue research and higher studies',
  ];

  return (
    <AcademicsLayout pageTitle="Department of Kannada" breadcrumbPath="Kannada" category="Departments">
      
      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Established in 1945, the Department of Kannada at National College has been a centre of academic excellence and cultural enrichment. The department takes pride in having had the renowned Kannada scholar A. R. Krishna Shastry among its distinguished faculty.
            </p>
            <p>
              Over the years, eminent scholars such as K. V. Narayan, K. R. Nagaraj, Vidyashankar, K. N. Nagaraj, and H. S. Madhava Rao have contributed immensely to its growth and reputation.
            </p>
            <p>
              The department offers Kannada as a language subject for undergraduate programmes such as B.A., B.Sc., B.C.A., B.Com., B.Com Logistics, B.Sc. Animation, and B.B.A. It also offers Kannada Literature as an optional subject in the B.A. programme.
            </p>
            <p>
              At present, the department has four faculty members appointed by the management, ensuring quality academic engagement and personalized guidance for students.
            </p>
            <p>
              The department provides focused and effective learning. The curriculum is designed to meet contemporary academic needs, and the Board of Studies includes eminent scholars from Bengaluru University, University of Mysore, and other reputed institutions.
            </p>
            <p>
              To enrich students' academic experience, the department regularly organizes seminars, guest lectures, literary discussions, educational visits, and cultural programmes. Students are encouraged to participate in academic presentations and creative writing activities such as essays, short stories, and travelogues, helping them develop critical thinking and communication skills.
            </p>
            <p>
              The department is equipped with a library containing reference books, magazines, encyclopaedias, and dictionaries. It also provides computer facilities with Kannada software such as Baraha, Lipi, and Nudi to support academic learning and research.
            </p>
            <p>
              Committed to academic excellence, the Department of Kannada adopts innovative teaching methods and effective evaluation practices while guiding students for competitive examinations. The department continues to uphold excellence in Kannada language and literary studies.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <div>
            <ul className="space-y-4">
              {outcomes.map((outcome, i) => (
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
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                Since the inception of National College in 1945, the Department of Kannada has been one of the largest and most active departments, playing a pivotal role in fulfilling the academic aspirations of students. The department has been providing platforms and opportunities for students to showcase their multifaceted talents.
              </p>
              <p>
                We teach Kannada as a language and as a special subject for B.A., B.Sc., B.C.A., B.Com., B.Sc. Animation and B.B.A. students. We are proud to have started the Post-Graduate course in Kannada Literature in 2009. Studying Kannada as a classical and administrative language opens excellent employment opportunities for our graduates.
              </p>
              <p>
                Through literary and cultural competitions — debates, extempore speaking, essay writing, general knowledge quizzes, and guest lectures — we continue to guide, inspire, and encourage our students. I am happy to share that students who have already graduated are serving with distinction in various fields.
              </p>
              <div className="mt-4">
                <a href="/kannada-hod.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <FileText size={16} /> View Full Message (PDF)
                  </Button>
                </a>
              </div>
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
              <h3 className="font-semibold text-foreground mb-2">II, IV, VI Sem Time Table</h3>
              <p className="text-sm text-muted-foreground mb-4">March 2025</p>
              <a href="/II-IV-VI-SEM-TIME-TABLE-MARCH-2025.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Download size={16} /> View / Download PDF
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Activities</h2>
          <div>
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
        </div>
      </section>

      {/* 7. Faculty Members */}
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

export default KannadaDepartment;
