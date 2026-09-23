
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { BookOpen, Download, Users, Clock, Brain } from 'lucide-react';

const MScProspectus = () => {
  return (
    <AdmissionsLayout pageTitle="MSc Prospectus" breadcrumbPath="MSc Prospectus" category="Admissions">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Brain className="w-20 h-20 text-logo-blue mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-logo-navy mb-4">MSc Psychology</h2>
              <p className="text-lg text-gray-700">
                Comprehensive prospectus for the Master of Science program in Psychology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <Clock className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">Duration</h3>
                <p className="text-gray-600">2 Years (4 Semesters)</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">Intake</h3>
                <p className="text-gray-600">40 Students</p>
              </Card>
              <Card className="p-6 text-center">
                <BookOpen className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">Eligibility</h3>
                <p className="text-gray-600">BA/BSc Psychology (55%)</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Specializations Offered</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-logo-navy mb-3">Clinical Psychology</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Abnormal Psychology</li>
                    <li>• Psychopathology</li>
                    <li>• Therapeutic Interventions</li>
                    <li>• Assessment and Diagnosis</li>
                    <li>• Clinical Practicum</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-logo-navy mb-3">Counseling Psychology</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Counseling Theories and Techniques</li>
                    <li>• Group Therapy</li>
                    <li>• Family and Marriage Counseling</li>
                    <li>• Career Guidance</li>
                    <li>• Supervised Practice</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Research Opportunities</h3>
              <div className="space-y-4 text-gray-700">
                <p>• Access to state-of-the-art psychology laboratory</p>
                <p>• Opportunity to work on research projects with faculty</p>
                <p>• Collaboration with mental health organizations</p>
                <p>• Publication opportunities in academic journals</p>
                <p>• Participation in national and international conferences</p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white text-center">
              <Download className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Download MSc Prospectus</h3>
              <p className="mb-6">
                Get detailed information about the MSc Psychology program, including specializations, 
                research opportunities, faculty expertise, and career pathways.
              </p>
              <button className="bg-white text-logo-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download PDF (7.8 MB)
              </button>
            </Card>
          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default MScProspectus;
