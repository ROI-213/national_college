
import React from 'react';
import { InfrastructureLayout } from '../../components/layout/InfrastructureLayout';
import { Card } from '../../components/ui/card';
import { Dumbbell, Target, Trophy, Users, Medal, Timer, Flame, Crown } from 'lucide-react';

const SportsFacilities = () => {
  const indoorFacilities = [
    { icon: Target, title: 'Badminton', description: 'Well-maintained indoor badminton courts with professional-grade nets and lighting for competitive play.' },
    { icon: Timer, title: 'Table Tennis', description: 'Dedicated table tennis area equipped with tournament-standard tables for practice and inter-college matches.' },
    { icon: Dumbbell, title: 'Gymnasium', description: 'Fully equipped gymnasium with modern fitness equipment, cardio machines, and professional trainers.' },
    { icon: Crown, title: 'Chess', description: 'Quiet indoor chess room encouraging strategic thinking and participation in district and state-level tournaments.' },
  ];

  const outdoorFacilities = [
    { icon: Trophy, title: 'Cricket Ground', description: 'Full-size cricket ground with practice nets, professional pitch, and pavilion for spectators.' },
    { icon: Flame, title: 'Basketball Court', description: 'Standard basketball court with synthetic flooring and floodlights for evening practice sessions.' },
    { icon: Users, title: 'Volleyball Court', description: 'Outdoor volleyball court with regulation markings, used for inter-departmental and inter-college competitions.' },
    { icon: Medal, title: 'Athletics Track', description: 'Running track with lanes for sprinting and relay events, supporting annual sports day and inter-college athletics.' },
  ];

  const stats = [
    { value: '15+', label: 'State-Level Participations' },
    { value: '30+', label: 'Trophies Won' },
    { value: '8', label: 'Sports Disciplines' },
    { value: '200+', label: 'Active Athletes' },
  ];

  return (
    <InfrastructureLayout pageTitle="Sports Facilities" breadcrumbPath="Sports Facilities" subtitle="Building Strength, Discipline & Team Spirit">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-logo-navy mb-6">Sports in Holistic Education</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                At The National College, sports are an integral part of holistic education. We believe that physical fitness, sportsmanship, and team spirit are as important as academic excellence. Our well-maintained indoor and outdoor facilities encourage students to discover their athletic potential, build discipline, and develop leadership skills that extend well beyond the playing field.
              </p>
            </div>

            {/* Indoor Facilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Indoor Facilities</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {indoorFacilities.map((facility, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <facility.icon size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-logo-navy mb-2">{facility.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Outdoor Facilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Outdoor Facilities</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {outdoorFacilities.map((facility, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <facility.icon size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-logo-navy mb-2">{facility.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-r from-logo-navy to-logo-blue text-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Sports Achievements at a Glance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-200 mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </InfrastructureLayout>
  );
};

export default SportsFacilities;
