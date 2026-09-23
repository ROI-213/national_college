
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';

const CyberSecurity = () => {
  return (
    <AcademicsLayout pageTitle="Cyber Security" breadcrumbPath="Cyber Security" category="Certificate Courses">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-logo-navy mb-6">Information Security</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional cybersecurity training covering network security, ethical hacking, 
            risk assessment, and compliance for IT security professionals.
          </p>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default CyberSecurity;
