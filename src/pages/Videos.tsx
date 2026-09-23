import React from 'react';
import { MediaCenterLayout } from '@/components/layout/MediaCenterLayout';

const videoIds = [
  'iWltsRevd_E',
  'wG-4lNBk1ZU',
  'p6h74uVPOjg',
  'PIo3jFcRO9E',
  'vujdBxnnC-Q',
  '1jpm2-SzJvg',
  '5rzqskk1gzc',
  '0OMXwg7doxQ',
  '-8gcH7FpACk',
  'Q51Zaq_kOeE',
  'aBZWtcgnCVA',
  '-419c12TT84',
  'YOlPl_ISufQ',
  '5ERMTdzy__A',
];

const Videos = () => {
  return (
    <MediaCenterLayout pageTitle="Campus Videos & Media Highlights" breadcrumbPath="Videos">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Video Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore key events, activities, and highlights from our institution through our video gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {videoIds.map((id) => (
              <div key={id} className="rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Video ${id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MediaCenterLayout>
  );
};

export default Videos;
