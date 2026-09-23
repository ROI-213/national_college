import { AboutLayout } from '../components/layout/AboutLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, GraduationCap, Users, BookOpen, Building2, Briefcase, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Nirf = () => {
  const rankingParameters = [
    { title: 'Teaching, Learning & Resources', icon: BookOpen, weight: '30%', description: 'Student strength, faculty-student ratio, financial resources' },
    { title: 'Research & Professional Practice', icon: TrendingUp, weight: '30%', description: 'Publications, patents, projects, and professional practice' },
    { title: 'Graduation Outcomes', icon: GraduationCap, weight: '20%', description: 'University examinations, median salary, and higher studies' },
    { title: 'Outreach & Inclusivity', icon: Users, weight: '10%', description: 'Regional diversity, women diversity, economically and socially challenged students' },
    { title: 'Peer Perception', icon: Building2, weight: '10%', description: 'Peer perception by academic peers and employers' },
    { title: 'Placement & Higher Studies', icon: Briefcase, weight: 'Key Metric', description: 'Placement percentage, median salary offered, and students opting for higher studies' },
  ];

  return (
    <AboutLayout pageTitle="NIRF" breadcrumbPath="NIRF">
      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-foreground">National Institutional Ranking Framework</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              The National Institutional Ranking Framework (NIRF) was approved by the MHRD and launched on 29th September 2015. 
              It outlines a methodology to rank institutions across the country based on parameters agreed upon by a core committee 
              set up by MHRD.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The National College participates in the NIRF ranking process annually, demonstrating its commitment to transparency, 
              accountability, and continuous improvement in higher education standards.
            </p>
          </div>
        </div>
      </section>

      {/* Ranking Parameters */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Ranking Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {rankingParameters.map((param, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <param.icon className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-lg">{param.title}</CardTitle>
                  <span className="text-sm font-semibold text-primary">{param.weight}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">{param.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Submission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">NIRF Data & Reports</h2>
            <p className="text-muted-foreground text-lg mb-10 text-center">
              The National College submits its institutional data annually to the NIRF portal. Access the latest reports below.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'National College, Basavanagudi, Bengaluru — Overall 2026', file: '/NCB-Overall-2026.pdf' },
                { title: 'National College, Basavanagudi, Bengaluru — College 2026', file: '/NCB-College-2026.pdf' },
              ].map((doc, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                  <FileText className="text-primary mb-4" size={48} />
                  <h3 className="font-semibold text-foreground mb-4">{doc.title}</h3>
                  <a href={doc.file} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button variant="outline" className="gap-2">
                      <Download size={16} /> Download PDF
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default Nirf;
