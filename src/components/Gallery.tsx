
import React, { useState } from 'react';
import { Tabs, TabsContent } from './ui/tabs';
import { GalleryHeader } from './gallery/GalleryHeader';
import { PhotoGrid } from './gallery/PhotoGrid';
import { VideoGrid } from './gallery/VideoGrid';
import { Lightbox } from './gallery/Lightbox';
import { photos, videos } from './gallery/data';
import { ActiveTab, ViewMode } from './gallery/types';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('photos');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : photos.length - 1);
    } else {
      setSelectedImage(selectedImage < photos.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value as ActiveTab);
  };

  return (
    <section className="py-6 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Tabs wrapper now contains both header and content */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <GalleryHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />

          {/* Photo Gallery */}
          <TabsContent value="photos" className="mt-0">
            <PhotoGrid
              photos={photos}
              viewMode={viewMode}
              onImageClick={openLightbox}
            />
          </TabsContent>

          {/* Video Gallery */}
          <TabsContent value="videos" className="mt-0">
            <VideoGrid videos={videos} />
          </TabsContent>
        </Tabs>

        <Lightbox
          selectedImage={selectedImage}
          photos={photos}
          onClose={closeLightbox}
          onNavigate={navigateImage}
        />
      </div>
    </section>
  );
};
