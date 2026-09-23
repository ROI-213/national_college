import React from 'react';
import { ResearchLayout } from '@/components/layout/ResearchLayout';
import { Card } from '@/components/ui/card';
import { Award, Trophy, Users, Medal, Star, GraduationCap } from 'lucide-react';

const StudentAchievements = () => {
  return (
    <ResearchLayout pageTitle="Student Achievements" breadcrumbPath="Student Achievements">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our students consistently excel in academics, sports, cultural events, and research, bringing laurels to The National College across national and state-level platforms.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Achievement Categories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Trophy className="w-10 h-10 text-logo-blue mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Academic Excellence</h3>
                  <p className="text-sm text-muted-foreground">University rank holders, gold medalists, and scholarship recipients excelling in examinations.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Medal className="w-10 h-10 text-logo-blue mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Sports & Athletics</h3>
                  <p className="text-sm text-muted-foreground">State and national level achievements in hockey, cricket, athletics, and other sports.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Star className="w-10 h-10 text-logo-blue mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Cultural & Literary</h3>
                  <p className="text-sm text-muted-foreground">Winners of inter-collegiate competitions, cultural fests, and literary events.</p>
                </Card>
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Research & Innovation</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Award className="w-10 h-10 text-logo-navy mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Conference Presentations</h3>
                  <p className="text-sm text-muted-foreground">Students have presented papers at national and international academic conferences, earning recognition for original research.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <GraduationCap className="w-10 h-10 text-logo-navy mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Project Showcases</h3>
                  <p className="text-sm text-muted-foreground">Final-year projects recognized at inter-collegiate science exhibitions and tech fests for innovation and practical application.</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <Trophy className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">100+</h3>
                  <p className="text-sm text-muted-foreground">Awards won in inter-collegiate competitions</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <Users className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">20+</h3>
                  <p className="text-sm text-muted-foreground">University rank holders in recent years</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                  <Medal className="w-10 h-10 text-logo-navy mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">50+</h3>
                  <p className="text-sm text-muted-foreground">State & national sports achievements</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ResearchLayout>
  );
};

export default StudentAchievements;
