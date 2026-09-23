import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatingChat } from '../../components/FloatingChat';

import { LanguageProvider } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Download, ChevronRight } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table';
import { Button } from '../../components/ui/button';

const PlacementActivities = () => {
  const activities = [
    { year: '2026', name: 'Pool Campus (Campus Recruitment Drive)', date: '22-01-2026', file: '/report-on-POOL-CAMPUS-2026.pdf' },
    { year: '2025', name: 'Report on Wipro Campus Visit', date: '31-05-2025', file: '/Report-on-Wipro-Campus-Visit-2025.pdf' },
    { year: '2024', name: 'Pool Campus Drive at The National College, Basavanagudi', date: '31-05-2024', file: '/pool-campus-drive-2024.pdf' },
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
              <span className="text-logo-navy font-medium">Placement Activities</span>
            </nav>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-logo-navy to-logo-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Placement Activities</h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in" style={{ animationDelay: '200ms' }} />
          </div>
        </section>

        {/* Table Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <Table>
                <TableHeader className="bg-logo-navy/5">
                  <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Name of the Activity</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">File</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activities.map((a, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{a.year}</TableCell>
                      <TableCell>{a.name}</TableCell>
                      <TableCell>{a.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" asChild>
                          <a href={a.file} target="_blank" rel="noopener noreferrer">
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

export default PlacementActivities;
