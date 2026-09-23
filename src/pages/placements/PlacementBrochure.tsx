import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { FileText, Download, Eye } from 'lucide-react';

const PlacementBrochure = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full mb-8">
                <FileText className="w-5 h-5 mr-2" />
                <span className="font-medium">Recruitment Information</span>
              </div>
              <h1 className="text-5xl font-bold mb-6">Placement Brochure</h1>
              <p className="text-xl leading-relaxed mb-8 opacity-90">
                Comprehensive information about our students, programs, and placement process for recruiters.
              </p>
            </div>
          </div>
        </section>

        {/* Brochure Downloads */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Download Brochures</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Complete Placement Brochure 2024-25</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive brochure with student profiles, course details, and placement statistics
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Department-wise Brochures</h3>
                    <p className="text-gray-600 mb-6">
                      Specialized brochures for different departments and courses
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download All
                      </Button>
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View List
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Brochure Content Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">What's Inside Our Brochure</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">College Overview</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Institution history and achievements</li>
                    <li>• NAAC A accreditation details</li>
                    <li>• Infrastructure and facilities</li>
                    <li>• Faculty expertise</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Academic Programs</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Course curriculum details</li>
                    <li>• Department strengths</li>
                    <li>• Research opportunities</li>
                    <li>• Industry partnerships</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Student Information</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Graduating batch profiles</li>
                    <li>• Academic performance</li>
                    <li>• Skills and certifications</li>
                    <li>• Project work and internships</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default PlacementBrochure;