
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { Globe, Plane, FileText, DollarSign, Users, Phone } from 'lucide-react';

const InternationalAdmissions = () => {
  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
    'Singapore', 'UAE', 'Nepal', 'Bangladesh', 'Sri Lanka', 'Bhutan'
  ];

  const procedures = [
    {
      icon: FileText,
      title: 'Document Verification',
      description: 'Submit academic transcripts with equivalency certificate',
      details: ['Original academic certificates', 'English proficiency test scores', 'Passport copy']
    },
    {
      icon: Globe,
      title: 'Visa Assistance',
      description: 'Complete support for student visa application',
      details: ['Admission letter for visa', 'Documentation guidance', 'Embassy liaison']
    },
    {
      icon: DollarSign,
      title: 'Fee Structure',
      description: 'Special fee structure for international students',
      details: ['USD/EUR payment options', 'Installment facility', 'Scholarship opportunities']
    },
    {
      icon: Users,
      title: 'Student Support',
      description: 'Dedicated support for international students',
      details: ['Airport pickup service', 'Accommodation assistance', 'Cultural orientation']
    }
  ];

  return (
    <AdmissionsLayout pageTitle="International Admissions" breadcrumbPath="International Process" category="Admissions">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-logo-blue to-logo-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-logo-navy mb-4">Welcome International Students</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join our diverse academic community with students from over 15 countries. 
              We provide comprehensive support for international students throughout their academic journey.
            </p>
          </div>

          {/* Countries We Welcome */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-logo-navy mb-6 text-center">Countries We Welcome</h3>
            <Card className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {countries.map((country, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="w-3 h-3 bg-logo-blue rounded-full"></div>
                    <span className="text-gray-700">{country}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Admission Procedures */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-logo-navy mb-6 text-center">Admission Procedures</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {procedures.map((procedure, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-logo-blue rounded-lg flex items-center justify-center mr-4">
                      <procedure.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-logo-navy">{procedure.title}</h4>
                      <p className="text-gray-600 text-sm">{procedure.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {procedure.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Special Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Plane className="w-16 h-16 text-logo-blue mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-logo-navy mb-2">Airport Pickup</h4>
              <p className="text-gray-600">Complimentary airport pickup service for new international students</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-16 h-16 text-logo-blue mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-logo-navy mb-2">Buddy Program</h4>
              <p className="text-gray-600">Paired with local students to help with cultural adaptation</p>
            </Card>
            <Card className="p-6 text-center">
              <Phone className="w-16 h-16 text-logo-blue mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-logo-navy mb-2">24/7 Support</h4>
              <p className="text-gray-600">Round-the-clock assistance for international student needs</p>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
              <p className="mb-6">Our international admissions team is here to help you every step of the way.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">International Admissions Office</h4>
                  <p>Email: international@nationalcollege.edu.in</p>
                  <p>Phone: +91 80 6603 0200</p>
                  <p>WhatsApp: +91 98765 43210</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Office Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 9:00 AM - 2:00 PM IST</p>
                  <p>Emergency Support: 24/7</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default InternationalAdmissions;
