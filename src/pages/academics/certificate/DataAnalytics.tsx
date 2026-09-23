
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';

const DataAnalytics = () => {
  return (
    <AcademicsLayout pageTitle="Advanced Data Analytics and Visualization" breadcrumbPath="Data Analytics" category="Certificate Courses">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-logo-navy mb-6">Data Science & Analytics</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive data analytics training with Python, R, SQL, and visualization tools 
            for careers in data science and business intelligence.
          </p>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default DataAnalytics;
