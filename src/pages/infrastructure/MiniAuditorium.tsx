
import React from 'react';
import { InfrastructureLayout } from '../../components/layout/InfrastructureLayout';
import { Card } from '../../components/ui/card';
import { Users, Mic, Monitor, Coffee } from 'lucide-react';
import mainAuditoriumImg from '@/assets/main-auditorium.jpg';

const MiniAuditorium = () => {
  return (
    <InfrastructureLayout pageTitle="Auditorium" breadcrumbPath="Auditorium">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <img 
                src={mainAuditoriumImg}
                alt="Main Auditorium"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-logo-navy mb-6">Grand Auditorium for Major Events</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our spacious main auditorium is the centerpiece for convocations, cultural festivals, conferences, and large-scale institutional events, accommodating audiences with professional AV and staging facilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Users className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">700 Seating</h3>
                <p className="text-gray-600">Spacious theater-style seating</p>
              </Card>
              <Card className="p-6 text-center">
                <Mic className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">PA System</h3>
                <p className="text-gray-600">Clear audio for presentations</p>
              </Card>
              <Card className="p-6 text-center">
                <Monitor className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">Projection</h3>
                <p className="text-gray-600">HD projector and screen</p>
              </Card>
              <Card className="p-6 text-center">
                <Coffee className="w-16 h-16 text-logo-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logo-navy mb-2">Refreshments</h3>
                <p className="text-gray-600">Tea/coffee service available</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </InfrastructureLayout>
  );
};

export default MiniAuditorium;
