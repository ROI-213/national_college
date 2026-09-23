
import React, { useState } from 'react';
import { Newspaper, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
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

export const MediaCoverage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const mediaItems = [
    { id: 1, image: mediaAndhra },
    { id: 2, image: mediaEenadu1 },
    { id: 3, image: mediaSanje },
    { id: 4, image: mediaTimesKarnataka },
    { id: 5, image: mediaVishwa },
    { id: 6, image: mediaInduSanje },
    { id: 7, image: mediaEenadu2 },
    { id: 8, image: mediaBharata },
    { id: 9, image: mediaAndhra2 },
    { id: 10, image: mediaUdayakala },
    { id: 11, image: mediaDinaSudar1 },
    { id: 12, image: mediaSanjePrabha },
    { id: 13, image: mediaTimesKarnataka2 },
    { id: 14, image: mediaMardani },
    { id: 15, image: mediaBharata2 },
    { id: 16, image: mediaEeSanje },
    { id: 17, image: mediaEeSanje2 },
    { id: 18, image: mediaVijayavani },
    { id: 19, image: mediaDinaSudar2 },
    { id: 20, image: mediaAndhra3 },
  ];

  const handlePrev = () => setSelectedIndex((prev) => (prev! - 1 + mediaItems.length) % mediaItems.length);
  const handleNext = () => setSelectedIndex((prev) => (prev! + 1) % mediaItems.length);

  return (
    <section className="py-10 lg:py-14 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Newspaper className="text-primary" size={16} />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Media Coverage</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            In The <span className="text-primary">News</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Latest news and media coverage of our institution's achievements
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {mediaItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative aspect-[4/3] bg-muted">
                <img
                  src={item.image}
                  alt="Media coverage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured In Strip */}
        <div className="mt-8 p-5 bg-card rounded-2xl border border-border max-w-4xl mx-auto">
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

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight size={20} />
          </button>
          <div className="max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={mediaItems[selectedIndex].image}
              alt="Media coverage"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-blue-200 text-center mt-3">{selectedIndex + 1} of {mediaItems.length}</p>
          </div>
        </div>
      )}
    </section>
  );
};
