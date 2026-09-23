import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Target, TrendingUp, Users, Calendar } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const IdpPage = () => {
  const developmentPhases = [
    {
      phase: 'Phase I',
      title: 'Infrastructure Development',
      period: '2024-2026',
      objectives: [
        'Modernize existing classrooms with smart technology',
        'Establish new research centers and laboratories',
        'Upgrade library facilities and digital resources',
        'Enhance campus connectivity and IT infrastructure'
      ]
    },
    {
      phase: 'Phase II',
      title: 'Academic Excellence',
      period: '2026-2028',
      objectives: [
        'Launch new interdisciplinary programs',
        'Strengthen faculty development initiatives',
        'Implement outcome-based education framework',
        'Establish industry-academia research partnerships'
      ]
    },
    {
      phase: 'Phase III',
      title: 'Global Recognition',
      period: '2028-2030',
      objectives: [
        'Achieve international accreditation standards',
        'Establish global student exchange programs',
        'Create innovation and entrepreneurship ecosystem',
        'Develop sustainable campus initiatives'
      ]
    }
  ];

  const keyIndicators = [
    { metric: 'Student Enrollment', current: '2,500+', target: '4,000+', icon: Users },
    { metric: 'Faculty-Student Ratio', current: '1:15', target: '1:12', icon: TrendingUp },
    { metric: 'Research Publications', current: '150/year', target: '300/year', icon: FileText },
    { metric: 'Industry Partnerships', current: '25+', target: '50+', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur px-6 py-3 rounded-full mb-6">
              <Target className="text-yellow-400" size={24} />
              <span className="font-semibold">Strategic Planning</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Institutional
              <span className="block text-yellow-400">Development Plan</span>
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Our comprehensive roadmap for institutional growth, academic excellence, 
              and sustainable development over the next decade.
            </p>
          </div>
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Performance Indicators</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tracking our progress towards institutional excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {keyIndicators.map((indicator, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <indicator.icon className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-lg">{indicator.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Current</p>
                      <p className="text-2xl font-bold text-primary">{indicator.current}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Target 2030</p>
                      <p className="text-2xl font-bold text-green-600">{indicator.target}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Development Phases</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our strategic development plan spans three comprehensive phases
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {developmentPhases.map((phase, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{phase.phase}</h3>
                      <p className="text-sm text-muted-foreground">{phase.period}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {phase.objectives.map((objective, objIndex) => (
                      <div key={objIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm leading-relaxed">{objective}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Alignment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Vision & Mission Alignment</CardTitle>
              <CardDescription className="text-lg">
                How our development plan aligns with institutional vision and mission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Strategic Priorities</h3>
                  <div className="space-y-4">
                    {[
                      'Academic Excellence & Innovation',
                      'Research & Development Focus',
                      'Industry-Academia Collaboration',
                      'Global Competency Development',
                      'Sustainable Campus Practices',
                      'Community Engagement'
                    ].map((priority, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Target size={16} className="text-primary" />
                        <span className="text-sm">{priority}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Download Documents</h3>
                  <div className="space-y-3">
                    {[
                      'IDP Master Document 2024-2030.pdf',
                      'Strategic Implementation Plan.pdf',
                      'Budget Allocation Framework.pdf',
                      'Progress Monitoring Guidelines.pdf'
                    ].map((doc, index) => (
                      <Button key={index} variant="outline" className="w-full justify-start">
                        <Download size={16} className="mr-2" />
                        {doc}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={16} className="text-primary" />
                      <span className="font-semibold">Next Review</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Annual review scheduled for June 2025
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IdpPage;