import { AboutLayout } from '../components/layout/AboutLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Award, Download, FileText, TrendingUp, Users, Target, CheckCircle, Calendar,
  BookOpen, BarChart3, MessageSquare, ClipboardList, FileCheck, Layers,
  Lightbulb, Building2, Sparkles, Quote, ExternalLink, User
} from 'lucide-react';

const NaacIqac = () => {
  const naacData = {
    grade: 'A',
    cgpa: '3.18',
    cycle: '4th Cycle',
    year: '2025'
  };

  const teamMembers = [
    { name: 'Dr. Ramesh PL', designation: 'Principal, The National College Basavanagudi', role: 'Chairperson' },
    { name: 'Sri. V Venkatasiva Reddy', designation: 'Hon. Secretary, NES of Karnataka', role: 'Management Representative' },
    { name: 'Sri. Arun Kumar', designation: 'Hon. Secretary, NES of Karnataka', role: 'Management Representative' },
    { name: 'Sri. Sudhakar Esturi', designation: 'Chairman, The National College Basavanagudi', role: 'Management Representative' },
    { name: 'Dr. Mahesh Chandra', designation: 'Executive Director, Indian Academy of Sciences', role: 'Society Representative' },
    { name: 'Dr. Binoy V V', designation: 'National Institute of Advanced Studies', role: 'Academic Representative' },
    { name: 'Dr. Jayanth V. Vyasankere', designation: 'Azim Premji University', role: 'Alumni Representative' },
    { name: 'Smt. Alakananda K P', designation: 'Coordinator & Vice Principal', role: 'Coordinator' },
    { name: 'Smt. Sangeetha B K', designation: 'HOD, Computer Science', role: 'Co - Coordinator' }
  ];

  const documents = [
    { name: 'Self Study Report (SSR)', size: '2.5 MB', file: '', icon: FileText },
    { name: 'AQAR 2023-24', size: '1.8 MB', file: '', icon: FileText },
    { name: 'NAAC Certificate', size: '850 KB', file: '/NAAC-Certificate.pdf', icon: Award },
    { name: 'Best Practices', size: '1.2 MB', file: '/Best-Practices.pdf', icon: TrendingUp },
    { name: 'Quality Indicator Framework', size: '1.5 MB', file: '/Quality-Indicator.pdf', icon: CheckCircle },
    { name: 'Annual Report 2023', size: '3.2 MB', file: '', icon: Calendar },
    { name: 'Institutional Distinctiveness', size: '900 KB', file: '/Institutional-Distinctiveness.pdf', icon: Target },
    { name: 'Student Satisfaction Survey', size: '1.1 MB', file: '', icon: Users }
  ];

  const qualityIndicators = [
    { name: 'Curricular Aspects', score: 3.70 },
    { name: 'Teaching Learning', score: 3.48 },
    { name: 'Research Innovation and Extension', score: 1.99 },
    { name: 'Infrastructure', score: 3.80 },
    { name: 'Student Support', score: 2.59 },
    { name: 'Governance, Leadership and Management', score: 3.30 },
    { name: 'Institutional Values', score: 3.09 }
  ];

  const iqacFunctions = [
    { icon: ClipboardList, title: 'Academic Planning', text: 'Preparation of Academic Plan & Academic Calendar.' },
    { icon: Target, title: 'Quality of Teaching', text: 'Ensure quality of teaching, learning skills, infrastructure and facilities.' },
    { icon: Users, title: 'Regular Meetings', text: 'Meetings at regular intervals; decisions communicated to departments for implementation.' },
    { icon: BarChart3, title: 'Benchmarking', text: 'Defining procedures and processes in academics and administration.' },
    { icon: FileCheck, title: 'Academic & Administrative Audit', text: 'Periodical conduct of Academic and Administrative Audit.' },
    { icon: MessageSquare, title: 'Stakeholder Feedback', text: 'Collecting feedback from all stakeholders on quality processes.' },
    { icon: Layers, title: 'Coordination', text: 'Coordinating Quality Initiatives and Best Practices.' },
    { icon: FileText, title: 'AQAR Reports', text: 'Preparation and submission of the AQAR reports.' },
    { icon: BookOpen, title: 'Documentation', text: 'Facilitating the process of documentation across the institution.' },
    { icon: Sparkles, title: 'Quality Activities', text: 'Extending support for organizing quality related activities in the college.' },
    { icon: Lightbulb, title: 'Research Encouragement', text: 'Encouraging facilities for research activities.' },
    { icon: TrendingUp, title: 'Student Progress', text: 'Monitoring student progress and support services.' },
    { icon: Building2, title: 'Infrastructure Development', text: 'Facilitating the infrastructure development of the college and remaining receptive to new ideas for improvement.' }
  ];

  const bestPractices = [
    {
      title: 'Digital Library and E-Learning Platform',
      description: 'Implementation of comprehensive digital resources and online learning management system for enhanced student accessibility.',
      impact: 'Increased student engagement by 85% and improved resource accessibility'
    },
    {
      title: 'Industry-Academia Partnership Program',
      description: 'Collaborative initiatives with leading industries for internships, guest lectures, and real-world project experience.',
      impact: 'Enhanced employability with 92% placement rate in relevant industries'
    }
  ];

  const annualReports = [
    { year: '2021-2022', achievements: '95% student satisfaction, 3 new programs launched', downloads: 1250 },
    { year: '2020-2021', achievements: 'Digital transformation completed, Online learning excellence', downloads: 980 },
    { year: '2019-2020', achievements: 'Infrastructure upgrade, New research initiatives', downloads: 850 },
    { year: '2018-2019', achievements: 'NAAC accreditation achieved, Quality enhancement', downloads: 720 }
  ];

  const getInitials = (name: string) =>
    name.replace(/^(Dr\.|Sri\.|Smt\.|Mr\.|Mrs\.|Ms\.)\s*/i, '')
      .split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();

  return (
    <AboutLayout pageTitle="NAAC / IQAC" breadcrumbPath="NAAC / IQAC">
      {/* NAAC Accreditation Stats */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <Award className="text-yellow-500 mx-auto mb-2" size={32} />
              <div className="text-4xl font-bold text-primary mb-1">{naacData.grade}</div>
              <div className="text-sm text-muted-foreground">Grade Awarded</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <TrendingUp className="text-green-500 mx-auto mb-2" size={32} />
              <div className="text-4xl font-bold text-primary mb-1">{naacData.cgpa}</div>
              <div className="text-sm text-muted-foreground">CGPA Scored</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <BarChart3 className="text-primary mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-foreground mb-1">{naacData.cycle}</div>
              <div className="text-sm text-muted-foreground">Assessment Cycle</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <Calendar className="text-primary mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-foreground mb-1">{naacData.year}</div>
              <div className="text-sm text-muted-foreground">Accreditation Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* About IQAC */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">About IQAC</h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                IQAC is meant for planning, guiding and monitoring Quality Assurance (QA) and Quality Enhancement (QE) activities of the college. The IQAC may channelize and systematize the efforts and measures of an institution towards academic excellence.
              </p>
              <p>
                Every NAAC accredited institution is expected to establish Internal Quality Assurance Cell (IQAC). The role of IQAC is not only to sustain quality but also to enhance it. Therefore post-accreditation is shift from quality assurance to quality enhancement. Wherever the quality has not already been assured, initiatives have to be taken to impart them, sustain them and foster them.
              </p>
              <p>
                Every stakeholder in the institution has to play a significant role in imparting, sustaining and fostering Quality related activities.
              </p>
            </div>

            {/* Motto Card */}
            <div className="mt-10 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 shadow-lg p-10 text-center">
              <Quote className="absolute top-4 left-4 text-primary/20" size={48} />
              <Quote className="absolute bottom-4 right-4 text-primary/20 rotate-180" size={48} />
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">The Motto of IQAC</p>
              <p className="text-2xl md:text-3xl font-bold italic text-foreground leading-relaxed">
                "Innovate to Excel and collaborate to grow"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IQAC Functions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-3 text-center flex items-center justify-center gap-3">
              <Target className="text-primary" size={28} />
              Functions of IQAC
            </h2>
            <p className="text-center text-muted-foreground mb-12">Key responsibilities driving institutional quality</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {iqacFunctions.map((func, index) => {
                const Icon = func.icon;
                return (
                  <div
                    key={index}
                    className="group bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{func.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{func.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IQAC Composition */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-3">IQAC Composition</h2>
          <p className="text-center text-muted-foreground mb-12">Distinguished members guiding quality assurance</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 p-7 text-center flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center mx-auto mb-4 shadow-md">
                  <User className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.designation}</p>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">IQAC Role</p>
                  <p className="text-sm font-medium text-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Indicator Framework */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Quality Indicator Framework</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {qualityIndicators.map((indicator, index) => (
              <Card key={index} className="shadow-sm hover:shadow-lg transition-shadow border-border">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-3">{indicator.score.toFixed(2)}</div>
                  <h3 className="text-sm text-foreground">{indicator.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Self Study Report */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Self Study Report</h2>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-primary" size={24} />
                  Comprehensive Self Study Report — 4th Cycle
                </CardTitle>
                <CardDescription>
                  Detailed institutional analysis covering all seven criteria of NAAC assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Report Highlights:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Curricular Planning and Implementation</li>
                      <li>• Teaching-Learning and Evaluation</li>
                      <li>• Research, Innovations and Extension</li>
                      <li>• Infrastructure and Learning Resources</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Metrics:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Student Support and Progression</li>
                      <li>• Governance, Leadership and Management</li>
                      <li>• Institutional Values and Best Practices</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Best Practices</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {bestPractices.map((practice, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="text-primary" size={24} />
                    Best Practice {index + 1}: {practice.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{practice.description}</p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-1">Impact & Outcomes:</h4>
                    <p className="text-sm text-muted-foreground">{practice.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Annual Reports</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {annualReports.map((report, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Annual Report {report.year}</span>
                    <Badge variant="secondary">{report.downloads} downloads</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{report.achievements}</p>
                  <Button className="w-full" variant="outline">
                    <Download size={16} className="mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PO PSO CO */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Program Outcomes, Program Specific Outcomes & Course Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {['BCOM', 'BBA', 'BA', 'BSC', 'BCA', 'MA'].map((program, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <BookOpen className="text-primary-foreground" size={22} />
                  </div>
                  <CardTitle>{program}</CardTitle>
                  <CardDescription>Program & Course Outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Feedback from Stakeholders</h2>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="text-primary" size={24} />
                  Stakeholder Feedback System
                </CardTitle>
                <CardDescription>
                  Continuous feedback collection from students, faculty, employers, and alumni
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold mb-1">Student Feedback</h4>
                    <p className="text-sm text-muted-foreground">Regular surveys on curriculum, teaching methodology, and infrastructure</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <h4 className="font-semibold mb-1">Faculty Feedback</h4>
                    <p className="text-sm text-muted-foreground">Input on academic policies, resources, and professional development</p>
                  </div>
                  <div className="p-4 bg-accent/20 rounded-lg">
                    <h4 className="font-semibold mb-1">Employer Feedback</h4>
                    <p className="text-sm text-muted-foreground">Industry insights on graduate competencies and skill requirements</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">Alumni Feedback</h4>
                    <p className="text-sm text-muted-foreground">Career progression insights and institutional improvement suggestions</p>
                  </div>
                </div>
                <Button
                  className="w-full mt-6"
                  onClick={() => window.open('/Feedback-Analysis-Report.pdf', '_blank')}
                >
                  <BarChart3 size={16} className="mr-2" />
                  View Feedback Analysis Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents & Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-3">Documents & Resources</h2>
          <p className="text-center text-muted-foreground mb-12">Download official IQAC documents</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              const hasFile = Boolean(doc.file);
              return (
                <div
                  key={index}
                  className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 p-6 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground leading-tight">{doc.name}</h3>
                    </div>
                  </div>
                  <a
                    href={hasFile ? doc.file : '#'}
                    onClick={(e) => { if (!hasFile) e.preventDefault(); }}
                    target={hasFile ? '_blank' : undefined}
                    rel={hasFile ? 'noopener noreferrer' : undefined}
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default NaacIqac;
