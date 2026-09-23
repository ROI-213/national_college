
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from './types';

interface LightboxProps {
  selectedImage: number | null;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  selectedImage,
  photos,
  onClose,
  onNavigate,
}) => {
  if (selectedImage === null) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <X size={20} />
      </button>
      
      <button
        onClick={() => onNavigate('prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={() => onNavigate('next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <ChevronRight size={20} />
      </button>

      <div className="max-w-5xl max-h-full">
        <img
          src={photos[selectedImage].src}
          alt={photos[selectedImage].title}
          className="max-w-full max-h-full object-contain"
        />
        <div className="text-center mt-4">
          <h3 className="text-white text-xl font-semibold">
            {photos[selectedImage].title}
          </h3>
          <p className="text-blue-200 mt-1">
            {selectedImage + 1} of {photos.length}
          </p>
        </div>
      </div>
    </div>
  );
};
