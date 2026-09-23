
import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';
import { FloatingApplyButton } from '../FloatingApplyButton';
import { Card } from '../ui/card';
import { ArrowRight, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InfrastructureLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  breadcrumbPath: string;
  category?: string;
  subtitle?: string;
}

const infrastructurePages = [
  { title: 'Campus Overview', href: '/infrastructure/campus-overview', description: 'Explore our beautiful and modern campus facilities' },
  { title: 'Library', href: '/infrastructure/library', description: 'Comprehensive collection of books and digital resources' },
  { title: 'Sports Facilities', href: '/infrastructure/sports-facilities', description: 'Modern sports infrastructure for all activities' },
  { title: 'Classrooms', href: '/infrastructure/classrooms', description: 'Smart classrooms with modern teaching aids' },
  { title: 'Mini Auditorium', href: '/infrastructure/auditorium', description: 'Intimate venue for smaller gatherings' },
  { title: 'Auditorium', href: '/infrastructure/mini-auditorium', description: 'Main auditorium for events and ceremonies' },
  { title: 'Hostel Facility', href: '/infrastructure/hostel-facility', description: 'Safe and comfortable residential facilities for students' }
];

export const InfrastructureLayout: React.FC<InfrastructureLayoutProps> = ({
  children,
  pageTitle,
  breadcrumbPath,
  category = "Infrastructure",
  subtitle
}) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Breadcrumb Navigation */}
        <div className="bg-gradient-to-r from-logo-navy/5 to-logo-blue/5 py-2 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-sm text-logo-navy hover:text-logo-blue">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="text-sm text-logo-navy hover:text-logo-blue">
                    {category}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-sm text-logo-navy-dark font-medium">
                    {breadcrumbPath}
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
              {pageTitle}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-blue-100 mb-4 animate-fade-in-up max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in animate-delay-200"></div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Quick Navigation */}
        <section className="py-16 bg-white border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Explore More Infrastructure</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infrastructurePages
                .filter(page => page.title !== pageTitle)
                .slice(0, 6)
                .map((page, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all group cursor-pointer">
                  <Link to={page.href} className="block">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-logo-navy group-hover:text-logo-blue transition-colors">
                        {page.title}
                      </h3>
                      <ArrowRight size={20} className="text-logo-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-gray-600 text-sm">{page.description}</p>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingApplyButton />
      </div>
    </LanguageProvider>
  );
};
