
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Brain, Heart, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const PsychologyDepartment = () => {
  return (
    <AcademicsLayout pageTitle="PG Psychology Department" breadcrumbPath="Psychology" category="Departments">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Understanding Human Behavior</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our Psychology department offers comprehensive programs in clinical, counseling, and applied psychology, 
              preparing students for careers in mental health and human services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Brain, title: 'Cognitive Psychology', description: 'Understanding mental processes and behavior' },
              { icon: Heart, title: 'Clinical Psychology', description: 'Mental health assessment and treatment' },
              { icon: Users, title: 'Social Psychology', description: 'Group dynamics and social behavior' },
              { icon: BookOpen, title: 'Research Methods', description: 'Psychological research and statistics' }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 space-x-4">
            <Link 
              to="/academics/postgraduate/msc-psychology"
              className="px-6 py-3 bg-logo-blue text-white rounded-lg hover:bg-logo-navy transition-colors font-semibold"
            >
              MSc Psychology Program
            </Link>
            <Link 
              to="/academics/certificate/cbt"
              className="px-6 py-3 bg-logo-navy text-white rounded-lg hover:bg-logo-blue transition-colors font-semibold"
            >
              CBT Certification
            </Link>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default PsychologyDepartment;
