import React from 'react';
import { ResearchLayout } from '@/components/layout/ResearchLayout';
import { Card } from '@/components/ui/card';
import { FlaskConical, Target, Users, TrendingUp, BookOpen, Handshake } from 'lucide-react';

const ResearchActivities = () => {
  return (
    <ResearchLayout pageTitle="R&D Activities" breadcrumbPath="R&D Activities">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Overview */}
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The National College fosters a culture of innovation and research across all academic disciplines. Our R&D initiatives aim to bridge the gap between theoretical knowledge and practical application, contributing to societal growth and academic advancement.
              </p>
            </div>

            {/* Objectives */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Objectives</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Target className="w-10 h-10 text-logo-blue mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Promote Innovation</h3>
                  <p className="text-sm text-muted-foreground">Encourage faculty and students to undertake original research that addresses real-world challenges.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <FlaskConical className="w-10 h-10 text-logo-blue mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Interdisciplinary Research</h3>
                  <p className="text-sm text-muted-foreground">Foster collaboration across departments to tackle complex, multidisciplinary research problems.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <TrendingUp className="w-10 h-10 text-logo-blue mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Academic Excellence</h3>
                  <p className="text-sm text-muted-foreground">Strengthen the institution's research output through funded projects, publications, and patents.</p>
                </Card>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Focus Areas</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Applied Sciences', desc: 'Research in Physics, Chemistry, Botany, Zoology, and Electronics with lab-based experimentation.' },
                  { title: 'Computer Science & IT', desc: 'AI, Machine Learning, IoT, Cyber Security, and Data Analytics research projects.' },
                  { title: 'Social Sciences', desc: 'Studies in Sociology, Political Science, Economics, and community development research.' },
                  { title: 'Commerce & Management', desc: 'Research on financial markets, entrepreneurship, and organizational behavior.' },
                  { title: 'Language & Literature', desc: 'Folklore studies, literary criticism, and linguistic research across Kannada, Hindi, English, and Sanskrit.' },
                  { title: 'Environmental Studies', desc: 'Sustainable development, climate impact research, and biodiversity studies.' },
                ].map((area, idx) => (
                  <Card key={idx} className="p-5 hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Outcomes & Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <BookOpen className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">50+</h3>
                  <p className="text-sm text-muted-foreground">Research papers published in national & international journals</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <Users className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">30+</h3>
                  <p className="text-sm text-muted-foreground">Faculty members actively engaged in research activities</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <Handshake className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">10+</h3>
                  <p className="text-sm text-muted-foreground">Collaborative research partnerships with industry & institutions</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ResearchLayout>
  );
};

export default ResearchActivities;
