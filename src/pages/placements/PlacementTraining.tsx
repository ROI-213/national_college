import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatingChat } from '../../components/FloatingChat';

import { LanguageProvider } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Download, ChevronRight } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table';
import { Button } from '../../components/ui/button';

const PlacementTraining = () => {
  const trainingData = [
    {
      year: '2025–26',
      activity: 'Career Guidance on Data Analytics and Gen-AI',
      students: 'V-Sem BCA/BSC',
      date: '05 Aug 2025',
      file: '/Career-Guidance-Data-Analytics-Gen-AI-2025-26.pdf',
    },
    {
      year: '2025–26',
      activity: 'Content Design Fundamentals with Generative AI – Coursera & Adobe Digital Academy (Hybrid Mode)',
      students: 'IV-Sem MSc',
      date: '28-30 Sep 2025',
      file: '/Design-Fundamentals-Generative-AI-2025-26.pdf',
    },
    {
      year: '2024–25',
      activity: 'One-Day Workshop on GEN AI',
      students: 'BCA/MCA',
      date: '26 Mar 2025',
      file: '/One-Day-workshop-on-GEN-AI-2024-25.pdf',
    },
    {
      year: '2024–25',
      activity: 'Training on AIML',
      students: 'MCA/MSc',
      date: '03 Feb 2025',
      file: '/Training-on-AI-ML.pdf',
    },
    {
      year: '2024–25',
      activity: 'Placement Training by IBM Skill Building',
      students: 'BCA',
      date: '06 Dec 2024',
      file: '/Placement-Training-IBM-Skill-Building-2024-25.pdf',
    },
    {
      year: '2024–25',
      activity: 'Report on Soft Skills Training',
      students: 'BCA',
      date: '11-16 Nov 2024',
      file: '/Report-on-Soft-Skills-Training-2024-25.pdf',
    },
    {
      year: '2024–25',
      activity: 'Report On One-Day Pre-Placement Training By NIIT',
      students: 'UG/PG',
      date: '24 Oct 2024',
      file: '/Report-On-One-Day-Pre-Placement-Training-By-NIIT-2024-25.pdf',
    },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Breadcrumb Strip */}
        <div className="bg-gradient-to-r from-logo-navy/5 to-logo-blue/5 py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="flex items-center text-sm text-gray-600 gap-2">
              <Link to="/" className="hover:text-logo-navy transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Placements</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-logo-navy font-medium">Training</span>
            </nav>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-logo-navy to-logo-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Placement Training</h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in" style={{ animationDelay: '200ms' }} />
          </div>
        </section>

        {/* Table Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto overflow-x-auto" style={{ maxWidth: '1350px' }}>
              <Table>
                <TableHeader className="bg-logo-navy/5">
                  <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Training Activity</TableHead>
                    <TableHead>Targeted Students</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">File</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trainingData.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.year}</TableCell>
                      <TableCell>{item.activity}</TableCell>
                      <TableCell>{item.students}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" asChild>
                          <a href={item.file} target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <FloatingChat />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default PlacementTraining;
