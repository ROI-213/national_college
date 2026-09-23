
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Camera, Mic, Monitor, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const JournalismDepartment = () => {
  return (
    <AcademicsLayout pageTitle="PG Journalism & Mass Communication" breadcrumbPath="Journalism" category="Departments">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Media Excellence & Communication</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our Journalism and Mass Communication department prepares students for careers in media, 
              communication, and digital journalism with state-of-the-art facilities and industry connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Camera, title: 'Video Production', description: 'Professional video and documentary making' },
              { icon: Mic, title: 'Radio Journalism', description: 'Broadcasting and audio production' },
              { icon: Monitor, title: 'Digital Media', description: 'Online journalism and social media' },
              { icon: Newspaper, title: 'Print Media', description: 'Traditional journalism and reporting' }
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
              to="/academics/postgraduate/ma-journalism"
              className="px-6 py-3 bg-logo-blue text-white rounded-lg hover:bg-logo-navy transition-colors font-semibold"
            >
              MA Journalism Program
            </Link>
            <Link 
              to="/academics/certificate/film-making"
              className="px-6 py-3 bg-logo-navy text-white rounded-lg hover:bg-logo-blue transition-colors font-semibold"
            >
              Film Making Course
            </Link>
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default JournalismDepartment;
