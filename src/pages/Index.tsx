import React from 'react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { AdmissionsSection } from '../components/AdmissionsSection';
import { DiscoverCollege } from '../components/DiscoverCollege';
import { IntellectualCapital } from '../components/IntellectualCapital';
import { PlacementSection } from '../components/PlacementSection';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Gallery } from '../components/Gallery';
import { MediaCoverage } from '../components/MediaCoverage';
import { GoogleReviews } from '../components/GoogleReviews';
import { PrincipalMessage } from '../components/PrincipalMessage';
import { FacultySection } from '../components/Faculty';
import { Footer } from '../components/Footer';
import { FloatingChat } from '../components/FloatingChat';
import { FloatingApplyButton } from '../components/FloatingApplyButton';
import { NaacHighlight } from '../components/NaacHighlight';

import { MarqueeStrip } from '../components/MarqueeStrip';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Banner />
        <MarqueeStrip />
        <AdmissionsSection />
        <DiscoverCollege />
        <IntellectualCapital />
        <PrincipalMessage />
        <FacultySection />
        <PlacementSection />
        <NaacHighlight />
        <Gallery />
        <MediaCoverage />
        <GoogleReviews />
        <Footer />
        <FloatingChat />
        <FloatingApplyButton />
        
      </div>
    </LanguageProvider>
  );
};

export default Index;
