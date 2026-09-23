import React from 'react';
import { Award, Users, BookOpen, Star, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import councilDrSubrahmanya from '@/assets/council-dr-hn-subrahmanya.jpg';
import councilVenkatasivaReddy from '@/assets/council-v-venkatasiva-reddy.jpg';
import councilArunkumar from '@/assets/council-bs-arunkumar.jpg';
import councilDwarakanath from '@/assets/council-tallam-dwarakanath.jpg';
import councilSudhakar from '@/assets/council-sudhakar-esturi.jpg';
import councilMadhusudhan from '@/assets/council-yg-madhusudhan.jpg';
import councilManjunath from '@/assets/council-v-manjunath.jpg';

export const IntellectualCapital = () => {
  const leadership = [
    {
      name: "Dr. H. N. Subramanya",
      designation: "President",
      image: councilDrSubrahmanya,
    },
    {
      name: "Y. G. Madhusudan",
      designation: "Vice President",
      image: councilMadhusudhan,
    },
    {
      name: "V. Venkatasiva Reddy",
      designation: "Hon. Secretary, NES",
      image: councilVenkatasivaReddy,
    },
    {
      name: "B. S. Arun Kumar",
      designation: "Hon. Secretary, NES",
      image: councilArunkumar,
    },
    {
      name: "Tallam R. Dwarakanath",
      designation: "Hon. Treasurer",
      image: councilDwarakanath,
    },
    {
      name: "V. Manjunath",
      designation: "Associate Vice-President",
      image: councilManjunath,
    },
    {
      name: "Sudhakar Esturi",
      designation: "Joint Secretary",
      image: councilSudhakar,
    }
  ];

  const achievements = [
    { icon: Award, title: "Excellence Awards", count: "15+" },
    { icon: BookOpen, title: "Research Papers", count: "100+" },
    { icon: Star, title: "Patents Filed", count: "8" },
    { icon: Users, title: "Industry Partners", count: "50+" }
  ];

  return (
    <section className="py-12 lg:py-16 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Building2 className="text-primary" size={16} />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Leadership Excellence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Our <span className="text-primary">Management Committee</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders guiding our institution towards excellence
          </p>
        </div>

        {/* Leadership Grid - 4 on top, 3 centered on bottom (desktop) */}
        {(() => {
          const renderCard = (leader: typeof leadership[number], index: number) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden text-center"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-card">
                <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">{leader.name}</h4>
                <p className="text-primary text-xs font-medium leading-tight">{leader.designation}</p>
              </div>
            </div>
          );
          return (
            <div className="mb-12 max-w-5xl mx-auto space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {leadership.slice(0, 4).map(renderCard)}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
                {leadership.slice(4).map(renderCard)}
              </div>
            </div>
          );
        })()}

        {/* Achievements - Compact Inline */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 bg-card rounded-xl px-5 py-3 border border-border"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <achievement.icon className="text-primary" size={20} />
              </div>
              <div>
                <div className="text-xl font-bold text-primary">{achievement.count}</div>
                <div className="text-xs text-muted-foreground">{achievement.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Compact */}
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 text-center max-w-4xl mx-auto border border-primary/10">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Join Our <span className="text-primary">Legacy of Excellence</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of an institution led by visionaries committed to shaping the future through quality education.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/college-management" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center space-x-2 text-sm">
              <span>Discover Our Leadership</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
