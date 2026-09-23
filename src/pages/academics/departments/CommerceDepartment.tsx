
import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock } from 'lucide-react';

const generalPOs = [
  { id: 'PO1', title: 'Critical Thinking', description: 'Take informed actions after evaluating assumptions and perspectives.' },
  { id: 'PO2', title: 'Effective Communication', description: 'Communicate clearly in English and an Indian language using multiple mediums.' },
  { id: 'PO3', title: 'Social Interaction', description: 'Engage in discussions, mediate disagreements, and collaborate effectively.' },
  { id: 'PO4', title: 'Effective Citizenship', description: 'Demonstrate social responsibility and participate in civic life.' },
  { id: 'PO5', title: 'Ethics', description: 'Understand moral values and take responsibility for decisions.' },
  { id: 'PO6', title: 'Environment and Sustainability', description: 'Understand environmental issues and sustainable development.' },
  { id: 'PO7', title: 'Self-directed and Life-long Learning', description: 'Engage in continuous independent learning.' },
];

const bcomPOs = [
  { id: 'PO1', title: 'Disciplinary Knowledge', description: 'Demonstrate comprehensive knowledge of commerce, accounting, finance, taxation, business law, and management principles.' },
  { id: 'PO2', title: 'Critical Thinking and Problem Solving', description: 'Analyze business problems critically and propose effective, innovative solutions using commerce and management frameworks.' },
  { id: 'PO3', title: 'Social Interaction and Teamwork', description: 'Work effectively in teams, demonstrating leadership, communication, and interpersonal skills in business environments.' },
  { id: 'PO4', title: 'Effective Communication', description: 'Communicate business ideas clearly and persuasively through oral, written, and digital mediums.' },
  { id: 'PO5', title: 'Self-directed and Life-long Learning', description: 'Engage in continuous professional development and adapt to evolving business trends and practices.' },
  { id: 'PO6', title: 'Ethical and Professional Conduct', description: 'Apply ethical principles and professional standards in accounting, finance, and business decision-making.' },
  { id: 'PO7', title: 'Digital Literacy and ICT Skills', description: 'Use modern ICT tools, accounting software, and digital platforms for business operations and analysis.' },
  { id: 'PO8', title: 'Research and Analytical Skills', description: 'Apply research methodologies and analytical techniques to investigate commercial and financial problems.' },
  { id: 'PO9', title: 'Environmental Awareness and Sustainability', description: 'Understand the impact of business on the environment and promote sustainable business practices.' },
  { id: 'PO10', title: 'Employability and Entrepreneurship', description: 'Develop entrepreneurial mindset and career-ready skills for banking, finance, taxation, and corporate management.' },
  { id: 'PO11', title: 'Civic Responsibility and Community Engagement', description: 'Contribute to community development through socially responsible business practices and civic participation.' },
];

