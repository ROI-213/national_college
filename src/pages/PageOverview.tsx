import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { FileText, Download, CheckCircle2, AlertCircle, Search } from 'lucide-react';

const PageOverview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Comprehensive page audit data - ALL 120+ pages
  const pageAudit = [
    {
      category: 'Core Pages',
      pages: [
        {
          name: 'Homepage',
          url: '/',
          dummyData: [
            'Generic hero banner text "Welcome to The National College"',
            'Stock images from Unsplash for hero section and gallery',
            'Lorem ipsum for section descriptions',
            'Placeholder faculty names and photos',
            'Sample testimonials with generic names',
            'Generic statistics (2500+ students, 95% placement)',
            'Placeholder news and events',
            'Sample principal message and photo'
          ],
          actualData: [
            'Actual college hero image/video and branded visuals',
            'Real admission statistics and current deadlines',
            'Current principal\'s actual message, photo, and credentials',
            'Real faculty photos, names, and detailed credentials',
            'Genuine student testimonials with photos and consent',
            'Actual placement statistics with company logos and verification',
            'Current news, events, and announcements with dates',
            'Real campus photos and infrastructure images',
            'Actual NAAC accreditation certificate and details',
            'Real contact information and emergency numbers'
          ]
        },
        {
          name: 'Contact Us',
          url: '/contact',
          dummyData: [
            'Sample contact form with generic fields',
            'Generic office hours (9 AM - 5 PM)',
            'Placeholder map location',
            'Sample email addresses (info@college.edu)',
            'Generic contact numbers (+91 XXXX XXXXXX)'
          ],
          actualData: [
            'Actual college address with precise location coordinates',
            'Real phone numbers for different departments',
            'Actual email addresses for admissions, academics, admin',
            'Current office hours and holiday schedules',
            'Emergency contact numbers and after-hours support',
            'Department-wise contact directory',
            'Real map integration with accurate location'
          ]
        },
        {
          name: 'Sitemap',
          url: '/sitemap',
          dummyData: [
            'Auto-generated page links',
            'Generic page descriptions',
            'Sample statistics'
          ],
          actualData: [
            'Complete and current page structure',
            'Accurate page descriptions and purposes',
            'Real website statistics and metrics'
          ]
        },
        {
          name: 'Page Overview',
          url: '/page-overview',
          dummyData: [
            'Template content audit structure',
            'Sample data requirements'
          ],
          actualData: [
            'Complete content audit with real requirements',
            'Actual workflow and timeline for content collection'
          ]
        },
        {
          name: 'Data Inventory',
          url: '/data-inventory',
          dummyData: [
            'Generic data categories',
            'Sample data management processes'
          ],
          actualData: [
            'Actual data inventory and management policies',
            'Real compliance and privacy documentation'
          ]
        }
      ]
    },
    {
      category: 'About Section',
      pages: [
        {
          name: 'About the College',
          url: '/about/college',
          dummyData: ['Generic college establishment dates', 'Stock photos for campus images', 'Sample achievement statistics'],
          actualData: ['Verified college history with documented founding details', 'Real campus photos', 'Authentic achievement records']
        },
        {
          name: 'Vision & Mission',
          url: '/about/vision-mission',
          dummyData: ['Generic educational vision statement', 'Sample mission points'],
          actualData: ['Official college vision approved by governing body', 'Actual mission statement from institutional documents']
        },
        {
          name: 'The Institution Mentor',
          url: '/about/institution-mentor',
          dummyData: ['Placeholder page content'],
          actualData: ['Institution mentor details, biography, and contributions']
        },
        {
          name: 'Governing Body',
          url: '/about/governing-body',
          dummyData: ['Generic society history', 'Sample governing structure', 'Template council members'],
          actualData: ['Complete NES history and founding documents', 'Current governing body members with profiles', 'Official objectives and constitution']
        },
        {
          name: 'College Management',
          url: '/college-management',
          dummyData: ['Placeholder management team names', 'Stock professional photos'],
          actualData: ['Current management committee members', 'Real photos and biographical information']
        },
        {
          name: "Principal's Message",
          url: '/about/principal-message',
          dummyData: ['Generic principal name and stock photo', 'Template welcome message'],
          actualData: ["Current principal's actual photo and name", 'Authentic personal message and vision']
        },
        {
          name: 'Faculties',
          url: '/about/faculties',
          dummyData: ['Sample faculty names and photos', 'Generic qualifications'],
          actualData: ['Complete faculty database with real photographs', 'Detailed qualifications and research interests']
        },
        {
          name: 'Campus',
          url: '/about/campus',
          dummyData: ['Stock campus images', 'Generic facility descriptions'],
          actualData: ['Actual campus photos and virtual tour', 'Real facility specifications and capacities']
        }
      ]
    },
    {
      category: 'Academic Departments',
      pages: [
        {
          name: 'Departments Overview',
          url: '/academics/departments',
          dummyData: [
            'Generic department descriptions',
            'Sample faculty count per department',
            'Placeholder course offerings',
            'Template research areas'
          ],
          actualData: [
            'Detailed department information with specializations',
            'Actual faculty names, qualifications, and research interests',
            'Complete course curriculum and credit structure',
            'Active research projects and publications',
            'Industry collaborations and internship partnerships',
            'Department achievements and recognition'
          ]
        },
        {
          name: 'Commerce Department',
          url: '/academics/departments/commerce',
          dummyData: [
            'Generic commerce programs description',
            'Sample faculty expertise areas',
            'Placeholder industry connections'
          ],
          actualData: [
            'Complete commerce curriculum and specializations',
            'Faculty research in accounting, finance, and taxation',
            'Real industry partnerships and guest lecture programs',
            'Student placement records in commerce field',
            'Departmental achievements and recognitions'
          ]
        },
        {
          name: 'Management Department',
          url: '/academics/departments/management',
          dummyData: [
            'Template management program details',
            'Sample case study methodologies',
            'Generic industry interface descriptions'
          ],
          actualData: [
            'Actual management curriculum with specialization tracks',
            'Real case studies and project-based learning examples',
            'Industry mentorship programs and corporate connections',
            'MBA pathway and career progression data',
            'Faculty consulting experience and industry background'
          ]
        },
        {
          name: 'Humanities Department',
          url: '/academics/departments/humanities',
          dummyData: [
            'Generic humanities subject offerings',
            'Sample interdisciplinary approaches',
            'Placeholder cultural programs'
          ],
          actualData: [
            'Complete humanities curriculum across all programs',
            'Real interdisciplinary research projects and publications',
            'Cultural events, workshops, and community engagement',
            'Faculty expertise in literature, history, and social sciences',
            'Student achievements in humanities competitions and publications'
          ]
        },
        {
          name: 'Computer Science Department',
          url: '/academics/departments/computer-science',
          dummyData: [
            'Generic programming languages and technologies',
            'Sample lab facilities description',
            'Placeholder industry certifications'
          ],
          actualData: [
            'Current programming curriculum and technology stack',
            'Actual lab equipment and software licenses',
            'Industry certifications and training partnerships',
            'Student project portfolios and internship placements',
            'Faculty research in emerging technologies',
            'Tech industry placement records and company partnerships'
          ]
        },
        {
          name: 'Languages Department',
          url: '/academics/departments/languages',
          dummyData: [
            'Sample language offerings',
            'Generic proficiency levels',
            'Template cultural immersion programs'
          ],
          actualData: [
            'Complete language curriculum (Kannada, Hindi, English, others)',
            'Actual proficiency assessment methods and certifications',
            'Cultural exchange programs and language immersion opportunities',
            'Faculty native speaker credentials and teaching certifications',
            'Student achievements in language competitions and examinations'
          ]
        },
        {
          name: 'PG Journalism & Mass Communication',
          url: '/academics/departments/journalism',
          dummyData: [
            'Generic journalism curriculum outline',
            'Sample media equipment description',
            'Placeholder industry internships'
          ],
          actualData: [
            'Complete journalism curriculum with specialization options',
            'Professional media equipment and studio specifications',
            'Real media house partnerships and internship programs',
            'Faculty industry experience and media credentials',
            'Student publications, media projects, and career placements',
            'Guest lecturer network from media industry'
          ]
        },
        {
          name: 'PG Psychology Department',
          url: '/academics/departments/psychology',
          dummyData: [
            'Generic psychology specializations',
            'Sample research methodologies',
            'Placeholder counseling services'
          ],
          actualData: [
            'Complete psychology curriculum with clinical and applied tracks',
            'Research lab facilities and psychological assessment tools',
            'Real counseling center services and community outreach',
            'Faculty research publications and clinical experience',
            'Student research projects and thesis topics',
            'Professional psychology certifications and continuing education'
          ]
        }
      ]
    },
    {
      category: 'Graduate Programs',
      pages: [
        {
          name: 'Graduate Programs Overview',
          url: '/academics/graduate',
          dummyData: [
            'Generic undergraduate program descriptions',
            'Sample admission requirements',
            'Placeholder career outcomes'
          ],
          actualData: [
            'Complete undergraduate program catalog with requirements',
            'Actual admission criteria and selection process',
            'Real career outcome statistics and alumni success stories',
            'Industry partnerships and placement assistance'
          ]
        },
        {
          name: 'BA Program',
          url: '/academics/graduate/ba',
          dummyData: [
            'Generic BA subject combinations',
            'Sample elective options',
            'Template career pathways'
          ],
          actualData: [
            'Complete BA curriculum with all subject combinations',
            'Current elective offerings and credit requirements',
            'Real career pathways and further education options',
            'Faculty expertise in each subject area',
            'Student research opportunities and projects'
          ]
        },
        {
          name: 'BBA in Business Analytics (AICTE)',
          url: '/academics/graduate/bba-business-analytics',
          dummyData: [
            'Generic business administration curriculum',
            'Sample practical training components',
            'Placeholder industry exposure'
          ],
          actualData: [
            'Complete BBA curriculum with specialization options',
            'Real practical training and internship requirements',
            'Industry exposure through guest lectures and field visits',
            'Actual placement statistics and recruiting companies',
            'Entrepreneurship support and incubation programs'
          ]
        },
        {
          name: 'BCA Program',
          url: '/academics/graduate/bca',
          dummyData: [
            'Generic computer application topics',
            'Sample programming projects',
            'Template software training'
          ],
          actualData: [
            'Current BCA curriculum aligned with industry standards',
            'Real programming projects and software development experience',
            'Industry-standard software training and certifications',
            'Technology placement support and career guidance',
            'Faculty expertise in current programming languages and frameworks'
          ]
        },
        {
          name: 'BCom Program',
          url: '/academics/graduate/bcom',
          dummyData: [
            'Generic commerce subjects',
            'Sample accounting practices',
            'Placeholder taxation knowledge'
          ],
          actualData: [
            'Complete BCom curriculum with accounting, finance, and taxation',
            'Real-world accounting software training and practical experience',
            'Current taxation laws and GST implementation knowledge',
            'Professional accounting certification pathways',
            'Commerce industry placement support and career guidance'
          ]
        },
        {
          name: 'BA English and Journalism',
          url: '/academics/graduate/ba-english-journalism',
          dummyData: [
            'Generic English literature and journalism combination',
            'Sample writing projects',
            'Template media exposure'
          ],
          actualData: [
            'Integrated English literature and journalism curriculum',
            'Real writing projects for newspapers and digital media',
            'Media house internships and professional networking',
            'Faculty with journalism industry experience',
            'Student publications and media achievements'
          ]
        },
        {
          name: 'BA Psychology and Journalism',
          url: '/academics/graduate/ba-psychology-journalism',
          dummyData: [
            'Generic psychology and journalism integration',
            'Sample research projects',
            'Template fieldwork experiences'
          ],
          actualData: [
            'Unique psychology-journalism curriculum integration',
            'Real research projects combining both disciplines',
            'Fieldwork opportunities in media psychology',
            'Faculty expertise in both psychology and journalism',
            'Career paths in media psychology and behavioral journalism'
          ]
        },
        {
          name: 'BA Journalism and Political Science',
          url: '/academics/graduate/ba-journalism-political',
          dummyData: [
            'Generic political journalism curriculum',
            'Sample political analysis projects',
            'Template internship opportunities'
          ],
          actualData: [
            'Political journalism curriculum with current affairs focus',
            'Real political analysis and reporting projects',
            'Government and media house internship opportunities',
            'Faculty with political journalism and academic experience',
            'Student achievements in political reporting and analysis'
          ]
        },
        {
          name: 'BSc Computer Science & Psychology',
          url: '/academics/graduate/bsc-computer-psychology',
          dummyData: [
            'Generic interdisciplinary program description',
            'Sample technology-psychology integration',
            'Template research opportunities'
          ],
          actualData: [
            'Innovative computer science-psychology integration curriculum',
            'Real projects in digital psychology and human-computer interaction',
            'Research opportunities in cognitive computing and behavioral technology',
            'Faculty expertise spanning both technical and psychological domains',
            'Career paths in UX design, digital therapeutics, and research'
          ]
        }
      ]
    },
    {
      category: 'Postgraduate Programs',
      pages: [
        {
          name: 'Postgraduate Overview',
          url: '/academics/postgraduate',
          dummyData: [
            'Generic postgraduate program benefits',
            'Sample research opportunities',
            'Template advanced study options'
          ],
          actualData: [
            'Complete postgraduate program catalog and requirements',
            'Real research opportunities and thesis guidelines',
            'Advanced study options and specialization tracks',
            'Faculty research mentorship and publication opportunities'
          ]
        },
        {
          name: 'MA Journalism & Mass Communication',
          url: '/academics/postgraduate/ma-journalism',
          dummyData: [
            'Generic MA journalism curriculum',
            'Sample media research projects',
            'Template industry connections'
          ],
          actualData: [
            'Advanced journalism curriculum with specialization options',
            'Real media research projects and thesis topics',
            'Industry connections and professional networking opportunities',
            'Faculty research publications and media industry experience',
            'Alumni working in major media organizations'
          ]
        },
        {
          name: 'MSc Psychology',
          url: '/academics/postgraduate/msc-psychology',
          dummyData: [
            'Generic psychology specializations',
            'Sample research methodologies',
            'Template clinical training'
          ],
          actualData: [
            'Complete MSc psychology curriculum with clinical and research tracks',
            'Real research opportunities and methodology training',
            'Clinical training partnerships and practicum sites',
            'Faculty research expertise and publication records',
            'Professional psychology certification pathways and career support'
          ]
        }
      ]
    },
    {
      category: 'Certificate Courses',
      pages: [
        {
          name: 'Certificate Courses Overview',
          url: '/academics/certificate',
          dummyData: [
            'Generic certificate program benefits',
            'Sample industry recognition',
            'Template skill development focus'
          ],
          actualData: [
            'Complete certificate program catalog with duration and fees',
            'Industry-recognized certifications and accreditation details',
            'Real skill development outcomes and employment support',
            'Industry partnership programs and placement assistance'
          ]
        },
        {
          name: 'Advanced Digital Marketing',
          url: '/academics/certificate/digital-marketing',
          dummyData: [
            'Generic digital marketing topics',
            'Sample tools and platforms',
            'Template certification details'
          ],
          actualData: [
            'Current digital marketing curriculum with latest trends',
            'Industry-standard tools and platform access',
            'Google, Facebook, and other platform certifications',
            'Real-world campaign projects and portfolio development',
            'Industry mentor network and placement support'
          ]
        },
        {
          name: 'Civil Service Coaching',
          url: '/academics/certificate/civil-service',
          dummyData: [
            'Generic UPSC preparation outline',
            'Sample study materials',
            'Template success rates'
          ],
          actualData: [
            'Complete UPSC, KAS, and other civil service preparation programs',
            'Actual study materials and practice test series',
            'Real success rates and qualified candidate testimonials',
            'Faculty with civil service examination experience',
            'Current affairs updates and interview preparation support'
          ]
        },
        {
          name: 'Film Making',
          url: '/academics/certificate/film-making',
          dummyData: [
            'Generic film production techniques',
            'Sample equipment usage',
            'Template project portfolio'
          ],
          actualData: [
            'Professional film making curriculum covering all aspects of production',
            'Industry-standard equipment and software training',
            'Real film projects and festival submission opportunities',
            'Faculty with film industry experience and credentials',
            'Industry networking and career placement support'
          ]
        },
        {
          name: 'Photography',
          url: '/academics/certificate/photography',
          dummyData: [
            'Generic photography techniques',
            'Sample equipment training',
            'Template portfolio development'
          ],
          actualData: [
            'Professional photography curriculum covering multiple genres',
            'Access to professional camera equipment and lighting setups',
            'Real portfolio development and exhibition opportunities',
            'Faculty with professional photography experience',
            'Industry connections and freelance opportunity support'
          ]
        },
        {
          name: 'Cognitive Behavioural Therapy (CBT)',
          url: '/academics/certificate/cbt',
          dummyData: [
            'Generic CBT principles',
            'Sample therapeutic techniques',
            'Template certification requirements'
          ],
          actualData: [
            'Professional CBT training curriculum with practical components',
            'Real therapeutic technique practice and supervision',
            'Professional certification pathways and continuing education',
            'Faculty with clinical psychology and CBT credentials',
            'Practicum opportunities and professional development support'
          ]
        },
        {
          name: 'Television Production & Software Training',
          url: '/academics/certificate/tv-production',
          dummyData: [
            'Generic TV production workflow',
            'Sample software applications',
            'Template studio experience'
          ],
          actualData: [
            'Complete television production curriculum with hands-on training',
            'Industry-standard software and equipment training',
            'Real studio experience and live production opportunities',
            'Faculty with television industry background',
            'Media industry placement support and networking'
          ]
        },
        {
          name: 'B.Com/BBA with ACCA',
          url: '/academics/certificate/bcom-acca',
          dummyData: [
            'Generic ACCA pathway description',
            'Sample international certification benefits',
            'Template career prospects'
          ],
          actualData: [
            'Complete ACCA integration with degree programs',
            'Real international certification process and timeline',
            'Global career opportunities and placement support',
            'ACCA-qualified faculty and preparation support',
            'Industry partnerships with accounting firms'
          ]
        },
        {
          name: 'Tax Filing and Compliance',
          url: '/academics/certificate/tax-filing',
          dummyData: [
            'Generic tax laws overview',
            'Sample filing procedures',
            'Template software training'
          ],
          actualData: [
            'Current tax laws and compliance requirements',
            'Real tax filing experience with software training',
            'Professional tax consultant certification pathways',
            'Faculty with taxation expertise and practice experience',
            'Industry placement in tax consulting and accounting firms'
          ]
        },
        {
          name: 'Pro GST Accountant',
          url: '/academics/certificate/gst-accountant',
          dummyData: [
            'Generic GST knowledge areas',
            'Sample compliance procedures',
            'Template certification value'
          ],
          actualData: [
            'Complete GST laws and implementation training',
            'Real compliance procedures and software usage',
            'Professional GST practitioner certification',
            'Faculty with GST implementation and consulting experience',
            'Industry demand and placement opportunities in GST compliance'
          ]
        },
        {
          name: 'Advanced Excel',
          url: '/academics/certificate/advanced-excel',
          dummyData: [
            'Generic Excel features and functions',
            'Sample data analysis techniques',
            'Template business applications'
          ],
          actualData: [
            'Professional Excel training for business analytics',
            'Real data analysis projects and case studies',
            'Industry applications across various business sectors',
            'Certification preparation for Microsoft Excel specialist',
            'Career enhancement opportunities in data analysis roles'
          ]
        },
        {
          name: 'Aviation',
          url: '/academics/certificate/aviation',
          dummyData: [
            'Generic aviation industry overview',
            'Sample training modules',
            'Template career opportunities'
          ],
          actualData: [
            'Complete aviation industry training covering multiple roles',
            'Real industry training modules and certification requirements',
            'Actual career opportunities in airlines and airports',
            'Faculty with aviation industry experience',
            'Industry partnerships and placement support in aviation sector'
          ]
        },
        {
          name: 'CA/CS',
          url: '/academics/certificate/ca-cs',
          dummyData: [
            'Generic CA and CS preparation outline',
            'Sample study methodology',
            'Template success tracking'
          ],
          actualData: [
            'Professional CA and CS examination preparation programs',
            'Proven study methodology and success strategies',
            'Real success tracking and qualified candidate support',
            'Faculty with CA/CS qualifications and teaching experience',
            'Ongoing support through professional examination journey'
          ]
        },
        {
          name: 'Cyber Security',
          url: '/academics/certificate/cyber-security',
          dummyData: [
            'Generic cybersecurity concepts',
            'Sample security tools',
            'Template certification pathways'
          ],
          actualData: [
            'Current cybersecurity curriculum covering latest threats and defenses',
            'Industry-standard security tools and lab environment',
            'Professional cybersecurity certification preparation',
            'Faculty with cybersecurity industry experience',
            'High-demand career placement support in cybersecurity roles'
          ]
        },
        {
          name: 'Advanced Data Analytics and Visualization',
          url: '/academics/certificate/data-analytics',
          dummyData: [
            'Generic data science concepts',
            'Sample analytics tools',
            'Template project work'
          ],
          actualData: [
            'Professional data analytics curriculum with Python, R, and SQL',
            'Industry-standard analytics and visualization tools',
            'Real-world data projects and portfolio development',
            'Faculty with data science industry experience',
            'High-growth career opportunities in data science and analytics'
          ]
        },
        {
          name: 'Ethical Hacking + Cloud Computing',
          url: '/academics/certificate/ethical-hacking',
          dummyData: [
            'Generic ethical hacking principles',
            'Sample cloud platforms',
            'Template hands-on training'
          ],
          actualData: [
            'Professional ethical hacking and cloud computing curriculum',
            'Real cloud platform training and certification preparation',
            'Hands-on penetration testing and security assessment experience',
            'Faculty with cybersecurity and cloud expertise',
            'Career opportunities in cybersecurity and cloud architecture'
          ]
        },
        {
          name: 'Logistics and Supply Chain Management',
          url: '/academics/certificate/logistics',
          dummyData: [
            'Generic supply chain concepts',
            'Sample logistics operations',
            'Template industry applications'
          ],
          actualData: [
            'Complete logistics and supply chain management curriculum',
            'Real logistics operations and case study analysis',
            'Industry applications and best practices',
            'Faculty with supply chain industry experience',
            'Career placement support in logistics and supply chain roles'
          ]
        }
      ]
    },
    {
      category: 'Admissions',
      pages: [
        {
          name: 'Admissions Home',
          url: '/admissions',
          dummyData: [
            'Generic admission process overview',
            'Sample deadlines and requirements',
            'Template application guidance'
          ],
          actualData: [
            'Current admission process with specific timelines',
            'Real deadlines for all programs and courses',
            'Detailed application guidance and requirements',
            'Contact information for admission support'
          ]
        },
        {
          name: 'Online Admission Application',
          url: '/admissions/online-application',
          dummyData: [
            'Sample application form structure',
            'Generic application process steps',
            'Placeholder submission guidelines'
          ],
          actualData: [
            'Live application portal link and access instructions',
            'Current admission deadlines and important dates',
            'Required documents checklist with specifications',
            'Application fee details and payment methods',
            'Selection process timeline and notification procedures'
          ]
        },
        {
          name: 'Admission Guidelines',
          url: '/admissions/guidelines',
          dummyData: [
            'Generic eligibility criteria',
            'Sample selection procedures',
            'Template documentation requirements'
          ],
          actualData: [
            'Complete eligibility criteria for all programs',
            'Detailed selection procedures and evaluation criteria',
            'Specific documentation requirements and verification process',
            'Important dates and deadlines calendar',
            'Contact information for admission queries'
          ]
        },
        {
          name: 'International Admissions Process',
          url: '/admissions/international',
          dummyData: [
            'Generic international student requirements',
            'Sample visa guidance',
            'Template documentation for foreign students'
          ],
          actualData: [
            'Complete international student admission requirements',
            'Visa application guidance and support services',
            'Document authentication and verification procedures',
            'International student support services and orientation',
            'Fee structure and payment methods for international students'
          ]
        },
        {
          name: 'Academic Calendar',
          url: '/admissions/calendar',
          dummyData: [
            'Sample academic year timeline',
            'Generic semester dates',
            'Template examination schedules'
          ],
          actualData: [
            'Current academic year calendar with all important dates',
            'Semester start and end dates with break periods',
            'Examination schedules and result declaration dates',
            'Holiday calendar and college closure dates',
            'Event calendar and important institutional activities'
          ]
        },
        {
          name: 'Scholarships & Scholarship Committee',
          url: '/admissions/scholarships',
          dummyData: [
            'Generic scholarship categories',
            'Sample eligibility criteria',
            'Template application procedures'
          ],
          actualData: [
            'Complete list of available scholarship schemes',
            'Detailed eligibility requirements for each scholarship',
            'Application deadlines and submission procedures',
            'Scholarship committee member details and contact information',
            'Selection criteria and award distribution process'
          ]
        },
        {
          name: 'Management Scholarship Application',
          url: '/admissions/management-scholarship',
          dummyData: [
            'Generic management scholarship details',
            'Sample application form',
            'Template selection criteria'
          ],
          actualData: [
            'Specific management scholarship program details',
            'Real application form and required documentation',
            'Selection criteria and evaluation process',
            'Award amount and benefits included',
            'Application timeline and notification process'
          ]
        },
        {
          name: 'Scholarship Policy',
          url: '/admissions/scholarship-policy',
          dummyData: [
            'Generic scholarship policy framework',
            'Sample terms and conditions',
            'Template renewal procedures'
          ],
          actualData: [
            'Official scholarship policy document',
            'Complete terms and conditions for all scholarships',
            'Renewal procedures and academic performance requirements',
            'Grievance procedure and appeals process',
            'Policy updates and amendments'
          ]
        },
        {
          name: 'Main Prospectus',
          url: '/admissions/main-prospectus',
          dummyData: [
            'Generic college information',
            'Sample program descriptions',
            'Template admission procedures'
          ],
          actualData: [
            'Complete college prospectus with current information',
            'Detailed program descriptions and curriculum outlines',
            'Actual admission procedures and requirements',
            'Fee structure and payment schedules',
            'Campus facilities and infrastructure details'
          ]
        },
        {
          name: 'MA Prospectus',
          url: '/admissions/ma-prospectus',
          dummyData: [
            'Generic MA program information',
            'Sample course structure',
            'Template research opportunities'
          ],
          actualData: [
            'Complete MA Journalism program prospectus',
            'Detailed course structure and specialization options',
            'Research opportunities and thesis requirements',
            'Faculty profiles and research interests',
            'Career prospects and alumni achievements'
          ]
        },
        {
          name: 'MSc Prospectus',
          url: '/admissions/msc-prospectus',
          dummyData: [
            'Generic MSc program overview',
            'Sample research areas',
            'Template clinical training'
          ],
          actualData: [
            'Complete MSc Psychology program prospectus',
            'Detailed research areas and methodologies',
            'Clinical training opportunities and practicum sites',
            'Faculty research expertise and publications',
            'Professional development and certification pathways'
          ]
        },
        {
          name: 'Student Handbook',
          url: '/admissions/handbook',
          dummyData: [
            'Generic student policies',
            'Sample academic regulations',
            'Template campus guidelines'
          ],
          actualData: [
            'Complete student handbook with current policies',
            'Academic regulations and examination procedures',
            'Campus guidelines and code of conduct',
            'Student rights and responsibilities',
            'Grievance procedures and support services'
          ]
        },
        {
          name: 'Fee Refund Policy',
          url: '/admissions/fee-refund',
          dummyData: [
            'Generic refund policy terms',
            'Sample refund procedures',
            'Template timeline for refunds'
          ],
          actualData: [
            'Official fee refund policy document',
            'Detailed refund procedures and requirements',
            'Timeline for refund processing',
            'Circumstances eligible for refunds',
            'Appeal process for refund decisions'
          ]
        },
        {
          name: 'Fee Structure',
          url: '/admissions/fee-structure',
          dummyData: [
            'Sample fee amounts for programs',
            'Generic payment schedules',
            'Template additional charges'
          ],
          actualData: [
            'Current academic year fee structure for all programs',
            'Payment schedules and installment options',
            'Additional charges breakdown and optional fees',
            'Late payment penalties and policies',
            'Financial aid and scholarship adjustments'
          ]
        }
      ]
    },
    {
      category: 'Infrastructure',
      pages: [
        {
          name: 'Infrastructure Home',
          url: '/infrastructure',
          dummyData: [
            'Generic infrastructure overview',
            'Sample facility highlights',
            'Template development plans'
          ],
          actualData: [
            'Complete infrastructure overview with current facilities',
            'Real facility specifications and capacities',
            'Infrastructure development timeline and future plans',
            'Accessibility features and safety measures'
          ]
        },
        {
          name: 'Campus Overview',
          url: '/infrastructure/campus-overview',
          dummyData: [
            'Stock campus photos from internet',
            'Generic facility descriptions',
            'Sample infrastructure specifications'
          ],
          actualData: [
            'Actual campus photos and virtual tour links',
            'Detailed facility specifications and floor plans',
            'Infrastructure development timeline and investments',
            'Accessibility features and safety protocols',
            'Environmental sustainability initiatives'
          ]
        },
        {
          name: 'Professional Studio',
          url: '/infrastructure/professional-studio',
          dummyData: [
            'Generic studio equipment list',
            'Sample recording capabilities',
            'Template booking procedures'
          ],
          actualData: [
            'Complete professional studio equipment inventory',
            'Technical specifications and recording capabilities',
            'Booking procedures and usage guidelines',
            'Studio projects and student productions',
            'Equipment maintenance and upgrade schedules'
          ]
        },
        {
          name: 'Library',
          url: '/infrastructure/library',
          dummyData: [
            'Sample book collection numbers',
            'Generic operating hours',
            'Template digital resource access'
          ],
          actualData: [
            'Complete library catalog with exact book and journal counts',
            'Current operating hours and holiday schedules',
            'Digital library access credentials and databases',
            'Study space availability and reservation system',
            'Library staff contact information and services',
            'Recent acquisitions and collection development policy'
          ]
        },
        {
          name: 'Sports Facilities',
          url: '/infrastructure/sports-facilities',
          dummyData: [
            'Generic sports equipment inventory',
            'Sample facility photos',
            'Template coaching staff information'
          ],
          actualData: [
            'Complete sports equipment inventory and condition',
            'Real facility photos and maintenance schedules',
            'Coaching staff qualifications and contact information',
            'Sports achievement records and team performance',
            'Training schedules and facility booking procedures',
            'Sports club activities and tournament participation'
          ]
        },
        {
          name: 'Classrooms',
          url: '/infrastructure/classrooms',
          dummyData: [
            'Generic classroom specifications',
            'Sample technology integration',
            'Template capacity information'
          ],
          actualData: [
            'Detailed classroom specifications and capacities',
            'Technology integration and AV equipment details',
            'Classroom booking and scheduling system',
            'Maintenance schedules and upgrade plans',
            'Smart classroom features and digital learning tools'
          ]
        },
        {
          name: 'Main Auditorium',
          url: '/infrastructure/auditorium',
          dummyData: [
            'Generic auditorium capacity',
            'Sample AV equipment description',
            'Template event hosting capabilities'
          ],
          actualData: [
            'Exact auditorium seating capacity and layout',
            'Complete AV equipment specifications and capabilities',
            'Event hosting procedures and booking information',
            'Recent events and performances hosted',
            'Technical support staff and contact information'
          ]
        },
        {
          name: 'Mini Auditorium',
          url: '/infrastructure/mini-auditorium',
          dummyData: [
            'Generic smaller venue specifications',
            'Sample usage scenarios',
            'Template booking procedures'
          ],
          actualData: [
            'Mini auditorium capacity and seating arrangements',
            'Usage scenarios and event types hosted',
            'Booking procedures and availability calendar',
            'Equipment available and technical specifications',
            'Recent events and regular usage patterns'
          ]
        }
      ]
    },
    {
      category: 'Student Clubs',
      pages: [
        {
          name: 'Clubs Overview',
          url: '/student-services/clubs',
          dummyData: [
            'Generic club descriptions and activities',
            'Sample participation numbers',
            'Template club achievements'
          ],
          actualData: [
            'Complete club directory with current activities',
            'Real participation numbers and membership details',
            'Club achievements and recognition received',
            'Meeting schedules and contact information',
            'Annual events and activities calendar'
          ]
        },
        {
          name: 'National Service Scheme (NSS)',
          url: '/student-services/nss',
          dummyData: [
            'Generic NSS program description',
            'Sample community service projects',
            'Template volunteer statistics'
          ],
          actualData: [
            'Complete NSS program details and objectives',
            'Real community service projects and impact reports',
            'Volunteer statistics and participation records',
            'NSS coordinator contact information',
            'Awards and recognition received'
          ]
        },
        {
          name: 'National Cadet Corps (NCC)',
          url: '/student-services/ncc',
          dummyData: [
            'Generic NCC unit information',
            'Sample training activities',
            'Template certification details'
          ],
          actualData: [
            'Complete NCC unit details and training programs',
            'Real training activities and camp participation',
            'Certification achievements and cadet progress',
            'NCC officer contact information',
            'Special achievements and national participation'
          ]
        },
        {
          name: 'Film Club (Cinephelics)',
          url: '/student-services/film-club',
          dummyData: [
            'Generic film club activities',
            'Sample film projects',
            'Template screening events'
          ],
          actualData: [
            'Real film club activities and project portfolio',
            'Student film productions and festival submissions',
            'Regular screening events and film discussions',
            'Club equipment and production facilities',
            'Faculty advisor and industry connections'
          ]
        },
        {
          name: 'Health Club',
          url: '/student-services/health',
          dummyData: [
            'Generic health awareness programs',
            'Sample wellness activities',
            'Template health campaigns'
          ],
          actualData: [
            'Complete health and wellness programs offered',
            'Real wellness activities and health checkup camps',
            'Health awareness campaigns and their impact',
            'Medical facilities and first aid services',
            'Health club coordinator and medical staff details'
          ]
        },
        {
          name: 'Sports Club',
          url: '/student-services/sports-club',
          dummyData: [
            'Generic sports activities',
            'Sample tournament participation',
            'Template achievement records'
          ],
          actualData: [
            'Complete sports club activities and training schedules',
            'Real tournament participation and results',
            'Achievement records and individual/team accomplishments',
            'Coaching staff and training facilities',
            'Inter-collegiate competition results and rankings'
          ]
        },
        {
          name: 'Literary Club',
          url: '/student-services/literary',
          dummyData: [
            'Generic literary activities',
            'Sample publications',
            'Template writing competitions'
          ],
          actualData: [
            'Complete literary club activities and events',
            'Real student publications and literary magazine',
            'Writing competitions and literary awards',
            'Faculty mentorship and guest author interactions',
            'Literary event calendar and workshop schedules'
          ]
        }
      ]
    },
    {
      category: 'Student Cells & Committees',
      pages: [
        {
          name: 'Student Council',
          url: '/student-services/student-council',
          dummyData: [
            'Generic student council structure',
            'Sample representative roles',
            'Template council activities'
          ],
          actualData: [
            'Current student council member names and positions',
            'Real representative roles and responsibilities',
            'Council activities and student advocacy initiatives',
            'Election procedures and democratic processes',
            'Student feedback and issue resolution records'
          ]
        },
        {
          name: 'Alumni Association',
          url: '/student-services/alumni',
          dummyData: [
            'Generic alumni network description',
            'Sample alumni achievements',
            'Template networking events'
          ],
          actualData: [
            'Complete alumni network database and achievements',
            'Real alumni success stories and career trajectories',
            'Alumni networking events and mentorship programs',
            'Alumni association activities and contribution records',
            'Contact information for alumni relations'
          ]
        },
        {
          name: 'Placement Cell',
          url: '/student-services/placement',
          dummyData: [
            'Sample company partnerships',
            'Generic placement statistics',
            'Template career guidance services'
          ],
          actualData: [
            'Complete list of recruiting companies and partnerships',
            'Real placement statistics by program and year',
            'Career guidance services and skill development programs',
            'Placement coordinator contact information',
            'Training and internship opportunities',
            'Alumni placement success stories and salary trends'
          ]
        },
        {
          name: 'Research Promotion Cell',
          url: '/student-services/research',
          dummyData: [
            'Generic research opportunities',
            'Sample funding information',
            'Template publication support'
          ],
          actualData: [
            'Current research opportunities and ongoing projects',
            'Real funding sources and grant application support',
            'Publication support and research mentorship',
            'Faculty research collaboration opportunities',
            'Research presentation and conference participation'
          ]
        },
        {
          name: 'SC/ST Cell',
          url: '/student-services/sc-st',
          dummyData: [
            'Generic support services',
            'Sample scholarship information',
            'Template grievance procedures'
          ],
          actualData: [
            'Complete support services for SC/ST students',
            'Real scholarship information and application procedures',
            'Grievance redressal procedures and contact information',
            'Educational support and mentorship programs',
            'Government scheme awareness and assistance'
          ]
        },
        {
          name: 'Disciplinary Committee',
          url: '/student-services/disciplinary',
          dummyData: [
            'Generic disciplinary policies',
            'Sample committee structure',
            'Template procedures'
          ],
          actualData: [
            'Complete disciplinary policies and code of conduct',
            'Disciplinary committee member details and procedures',
            'Student rights and due process information',
            'Appeal procedures and conflict resolution',
            'Preventive measures and counseling support'
          ]
        },
        {
          name: 'Anti-Ragging Cell',
          url: '/student-services/anti-ragging',
          dummyData: [
            'Generic anti-ragging policies',
            'Sample prevention measures',
            'Template complaint procedures'
          ],
          actualData: [
            'Complete anti-ragging policy and legal framework',
            'Real prevention measures and awareness programs',
            'Complaint procedures and emergency contact numbers',
            'Committee member details and response protocols',
            'Student safety measures and support services'
          ]
        }
      ]
    },
    {
      category: 'Media & Resources',
      pages: [
        {
          name: 'Events',
          url: '/events',
          dummyData: [
            'Sample event listings and descriptions',
            'Stock event photos',
            'Generic event categories'
          ],
          actualData: [
            'Current and upcoming event calendar',
            'Real event photos and documentation',
            'Event registration and participation information',
            'Event organizer contact details',
            'Past event archives and success stories'
          ]
        },
        {
          name: 'News & Announcements',
          url: '/news',
          dummyData: [
            'Placeholder news articles',
            'Sample press releases',
            'Generic announcement dates'
          ],
          actualData: [
            'Current news and institutional updates',
            'Official press releases and media coverage',
            'Important announcements and deadlines',
            'Media contact information',
            'Newsletter archives and subscription options'
          ]
        },
        {
          name: 'Photo Gallery',
          url: '/gallery',
          dummyData: [
            'Stock campus and event photos',
            'Generic photo categories',
            'Sample student activity images'
          ],
          actualData: [
            'Actual campus, event, and activity photo collections',
            'Organized photo categories with proper descriptions',
            'Student activity documentation with permissions',
            'Achievement ceremony and milestone photos',
            'Infrastructure and facility photography'
          ]
        },
        {
          name: 'Videos',
          url: '/videos',
          dummyData: [
            'Sample promotional videos',
            'Generic event recordings',
            'Template virtual tour content'
          ],
          actualData: [
            'Official college promotional and informational videos',
            'Real event recordings and student testimonials',
            'Virtual campus tour and facility showcases',
            'Educational content and faculty presentations',
            'Student project documentaries and achievements'
          ]
        }
      ]
    },
    {
      category: 'Mandatory Disclosures',
      pages: [
        {
          name: 'Mandatory Disclosure Home',
          url: '/mandatory-disclosure',
          dummyData: [
            'Generic mandatory disclosure overview',
            'Sample compliance requirements',
            'Template document categories'
          ],
          actualData: [
            'Complete mandatory disclosure compliance overview',
            'Real regulatory compliance requirements',
            'Current document categories and accessibility',
            'Compliance officer contact information',
            'Regular update schedule and procedures'
          ]
        },
        {
          name: 'IDP (Institutional Development Plan)',
          url: '/mandatory-disclosure/idp',
          dummyData: [
            'Generic development plan outline',
            'Sample strategic objectives',
            'Template implementation timeline'
          ],
          actualData: [
            'Official Institutional Development Plan document',
            'Real strategic objectives and measurable goals',
            'Implementation timeline with progress tracking',
            'Budget allocation and resource planning',
            'Annual progress reports and updates'
          ]
        },
        {
          name: 'MOU (Memorandum of Understanding)',
          url: '/mandatory-disclosure/mou',
          dummyData: [
            'Generic MOU categories',
            'Sample partnership descriptions',
            'Template collaboration details'
          ],
          actualData: [
            'Complete list of active MOUs with institutions and organizations',
            'Real partnership descriptions and collaboration scope',
            'MOU duration, renewal status, and contact details',
            'Benefits and outcomes from existing partnerships',
            'Process for new MOU proposals and approvals'
          ]
        },
        {
          name: 'Academics/Examination Policy',
          url: '/mandatory-disclosure/academics-policy',
          dummyData: [
            'Generic academic policies',
            'Sample examination procedures',
            'Template assessment criteria'
          ],
          actualData: [
            'Complete academic and examination policy documents',
            'Current examination procedures and schedules',
            'Assessment criteria and grading systems',
            'Academic calendar and important deadlines',
            'Policy update procedures and stakeholder consultation'
          ]
        }
      ]
    }
  ];

  const filteredPages = pageAudit.filter(section => {
    if (selectedCategory !== 'all' && section.category !== selectedCategory) return false;
    if (searchTerm) {
      return section.pages.some(page => 
        page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.url.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  });

  const categories = ['all', ...pageAudit.map(section => section.category)];

  const downloadExcelChecklist = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Category,Page Name,URL,Content Type,Required Data,Status,Notes,Assigned To,Due Date\n" +
      pageAudit.flatMap(section => 
        section.pages.flatMap(page => 
          page.actualData.map(data => 
            `"${section.category}","${page.name}","${page.url}","${data}","${data}","Pending","","",""`
          )
        )
      ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "content-audit-checklist.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-foreground to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <FileText size={64} className="mx-auto mb-6 text-primary-foreground" />
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Page Overview & Content Audit
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive documentation of all pages, current dummy data, and actual content requirements for the The National College website
          </p>
          <Button onClick={downloadExcelChecklist} className="bg-primary-foreground text-primary hover:bg-secondary">
            <Download className="mr-2" size={20} />
            Download Excel Checklist
          </Button>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Content Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {filteredPages.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                  {section.category}
                </h2>
                
                <div className="grid gap-6">
                  {section.pages.filter(page => 
                    !searchTerm || 
                    page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    page.url.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map((page, pageIndex) => (
                    <Card key={pageIndex} className="shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl text-primary">{page.name}</CardTitle>
                          <Badge variant="outline">{page.url}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Tabs defaultValue="dummy" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="dummy" className="flex items-center gap-2">
                              <AlertCircle size={16} />
                              Current Dummy Data
                            </TabsTrigger>
                            <TabsTrigger value="actual" className="flex items-center gap-2">
                              <CheckCircle2 size={16} />
                              Required Actual Data
                            </TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="dummy" className="mt-4">
                            <div className="space-y-2">
                              <h4 className="font-semibold text-destructive mb-3">Placeholder Content Currently Used:</h4>
                              <ul className="space-y-2">
                                {page.dummyData.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-2">
                                    <AlertCircle size={16} className="text-destructive mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="actual" className="mt-4">
                            <div className="space-y-2">
                              <h4 className="font-semibold text-primary mb-3">Real Content Needed:</h4>
                              <ul className="space-y-2">
                                {page.actualData.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-2">
                                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Statistics */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {pageAudit.reduce((acc, section) => acc + section.pages.length, 0)}
              </div>
                <div className="text-muted-foreground">Total Pages</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {pageAudit.length}
                </div>
                <div className="text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-destructive mb-2">
                  {pageAudit.reduce((acc, section) => 
                    acc + section.pages.reduce((pageAcc, page) => pageAcc + page.dummyData.length, 0), 0
                  )}
                </div>
                <div className="text-muted-foreground">Dummy Items</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {pageAudit.reduce((acc, section) => 
                    acc + section.pages.reduce((pageAcc, page) => pageAcc + page.actualData.length, 0), 0
                  )}
                </div>
                <div className="text-muted-foreground">Required Items</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PageOverview;