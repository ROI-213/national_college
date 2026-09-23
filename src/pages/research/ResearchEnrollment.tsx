import React from 'react';
import { ResearchLayout } from '@/components/layout/ResearchLayout';
import { Card } from '@/components/ui/card';
import { GraduationCap, ClipboardList, CheckCircle, Users, BookOpen, TrendingUp } from 'lucide-react';

const ResearchEnrollment = () => {
  return (
    <ResearchLayout pageTitle="Research Enrollment" breadcrumbPath="Enrollment">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The National College offers research enrollment opportunities for students and faculty seeking to pursue Ph.D. and M.Phil. programs under the guidance of experienced research supervisors affiliated with Bengaluru University.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Enrollment Process</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <ClipboardList className="w-10 h-10 text-logo-blue mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Application</h3>
                  <p className="text-sm text-muted-foreground">Submit research proposal along with academic credentials to the Research Promotion Cell for initial screening.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <GraduationCap className="w-10 h-10 text-logo-blue mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Eligibility</h3>
                  <p className="text-sm text-muted-foreground">Candidates must hold a relevant postgraduate degree with minimum 55% marks and qualify NET/KSET (for Ph.D.).</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-10 h-10 text-logo-blue mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Registration</h3>
                  <p className="text-sm text-muted-foreground">Upon approval, candidates are registered with Bengaluru University under the supervision of approved research guides.</p>
                </Card>
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Programs Offered</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <BookOpen className="w-10 h-10 text-logo-navy mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Ph.D. Programs</h3>
                  <p className="text-sm text-muted-foreground">Doctoral research programs available in Computer Science, Sociology, Kannada, Political Science, and Botany under Bengaluru University guidelines.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <GraduationCap className="w-10 h-10 text-logo-navy mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">M.Phil. Programs</h3>
                  <p className="text-sm text-muted-foreground">Master of Philosophy programs for advanced study and research preparation across select departments.</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Enrollment Statistics</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <Users className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">15+</h3>
                  <p className="text-sm text-muted-foreground">Active research scholars enrolled</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <BookOpen className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">5</h3>
                  <p className="text-sm text-muted-foreground">Departments offering research programs</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <TrendingUp className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">10+</h3>
                  <p className="text-sm text-muted-foreground">Ph.D. degrees awarded in last 5 years</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ResearchLayout>
  );
};

export default ResearchEnrollment;
