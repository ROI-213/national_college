import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { Faculty } from '../../../components/faculty/types';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Calendar, Download, Building2, GraduationCap, Clock } from 'lucide-react';

import zm1 from '../../../assets/zoology-museum1.jpg';
import zm2 from '../../../assets/zoology-museum2.jpg';
import zm3 from '../../../assets/zoology-museum3.jpg';
import zm4 from '../../../assets/zoology-museum4.jpg';

const museumImages = [
  { src: zm1, alt: 'Zoology Museum 1' },
  { src: zm2, alt: 'Zoology Museum 2' },
  { src: zm3, alt: 'Zoology Museum 3' },
  { src: zm4, alt: 'Zoology Museum 4' },
];

const programOutcomes = [
  { id: 'po1', title: 'PO1: Ethics and Social Responsibility', content: 'Avoid unethical behavior such as fabrication, falsification, misrepresentation of data, and plagiarism. Understand environmental and sustainability issues. Gain comprehensive knowledge of zoology including biodiversity, anatomy, physiology, biochemistry, biotechnology, ecology, evolutionary biology, cell biology, molecular biology, immunology, and genetics.' },
  { id: 'po2', title: 'PO2: Design and Development', content: 'Develop interdisciplinary knowledge of allied biological sciences, environmental science, and chemical science.' },
  { id: 'po3', title: 'PO3: State-of-art Technologies', content: 'Learn various techniques, instruments, and computational tools used for analyzing animal structure and function.' },
  { id: 'po4', title: 'PO4: Entrepreneurship and Innovation', content: 'Apply knowledge to identify research gaps and develop innovative solutions.' },
  { id: 'po5', title: 'PO5: Communication', content: 'Effectively communicate complex zoological concepts clearly and efficiently.' },
  { id: 'po6', title: 'PO6: Lifelong Learning', content: 'Develop self-directed learning skills for continuous personal and professional growth.' },
  { id: 'po7', title: 'PO7: Ethics and Social Responsibility', content: 'Understand ethical practices in research and appreciate environmental sustainability.' },
];

const ZoologyDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const hodFaculty = facultyMembers.find(f => f.name === "Harish S");
  const zoologyFaculty = facultyMembers.filter(f => f.department === "Zoology");

  return (
    <AcademicsLayout pageTitle="Department of Zoology" breadcrumbPath="Zoology" category="Departments">
      {/* About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>Started in 1964, the Department of Zoology is equipped with well-established laboratories designed to provide students with hands-on training and practical exposure in various branches of biological sciences. The laboratories support undergraduate and postgraduate teaching, research activities, and skill development.</p>
            <p>The facilities include well-ventilated and spacious laboratories, adequate laboratory equipment and reagents, safety measures such as first aid kits and fire extinguishers, and regular maintenance under trained staff supervision.</p>
            <p><strong>Zoology Museum:</strong> The Zoology Department Museum serves as an important academic resource that complements classroom teaching and laboratory learning. It houses a rich collection of preserved specimens, models, charts, and biological exhibits that help students understand animal diversity, structure, and evolution.</p>
            <p>The museum is accessible to students during working hours under faculty supervision. Specimens are systematically labeled and well-maintained, and regular updating and preservation ensure long-term usability.</p>
          </div>
        </div>
      </section>

      {/* Museum Images */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {museumImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                <img src={img.src} alt={img.alt} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {programOutcomes.map((po) => (
                <AccordionItem key={po.id} value={po.id}>
                  <AccordionTrigger className="text-left font-semibold text-foreground">{po.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">{po.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* HOD Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">HOD Message</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {hodFaculty && (
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img src={hodFaculty.image} alt={hodFaculty.name} className="w-48 h-56 object-cover rounded-xl shadow-lg" />
                <h3 className="text-lg font-bold text-foreground mt-3 text-center">{hodFaculty.name}</h3>
                <p className="text-primary text-sm font-medium text-center">{hodFaculty.designation}</p>
              </div>
            )}
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>The Department of Zoology was established with the B.Sc. CBZ course in the year 1964, with eminent and dedicated professors. Since its inception, the department has been striving to impart knowledge of zoology to undergraduate students.</p>
              <p>The department was initially headed by Prof. Subramanya, followed by Prof. Gowri, Prof. K. V. Narayana Murthy, Prof. Mahalingeshwarappa, Prof. H. K. Hanumanthanna, Prof. Vijayakumari, Prof. Mahaballeshwarappa, and Dr. Ramesh P. L. At present, the department is headed by Prof. Harish S (since 2024).</p>
              <p>The department has excellent teaching facilities, including a well-equipped laboratory, museum specimens for systematic and ecological study, charts, slides, and other educational aids. The teaching and non-teaching staff work together to create a vibrant learning environment and take pride in contributing to the department.</p>
              <p>Scientific talks by eminent scientists are regularly organized to enhance student learning and exposure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Time Table</h2>
          <div className="max-w-lg mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Calendar className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-4">Current Semester Time Table</h3>
              <a href="/Zoology-TT.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2"><Download size={16} /> Download</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Faculty Members</h2>
          {zoologyFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {zoologyFaculty.map((faculty) => (
                <div
                  key={faculty.id}
                  className="group bg-card rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
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
                    <Button onClick={() => setSelectedFaculty(faculty)} variant="outline" className="w-full mt-3 hover:bg-primary hover:text-primary-foreground transition-colors">
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

export default ZoologyDepartment;
