import React, { useState, useCallback } from 'react';
import { MediaCenterLayout } from '@/components/layout/MediaCenterLayout';
import { Card } from '@/components/ui/card';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

import mediaAndhra from '@/assets/media-andhra-jyothi.jpg';
import mediaEenadu1 from '@/assets/media-eenadu-1.jpg';
import mediaSanje from '@/assets/media-sanje-samaya.jpg';
import mediaTimesKarnataka from '@/assets/media-times-karnataka.jpg';
import mediaVishwa from '@/assets/media-vishwa-vaaridhi.jpg';
import mediaInduSanje from '@/assets/media-indu-sanje.jpg';
import mediaEenadu2 from '@/assets/media-eenadu-2.jpg';
import mediaBharata from '@/assets/media-bharata-sarathi.jpg';
import mediaAndhra2 from '@/assets/media-andhra-jyothi-2.jpg';
import mediaUdayakala from '@/assets/media-udayakala.jpg';
import mediaDinaSudar1 from '@/assets/media-dina-sudar-1.jpg';
import mediaSanjePrabha from '@/assets/media-sanje-prabha.jpg';
import mediaTimesKarnataka2 from '@/assets/media-times-karnataka-2.jpg';
import mediaMardani from '@/assets/media-mardani.jpg';
import mediaBharata2 from '@/assets/media-bharata-sarathi-2.jpg';
import mediaEeSanje from '@/assets/media-ee-sanje.jpg';
import mediaEeSanje2 from '@/assets/media-ee-sanje-2.jpg';
import mediaVijayavani from '@/assets/media-vijayavani.jpg';
import mediaDinaSudar2 from '@/assets/media-dina-sudar-2.jpg';
import mediaAndhra3 from '@/assets/media-andhra-jyothi-3.jpg';

const mediaItems = [
  { id: 1, image: mediaAndhra, name: 'Andhra Jyothi' },
  { id: 2, image: mediaEenadu1, name: 'Eenadu' },
  { id: 3, image: mediaSanje, name: 'Sanje Samaya' },
  { id: 4, image: mediaTimesKarnataka, name: 'Times of Karnataka' },
  { id: 5, image: mediaVishwa, name: 'Vishwa Vaaridhi' },
  { id: 6, image: mediaInduSanje, name: 'Indu Sanje' },
  { id: 7, image: mediaEenadu2, name: 'Eenadu' },
  { id: 8, image: mediaBharata, name: 'Bharata Sarathi' },
  { id: 9, image: mediaAndhra2, name: 'Andhra Jyothi' },
  { id: 10, image: mediaUdayakala, name: 'Udayakala' },
  { id: 11, image: mediaDinaSudar1, name: 'Dina Sudar' },
  { id: 12, image: mediaSanjePrabha, name: 'Sanje Prabha' },
  { id: 13, image: mediaTimesKarnataka2, name: 'Times of Karnataka' },
  { id: 14, image: mediaMardani, name: 'Mardani' },
  { id: 15, image: mediaBharata2, name: 'Bharata Sarathi' },
  { id: 16, image: mediaEeSanje, name: 'Ee Sanje' },
  { id: 17, image: mediaEeSanje2, name: 'Ee Sanje' },
  { id: 18, image: mediaVijayavani, name: 'Vijayavani' },
  { id: 19, image: mediaDinaSudar2, name: 'Dina Sudar' },
  { id: 20, image: mediaAndhra3, name: 'Andhra Jyothi' },
];

const PressPublications = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev! - 1 + mediaItems.length) % mediaItems.length);
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev! + 1) % mediaItems.length);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    else if (e.key === 'ArrowRight') handleNext();
    else if (e.key === 'Escape') setSelectedIndex(null);
  }, [handlePrev, handleNext]);

  return (
    <MediaCenterLayout pageTitle="Press & Publications" breadcrumbPath="Press & Publications">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Media Coverage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The National College in the news — press clippings and media features.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {mediaItems.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative aspect-[4/3] bg-muted">
                  <img
                    src={item.image}
                    alt={`Media coverage - ${item.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Featured In Strip */}
          <div className="mt-12 p-5 bg-card rounded-2xl border border-border max-w-4xl mx-auto">
            <div className="text-center mb-3">
              <h3 className="text-lg font-semibold text-foreground">Featured In</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              {['Andhra Jyothi', 'Eenadu', 'Sanje Samaya', 'Times of Karnataka', 'Vishwa Vaaridhi', 'Indu Sanje', 'Bharata Sarathi', 'Udayakala', 'Dina Sudar', 'Sanje Prabha', 'Mardani', 'Vijayavani', 'Ee Sanje'].map((media, index) => (
                <span key={index} className="font-medium text-sm hover:text-primary transition-colors cursor-pointer">
                  {media}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          ref={(el) => el?.focus()}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <ChevronRight size={20} />
          </button>

          <div className="max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={mediaItems[selectedIndex].image}
              alt={`Media coverage - ${mediaItems[selectedIndex].name}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{mediaItems[selectedIndex].name}</h3>
              <p className="text-blue-200 mt-1">{selectedIndex + 1} of {mediaItems.length}</p>
            </div>
          </div>
        </div>
      )}
    </MediaCenterLayout>
  );
};

export default PressPublications;
