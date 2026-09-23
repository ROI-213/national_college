
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';

const AdvancedExcel = () => {
  return (
    <AcademicsLayout pageTitle="Advanced Excel" breadcrumbPath="Advanced Excel" category="Certificate Courses">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-logo-navy mb-6">Excel Mastery</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Advanced Excel training covering formulas, pivot tables, macros, and data analysis 
            for business professionals and data analysts.
          </p>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default AdvancedExcel;
