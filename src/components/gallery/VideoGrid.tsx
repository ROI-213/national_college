
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Video } from './types';
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '../ui/dialog';

interface VideoGridProps {
  videos: Video[];
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group cursor-pointer relative overflow-hidden rounded-xl aspect-video bg-muted shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => setActiveVideo(video.youtubeId)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="text-white ml-0.5" size={18} fill="white" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-white text-xs font-medium truncate drop-shadow-md">{video.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Modal */}
      <Dialog open={!!activeVideo} onOpenChange={(open) => { if (!open) setActiveVideo(null); }}>
        <DialogPortal>
          <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
            <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-white/80 transition-colors z-10"
              >
                <X size={28} />
              </button>
              {activeVideo && (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-2xl"
                />
              )}
            </div>
          </div>
        </DialogPortal>
      </Dialog>
    </>
  );
};
