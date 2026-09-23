import React, { useState } from 'react';
import { MediaCenterLayout } from '@/components/layout/MediaCenterLayout';
import { Lightbox } from '@/components/gallery/Lightbox';
import { Photo } from '@/components/gallery/types';

import galleryCampus1 from '@/assets/gallery-campus1.jpg';
import galleryCampus2 from '@/assets/gallery-campus2.jpg';
import galleryCampus3 from '@/assets/gallery-campus3.jpg';
import galleryCampus4 from '@/assets/gallery-campus4.jpg';
import galleryEvent1 from '@/assets/gallery-event1.jpg';
import galleryEvent2 from '@/assets/gallery-event2.jpg';
import galleryEvent3 from '@/assets/gallery-event3.jpg';
import galleryEvent4 from '@/assets/gallery-event4.jpg';
import galleryEvent5 from '@/assets/gallery-event5.jpg';
import galleryLabs1 from '@/assets/gallery-labs1.jpg';
import galleryLabs2 from '@/assets/gallery-labs2.jpg';
import galleryLabs3 from '@/assets/gallery-labs3.jpg';
import galleryLabs4 from '@/assets/gallery-labs4.jpg';
import gallerySports1 from '@/assets/gallery-sports1.jpg';
import gallerySports2 from '@/assets/gallery-sports2.jpg';
import gallerySports3 from '@/assets/gallery-sports3.jpg';
import gallerySports4 from '@/assets/gallery-sports4.jpg';
import galleryStudents1 from '@/assets/gallery-students1.jpg';
import galleryStudents2 from '@/assets/gallery-students2.jpg';
import galleryStudents3 from '@/assets/gallery-students3.jpg';
import galleryWomensday1 from '@/assets/gallery-womensday1.jpg';
import galleryWomensday2 from '@/assets/gallery-womensday2.jpg';
import galleryWomensday3 from '@/assets/gallery-womensday3.jpg';
import galleryWomensday4 from '@/assets/gallery-womensday4.jpg';
import galleryDrama1 from '@/assets/gallery-drama1.jpg';
import galleryDrama2 from '@/assets/gallery-drama2.jpg';
import galleryDrama3 from '@/assets/gallery-drama3.jpg';
import galleryDrama4 from '@/assets/gallery-drama4.jpg';

const photos: Photo[] = [
  { id: 1, src: galleryCampus1, title: 'Campus View 1', category: 'campus', views: 1200 },
  { id: 2, src: galleryEvent1, title: 'Cultural Event', category: 'events', views: 980 },
  { id: 3, src: galleryLabs1, title: 'Computer Lab', category: 'labs', views: 850 },
  { id: 4, src: gallerySports1, title: 'Cricket Team', category: 'sports', views: 1320 },
  { id: 5, src: galleryStudents1, title: 'Students with Laptop', category: 'students', views: 910 },
  { id: 6, src: galleryCampus2, title: 'Campus View 2', category: 'campus', views: 1100 },
  { id: 7, src: galleryEvent2, title: 'Annual Day', category: 'events', views: 1450 },
  { id: 8, src: galleryLabs2, title: 'Animation Lab', category: 'labs', views: 780 },
  { id: 9, src: gallerySports2, title: 'Sports Action', category: 'sports', views: 1150 },
  { id: 10, src: galleryStudents2, title: 'Campus Hangout', category: 'students', views: 870 },
  { id: 11, src: galleryCampus3, title: 'Campus View 3', category: 'campus', views: 920 },
  { id: 12, src: galleryEvent3, title: 'Sports Day', category: 'events', views: 1300 },
  { id: 13, src: galleryLabs3, title: 'Design Studio', category: 'labs', views: 690 },
  { id: 14, src: gallerySports3, title: 'Athletics Meet', category: 'sports', views: 1080 },
  { id: 15, src: galleryStudents3, title: 'Study Group', category: 'students', views: 820 },
  { id: 16, src: galleryCampus4, title: 'Campus View 4', category: 'campus', views: 780 },
  { id: 17, src: galleryEvent4, title: 'Seminar Hall Event', category: 'events', views: 1050 },
  { id: 18, src: galleryLabs4, title: 'Electronics Lab', category: 'labs', views: 730 },
  { id: 19, src: gallerySports4, title: 'Sports Day Awards', category: 'sports', views: 960 },
  { id: 20, src: galleryEvent5, title: 'Award Ceremony', category: 'events', views: 1600 },
  { id: 21, src: galleryWomensday1, title: "Women's Day 2026 - 1", category: 'events', views: 0 },
  { id: 22, src: galleryWomensday2, title: "Women's Day 2026 - 2", category: 'events', views: 0 },
  { id: 23, src: galleryWomensday3, title: "Women's Day 2026 - 3", category: 'events', views: 0 },
  { id: 24, src: galleryWomensday4, title: "Women's Day 2026 - 4", category: 'events', views: 0 },
  { id: 25, src: galleryDrama1, title: 'Intersection Drama - 1', category: 'intersection drama', views: 0 },
  { id: 26, src: galleryDrama2, title: 'Intersection Drama - 2', category: 'intersection drama', views: 0 },
  { id: 27, src: galleryDrama3, title: 'Intersection Drama - 3', category: 'intersection drama', views: 0 },
  { id: 28, src: galleryDrama4, title: 'Intersection Drama - 4', category: 'intersection drama', views: 0 },
];

const categories = ['All', 'Events', 'Intersection Drama', 'Campus', 'Labs', 'Sports', 'Students'];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredPhotos = activeFilter === 'All'
    ? photos
    : photos.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredPhotos.length - 1);
    } else {
      setSelectedImage(selectedImage < filteredPhotos.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <MediaCenterLayout pageTitle="Photo Gallery" breadcrumbPath="Gallery">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setSelectedImage(null); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeFilter === cat
                    ? 'bg-logo-navy text-white border-logo-navy shadow-md'
                    : 'bg-white text-muted-foreground border-border hover:border-logo-blue hover:text-logo-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No photos found in this category.</p>
          )}
        </div>
      </section>

      <Lightbox
        selectedImage={selectedImage}
        photos={filteredPhotos}
        onClose={() => setSelectedImage(null)}
        onNavigate={handleNavigate}
      />
    </MediaCenterLayout>
  );
};

export default Gallery;
