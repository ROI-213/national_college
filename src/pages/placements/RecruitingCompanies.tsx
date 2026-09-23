import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatingChat } from '../../components/FloatingChat';

import { LanguageProvider } from '../../contexts/LanguageContext';
import { Card, CardContent } from '../../components/ui/card';
import { Building2, ChevronRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';

const RecruitingCompanies = () => {
  const topRecruiters = [
    { name: 'Tata Consultancy Services', sector: 'IT Services', logo: '🏢', hirings: '50+' },
    { name: 'Infosys', sector: 'IT Services', logo: '🏢', hirings: '45+' },
    { name: 'Wipro', sector: 'IT Services', logo: '🏢', hirings: '40+' },
    { name: 'HDFC Bank', sector: 'Banking', logo: '🏦', hirings: '35+' },
    { name: 'ICICI Bank', sector: 'Banking', logo: '🏦', hirings: '30+' },
    { name: 'Deloitte', sector: 'Consulting', logo: '💼', hirings: '25+' },
    { name: 'Amazon', sector: 'E-commerce', logo: '📦', hirings: '20+' },
    { name: 'Flipkart', sector: 'E-commerce', logo: '🛒', hirings: '18+' },
  ];

  const companiesBySector = {
    'Information Technology': [
      'TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL', 'Tech Mahindra', 'Mindtree', 'Capgemini'
    ],
    'Banking & Finance': [
      'HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Mahindra', 'IndusInd Bank', 'Yes Bank'
    ],
    'Consulting': [
      'Deloitte', 'EY', 'KPMG', 'PwC', 'Accenture', 'McKinsey', 'BCG', 'Bain & Company'
    ],
    'E-commerce & Retail': [
      'Amazon', 'Flipkart', 'Myntra', 'Snapdeal', 'BigBasket', 'Zomato', 'Swiggy'
    ],
    'Media & Communication': [
      'Times Group', 'Network18', 'Zee Media', 'Republic TV', 'NDTV', 'CNN-News18'
    ],
    'Startups': [
      'Byju\'s', 'Unacademy', 'Paytm', 'PhonePe', 'Razorpay', 'Freshworks', 'Zoho'
    ]
  };

  const recruitmentProcess = [
    {
      step: '1',
      title: 'Company Registration',
      description: 'Companies register through our placement portal'
    },
    {
      step: '2',
      title: 'Pre-Placement Talk',
      description: 'Companies present their organization and opportunities'
    },
    {
      step: '3',
      title: 'Student Application',
      description: 'Students apply based on eligibility criteria'
    },
    {
      step: '4',
      title: 'Selection Process',
      description: 'Written test, group discussion, and interviews'
    },
    {
      step: '5',
      title: 'Final Selection',
      description: 'Offer letters and joining formalities'
    }
  ];

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
                    Recruiting Companies
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
              Recruiting Companies
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in animate-delay-200"></div>
          </div>
        </div>

        {/* Top Recruiters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Top Recruiters 2023-24</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topRecruiters.map((company, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{company.logo}</div>
                    <h3 className="font-semibold text-logo-navy mb-2">{company.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{company.sector}</p>
                    <div className="text-emerald-600 font-semibold">{company.hirings} hires</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Companies by Sector */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Companies by Sector</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(companiesBySector).map(([sector, companies], index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold text-logo-navy mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-emerald-600" />
                      {sector}
                    </h3>
                    <div className="space-y-2">
                      {companies.map((company, idx) => (
                        <div key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          {company}
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Recruitment Process</h2>
              <div className="space-y-8">
                {recruitmentProcess.map((process, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold text-lg">{process.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Registration CTA */}
        <section className="py-16 bg-emerald-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Partner with Us</h2>
              <p className="text-xl mb-8 opacity-90">
                Join our network of recruiting partners and access top talent from our college.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Register Your Company
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                  Download Brochure
                </button>
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

export default RecruitingCompanies;