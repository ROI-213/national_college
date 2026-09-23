
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { BookOpen, Download, FileText, Calendar } from 'lucide-react';

const MainProspectus = () => {
  const prospectusFeatures = [
    'Complete course information and curriculum',
    'Admission procedures and requirements',
    'Fee structure and payment options',
    'Campus facilities and infrastructure',
    'Faculty profiles and expertise',
    'Student services and support systems',
    'Academic calendar and important dates',
    'Placement statistics and career guidance'
  ];

  return (
    <AdmissionsLayout pageTitle="Main Prospectus" breadcrumbPath="Main Prospectus" category="Admissions">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <BookOpen className="w-20 h-20 text-logo-blue mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-logo-navy mb-4">College Prospectus 2024-25</h2>
              <p className="text-lg text-gray-700">
                Comprehensive guide to all undergraduate and certificate programs offered at The National College.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-logo-navy mb-4 flex items-center">
                  <FileText className="mr-3 text-logo-blue" size={24} />
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {prospectusFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-logo-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-logo-navy mb-4 flex items-center">
                  <Calendar className="mr-3 text-logo-blue" size={24} />
                  Key Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Academic Year</h4>
                    <p className="text-gray-600">2024-25</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Total Pages</h4>
                    <p className="text-gray-600">150+ pages</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Programs Covered</h4>
                    <p className="text-gray-600">BA, B.Com, BBA, BCA & Certificate Courses</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Last Updated</h4>
                    <p className="text-gray-600">March 2024</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center space-y-6">
              <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
                <Download className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Download Prospectus</h3>
                <p className="mb-6">
                  Get the complete prospectus with detailed information about all our programs, 
                  admission procedures, and college facilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/Prospectus.pdf" download className="bg-white text-logo-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center">
                    Download PDF
                  </a>
                  <a href="/Prospectus.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-logo-navy transition-colors inline-block text-center">
                    View Online
                  </a>
                </div>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="text-lg font-semibold text-logo-navy mb-3">Need a Physical Copy?</h3>
                <p className="text-gray-700 mb-4">
                  Visit our admissions office to collect a printed copy of the prospectus or request it by mail.
                </p>
                <div className="text-sm text-gray-600">
                  <p>Admissions Office: Ground Floor, Main Building</p>
                  <p>Phone: +91 80 6603 0200</p>
                  <p>Email: admissions@nationalcollege.edu.in</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default MainProspectus;
