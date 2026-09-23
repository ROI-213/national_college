import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock } from 'lucide-react';

import electronicsLab1 from '../../../assets/electronics-lab1.jpg';
import electronicsLab2 from '../../../assets/electronics-lab2.jpg';
import electronicsLab3 from '../../../assets/electronics-lab3.jpg';
import electronicsLab4 from '../../../assets/electronics-lab4.jpg';
import electronicsLab5 from '../../../assets/electronics-lab5.jpg';
import electronicsLab6 from '../../../assets/electronics-lab6.jpg';

const ElectronicsDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Electronics"
  );

  const hodFaculty = facultyMembers.find(
    (f) => f.name.includes("Poornima Hegde")
  );

  const programOutcomes = [
    { id: 'PO1', title: 'Comprehensive Scientific Knowledge', text: 'Students will gain deep knowledge in their selected scientific disciplines, with emphasis on both theoretical and practical applications.' },
    { id: 'PO2', title: 'Laboratory and Experimental Skills', text: 'Students will develop hands-on laboratory skills, including the design, execution, and interpretation of experiments.' },
    { id: 'PO3', title: 'Interdisciplinary Problem Solving', text: 'Students will integrate knowledge from multiple disciplines to solve real-world scientific and technical challenges.' },
    { id: 'PO4', title: 'Mathematical and Computational Proficiency', text: 'Students will develop strong mathematical and computational skills for data analysis, modelling, and problem-solving.' },
    { id: 'PO5', title: 'Research Methodology and Scientific Writing', text: 'Students will learn to conduct research, analyse data, and present findings effectively in written and oral formats.' },
    { id: 'PO6', title: 'Understanding of Scientific Theories and Laws', text: 'Students will be able to explain and apply fundamental scientific principles.' },
    { id: 'PO7', title: 'Sustainability and Environmental Awareness', text: 'Students will understand environmental sustainability and the importance of green technologies.' },
    { id: 'PO8', title: 'Advanced Problem-Solving Using Technology', text: 'Students will use modern tools such as simulation software and lab instruments to solve complex problems.' },
    { id: 'PO9', title: 'Scientific Communication and Presentation Skills', text: 'Students will effectively communicate scientific ideas to both expert and non-expert audiences.' },
    { id: 'PO10', title: 'Ethics and Responsibility in Science', text: 'Students will apply ethical principles in scientific research and professional practices.' },
  ];

  const labImages = [
    { src: electronicsLab1, alt: 'Electronics Lab 1' },
    { src: electronicsLab2, alt: 'Electronics Lab 2' },
    { src: electronicsLab3, alt: 'Electronics Lab 3' },
    { src: electronicsLab4, alt: 'Electronics Lab 4' },
    { src: electronicsLab5, alt: 'Electronics Lab 5' },
    { src: electronicsLab6, alt: 'Electronics Lab 6' },
  ];

  return (
    <AcademicsLayout pageTitle="Department of Electronics" breadcrumbPath="Electronics" category="Departments">

      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>The Department of Electronics at The National College, Basavanagudi, Bengaluru, was established in 1988–89 with the objective of providing quality undergraduate education in electronics. The department focuses on building strong theoretical foundations along with practical skills to meet the demands of modern technology.</p>
            <p>The laboratories were significantly strengthened through contributions by Sri L. S. Purushotham, enhancing infrastructure and enabling effective hands-on learning experiences. Over the years, the department has grown steadily in terms of academic excellence and technical capability.</p>
            <p>Led by Prof. Poornima Hegde, the department is supported by experienced and dedicated faculty members who are committed to student development and academic growth. The vision of the department is to empower students with strong technical knowledge and innovation skills, while its mission emphasizes quality education, problem-solving ability, and research orientation.</p>
            <p>The department offers B.Sc. programs in combination with Electronics, Physics, Mathematics, and Computer Science. It provides well-equipped laboratories including analog, digital, microprocessor, communication, and project labs, ensuring comprehensive practical exposure.</p>
            <p>Students actively participate in projects, workshops, seminars, industrial visits, and exhibitions to enhance their skills. The department also promotes industry interaction through internships, guest lectures, and collaborations with experts. MoUs with industries further support training, research, and real-world exposure, preparing graduates for careers in electronics industries, IT sectors, and higher education.</p>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes (Accordion) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <Accordion type="multiple" className="w-full max-w-4xl mx-auto">
            {programOutcomes.map((po) => (
              <AccordionItem key={po.id} value={po.id}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                  {po.id}: {po.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground text-base leading-relaxed pl-2">{po.text}</p>
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
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-4">BSc Electronics Syllabus</h3>
              <a href="/BSc-Electronics-Syllabus.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2"><Download size={16} /> Download</Button>
              </a>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-4">Course Matrix</h3>
              <a href="/B.Sc_Electronics_Course_Matrix.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2"><Download size={16} /> Download</Button>
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
              <p>Our department is committed to providing quality education that blends strong theoretical foundations with practical knowledge in the field of Electronics. We strive to create an academic environment that encourages innovation, critical thinking, and problem-solving skills to meet the challenges of rapidly evolving technology.</p>
              <p>The curriculum is designed to equip students with core competencies in Analog and Digital Electronics, Communication Systems, Embedded Systems, and Biomedical Instrumentation, along with exposure to emerging areas. Well-equipped laboratories, experienced faculty members, and student-centered teaching methodologies help nurture technical expertise and professional ethics.</p>
              <p>We strongly encourage students to participate in seminars, workshops, industry visits, and research-oriented activities to enhance their practical exposure and industry readiness. Our goal is to develop competent graduates who are not only technically sound but also socially responsible and capable of lifelong learning.</p>
              <p>I invite students, parents, and stakeholders to explore the opportunities offered by our department and be a part of our journey towards academic excellence and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Lab Facilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Lab Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {labImages.map((lab, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md border border-border">
                <img
                  src={lab.src}
                  alt={lab.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
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

export default ElectronicsDepartment;
