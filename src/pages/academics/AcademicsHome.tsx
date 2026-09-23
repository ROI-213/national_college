
import React from 'react';
import { AcademicsLayout } from '../../components/layout/AcademicsLayout';
import { Card } from '../../components/ui/card';
import { BookOpen, Users, Award, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademicsHome = () => {
  return (
    <AcademicsLayout pageTitle="Academics" breadcrumbPath="Overview" category="Academics">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Academic Excellence</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our comprehensive academic programs designed to prepare students for successful careers 
              and lifelong learning through innovative teaching and industry connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Link to="/academics/departments">
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-3">Departments</h3>
                <p className="text-gray-600">Explore our academic departments and faculty expertise</p>
              </Link>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Link to="/academics/graduate">
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-3">UG Programs (Under SEP)</h3>
                <p className="text-gray-600">Undergraduate degree programs for career foundation</p>
              </Link>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Link to="/academics/postgraduate">
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-3">Post Graduate Programs</h3>
                <p className="text-gray-600">Advanced studies for specialized expertise</p>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default AcademicsHome;
