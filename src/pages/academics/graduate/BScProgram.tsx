import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Beaker, Atom, Cpu, Zap, Microscope, CircuitBoard, CheckCircle, GraduationCap, Briefcase, Target, BookOpen, Users } from 'lucide-react';

const specializations = [
  { icon: Beaker, title: 'Chemistry, Botany, Zoology', description: 'Study life sciences and chemistry with focus on biological systems, ecology, and organic chemistry.' },
  { icon: Atom, title: 'Physics, Chemistry, Mathematics', description: 'Classical science combination covering physical laws, chemical reactions, and mathematical analysis.' },
  { icon: Zap, title: 'Physics, Mathematics, Electronics', description: 'Blend of core physics, mathematical modeling, and electronic circuit design.' },
  { icon: Cpu, title: 'Physics, Mathematics, Computer Science', description: 'Combine computational thinking with physics and advanced mathematics.' },
  { icon: CircuitBoard, title: 'Electronics, Mathematics, Computer Science', description: 'Focus on hardware-software integration, embedded systems, and computational mathematics.' },
  { icon: Microscope, title: 'Physics, Electronics, Computer Science', description: 'Interdisciplinary approach connecting physics principles with electronics and computing.' },
];

const whyChoose = [
  { icon: CheckCircle, text: 'Six diverse subject combinations to match your interests' },
  { icon: BookOpen, text: 'Well-equipped laboratories for hands-on experimentation' },
  { icon: Target, text: 'Strong foundation for competitive exams and research careers' },
  { icon: Users, text: 'Experienced faculty with doctoral qualifications' },
  { icon: GraduationCap, text: 'Pathway to M.Sc, MCA, MBA, and research programs' },
  { icon: Briefcase, text: 'Industry visits and project-based learning' },
];

const careers = [
  'Research Scientist',
  'Data Analyst',
  'Lab Technician',
  'Software Developer',
  'Electronics Engineer',
  'Teaching & Academia',
  'Environmental Scientist',
  'Quality Analyst',
  'Automation & Robotics',
  'Semiconductor & VLSI',
  'Embedded Systems',
  'IoT',
];

const BScProgram = () => {
  return (
    <AcademicsLayout pageTitle="Bachelor of Science (B.Sc)" breadcrumbPath="B.Sc" category="Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The B.Sc program at National College provides rigorous scientific education across six subject combinations spanning life sciences, physical sciences, and computational disciplines. Students develop strong analytical and research skills through laboratory-intensive, application-oriented learning.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Subject Combinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-logo-blue rounded-full flex items-center justify-center shrink-0">
                    <spec.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-logo-navy">{spec.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{spec.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose B.Sc at National College?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon size={22} className="text-logo-blue shrink-0 mt-0.5" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Career Opportunities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {careers.map((c, i) => (
              <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-4 shadow-sm border">
                <Briefcase size={18} className="text-logo-blue shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default BScProgram;
