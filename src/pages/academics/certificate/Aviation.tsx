
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';

const Aviation = () => {
  return (
    <AcademicsLayout pageTitle="Aviation" breadcrumbPath="Aviation" category="Certificate Courses">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-logo-navy mb-6">Aviation Industry Training</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive aviation training covering cabin crew, ground handling, 
            airport operations, and airline management for aviation careers.
          </p>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default Aviation;
