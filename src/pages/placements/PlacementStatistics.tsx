import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatingChat } from '../../components/FloatingChat';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { Card, CardContent } from '../../components/ui/card';
import { TrendingUp, Building, Award, Briefcase } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';

const PlacementStatistics = () => {
  const placementStats = [
    { value: "90%", label: "Placement Rate", icon: TrendingUp, color: "from-logo-navy to-logo-navy-light" },
    { value: "100+", label: "Companies", icon: Building, color: "from-logo-navy-light to-logo-navy" },
    { value: "₹8.5L", label: "Highest Package", icon: Award, color: "from-logo-navy to-logo-navy-light" },
    { value: "₹4.5L", label: "Average Package", icon: Briefcase, color: "from-logo-navy-light to-logo-navy" },
  ];

  const yearlyStats = [
    { year: '2025-26', admitted: 322, eligible: 250, placed: 24, higher: '–', total: '–' },
    { year: '2024-25', admitted: 244, eligible: 175, placed: 55, higher: 75, total: 130 },
    { year: '2023-24', admitted: 313, eligible: 241, placed: 44, higher: 124, total: 148 },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="bg-gradient-to-r from-logo-navy/5 to-logo-blue/5 py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-logo-navy hover:text-logo-blue">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-logo-navy hover:text-logo-blue">Placements</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-logo-navy-dark font-medium">Statistics</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="bg-gradient-to-r from-logo-navy to-logo-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Placement Statistics</h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in animate-delay-200"></div>
          </div>
        </div>

        {/* Highlights */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Highlights</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {placementStats.map((stat, index) => (
                  <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border border-logo-navy/10 hover:border-logo-navy/20">
                    <CardContent className="pt-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                        <stat.icon size={20} className="text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-logo-navy font-medium text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Yearly Trends */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Yearly Placement Trends</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Year Of Pass</th>
                      <th className="px-6 py-4 text-center font-semibold">Admitted Students</th>
                      <th className="px-6 py-4 text-center font-semibold">Eligible Students</th>
                      <th className="px-6 py-4 text-center font-semibold">Placed (P)</th>
                      <th className="px-6 py-4 text-center font-semibold">Higher Studies (H)</th>
                      <th className="px-6 py-4 text-center font-semibold">Total (P+H)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearlyStats.map((stat, index) => (
                      <tr key={index} className="border-t hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{stat.year}</td>
                        <td className="px-6 py-4 text-center">{stat.admitted}</td>
                        <td className="px-6 py-4 text-center">{stat.eligible}</td>
                        <td className="px-6 py-4 text-center">{stat.placed}</td>
                        <td className="px-6 py-4 text-center">{String(stat.higher)}</td>
                        <td className="px-6 py-4 text-center">{String(stat.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default PlacementStatistics;
