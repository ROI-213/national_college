import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Shield, Award, BookOpen, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const MandatoryDisclosureHome = () => {
  const disclosureCategories = [
    {
      title: 'Institutional Development Plan (IDP)',
      description: 'Comprehensive development plan outlining institutional goals, strategies, and future roadmap.',
      icon: Building,
      href: '/mandatory-disclosure/idp',
      documents: ['IDP 2024-2029.pdf', 'Strategic Plan.pdf']
    },
    {
      title: 'Memorandum of Understanding (MOU)',
      description: 'Partnership agreements and collaborations with various institutions and organizations.',
      icon: FileText,
      href: '/mandatory-disclosure/mou',
      documents: ['Industry MOUs.pdf', 'Academic Partnerships.pdf']
    },
    {
      title: 'Academic & Examination Policy',
      description: 'Detailed policies governing academic processes, evaluation, and examination procedures.',
      icon: BookOpen,
      href: '/mandatory-disclosure/academics-policy',
      documents: ['Academic Policy 2024.pdf', 'Examination Guidelines.pdf']
    },
    {
      title: 'Annual Reports',
      description: 'Comprehensive annual reports detailing institutional achievements and progress.',
      icon: FileText,
      href: '/mandatory-disclosure/annual-report',
      documents: ['Annual Report 2023-24.pdf', 'Annual Report 2022-23.pdf']
    },
    {
      title: 'AICTE Approvals',
      description: 'All India Council for Technical Education approvals and compliance documents.',
      icon: Award,
      href: '/mandatory-disclosure/aicte',
      documents: ['AICTE Approval Letter.pdf', 'Compliance Report.pdf']
    },
    {
      title: 'Notices & Circulars',
      description: 'Official notices, circulars, and important announcements from the institution.',
      icon: FileText,
      href: '/mandatory-disclosure/notices',
      documents: ['Current Notices.pdf', 'Academic Circulars.pdf']
    },
    {
      title: 'Act & Statutes',
      description: 'Governing acts, statutes, and legal framework of the institution.',
      icon: Shield,
      href: '/mandatory-disclosure/act-statutes',
      documents: ['College Act.pdf', 'Institutional Statutes.pdf']
    },
    {
      title: 'Sponsoring Body Details',
      description: 'Information about the sponsoring body, governance structure, and management.',
      icon: Users,
      href: '/mandatory-disclosure/sponsoring-body',
      documents: ['Sponsoring Body Info.pdf', 'Governance Structure.pdf']
    }
  ];

  const quickStats = [
    { label: 'Total Documents', value: '150+', icon: FileText },
    { label: 'Categories', value: '8', icon: BookOpen },
    { label: 'Last Updated', value: 'Dec 2024', icon: Award },
    { label: 'Compliance Rate', value: '100%', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur px-6 py-3 rounded-full mb-6">
              <Shield className="text-yellow-400" size={24} />
              <span className="font-semibold">Transparency & Compliance</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Mandatory
              <span className="block text-yellow-400">Disclosure</span>
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Access comprehensive information about our institution's policies, procedures, 
              approvals, and governance structure in compliance with regulatory requirements.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-yellow-400" size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Disclosure Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore different categories of mandatory disclosures to access relevant documents and information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {disclosureCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-medium text-muted-foreground">Available Documents:</div>
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center space-x-2 text-sm">
                        <FileText size={14} className="text-muted-foreground" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <Link to={category.href}>
                        <ExternalLink size={16} className="mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <CardTitle className="text-2xl">Compliance & Transparency</CardTitle>
              <CardDescription className="text-lg">
                National College is committed to maintaining full transparency and compliance 
                with all regulatory requirements.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                All documents and information provided in this section are regularly updated to ensure 
                accuracy and compliance with AICTE, UGC, and other regulatory body requirements. 
                For any queries regarding mandatory disclosures, please contact our administration office.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <FileText className="mr-2" size={20} />
                  Download All Documents
                </Button>
                <Button variant="outline" size="lg">
                  Contact Administration
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosureHome;