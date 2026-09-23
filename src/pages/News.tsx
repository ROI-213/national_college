import React from 'react';
import { AboutLayout } from '@/components/layout/AboutLayout';

const News = () => {
  return (
    <AboutLayout pageTitle="News & Announcements" breadcrumbPath="News">
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-logo-navy">Updating shortly</h2>
        </div>
      </section>
    </AboutLayout>
  );
};

export default News;
