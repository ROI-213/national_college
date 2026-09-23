
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

interface HomeLogoSectionProps {
  isScrolled: boolean;
  onMenuToggle: () => void;
}

export const HomeLogoSection: React.FC<HomeLogoSectionProps> = ({ isScrolled, onMenuToggle }) => {
  return (
    <div className="w-full relative">
      {/* Trapezoid white panel - desktop */}
      <div
        className="hidden md:flex items-center bg-white px-6 py-3"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)',
          maxWidth: '380px',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
        }}
      >
        <Link to="/" className="w-16 h-16 flex items-center justify-center flex-shrink-0">
          <img
            src="/lovable-uploads/new-college-logo.png"
            alt="The National College Logo"
            className="w-16 h-16 object-contain"
          />
        </Link>
        <div className="border-l border-gray-300 h-10 mx-4" />
        <div>
          <Link to="/">
            <h1 className="text-xl font-bold text-foreground leading-tight hover:text-primary transition-colors">
              The National College
            </h1>
          </Link>
          <p className="text-muted-foreground text-xs font-medium">
            Autonomous | Basavanagudi, Bengaluru
          </p>
        </div>
      </div>

      {/* Mobile - simple rectangle */}
      <div className="flex md:hidden items-center bg-white px-4 py-2 shadow-sm pr-16">
        <Link to="/" className="w-10 h-10 flex items-center justify-center flex-shrink-0">
          <img
            src="/lovable-uploads/new-college-logo.png"
            alt="The National College Logo"
            className="w-10 h-10 object-contain"
          />
        </Link>
        <div className="border-l border-gray-300 h-8 mx-3" />
        <div className="flex-1 min-w-0">
          <Link to="/">
            <h1 className="text-sm font-bold text-foreground leading-tight truncate">
              The National College
            </h1>
          </Link>
          <p className="text-muted-foreground text-[10px] font-medium truncate">
            Autonomous | Basavanagudi, Bengaluru
          </p>
        </div>
      </div>


      {/* MENU button - positioned on right */}
      <button
        onClick={onMenuToggle}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2 px-3 py-3 md:px-4 md:py-3 bg-white text-logo-navy border border-gray-200 rounded-md shadow-sm transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Open navigation menu"
      >
        <Menu size={20} strokeWidth={2.5} />
        <span className="text-sm font-bold tracking-wide hidden sm:inline">MENU</span>
      </button>
    </div>
  );
};
