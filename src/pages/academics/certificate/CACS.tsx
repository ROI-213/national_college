
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';

const CACS = () => {
  return (
    <AcademicsLayout pageTitle="CA/CS" breadcrumbPath="CA/CS" category="Certificate Courses">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-logo-navy mb-6">Professional Accounting & Law</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Preparation courses for Chartered Accountancy (CA) and Company Secretary (CS) 
            examinations with expert faculty and comprehensive study materials.
          </p>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default CACS;
