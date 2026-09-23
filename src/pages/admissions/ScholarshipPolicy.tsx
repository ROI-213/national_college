import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import {
  Target, Heart, Users, Trophy, GraduationCap,
  CheckCircle, AlertTriangle, Award, BookOpen, Star, Medal,
  FileText, Upload, ClipboardCheck, UserCheck, Bell
} from 'lucide-react';

const objectives = [
  { icon: Target, text: 'Encourage academic excellence and merit.' },
  { icon: Heart, text: 'Support students from economically weaker sections.' },
  { icon: Users, text: 'Promote equal educational opportunities.' },
  { icon: Trophy, text: 'Recognize achievements in academics, sports, and cultural activities.' },
  { icon: GraduationCap, text: 'Reduce financial barriers to higher education.' },
];

const scholarshipTypes = [
  {
    icon: Award,
    title: 'Merit-Based Scholarship',
    description: 'Awarded to students with outstanding academic performance.',
  },
  {
    icon: Heart,
    title: 'Need-Based Scholarship',
    description: 'Provided to students from economically disadvantaged backgrounds.',
  },
  {
    icon: BookOpen,
    title: 'Management Scholarship',
    description: 'Offered at the discretion of the management based on merit and institutional contribution.',
  },
  {
    icon: Medal,
    title: 'Special Category Scholarship',
    description: 'For students excelling in sports, NCC, NSS, or cultural achievements.',
  },
];

const eligibilityCriteria = [
  'Must be a bonafide student of the institution.',
  'Must meet minimum academic performance requirements.',
  'Family income should fall within prescribed limits (for need-based scholarships).',
  'Good conduct and attendance record.',
  'Submission of required supporting documents.',
];

const applicationSteps = [
  { icon: FileText, step: 'Fill out the online scholarship application form.' },
  { icon: Upload, step: 'Upload required supporting documents.' },
  { icon: ClipboardCheck, step: 'Application review by Scholarship Committee.' },
  { icon: UserCheck, step: 'Final approval by Management.' },
  { icon: Bell, step: 'Notification to selected students.' },
];

const termsConditions = [
  'Scholarship is subject to annual review.',
  'Students must maintain required academic performance.',
  'Misrepresentation of information will lead to cancellation.',
  'Management reserves the right to amend policy.',
];

const ScholarshipPolicy = () => {
  return (
    <AdmissionsLayout pageTitle="Scholarship Policy" breadcrumbPath="Scholarship Policy" category="Admissions">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">

            {/* Introduction */}
            <div className="text-center">
              <Star className="w-14 h-14 text-logo-blue mx-auto mb-5" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The Scholarship Policy of the institution is designed to promote academic excellence and provide financial assistance to deserving students. Through merit-based and need-based scholarships, the institution aims to ensure inclusive and equitable access to quality education.
              </p>
            </div>

            {/* Objectives */}
            <div>
              <h2 className="text-2xl font-bold text-logo-navy mb-8 text-center">Objectives of the Scholarship</h2>
              <div className="grid gap-4 max-w-2xl mx-auto">
                {objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-card border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-logo-blue/10 flex items-center justify-center flex-shrink-0">
                      <obj.icon className="w-5 h-5 text-logo-blue" />
                    </div>
                    <p className="text-foreground pt-1.5">{obj.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of Scholarships */}
            <div>
              <h2 className="text-2xl font-bold text-logo-navy mb-8 text-center">Types of Scholarships</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {scholarshipTypes.map((s, i) => (
                  <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-logo-blue flex items-center justify-center flex-shrink-0">
                        <s.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-logo-navy">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{s.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div>
              <h2 className="text-2xl font-bold text-logo-navy mb-8 text-center">Eligibility Criteria</h2>
              <Card className="p-8">
                <div className="space-y-4">
                  {eligibilityCriteria.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">{c}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Application Process */}
            <div>
              <h2 className="text-2xl font-bold text-logo-navy mb-8 text-center">Application Process</h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                {applicationSteps.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-card border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-logo-navy text-white flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex items-center gap-3">
                      <s.icon className="w-5 h-5 text-logo-blue flex-shrink-0" />
                      <p className="text-foreground">{s.step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms & Conditions */}
            <div>
              <h2 className="text-2xl font-bold text-logo-navy mb-8 text-center">Terms & Conditions</h2>
              <Card className="p-8 border-l-4 border-l-yellow-500">
                <div className="space-y-4">
                  {termsConditions.map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">{t}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default ScholarshipPolicy;
