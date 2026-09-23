import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import mentorPhoto from '../../assets/mentor-narasimhaiah.jpg';
import padmaBhushanPhoto from '../../assets/mentor-padma-bhushan.jpg';

const timelineItems = [
  'Principal of the National College, Basavanagudi, Bengaluru (1961 – 1972)',
  'Fourth Vice-Chancellor of Bengaluru University (1972 – 1977)',
  'Founder of Bengaluru Science Forum – 1962',
  'Founder of Bengaluru Social Science Forum – 1994',
  'Recipient of Tamrapatra Award for participation in the freedom struggle',
  'Awarded Padma Bhushan, Rajyotsava Prashasti, Nadoja, Sir M. Visvesvaraya Award, and others',
];

const InstitutionMentor = () => {
  return (
    <AboutLayout pageTitle="The Institution Mentor" breadcrumbPath="The Institution Mentor">
      <section className="py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

            {/* Left Column — Portrait */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start flex justify-center lg:pr-6">
              <div className="w-72 lg:w-full">
                <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                  <img
                    src={mentorPhoto}
                    alt="Dr. H. Narasimhaiah"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3 font-medium">
                  Dr. H. Narasimhaiah
                </p>
              </div>
            </div>

            {/* Center Column — Content */}
            <div className="lg:col-span-6 lg:border-l lg:border-r lg:border-border lg:px-10 space-y-10">

              {/* Heading */}
              <div className="text-center space-y-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Dr. H. Narasimhaiah
                </h2>
                <p className="text-logo-navy font-medium text-base tracking-wide">
                  Visionary Educator &middot; Scientist &middot; Social Reformer
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Dr. H. Narasimhaiah was a visionary educator, scientist, and social reformer whose contributions significantly shaped education and society in Karnataka.
                </p>
                <p>
                  As President of the National Education Society of Karnataka and Vice-Chancellor of Bengaluru University, he championed quality education, scientific inquiry, and social responsibility.
                </p>
                <p>
                  Honored with the Padma Bhushan, Rajyotsava Prashasti, Nadoja, and several other prestigious awards, he also made remarkable contributions to Kannada literature, receiving two Karnataka Sahitya Academy Awards for his autobiographies.
                </p>
                <p>
                  He was also a dedicated Freedom Fighter.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-logo-navy bg-logo-navy/5 rounded-r-lg p-6">
                <p className="text-foreground italic text-lg leading-relaxed">
                  "Education is not merely the acquisition of facts but the training of the mind to think — something that cannot be learned from textbooks."
                </p>
                <footer className="mt-3 text-sm font-semibold text-logo-navy">
                  — Dr. H. Narasimhaiah
                </footer>
              </blockquote>

              {/* Timeline */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Key Positions &amp; Contributions
                </h3>
                <div className="relative border-l-2 border-logo-navy/30 ml-3 space-y-6">
                  {timelineItems.map((item, idx) => (
                    <div key={idx} className="relative pl-7">
                      <span className="absolute left-[-7px] top-1.5 w-3 h-3 rounded-full bg-logo-navy border-2 border-background" />
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Padma Bhushan */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start flex justify-center lg:pl-6">
              <div className="w-72 lg:w-full">
                <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                  <img
                    src={padmaBhushanPhoto}
                    alt="Dr. H. Narasimhaiah receiving the Padma Bhushan"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3 font-medium">
                  Padma Bhushan Ceremony
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default InstitutionMentor;