const courseOutcomes: Record<string, { course: string; outcomes: string[] }[]> = {
  'First Semester': [
    {
      course: 'Financial Accounting – I',
      outcomes: [
        'CO1: Understand the fundamentals of accounting and prepare journal entries, ledger accounts, and trial balance.',
        'CO2: Prepare final accounts of sole proprietors with adjustments.',
        'CO3: Understand and apply the concept of depreciation using various methods.',
        'CO4: Prepare accounts for consignment and joint ventures.',
        'CO5: Develop practical skills in maintaining books of accounts.',
      ],
    },
    {
      course: 'Business Organisation',
      outcomes: [
        'CO1: Understand the concept, nature, and scope of business.',
        'CO2: Analyze various forms of business organizations and their features.',
        'CO3: Evaluate the role of entrepreneurs and small-scale industries in economic development.',
        'CO4: Understand the concept of business combinations, mergers, and acquisitions.',
        'CO5: Analyze contemporary issues in business organization and management.',
      ],
    },
    {
      course: 'Marketing Management',
      outcomes: [
        'CO1: Understand the concepts, functions, and importance of marketing.',
        'CO2: Analyze consumer behavior and market segmentation strategies.',
        'CO3: Understand the marketing mix — Product, Price, Place, and Promotion.',
        'CO4: Evaluate modern marketing trends including digital and social media marketing.',
        'CO5: Develop marketing plans and strategies for various business scenarios.',
      ],
    },
  ],
  'Second Semester': [
    {
      course: 'Financial Accounting – II',
      outcomes: [
        'CO1: Prepare partnership accounts including admission, retirement, and death of a partner.',
        'CO2: Prepare accounts for dissolution and insolvency of firms.',
        'CO3: Understand and prepare branch and departmental accounts.',
        'CO4: Account for hire purchase and installment payment systems.',
        'CO5: Apply Indian Accounting Standards in financial reporting.',
      ],
    },
    {
      course: 'Business Management',
      outcomes: [
        'CO1: Understand the principles and functions of management.',
        'CO2: Analyze planning, organizing, staffing, directing, and controlling functions.',
        'CO3: Evaluate leadership styles, motivation theories, and communication processes.',
        'CO4: Understand organizational behavior and change management.',
        'CO5: Apply management concepts to real-world business situations.',
      ],
    },
    {
      course: 'Banking and Financial Services',
      outcomes: [
        'CO1: Understand the structure and functions of the Indian banking system.',
        'CO2: Analyze the role of RBI and its monetary policies.',
        'CO3: Understand various banking products and services.',
        'CO4: Evaluate financial services including insurance, mutual funds, and venture capital.',
        'CO5: Analyze the impact of technology on banking and financial services.',
      ],
    },
  ],
  'Third Semester': [
    {
      course: 'Corporate Accounting – I',
      outcomes: [
        'CO1: Prepare accounts for issue and forfeiture of shares and debentures.',
        'CO2: Understand and prepare company final accounts as per Schedule III.',
        'CO3: Prepare accounts for amalgamation, absorption, and reconstruction.',
        'CO4: Apply accounting standards relevant to corporate reporting.',
        'CO5: Analyze financial statements for decision-making purposes.',
      ],
    },
    {
      course: 'Business Law',
      outcomes: [
        'CO1: Understand the Indian Contract Act, 1872 and its essential elements.',
        'CO2: Analyze the Sale of Goods Act, 1930 and its implications.',
        'CO3: Understand the Companies Act, 2013 and corporate governance.',
        'CO4: Evaluate consumer protection laws and their applications.',
        'CO5: Apply legal principles to business transactions and disputes.',
      ],
    },
    {
      course: 'Cost Accounting',
      outcomes: [
        'CO1: Understand the concepts, objectives, and classification of costs.',
        'CO2: Prepare cost sheets and understand elements of cost.',
        'CO3: Apply material, labor, and overhead costing techniques.',
        'CO4: Understand process costing and contract costing methods.',
        'CO5: Analyze cost data for managerial decision-making.',
      ],
    },
  ],
  'Fourth Semester': [
    {
      course: 'Corporate Accounting – II',
      outcomes: [
        'CO1: Prepare accounts for liquidation of companies.',
        'CO2: Understand holding company accounts and consolidated financial statements.',
        'CO3: Prepare accounts for banking and insurance companies.',
        'CO4: Understand valuation of goodwill and shares.',
        'CO5: Apply Indian Accounting Standards in corporate financial reporting.',
      ],
    },
    {
      course: 'Income Tax – I',
      outcomes: [
        'CO1: Understand the basic concepts and definitions under the Income Tax Act, 1961.',
        'CO2: Compute income from salary and house property.',
        'CO3: Compute income from business and profession.',
        'CO4: Understand capital gains and income from other sources.',
        'CO5: Compute total income and tax liability of individuals.',
      ],
    },
    {
      course: 'Management Accounting',
      outcomes: [
        'CO1: Understand the nature, scope, and functions of management accounting.',
        'CO2: Analyze financial statements using ratio analysis and fund flow statements.',
        'CO3: Prepare budgets and understand budgetary control systems.',
        'CO4: Apply marginal costing and break-even analysis for decision-making.',
        'CO5: Understand standard costing and variance analysis.',
      ],
    },
  ],
};

const syllabusFiles = [
  { title: 'NEP B.Com Syllabus (2020–2023)', file: '/NEP-B.com-Syllabus-2020-2023.pdf' },
  { title: 'B.Com SEP Syllabus (Sem 1–4)', file: '/B.Com-SEP-Syllabus-1-4-sem.pdf' },
];

const CommerceDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Commerce & Management" || f.department === "Commerce"
  );

  const hod = facultyMembers.find((f) => f.name === "Dr. Mandasmitha N");

  return (
    <AcademicsLayout pageTitle="Department of Commerce & Management" breadcrumbPath="Commerce & Management" category="Departments">

      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>

          <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            To be a Centre of Excellence in the realm of Commerce and Management, developing and nurturing global competencies in students through quality education, research, and continuous innovation.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            To nurture commerce professionals who possess a high level of knowledge and competence to effectively contribute to society with commitment and integrity.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">Courses Offered</h3>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
            The department offers 3 UG and 1 PG course in commerce and management.
          </p>
          <p className="text-foreground font-semibold mb-2">UG Courses:</p>
          <ul className="space-y-2 list-none mb-4">
            <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span className="text-muted-foreground">B.Com (Regular)</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span className="text-muted-foreground">B.Com (Logistics & Supply Chain Management)</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span className="text-muted-foreground">BBA (Business Analytics)</span></li>
          </ul>
          <p className="text-foreground font-semibold mb-2">PG Course:</p>
          <ul className="space-y-2 list-none mb-8">
            <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span className="text-muted-foreground">M.Com (Accounting and Taxation)</span></li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground mb-4">Commerce Personnel Association Club</h3>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
            Commerce Personnel Association (COPA) Club was established on 29th October 2022 by the Department of Commerce and Management at National College, Basavanagudi.
          </p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span className="text-muted-foreground">The club promotes sportsmanship, teamwork, and active participation in co-curricular activities.</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span className="text-muted-foreground">It provides a platform for students to showcase talents and develop leadership skills.</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span className="text-muted-foreground">The inaugural event "Tour de Commerce" marked a successful beginning.</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-primary mt-1 shrink-0" size={20} /><span className="text-muted-foreground">The club continues to organize engaging student-centric activities.</span></li>
          </ul>
        </div>
      </section>

      {/* 2. Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Program Outcomes</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            POs of General Higher Education Programmes should be identified by the Autonomous College offering the three-year Programmes:
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            Students of all undergraduate general degree Programmes at the time of graduation will be able to:
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">General Programme Outcomes</h3>
          <Accordion type="single" collapsible className="mb-10">
            {generalPOs.map((po) => (
              <AccordionItem key={po.id} value={po.id}>
                <AccordionTrigger className="text-left">{po.id}: {po.title}</AccordionTrigger>
                <AccordionContent><p className="text-muted-foreground">{po.description}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <h3 className="text-2xl font-bold text-foreground mb-4">Bachelor of Commerce (B.Com) – Programme Outcomes</h3>
          <Accordion type="single" collapsible>
            {bcomPOs.map((po) => (
              <AccordionItem key={po.id} value={`bcom-${po.id}`}>
                <AccordionTrigger className="text-left">{po.id}: {po.title}</AccordionTrigger>
                <AccordionContent><p className="text-muted-foreground">{po.description}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 3. Course Outcomes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Course Outcomes</h2>
          {Object.entries(courseOutcomes).map(([semester, courses]) => (
            <div key={semester} className="mb-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">{semester}</h3>
              <Accordion type="single" collapsible>
                {courses.map((course, idx) => (
                  <AccordionItem key={idx} value={`${semester}-${idx}`}>
                    <AccordionTrigger className="text-left">{course.course}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 list-none">
                        {course.outcomes.map((co, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                            <span className="text-muted-foreground">{co}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Scheme & Syllabus */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {syllabusFiles.map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
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

      {/* 5. HOD Message */}
      <section className="py-16 bg-background">
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
            <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Department of Commerce and Management is fostering to nurture future business leaders and financial professionals through a blend of academic excellence, innovation, professional growth and holistic development. With a strong legacy of nurturing industry-ready graduates, the department blends academic rigor with practical learning to prepare students for global business environments.
              </p>
              <p>
                With a curriculum that integrates theoretical knowledge and practical exposure, the school emphasizes experiential learning through industry interactions, internships, case studies, and research projects. Our experienced faculty, state-of-the-art infrastructure, and vibrant learning ecosystem foster intellectual curiosity, ethical values, and the entrepreneurial spirit.
              </p>
              <p>
                Our programmes are designed to align with international standards, offering professional integration with ACCA, CMA certifications, along with emerging specializations such as Analytics and Investment Banking. Guided by experienced faculty and industry experts, students gain a comprehensive understanding of global markets and financial innovation.
              </p>
              <p>
                The Department continues to build a reputation for producing competent, confident, and socially responsible professionals who lead with vision and integrity.
              </p>
            </div>
          </div>
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

export default CommerceDepartment;
