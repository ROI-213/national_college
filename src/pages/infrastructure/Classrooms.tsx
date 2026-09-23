
import React from 'react';
import { InfrastructureLayout } from '../../components/layout/InfrastructureLayout';
import { Card } from '../../components/ui/card';
import { Monitor, Wifi, Users, Lightbulb, Volume2, Presentation, Wind, ScreenShare } from 'lucide-react';

const Classrooms = () => {
  const features = [
    { icon: Monitor, title: 'ICT-Enabled Classrooms', description: 'All classrooms are equipped with Information and Communication Technology tools, enabling digital-first teaching methods and interactive learning.' },
    { icon: Volume2, title: 'Audio-Visual Systems', description: 'High-quality projectors, speakers, and display systems ensure clear visibility and audibility for every student in the room.' },
    { icon: Users, title: 'Spacious Seating', description: 'Ergonomically designed seating arrangements accommodate large batches comfortably while maintaining adequate personal space.' },
    { icon: Wifi, title: 'Wi-Fi Connectivity', description: 'High-speed wireless internet connectivity enables instant access to online resources, e-learning platforms, and digital libraries.' },
    { icon: Presentation, title: 'Interactive Teaching Tools', description: 'Smart boards and digital annotation tools allow faculty to deliver dynamic, engaging presentations and collaborative sessions.' },
    { icon: ScreenShare, title: 'Digital Boards', description: 'Modern digital display boards replace traditional chalk boards, offering crisp visuals and the ability to save and share lecture content.' },
    { icon: Wind, title: 'Ventilation & Lighting', description: 'Well-ventilated classrooms with natural lighting and energy-efficient LED systems create a comfortable, distraction-free environment.' },
    { icon: Lightbulb, title: 'Student-Friendly Layout', description: 'Thoughtfully designed layouts ensure clear sightlines to the teaching area and easy movement for both students and faculty.' },
  ];

  return (
    <InfrastructureLayout pageTitle="Classrooms" breadcrumbPath="Classrooms" subtitle="Modern Spaces for Meaningful Learning">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-logo-navy mb-6">Technology-Enhanced Learning Spaces</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our smart classrooms are at the heart of academic excellence at The National College. Designed with modern pedagogy in mind, each classroom features digital boards, high-quality audio-visual systems, comfortable seating, proper ventilation, and energy-efficient lighting — creating an ideal environment where students can focus, engage, and excel.
              </p>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-logo-navy text-center mb-12">Classroom Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Highlight Banner */}
            <div className="bg-gradient-to-r from-logo-navy to-logo-blue text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Learning Without Limits</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                With over 40 fully equipped smart classrooms spread across the campus, our infrastructure supports diverse teaching methodologies — from traditional lectures to flipped classrooms, group discussions, and multimedia presentations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </InfrastructureLayout>
  );
};

export default Classrooms;
