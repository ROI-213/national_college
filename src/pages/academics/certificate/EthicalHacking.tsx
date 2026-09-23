
import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';

const EthicalHacking = () => {
  return (
    <AcademicsLayout pageTitle="Ethical Hacking + Cloud Computing" breadcrumbPath="Ethical Hacking" category="Certificate Courses">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-logo-navy mb-6">Cybersecurity & Cloud</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Advanced training in ethical hacking and cloud computing for cybersecurity professionals 
            and cloud architects with hands-on practical experience.
          </p>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default EthicalHacking;
