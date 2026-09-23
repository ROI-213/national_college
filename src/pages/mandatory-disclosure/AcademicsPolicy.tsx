import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FileText, Download, Calendar, Users, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const AcademicsPolicy = () => {
  const policies = [
    {
      title: "Academic Assessment Policy",
      description: "Guidelines for student evaluation, grading systems, and assessment procedures",
      lastUpdated: "March 2024",
      category: "Assessment"
    },
    {
      title: "Admission Policy",
      description: "Comprehensive admission criteria, procedures, and guidelines for all programs",
      lastUpdated: "February 2024",
      category: "Admissions"
    },
    {
      title: "Academic Calendar Policy",
      description: "Official academic calendar with important dates and deadlines",
      lastUpdated: "January 2024",
      category: "Calendar"
    },
    {
      title: "Examination Policy",
      description: "Rules and regulations governing conduct of examinations",
      lastUpdated: "March 2024",
      category: "Examinations"
    },
    {
      title: "Research Policy",
      description: "Guidelines for research activities, ethics, and publication",
      lastUpdated: "February 2024",
      category: "Research"
    },
    {
      title: "Student Progression Policy",
      description: "Rules for promotion, detention, and academic progression",
      lastUpdated: "January 2024",
      category: "Progression"
    }
  ];

  const academicGuidelines = [
    "Minimum 75% attendance required for examination eligibility",
    "Continuous assessment throughout the semester",
    "Fair and transparent evaluation process",
    "Regular feedback and academic support",
    "Grievance redressal mechanism for academic issues",
    "Quality assurance in teaching and learning"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-foreground to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Academic Policy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive academic policies and guidelines governing teaching, learning, and assessment at National College
          </p>
        </div>
      </section>

      {/* Academic Policies Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Policies & Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {policies.map((policy, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{policy.category}</Badge>
                    <Calendar size={16} className="text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{policy.title}</CardTitle>
                  <CardDescription>{policy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Updated: {policy.lastUpdated}
                    </span>
                    <Button size="sm" variant="outline">
                      <Download size={14} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Academic Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <GraduationCap className="mr-3 text-primary" size={28} />
                  Academic Guidelines
                </CardTitle>
                <CardDescription>
                  Key principles governing academic activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {academicGuidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{guideline}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Award className="mr-3 text-primary" size={28} />
                  Quality Assurance
                </CardTitle>
                <CardDescription>
                  Our commitment to academic excellence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">NAAC Accreditation</h4>
                    <p className="text-muted-foreground text-sm">
                      A+ Grade accreditation ensures highest quality standards
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                    <p className="text-muted-foreground text-sm">
                      Regular review and enhancement of academic processes
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Faculty Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Ongoing training and development for academic staff
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="mt-16 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-3 text-primary" size={28} />
                Academic Support
              </CardTitle>
              <CardDescription>
                Contact information for academic queries and support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Academic Office</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    📧 academics@nationalcollege.edu.in
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📞 +91 (80) 2663 0845
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Controller of Examinations</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    📧 examinations@nationalcollege.edu.in
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📞 +91 (80) 2663 2518
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Student Affairs</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    📧 students@nationalcollege.edu.in
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📞 +91 (80) 6603 0200
                  </p>
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

export default AcademicsPolicy;