import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ArrowRight, GraduationCap, BookOpen, Award, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { FacultyCard } from './faculty/FacultyCard';
import { FacultyModal } from './faculty/FacultyModal';
import { facultyMembers } from './faculty/facultyData';
import type { Faculty } from './faculty/types';

export const FacultySection = () => {
  const navigate = useNavigate();
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  const departments = [...new Set(facultyMembers.map(faculty => faculty.department))];
  
  const filteredFaculty = activeTab === 'all' 
    ? facultyMembers 
    : facultyMembers.filter(faculty => faculty.department === activeTab);

  const openFacultyModal = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
  };

  const closeFacultyModal = () => {
    setSelectedFaculty(null);
  };

  const stats = [
    { icon: Users, value: "100+", label: "Faculty Members" },
    { icon: BookOpen, value: "200+", label: "Publications" },
    { icon: Award, value: "25+", label: "Awards Won" }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-5 py-2.5 rounded-full border border-primary/20 mb-6">
            <Sparkles className="text-primary" size={18} />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Expert Educators</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
            Our <span className="text-primary">Faculty</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished faculty members bringing expertise and passion to education.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-5 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-primary-foreground mx-auto mb-3 group-hover:scale-110 transition-transform">
                <stat.icon size={22} />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Department Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-card rounded-2xl p-2 shadow-lg border border-border h-auto flex-wrap justify-center gap-2">
              <TabsTrigger 
                value="all" 
                className="px-5 py-2.5 rounded-xl font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
              >
                All Faculty
              </TabsTrigger>
              {departments.map((department) => (
                <TabsTrigger 
                  key={department} 
                  value={department}
                  className="px-5 py-2.5 rounded-xl font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
                >
                  {department}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Faculty Content */}
          <TabsContent value={activeTab} className="mt-0">
            <ScrollArea className="w-full">
              <div className="flex space-x-6 pb-6">
                {filteredFaculty.map((faculty) => (
                  <FacultyCard
                    key={faculty.id}
                    faculty={faculty}
                    onClick={openFacultyModal}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="bg-muted rounded-full" />
            </ScrollArea>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button onClick={() => navigate('/about/faculties')} className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all shadow-lg hover:shadow-xl mx-auto">
            <span>View All Faculty</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Faculty Modal */}
        <FacultyModal
          faculty={selectedFaculty}
          onClose={closeFacultyModal}
        />
      </div>
    </section>
  );
};