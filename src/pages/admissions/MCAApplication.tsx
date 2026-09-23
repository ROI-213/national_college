import React from 'react';
import { Link } from 'react-router-dom';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { MCAApplicationForm } from '../../components/admissions/MCAApplicationForm';
import { GraduationCap, Sparkles, CheckCircle, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

const MCAApplication = () => {
  return (
    <AdmissionsLayout
      pageTitle="MCA Admission Application (2026-27)"
      breadcrumbPath="MCA Application"
      category="Admissions"
    >
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-logo-navy via-[#1e40af] to-logo-blue rounded-3xl p-8 md:p-12 text-white shadow-xl mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 text-xs md:text-sm font-semibold mb-4">
                <Sparkles size={16} /> Admissions Open for 2026-27 Batch
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                Apply for MCA Admission
              </h1>
              <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
                Master of Computer Applications (MCA) — AICTE Approved, 2-Year Full-Time Autonomous Postgraduate Program at The National College, Basavanagudi.
              </p>

              {/* Highlights pills */}
              <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-white/15 text-xs md:text-sm">
                <div className="flex items-center gap-2 text-blue-100">
                  <CheckCircle size={16} className="text-amber-400 shrink-0" />
                  <span>AICTE Approved & Autonomous</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <ShieldCheck size={16} className="text-amber-400 shrink-0" />
                  <span>Cloud, AI & Full-Stack Labs</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <GraduationCap size={16} className="text-amber-400 shrink-0" />
                  <span>Internships & 90%+ Placement Record</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/academics/postgraduate/mca"
                  className="inline-flex items-center gap-2 text-xs md:text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium border border-white/20 transition-colors"
                >
                  <BookOpen size={16} />
                  <span>View Full MCA Syllabus & Overview</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>


          {/* The MCA Application Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-4 md:p-8">
            <div className="text-center mb-8 pb-4 border-b border-slate-100">
              <h2 className="text-2xl md:text-3xl font-bold text-logo-navy">
                MCA Online Application Form
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Please fill in all required fields accurately. The course is pre-selected for Master of Computer Applications (MCA).
              </p>
            </div>

            <MCAApplicationForm source="mca_page_apply_online" />
          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default MCAApplication;
