import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Palette, Film, Monitor, Layers, Pen, Video, CheckCircle, GraduationCap, Briefcase, Target, BookOpen, Users } from 'lucide-react';

const highlights = [
  { icon: Layers, title: 'Graphic Design', description: 'UI/UX design, branding, typography, and digital illustration fundamentals.' },
  { icon: Palette, title: '2D & 3D Animation', description: 'Master character animation, motion graphics, and visual storytelling techniques.' },
  { icon: Monitor, title: 'Visual Effects (VFX)', description: 'Create stunning visual effects using industry-standard tools and workflows.' },
  { icon: Video, title: 'Game Design', description: 'Interactive media, game art, and real-time rendering technologies.' },
  { icon: Film, title: 'Film & Video Editing', description: 'Professional video editing, post-production, and cinematic techniques.' },
  { icon: Pen, title: 'Storyboarding', description: 'Concept art, scriptwriting, and narrative design for animation projects.' },
];

const whyChoose = [
  { icon: CheckCircle, text: 'Industry-standard software training (Maya, After Effects, Premiere Pro)' },
  { icon: BookOpen, text: 'Portfolio-based learning with real-world projects' },
  { icon: Target, text: 'Exposure to film, gaming, and advertising industries' },
  { icon: Users, text: 'Faculty with professional animation and media experience' },
  { icon: GraduationCap, text: 'Pathway to M.Sc Animation, Film Studies, and MFA programs' },
  { icon: Briefcase, text: 'Internship tie-ups with animation studios and media houses' },
];

const careers = [
  'Graphics Designer',
  '2D/3D Animator',
  'Motion Graphics',
  'VFX Artist',
  'Game Designer',
  'Video Editor',
];

const BScAnimation = () => {
  return (
    <AcademicsLayout pageTitle="B.Sc. Animation" breadcrumbPath="B.Sc. Animation" category="Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The B.Sc. Animation program blends creativity with technology, equipping students with professional skills in 2D/3D animation, visual effects, graphic design, and multimedia production. This hands-on program prepares graduates for dynamic careers in the rapidly growing animation, film, and gaming industries.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Program Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-logo-blue rounded-full flex items-center justify-center shrink-0">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-logo-navy">{item.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose B.Sc. Animation?</h2>
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

export default BScAnimation;
