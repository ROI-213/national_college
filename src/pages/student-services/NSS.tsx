
import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table';
import { Heart, Users, Award, FileText, TreePine, BookOpen, Stethoscope, Globe, CheckCircle } from 'lucide-react';

import facultySudhirTv from '@/assets/faculty-sudhir-tv.jpg';
import facultySupriyaR from '@/assets/faculty-supriya-r.jpg';
import facultyDrPadmaT from '@/assets/faculty-dr-padma-t.jpg';
import facultyVijayRaghavanHg from '@/assets/faculty-vijay-raghavan-hg.jpg';
import facultyDrSelvappa from '@/assets/faculty-dr-selvappa.jpg';
import facultyAnanyaMd from '@/assets/faculty-ananya-md.jpg';
import facultyPoojaR from '@/assets/faculty-pooja-r.jpg';

import nssYogesh from '@/assets/nss-yogesh-captain.jpg';
import nssRuchitha from '@/assets/nss-ruchitha-captain.jpg';
import nssHemanth from '@/assets/nss-hemanth-vc.jpg';
import nssMariya from '@/assets/nss-mariya-vc.jpg';

const NSS = () => {
  const committeeMembers = [
    { name: 'Prof. Supriya R', image: facultySupriyaR, designation: 'ASSISTANT PROGRAM OFFICER' },
    { name: 'Prof. Thaniya S', image: '/placeholder.svg', designation: 'ASSISTANT PROGRAM OFFICER' },
    { name: 'Dr. Padma T', image: facultyDrPadmaT, designation: 'COMMITTEE MEMBER' },
    { name: 'Prof. Achutha Raju', image: '/placeholder.svg', designation: 'COMMITTEE MEMBER' },
    { name: 'Prof. Vijay Raghavan', image: facultyVijayRaghavanHg, designation: 'COMMITTEE MEMBER' },
    { name: 'Dr. Selvappa', image: facultyDrSelvappa, designation: 'COMMITTEE MEMBER' },
    { name: 'Prof. Kusuma', image: '/placeholder.svg', designation: 'COMMITTEE MEMBER' },
    { name: 'Prof. Yashaswini', image: '/placeholder.svg', designation: 'COMMITTEE MEMBER' },
    { name: 'Prof. Naveen Naidu', image: '/placeholder.svg', designation: 'COMMITTEE MEMBER' },
    { name: 'Prof. Ananya', image: facultyAnanyaMd, designation: 'COMMITTEE MEMBER' },
    { name: 'Prof. Pooja', image: facultyPoojaR, designation: 'COMMITTEE MEMBER' },
  ];

  const headVolunteers = [
    { name: 'Yogesh B', image: nssYogesh, designation: 'Captain', department: 'BCA' },
    { name: 'Ruchitha Bs', image: nssRuchitha, designation: 'Captain', department: 'BCA' },
    { name: 'Hemanth G', image: nssHemanth, designation: 'Vice Captain', department: 'BSc' },
    { name: 'Mariya Darshini N', image: nssMariya, designation: 'Vice Captain', department: 'BCA' },
  ];

  const activities = [
    { name: '7-DAY SPECIAL CAMP REPORT Achalu, Kanakapura Taluk, Ramnagara District', file: '7daysNSS-special-camp-Achalu-Kanakapura-Taluk.pdf' },
    { name: 'NSS 7-day Special Camp Report Gundlukotturu Village, Gauribidnur', file: 'SPECIAL-CAMP-2025-GAURIBIDNUR.pdf' },
    { name: 'NSS Regular Activities Reports And Photos (2024-25)', file: 'NSS-REPORT-2024-25.pdf' },
    { name: 'NSS Regular Activities Report 2022-23', file: 'NSS-Regular-Activities-Report-2022-23.pdf' },
    { name: 'NSS 7-DAY SPECIAL CAMP REPORT Mudenahalli, Kanakapura Taluk, Ramanagara District', file: '7dayscamp-Mudenahalli-Kanakapura.pdf' },
  ];

  const achievements = [
    { name: 'Highlights Of NSS Volunteers Achievements 2025–26', file: 'NSS-achievements-26.pdf' },
    { name: 'Highlights of NSS Volunteers Achievements 2024–25', file: 'NSS-VOLUNTEERS-ACCOMPLISHMENTS.pdf' },
  ];

  return (
    <StudentServicesLayout pageTitle="National Service Scheme" breadcrumbPath="NSS">
      {/* Motto */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full">
            <Heart className="w-5 h-5 mr-2" />
            <span className="font-medium italic text-lg">"Not Me But You"</span>
          </div>
        </div>
      </section>

      {/* 1. About Officer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">About Officer</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-lg border border-border mb-4">
                  <img src={facultySudhirTv} alt="Prof. Sudhir TV" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Prof. SUDHIR TV</h3>
                <p className="text-muted-foreground text-center">NSS PROGRAM OFFICER (2025–26)</p>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Experienced Computer Science Lecturer with over 15+ years of academic and industry experience. Currently serving as Lecturer at The National College, Bengaluru, handling UG and PG programs. Strong expertise in Java, Python, DBMS, Data Structures, and Web Technologies. Experience includes academic administration, student mentoring, project guidance, and industry roles in software testing and corporate finance operations.
                </p>
                <div>
                  <h4 className="font-bold text-foreground mb-1">The National College, Bengaluru</h4>
                  <p className="text-sm text-muted-foreground mb-3">June 2009 – 2015 | 2021 – Present</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> Teaching UG and PG courses including Java, Python, DBMS, Data Structures, and Web Technologies.</li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> Preparing lesson plans, study materials, lab manuals, and question banks.</li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> Guiding mini-projects and final year projects.</li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> Conducting internal assessments and university evaluations.</li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> Organizing seminars, workshops, and technical events.</li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> Participating in NAAC documentation and academic quality initiatives.</li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span> Coordinating departmental academic activities.</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h4 className="font-bold text-foreground mb-3">NSS SUMMARY</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I have a strong commitment towards social service and community development. Actively interested in participating in social awareness programs, educational outreach, and student welfare activities. I believe in contributing my knowledge, time, and skills to support underprivileged communities, promote ethical values, and encourage social responsibility among students. Through voluntary service and active involvement in social initiatives, I strive to create a positive impact on society and inspire others to serve with dedication and compassion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Committee Members */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Committee Members</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {committeeMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{member.designation}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Head Volunteers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              HEAD VOLUNTEERS OF NSS UNIT FOR ACADEMIC YEAR OF 2025-26
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {headVolunteers.map((volunteer, index) => (
                <div
                  key={index}
                  className="flex bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/20 group"
                >
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={volunteer.image}
                      alt={volunteer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{volunteer.name}</h3>
                    <p className="text-primary font-normal text-xs mb-2">{volunteer.designation}</p>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] font-medium">
                      {volunteer.department}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Activities</h2>
            <Card className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Activity Name</TableHead>
                    <TableHead className="font-bold text-center w-32">File</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activities.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-foreground">{activity.name}</TableCell>
                      <TableCell className="text-center">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`/${activity.file}`, '_blank')}
                          className="gap-1"
                        >
                          <FileText className="w-4 h-4" />
                          View
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

      {/* 5. Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Achievements</h2>
            <Card className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Achievements Name</TableHead>
                    <TableHead className="font-bold text-center w-32">File</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {achievements.map((achievement, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-foreground">{achievement.name}</TableCell>
                      <TableCell className="text-center">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`/${achievement.file}`, '_blank')}
                          className="gap-1"
                        >
                          <FileText className="w-4 h-4" />
                          View
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

      {/* Our Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Service Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: TreePine, title: 'Environmental Conservation', desc: 'Tree plantation drives, clean-up campaigns, and environmental awareness programs' },
                { icon: BookOpen, title: 'Literacy Initiatives', desc: 'Adult literacy programs, educational support for underprivileged communities' },
                { icon: Stethoscope, title: 'Health & Wellness', desc: 'Medical camps, health awareness sessions, blood donation drives' },
                { icon: Globe, title: 'Social Awareness', desc: 'Community outreach programs, social issue campaigns, civic education' },
              ].map((area, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join NSS? */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Join NSS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Leadership development through community service',
                'Enhanced social awareness and civic responsibility',
                'Practical experience in project management',
                'Certificate of participation for 120+ hours of service',
                'Network building with like-minded volunteers',
                'Skills in community mobilization and social work',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Statistics */}
      <section className="py-16 bg-gradient-to-br from-logo-navy to-logo-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '180', label: 'Active Volunteers' },
                { value: '240+', label: 'Service Hours' },
                { value: '50+', label: 'Community Projects' },
                { value: '57+', label: 'Years of Service' },
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <p className="text-3xl font-bold text-logo-blue mb-2">{stat.value}</p>
                  <p className="text-muted-foreground font-medium text-sm">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the NSS family and become part of a movement that's transforming communities 
              and shaping future leaders.
            </p>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default NSS;
