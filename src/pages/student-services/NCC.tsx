
import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table';
import { Shield, Users, Award, Mountain, Target, Flag, Eye } from 'lucide-react';
import nccOfficerImg from '@/assets/ncc-officer.jpg';

const activities = [
  { name: 'The Cleanliness Event', file: '/CLEANLINESS-EVENT.pdf' },
  { name: 'Gandhi Jayanthi', file: '/GANDHI-JAYANTHI.pdf' },
  { name: 'Independence Day Celebration', file: '/Independence-Day-Celebration.pdf' },
  { name: 'Kargil Vijay Diwas', file: '/Kargil-Vijay-Diwas.pdf' },
  { name: 'Report Junior Selection For The Batch 2026', file: '/NCC-selection-report-2025.pdf' },
  { name: 'Walkathon Event', file: '/WALKATHON-EVENT.pdf' },
];

const achievements = [
  { name: 'Camp Participation & Achievements', file: '/achivement-list-2025-26.pdf' },
];

const programs = [
  {
    icon: Flag,
    title: 'Parades & Drills',
    description: 'Precision drill training, ceremonial parades, and disciplinary exercises that build character'
  },
  {
    icon: Mountain,
    title: 'Adventure Activities',
    description: 'Trekking, mountaineering, rock climbing, and outdoor survival skills development'
  },
  {
    icon: Target,
    title: 'Training Camps',
    description: 'Annual training camps, leadership development programs, and specialized skill workshops'
  },
  {
    icon: Users,
    title: 'Social Service',
    description: 'Community service projects, disaster relief operations, and social awareness campaigns'
  }
];

const wings = [
  {
    name: 'Army Wing',
    description: 'Ground-based training focusing on leadership, discipline, and tactical skills',
    color: 'from-green-600 to-green-700'
  },
  {
    name: 'Air Wing',
    description: 'Aviation-focused training with flying experience and aerospace knowledge',
    color: 'from-blue-600 to-blue-700'
  }
];

const NCC = () => {
  return (
    <StudentServicesLayout pageTitle="National Cadet Corps" breadcrumbPath="NCC">
      {/* Motto */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-medium italic text-lg">"Unity and Discipline"</span>
          </div>
        </div>
      </section>

      {/* Associate NCC Officer Message */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Associate NCC Officer Message</h2>
            <div className="grid md:grid-cols-[300px_1fr] gap-10">
              <div className="flex flex-col items-center text-center">
                <img
                  src={nccOfficerImg}
                  alt="Lt. Prakasha C. R., Associate NCC Officer"
                  className="w-full max-w-[280px] rounded-lg shadow-lg object-cover mb-6"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">Lt. Prakasha C. R.</h3>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-1">
                  <p>Associate NCC Officer (ANO)</p>
                  <p>NCC Army Wing – 3/6 Coy</p>
                  <p>Strength: 108 Cadets</p>
                  <p>The National College (Autonomous)</p>
                  <p>Basavanagudi, Bengaluru</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">NCC Army Wing (3/6 Coy)</h3>
                <p className="text-muted-foreground mb-6">7 Karnataka Battalion – B Group<br />The National College (Autonomous), Basavanagudi, Bengaluru</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>It gives me immense pride and honour to serve as the Associate NCC Officer of the NCC Army Wing (3/6 Coy) of The National College, functioning under 7 Karnataka Battalion, B Group.</p>
                  <p>Our unit has a total sanctioned strength of 108 cadets, forming a vibrant and disciplined company committed to excellence. The strength of our unit lies not only in numbers but in the dedication, unity, and determination of each cadet who wears the NCC uniform with pride.</p>
                  <p>The National College NCC unit consistently holds a top position within the battalion in achievements at prestigious platforms such as the Republic Day Camp (RDC), Inter Directorate Shooting Sports Championship (IDSSC), Inter Group Sports (IGS), and various state and national-level camps. These accomplishments reflect the continuous effort, rigorous training, and high standards maintained by our cadets.</p>
                  <p>The aim of NCC is to develop character, leadership, discipline, and a spirit of selfless service among youth. Through structured military training, drill practice, weapon handling, adventure activities, and community service programs, we strive to mould students into confident leaders and responsible citizens.</p>
                  <p>With the constant support of the college management and the commitment of our cadets, the NCC unit of National College continues to scale greater heights, upholding the motto of NCC — "Unity and Discipline."</p>
                  <p>I encourage all cadets to remain committed to excellence and contribute meaningfully to nation-building.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Activities</h2>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Activity Name</TableHead>
                    <TableHead className="w-[100px] text-center">File</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activities.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-center">
                        <Button size="sm" variant="outline" asChild>
                          <a href={item.file} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-4 h-4 mr-1" /> View
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Achievements</h2>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Activity Name</TableHead>
                    <TableHead className="w-[100px] text-center">File</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {achievements.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-center">
                        <Button size="sm" variant="outline" asChild>
                          <a href={item.file} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-4 h-4 mr-1" /> View
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Wings Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">NCC Wings</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {wings.map((wing, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-2 bg-gradient-to-r ${wing.color}`}></div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{wing.name}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{wing.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Training Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-logo-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <program.icon size={24} className="text-logo-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                      <p className="text-muted-foreground">{program.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Recognition */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Benefits & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">Certificates & Awards</h3>
                <p className="text-muted-foreground">A, B, and C certificates with national recognition and career advantages</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">Leadership Skills</h3>
                <p className="text-muted-foreground">Comprehensive leadership training and team management experience</p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">Defence Preparation</h3>
                <p className="text-muted-foreground">Preparation for defence services and paramilitary organizations</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Statistics */}
      <section className="py-16 bg-gradient-to-br from-logo-navy to-logo-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '158+', label: 'Active Cadets' },
                { value: '28+', label: 'State Awards' },
                { value: '5+', label: 'National Camps' },
                { value: '78+', label: 'Years of Excellence' },
              ].map((stat, idx) => (
                <Card key={idx} className="p-6 text-center bg-white">
                  <p className="text-3xl font-bold text-logo-blue mb-2">{stat.value}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Elite Corps</h2>
            <p className="text-xl opacity-90">
              Embark on a journey of self-discovery, leadership development, and national service. 
              Build the foundation for a distinguished future.
            </p>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default NCC;
