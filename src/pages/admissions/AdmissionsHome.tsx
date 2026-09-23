
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { FileText, Globe, Award, BookOpen, Calendar, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionsHome = () => {
  const admissionCategories = [
    {
      icon: FileText,
      title: 'Application Process',
      description: 'Apply online and track your admission status',
      links: [
        { label: 'Online Application', href: '/admissions/online-application' },
        { label: 'Admission Guidelines', href: '/admissions/guidelines' }
      ]
    },
    {
      icon: Globe,
      title: 'International Students',
      description: 'Special admission process for international applicants',
      links: [
        { label: 'International Admissions', href: '/admissions/international' }
      ]
    },
    {
      icon: Award,
      title: 'Scholarships',
      description: 'Financial assistance and merit-based scholarships',
      links: [
        { label: 'Scholarships & Committee', href: '/admissions/scholarships' },
        { label: 'Management Scholarship', href: '/admissions/management-scholarship' },
        { label: 'Scholarship Policy', href: '/admissions/scholarship-policy' }
      ]
    },
    {
      icon: BookOpen,
      title: 'Prospectus & Information',
      description: 'Detailed course information and guidelines',
      links: [
        { label: 'Main Prospectus', href: '/admissions/main-prospectus' },
        { label: 'MA Prospectus', href: '/admissions/ma-prospectus' },
        { label: 'MSc Prospectus', href: '/admissions/msc-prospectus' },
        { label: 'Student Handbook', href: '/admissions/handbook' }
      ]
    },
    {
      icon: Calendar,
      title: 'Academic Information',
      description: 'Important dates and academic calendar',
      links: [
        { label: 'Academic Calendar', href: '/admissions/calendar' }
      ]
    },
    {
      icon: DollarSign,
      title: 'Fee Information',
      description: 'Fee structure and refund policies',
      links: [
        { label: 'Fee Structure', href: '/admissions/fee-structure' },
        { label: 'Fee Refund Policy', href: '/admissions/fee-refund' }
      ]
    }
  ];

  return (
    <AdmissionsLayout pageTitle="Admissions" breadcrumbPath="Overview" category="Admissions">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Join Our Academic Excellence</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Begin your journey with The National College. We offer a comprehensive admission process 
              designed to help you find the right program and achieve your academic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-logo-navy mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                </div>
                <div className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.href}
                      className="block text-logo-blue hover:text-logo-navy transition-colors text-sm font-medium border-b border-transparent hover:border-logo-blue pb-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Application Section */}
      <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your application today and take the first step towards your academic future.
          </p>
          <Link
            to="/admissions/online-application"
            className="bg-white text-logo-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default AdmissionsHome;
