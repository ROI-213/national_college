import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { FloatingChat } from '../FloatingChat';
import { FloatingApplyButton } from '../FloatingApplyButton';

import { LanguageProvider } from '../../contexts/LanguageContext';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

interface AdmissionsLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  breadcrumbPath: string;
  category: string;
}

export const AdmissionsLayout: React.FC<AdmissionsLayoutProps> = ({
  children,
  pageTitle,
  breadcrumbPath,
  category
}) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
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
                  <BreadcrumbLink href="/admissions" className="text-sm text-logo-navy hover:text-logo-blue">
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
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in animate-delay-200"></div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <FloatingChat />
        <FloatingApplyButton />
      </div>
    </LanguageProvider>
  );
};
