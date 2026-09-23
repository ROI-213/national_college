import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatingChat } from '../../components/FloatingChat';

import { LanguageProvider } from '../../contexts/LanguageContext';
import { Card } from '../../components/ui/card';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const missions = [
  'To bridge the gap between academic learning and industry expectations.',
  'To provide systematic training in technical, aptitude, communication, and soft skills.',
  'To establish strong linkages with industries for internships and campus placements.',
  'To guide students towards career opportunities, higher education, and entrepreneurship.',
  'To continuously upgrade student skills in line with emerging industry trends.',
];

const practices = [
  'Organizing on-campus and pool-campus recruitment drives in collaboration with reputed companies.',
  'Conducting regular training programs on aptitude, reasoning, communication, and technical skills.',
  'Facilitating internships, industrial visits, and live projects for practical exposure.',
  'Providing career guidance, mentoring, and counseling to students.',
  'Arranging mock tests, group discussions, and interview practice sessions.',
  'Developing industry partnerships and MoUs to enhance placement opportunities.',
  'Encouraging higher studies, competitive exams, and entrepreneurship initiatives.',
  'Maintaining placement records, feedback analysis, and continuous improvement processes.',
];

const VisionMission = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Breadcrumb Strip */}
        <div className="bg-gradient-to-r from-logo-navy/5 to-logo-blue/5 py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/placements/overview">Placements</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Vision, Mission & Practices</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-logo-navy to-logo-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Vision, Mission & Practices
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in" style={{ animationDelay: '200ms' }} />
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-logo-blue" />
                </div>
                <h2 className="text-3xl font-bold text-logo-navy">Placement Cell – Vision</h2>
              </div>
              <Card className="p-6 border-l-4 border-logo-blue">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To develop industry-ready graduates by enhancing employability skills, professional competence, and ethical values, enabling students to achieve successful careers and lifelong growth.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Compass className="w-6 h-6 text-logo-blue" />
                </div>
                <h2 className="text-3xl font-bold text-logo-navy">Placement Cell – Mission</h2>
              </div>
              <div className="space-y-4">
                {missions.map((mission, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-logo-blue mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{mission}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Practices Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Placement Cell – Practices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {practices.map((text, idx) => (
                  <Card key={idx} className="flex items-start gap-4 p-6 border-blue-100 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-logo-blue rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FloatingChat />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default VisionMission;
