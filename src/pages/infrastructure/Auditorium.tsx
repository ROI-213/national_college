
import React from 'react';
import { InfrastructureLayout } from '../../components/layout/InfrastructureLayout';
import { Card } from '../../components/ui/card';
import { Volume2, Lightbulb, Users, Camera } from 'lucide-react';
import auditoriumImg from '@/assets/auditorium-page.jpg';

const Auditorium = () => {
  return (
    <InfrastructureLayout pageTitle="Mini Auditorium" breadcrumbPath="Mini Auditorium">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <img 
                src={auditoriumImg}
                alt="Main Auditorium"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-logo-navy mb-6">State-of-the-Art Auditorium</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our main auditorium hosts major events, conferences, and cultural programs with world-class facilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Users className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2"><h3 className="text-lg font-semibold text-logo-navy mb-2">200 Seating</h3></h3>
                <p className="text-gray-600">Comfortable theater-style seating</p>
              </Card>
              <Card className="p-6 text-center">
                <Volume2 className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">Advanced Sound</h3>
                <p className="text-gray-600">Professional audio system</p>
              </Card>
              <Card className="p-6 text-center">
                <Lightbulb className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">Stage Lighting</h3>
                <p className="text-gray-600">Professional lighting setup</p>
              </Card>
              <Card className="p-6 text-center">
                <Camera className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">AV Equipment</h3>
                <p className="text-gray-600">HD projection and recording</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </InfrastructureLayout>
  );
};

export default Auditorium;
