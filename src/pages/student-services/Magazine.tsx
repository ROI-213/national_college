import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { BookOpen, PenTool, Image, Award, CheckCircle, FileText } from 'lucide-react';

const activities = [
  { icon: PenTool, title: 'Creative Writing', description: 'Short stories, poems, essays, and literary compositions by students and faculty.' },
  { icon: Image, title: 'Photography & Art', description: 'Visual storytelling through student photography, illustrations, and digital art.' },
  { icon: BookOpen, title: 'Academic Articles', description: 'Research summaries, departmental highlights, and scholarly contributions.' },
  { icon: FileText, title: 'Annual Publication', description: 'Comprehensive annual edition covering events, achievements, and campus life.' },
];

const Magazine = () => (
  <StudentServicesLayout pageTitle="Vartha Patrike / Magazine" breadcrumbPath="Magazine">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <BookOpen className="w-5 h-5 mr-2" />
            <span className="font-medium">Chronicling Campus Life</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Vartha Patrike is the official college magazine that captures the essence of campus life at The National College. It serves as a creative platform for students to express their literary, artistic, and journalistic talents while documenting the institution's academic and cultural journey.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Magazine Sections</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((a, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <a.icon className="w-6 h-6 text-logo-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-logo-navy mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm">{a.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Encourage creative writing among students', 'Document institutional achievements and milestones', 'Provide a platform for artistic expression', 'Foster a culture of literary appreciation', 'Showcase student and faculty accomplishments', 'Preserve the legacy of campus events and traditions'].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-logo-blue mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contribute to the Magazine</h2>
          <p className="text-xl mb-8 opacity-90">Share your stories, poems, and artwork with the college community.</p>
          <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Submit Your Work</Button>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default Magazine;
