import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Database, FileText, Search, Download, AlertCircle, CheckCircle } from 'lucide-react';

const DataInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const pageDataInventory = [
    {
      section: 'Main Pages',
      pages: [
        {
          name: 'Home Page',
          path: '/',
          dummyData: ['Hero banners with stock images', 'Sample statistics', 'Placeholder news items', 'Generic testimonials'],
          realDataNeeded: ['Actual college photos/videos', 'Current enrollment numbers', 'Recent news and announcements', 'Real student/alumni testimonials'],
          status: 'needs-update',
          priority: 'high'
        }
      ]
    },
    {
      section: 'About Section',
      pages: [
        {
          name: 'About the College',
          path: '/about/college',
          dummyData: ['Generic college history', 'Stock campus images', 'Sample achievements'],
          realDataNeeded: ['Actual college history and milestones', 'Real campus photos', 'Specific achievements and accreditations'],
          status: 'needs-update',
          priority: 'high'
        },
        {
          name: 'Vision & Mission',
          path: '/about/vision-mission',
          dummyData: ['Template vision/mission statements', 'Generic goals'],
          realDataNeeded: ['Official vision and mission statements', 'Specific institutional goals and objectives'],
          status: 'needs-update',
          priority: 'high'
        },
        {
          name: 'Principal\'s Message',
          path: '/about/principal-message',
          dummyData: ['Generic principal message', 'Stock portrait'],
          realDataNeeded: ['Actual principal\'s message', 'Principal\'s photograph', 'Educational background and achievements'],
          status: 'needs-update',
          priority: 'high'
        },
        {
          name: 'College Management',
          path: '/college-management',
          dummyData: ['Sample management team', 'Generic roles and responsibilities'],
          realDataNeeded: ['Actual management team details', 'Real photographs', 'Detailed roles and qualifications'],
          status: 'needs-update',
          priority: 'medium'
        },
        {
          name: 'Governing Body',
          path: '/about/governing-body',
          dummyData: ['Generic society history', 'Sample governing structure', 'Template council members'],
          realDataNeeded: ['Complete NES history', 'Current society members and governing body', 'Official objectives and constitution'],
          status: 'needs-update',
          priority: 'medium'
        }
      ]
    },
    {
      section: 'Academic Programs',
      pages: [
        {
          name: 'Department Pages',
          path: '/academics/departments/*',
          dummyData: ['Generic course descriptions', 'Sample faculty lists', 'Stock images'],
          realDataNeeded: ['Detailed course curricula', 'Faculty profiles with real photos', 'Department-specific achievements'],
          status: 'needs-update',
          priority: 'high'
        },
        {
          name: 'Graduate Programs',
          path: '/academics/graduate/*',
          dummyData: ['Basic program information', 'Generic career prospects'],
          realDataNeeded: ['Complete syllabus details', 'Admission requirements', 'Career outcomes and placement data'],
          status: 'needs-update',
          priority: 'high'
        },
        {
          name: 'Certificate Courses',
          path: '/academics/certificate/*',
          dummyData: ['Course outlines', 'Sample pricing'],
          realDataNeeded: ['Detailed course content', 'Actual fee structure', 'Industry partnerships and certifications'],
          status: 'needs-update',
          priority: 'medium'
        }
      ]
    },
    {
      section: 'Admissions',
      pages: [
        {
          name: 'Fee Structure',
          path: '/admissions/fee-structure',
          dummyData: ['Sample fee amounts', 'Generic payment terms'],
          realDataNeeded: ['Actual fee structure for all courses', 'Payment schedules', 'Additional charges and refund policies'],
          status: 'needs-update',
          priority: 'high'
        },
        {
          name: 'Admission Guidelines',
          path: '/admissions/guidelines',
          dummyData: ['Generic admission process', 'Sample requirements'],
          realDataNeeded: ['Specific admission criteria', 'Required documents', 'Important dates and deadlines'],
          status: 'needs-update',
          priority: 'high'
        },
        {
          name: 'Scholarships',
          path: '/admissions/scholarships',
          dummyData: ['Sample scholarship types', 'Generic eligibility'],
          realDataNeeded: ['Available scholarship programs', 'Eligibility criteria', 'Application procedures and deadlines'],
          status: 'needs-update',
          priority: 'medium'
        },
        {
          name: 'Academic Calendar',
          path: '/admissions/calendar',
          dummyData: ['Template academic calendar', 'Sample dates'],
          realDataNeeded: ['Current academic year calendar', 'Exam schedules', 'Holiday lists and important dates'],
          status: 'needs-update',
          priority: 'high'
        }
      ]
    },
    {
      section: 'Infrastructure',
      pages: [
        {
          name: 'Campus Overview',
          path: '/infrastructure/campus-overview',
          dummyData: ['Stock campus images', 'Generic facility descriptions'],
          realDataNeeded: ['Actual campus photographs', 'Detailed facility specifications', 'Campus maps and layouts'],
          status: 'partial',
          priority: 'medium'
        },
        {
          name: 'Library',
          path: '/infrastructure/library',
          dummyData: ['Generic library statistics', 'Sample collection details'],
          realDataNeeded: ['Actual book collection numbers', 'Digital resources list', 'Library timings and rules'],
          status: 'needs-update',
          priority: 'medium'
        },
        {
          name: 'Professional Studio',
          path: '/infrastructure/professional-studio',
          dummyData: ['Equipment specifications', 'Studio images'],
          realDataNeeded: ['Actual equipment list', 'Real studio photographs', 'Booking procedures and availability'],
          status: 'partial',
          priority: 'low'
        }
      ]
    },
    {
      section: 'Student Services',
      pages: [
        {
          name: 'Placement Cell',
          path: '/student-services/placement',
          dummyData: ['Sample placement statistics', 'Generic company logos'],
          realDataNeeded: ['Actual placement data', 'Real recruiting companies', 'Salary packages and success stories'],
          status: 'needs-update',
          priority: 'high'
        },
        {
          name: 'Student Clubs',
          path: '/student-services/*-club',
          dummyData: ['Generic club activities', 'Sample events'],
          realDataNeeded: ['Current club activities', 'Event photographs', 'Member testimonials and achievements'],
          status: 'partial',
          priority: 'medium'
        },
        {
          name: 'Committees & Cells',
          path: '/student-services/*-cell',
          dummyData: ['Template committee structures', 'Generic policies'],
          realDataNeeded: ['Actual committee members', 'Specific policies and procedures', 'Contact information'],
          status: 'partial',
          priority: 'medium'
        }
      ]
    },
    {
      section: 'Faculty Data',
      pages: [
        {
          name: 'Faculty Profiles',
          path: 'All department pages',
          dummyData: ['Template faculty cards', 'Sample qualifications', 'Stock photos'],
          realDataNeeded: ['Complete faculty database', 'Real photographs', 'Detailed qualifications and research interests'],
          status: 'needs-complete-overhaul',
          priority: 'high'
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'complete': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'needs-update': return 'bg-orange-100 text-orange-800';
      case 'needs-complete-overhaul': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'complete': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const filteredData = pageDataInventory.map(section => ({
    ...section,
    pages: section.pages.filter(page => {
      const matchesSearch = page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           page.path.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || page.status === filterStatus;
      return matchesSearch && matchesFilter;
    })
  })).filter(section => section.pages.length > 0);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Database className="w-20 h-20 mx-auto mb-6 text-white/80" />
              <h1 className="text-4xl font-bold mb-4">Data Inventory & Content Audit</h1>
              <p className="text-xl text-white/90">
                Comprehensive overview of current dummy data and real data requirements for all pages
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search pages..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={filterStatus === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterStatus('all')}
                  >
                    All
                  </Button>
                  <Button
                    variant={filterStatus === 'needs-update' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterStatus('needs-update')}
                  >
                    Needs Update
                  </Button>
                  <Button
                    variant={filterStatus === 'partial' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterStatus('partial')}
                  >
                    Partial
                  </Button>
                  <Button
                    variant={filterStatus === 'needs-complete-overhaul' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterStatus('needs-complete-overhaul')}
                  >
                    Critical
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Inventory */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8">
                {filteredData.map((section, sectionIndex) => (
                  <Card key={sectionIndex} className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                      <FileText className="w-6 h-6 mr-3 text-primary" />
                      {section.section}
                    </h2>
                    
                    <div className="space-y-6">
                      {section.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="border rounded-lg p-6 bg-background">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{page.name}</h3>
                              <p className="text-sm text-muted-foreground">{page.path}</p>
                            </div>
                            <div className="flex gap-2">
                              <Badge className={getPriorityColor(page.priority)}>
                                {page.priority} priority
                              </Badge>
                              <Badge className={getStatusColor(page.status)}>
                                {getStatusIcon(page.status)}
                                <span className="ml-1">{page.status.replace('-', ' ')}</span>
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-red-600 mb-3">Current Dummy Data:</h4>
                              <ul className="space-y-2">
                                {page.dummyData.map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-green-600 mb-3">Real Data Required:</h4>
                              <ul className="space-y-2">
                                {page.realDataNeeded.map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Summary Stats */}
              <Card className="p-8 mt-8 bg-gradient-to-r from-primary/5 to-primary-dark/5">
                <h3 className="text-xl font-bold text-foreground mb-6">Content Status Summary</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {pageDataInventory.reduce((count, section) => 
                        count + section.pages.filter(page => page.status === 'needs-complete-overhaul').length, 0
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">Critical Updates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {pageDataInventory.reduce((count, section) => 
                        count + section.pages.filter(page => page.status === 'needs-update').length, 0
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">Needs Update</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      {pageDataInventory.reduce((count, section) => 
                        count + section.pages.filter(page => page.status === 'partial').length, 0
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">Partially Complete</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {pageDataInventory.reduce((count, section) => 
                        count + section.pages.filter(page => page.status === 'complete').length, 0
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                </div>
              </Card>

              {/* Action Items */}
              <Card className="p-8 mt-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Recommended Action Plan</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-red-800">High Priority Items</h4>
                      <p className="text-sm text-red-700">Focus on faculty profiles, placement data, fee structure, and admission guidelines first.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Medium Priority Items</h4>
                      <p className="text-sm text-yellow-700">Update infrastructure details, club activities, and scholarship information.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-blue-800">Ongoing Maintenance</h4>
                      <p className="text-sm text-blue-700">Regular updates to news, events, and dynamic content.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </LanguageProvider>
  );
};

export default DataInventory;