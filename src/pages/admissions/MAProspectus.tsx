
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { BookOpen, Download, Users, Clock } from 'lucide-react';

const MAProspectus = () => {
  return (
    <AdmissionsLayout pageTitle="MA Prospectus" breadcrumbPath="MA Prospectus" category="Admissions">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <BookOpen className="w-20 h-20 text-logo-blue mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-logo-navy mb-4">MA Journalism & Mass Communication</h2>
              <p className="text-lg text-gray-700">
                Detailed prospectus for the Master of Arts program in Journalism & Mass Communication.
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
                <p className="text-gray-600">60 Students</p>
              </Card>
              <Card className="p-6 text-center">
                <BookOpen className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">Eligibility</h3>
                <p className="text-gray-600">Bachelor's Degree (50%)</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Course Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-logo-navy mb-3">Semester 1 & 2</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Media Studies and Communication Theory</li>
                    <li>• Print Journalism and News Writing</li>
                    <li>• Radio and Television Production</li>
                    <li>• Digital Media and Online Journalism</li>
                    <li>• Media Law and Ethics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-logo-navy mb-3">Semester 3 & 4</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Advanced Reporting and Feature Writing</li>
                    <li>• Documentary Production</li>
                    <li>• Media Management and Marketing</li>
                    <li>• Research Methodology</li>
                    <li>• Dissertation Project</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white text-center">
              <Download className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Download MA Prospectus</h3>
              <p className="mb-6">
                Get detailed information about the MA Journalism & Mass Communication program, 
                including curriculum, faculty, facilities, and career prospects.
              </p>
              <button className="bg-white text-logo-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download PDF (8.2 MB)
              </button>
            </Card>
          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default MAProspectus;
