import React, { useState, useEffect } from 'react';
import { MediaCenterLayout } from '@/components/layout/MediaCenterLayout';
import { fetchGalleryVideos, GalleryVideoRecord } from '@/services/mediaGalleryService';

const defaultVideoIds = [
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

const defaultVideos: { id: string; title: string; youtube_id: string }[] = defaultVideoIds.map((id, index) => ({
  id: id,
  title: `Campus Video ${index + 1}`,
  youtube_id: id,
}));

const Videos = () => {
  const [videos, setVideos] = useState<GalleryVideoRecord[] | typeof defaultVideos>(defaultVideos);

  useEffect(() => {
    let isMounted = true;
    const loadVideos = async () => {
      try {
        const records = await fetchGalleryVideos();
        if (isMounted && records && records.length > 0) {
          setVideos(records);
        }
      } catch (e) {
        console.warn('Could not load dynamic videos, using fallback:', e);
      }
    };

    loadVideos();
    window.addEventListener('gallery-videos-updated', loadVideos);
    return () => {
      isMounted = false;
      window.removeEventListener('gallery-videos-updated', loadVideos);
    };
  }, []);

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
            {videos.map((vid) => (
              <div
                key={vid.id || vid.youtube_id}
                className="rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col"
              >
                <div className="aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.youtube_id}`}
                    title={vid.title || `Video ${vid.youtube_id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                {vid.title && (
                  <div className="p-3 border-t border-border/60">
                    <p className="text-xs font-semibold text-slate-700 line-clamp-1">{vid.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {videos.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No videos found in the gallery.</p>
          )}
        </div>
      </section>
    </MediaCenterLayout>
  );
};

export default Videos;
