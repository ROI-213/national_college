import React from 'react';
import { GraduationCap, ArrowRight, Calendar, FileText, CheckCircle2, Sparkles, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdmissionsSection = () => {
  const highlights = [
    { icon: Award, label: "NAAC A", sublabel: "Accredited" },
    { icon: Users, label: "90%", sublabel: "Placement Rate" },
    { icon: GraduationCap, label: "80+", sublabel: "Years Legacy" }
  ];

  const programs = ["B.A", "B.Sc", "B.Sc. Animation", "B.Com", "BBA", "BCA", "M.Com", "MCA"];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-5 py-2.5 rounded-full border border-primary/20 mb-6">
            <Sparkles className="text-primary" size={18} />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Excellence in Education</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Join Our <span className="text-primary">Legacy of Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin your journey towards a successful career at The National College
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-green-600 font-semibold text-sm">Admission Year 2026 - Now Open</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Shape Your Future With Us
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Applications are now open for undergraduate and postgraduate programs. 
                  Be part of our 80+ years of academic excellence at The National College.
                </p>
                
                {/* Programs Grid */}
                <div className="mb-8">
                  <p className="text-foreground font-semibold mb-3">Programs Available:</p>
                  <div className="flex flex-wrap gap-2">
                    {programs.map((program, idx) => (
                      <span 
                        key={idx}
                        className="bg-muted text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-border"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3 bg-muted/50 rounded-xl p-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">Deadline</div>
                      <div className="text-muted-foreground text-sm">June 30, 2026</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-muted/50 rounded-xl p-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">30+ Programs</div>
                      <div className="text-muted-foreground text-sm">UG & PG Courses</div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/admissions/online-application"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="/Prospectus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border-2 border-border hover:border-primary/30 text-foreground py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg"
                  >
                    <FileText size={18} className="text-primary" />
                    <span>Download Prospectus</span>
                  </a>
                </div>
              </div>
              
              {/* Right Stats - 2 columns */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary via-primary to-primary/90 p-8 lg:p-10 text-primary-foreground flex flex-col justify-center relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Why Choose Us?</h3>
                  
                  <div className="space-y-6">
                    {highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4 group">
                        <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{item.label}</div>
                          <div className="text-primary-foreground/80 text-sm">{item.sublabel}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-10 pt-8 border-t border-primary-foreground/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle2 size={20} />
                      <span className="font-semibold">Trusted by Students & Parents</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['UGC Recognized', 'NAAC A', 'AICTE Approved'].map((badge, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary-foreground/10 border border-primary-foreground/20 px-3 py-1.5 rounded-lg text-xs font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
