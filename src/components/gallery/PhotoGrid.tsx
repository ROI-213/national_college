
import React from 'react';
import { Eye, Camera } from 'lucide-react';
import { Photo, ViewMode } from './types';

interface PhotoGridProps {
  photos: Photo[];
  viewMode: ViewMode;
  onImageClick: (index: number) => void;
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({
  photos,
  viewMode,
  onImageClick,
}) => {
  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="group cursor-pointer relative overflow-hidden rounded-lg aspect-square bg-white shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => onImageClick(index)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-1 left-1 right-1">
              <div className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                {photo.title}
              </div>
              <div className="flex items-center justify-between text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="flex items-center">
                  <Eye size={8} className="mr-1" />
                  {photo.views}
                </span>
                <Camera size={8} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group"
          onClick={() => onImageClick(index)}
        >
          <img
            src={photo.src}
            alt={photo.title}
            className="w-10 h-10 object-cover rounded-lg group-hover:scale-105 transition-transform"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 text-sm truncate group-hover:text-logo-navy transition-colors">
              {photo.title}
            </h3>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="capitalize">{photo.category}</span>
              <span className="flex items-center">
                <Eye size={8} className="mr-1" />
                {photo.views}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
