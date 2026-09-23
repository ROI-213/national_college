import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatingChat } from '../../components/FloatingChat';

import { LanguageProvider } from '../../contexts/LanguageContext';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Users, TrendingUp, Award, ArrowRight, ChevronRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';

const PlacementsOverview = () => {
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
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-logo-navy hover:text-logo-blue">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-logo-navy hover:text-logo-blue">
                    Placements
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-logo-navy-dark font-medium">
                    Overview
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-logo-navy to-logo-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              Placements Overview
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in animate-delay-200"></div>
          </div>
        </div>

        {/* Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Placement Highlights</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-gray-600">Placement Rate</div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Partner Companies</div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-2">₹8.5L</div>
                  <div className="text-gray-600">Highest Package</div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-2">₹4.5L</div>
                  <div className="text-gray-600">Average Package</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Why Choose Our Placement Program</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Industry Connections</h3>
                  <p className="text-gray-600">Strong partnerships with leading companies across various sectors</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
                  <p className="text-gray-600">Comprehensive training programs to enhance employability skills</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Career Guidance</h3>
                  <p className="text-gray-600">Personalized career counseling and mentorship programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Start Your Career Journey</h2>
              <p className="text-xl mb-8 opacity-90">
                Join our placement program and connect with top recruiters for your dream job.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                View Opportunities
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingChat />
      </div>
    </LanguageProvider>
  );
};

export default PlacementsOverview;