
import React from 'react';
import { Camera, Image, Video, Grid3X3, List } from 'lucide-react';
import { TabsList, TabsTrigger } from '../ui/tabs';
import { ActiveTab, ViewMode } from './types';

interface GalleryHeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const GalleryHeader: React.FC<GalleryHeaderProps> = ({
  activeTab,
  setActiveTab,
  viewMode,
  setViewMode,
}) => {
  return (
    <>
      {/* Compact Header with Stats */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-logo-navy to-logo-blue-light rounded-lg flex items-center justify-center shadow-md">
            <Camera className="text-white" size={16} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Gallery</h2>
            <p className="text-xs text-gray-600">Moments & memories</p>
          </div>
        </div>
        
        {/* Compact Stats */}
        <div className="hidden md:flex space-x-4 text-center">
          <div>
            <div className="text-lg font-bold text-logo-navy">500+</div>
            <div className="text-xs text-gray-500">Photos</div>
          </div>
          <div>
            <div className="text-lg font-bold text-logo-navy">50+</div>
            <div className="text-xs text-gray-500">Videos</div>
          </div>
        </div>
      </div>

      {/* Compact Tab Navigation */}
      <div className="flex justify-between items-center mb-4">
        <TabsList className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-md border">
          <TabsTrigger 
            value="photos" 
            className="data-[state=active]:bg-logo-navy data-[state=active]:text-white rounded-full px-3 py-1.5 text-sm"
          >
            <Image size={12} className="mr-1" />
            Photos
          </TabsTrigger>
          <TabsTrigger 
            value="videos"
            className="data-[state=active]:bg-logo-navy data-[state=active]:text-white rounded-full px-3 py-1.5 text-sm"
          >
            <Video size={12} className="mr-1" />
            Videos
          </TabsTrigger>
        </TabsList>

        <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-md">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-full transition-all ${
              viewMode === 'grid' 
                ? 'bg-logo-navy text-white shadow-md' 
                : 'text-gray-600 hover:text-logo-navy hover:bg-blue-50'
            }`}
          >
            <Grid3X3 size={12} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-full transition-all ${
              viewMode === 'list' 
                ? 'bg-logo-navy text-white shadow-md' 
                : 'text-gray-600 hover:text-logo-navy hover:bg-blue-50'
            }`}
          >
            <List size={12} />
          </button>
        </div>
      </div>
    </>
  );
};
