
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';

const GSTAccountant = () => {
  return (
    <AcademicsLayout pageTitle="Pro GST Accountant" breadcrumbPath="GST Accountant" category="Certificate Courses">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-logo-navy mb-6">GST Specialization</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional GST training program for accountants and tax professionals 
            covering GST compliance, filing, and consultation services.
          </p>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default GSTAccountant;
