import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatingChat } from '../../components/FloatingChat';

import { LanguageProvider } from '../../contexts/LanguageContext';
import { Card } from '../../components/ui/card';
import { Phone, Mail, Users } from 'lucide-react';
import placementDirectorImg from '../../assets/placement-director.jpg';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';

const placementTeam = [
  { name: 'Pooja R', designation: 'Co-coordinator' },
  { name: 'Vijay Raghavan', designation: 'Co-coordinator' },
  { name: 'Ranjithashree M', designation: 'Co-coordinator' },
  { name: 'Arpitha V B', designation: 'Co-coordinator' },
  { name: 'Supriya', designation: 'Co-coordinator' },
];

const DirectorMessage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Breadcrumb Navigation */}
        <div className="bg-gradient-to-r from-logo-navy/5 to-logo-blue/5 py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-logo-navy hover:text-logo-blue">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="text-logo-navy hover:text-logo-blue">
                    Placements
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-logo-navy-dark font-medium">
                    Placement Director's Message
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Page Hero Section */}
        <div className="bg-gradient-to-r from-logo-navy to-logo-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              Placement Director's Message
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in animate-delay-200"></div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">

              {/* Left Column – Director Details (sticky) */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-24">
                  <Card className="p-6 text-center">
                    <img src={placementDirectorImg} alt="Sangeetha B K - Placement Director" className="w-40 h-40 rounded-lg object-cover mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-logo-navy">Sangeetha B K</h3>
                    <p className="text-logo-blue font-medium mt-1">Placement Director</p>
                    <div className="mt-4 space-y-2 text-sm text-gray-600 text-left">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-logo-blue shrink-0" />
                        <span>+91 XXXXX XXXXX</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-logo-blue shrink-0" />
                        <span className="break-all">director@nationalcollege.edu</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Middle Column – Message (scrollable) */}
              <div className="lg:col-span-6">
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The Training and Placement cell follows a systematic process to meet the aspirations and expectations of our students. The Training and Placement cell is a bridge between students and corporate to connect and to fulfill their requirement. The placement training programme for the students from 1st to 6th semester exposes them to the corporate requirement and provides them lot of opportunities to perform better in their interviews. The Soft Skills, Technical skills and Programming Skill programs as a part of co-circular activity empowers every individual students of The National College, Basavangudi to gain excellence in their domain in general. The Placement Cell of the Institute is aptly set up, not only to get a right job, but to guide each of its students to get into the right career.
                  </p>

                  <h3 className="text-xl font-bold text-logo-navy mt-8 mb-4">Pre Placement Activity</h3>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The Pre-Placement activities are given due importance, from day one of the course of the student and the concept of mentoring each and every student is followed regularly. The students are trained on aspects like:
                  </p>

                  <ol className="mb-6 space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Facing Interviews.</li>
                    <li>Facing Group Discussions.</li>
                    <li>Professional Resume Writing.</li>
                    <li>Cracking Aptitude Exams.</li>
                    <li>Soft Skill Training.</li>
                    <li>Internship Projects.</li>
                  </ol>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The Institute has a tie-up with professional training and development centre to carry out the pre placement activity in a stringent and result oriented methodology.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Our aim is to place the maximum number of students through the campus & off campus interviews conducted by the companies. We prepare the students to meet the industries recruitment process and invite the reputed companies to the college for organizing campus placement session.
                  </p>
                </div>
              </div>

              {/* Right Column – Placement Team (sticky) */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-24">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <Users className="w-5 h-5 text-logo-blue" />
                      <h3 className="text-lg font-bold text-logo-navy">Placement Team</h3>
                    </div>
                    <div className="space-y-4">
                      {placementTeam.map((member) => (
                        <div key={member.name} className="border-b border-blue-100 pb-3 last:border-0 last:pb-0">
                          <p className="font-bold text-gray-800">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.designation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
        <FloatingChat />
      </div>
    </LanguageProvider>
  );
};

export default DirectorMessage;
