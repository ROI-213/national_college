
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { BookOpen, Download, Users, Shield, Calendar, MapPin } from 'lucide-react';

const StudentHandbook = () => {
  const handbookSections = [
    {
      icon: Users,
      title: 'Student Life',
      description: 'Campus culture, clubs, and activities'
    },
    {
      icon: Shield,
      title: 'Rules & Regulations',
      description: 'Code of conduct and disciplinary policies'
    },
    {
      icon: Calendar,
      title: 'Academic Calendar',
      description: 'Important dates and examination schedule'
    },
    {
      icon: MapPin,
      title: 'Campus Facilities',
      description: 'Library, labs, hostels, and other amenities'
    }
  ];

  return (
    <AdmissionsLayout pageTitle="Student Handbook" breadcrumbPath="Student Handbook" category="Admissions">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <BookOpen className="w-20 h-20 text-logo-blue mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-logo-navy mb-4">Student Handbook 2024-25</h2>
              <p className="text-lg text-gray-700">
                Your comprehensive guide to student life, policies, and procedures at The National College.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {handbookSections.map((section, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-logo-blue rounded-lg flex items-center justify-center mr-4">
                      <section.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-logo-navy">{section.title}</h3>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">What's Inside</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-logo-navy mb-3">Academic Information</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Course registration procedures</li>
                    <li>• Grading system and evaluation</li>
                    <li>• Academic integrity policies</li>
                    <li>• Examination guidelines</li>
                    <li>• Transfer and withdrawal procedures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-logo-navy mb-3">Student Services</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Counseling and support services</li>
                    <li>• Health and wellness programs</li>
                    <li>• Career guidance and placement</li>
                    <li>• Financial aid and scholarships</li>
                    <li>• Student grievance procedures</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white text-center">
              <Download className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Download Student Handbook</h3>
              <p className="mb-6">
                Essential reading for all students. Contains important policies, procedures, 
                and information about campus life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-logo-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Download PDF (5.2 MB)
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-logo-navy transition-colors">
                  View Online
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default StudentHandbook;
