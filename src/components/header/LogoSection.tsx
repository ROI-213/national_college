
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

interface LogoSectionProps {
  isScrolled: boolean;
  onMenuToggle: () => void;
}

export const LogoSection: React.FC<LogoSectionProps> = ({ isScrolled, onMenuToggle }) => {
  return (
    <div className="w-full px-4 md:px-6">
      <div className="flex items-center justify-between py-2 md:py-2.5">
        {/* Left: Logo + Divider + Text */}
        <div className="flex items-center min-w-0 flex-1 pr-3">
          <Link to="/" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
            <img 
              src="/lovable-uploads/new-college-logo.png" 
              alt="The National College Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </Link>
          <div className="border-l border-gray-300 h-8 mx-3" />
          <div className="min-w-0">
            <Link to="/">
              <h1 className="text-sm md:text-lg font-bold text-foreground leading-tight hover:text-primary transition-colors truncate">
                The National College
              </h1>
            </Link>
            <p className="text-muted-foreground text-[10px] md:text-xs font-medium truncate">
              Autonomous | Basavanagudi, Bengaluru
            </p>
          </div>
        </div>


        {/* Right: MENU button */}
        <button
          onClick={onMenuToggle}
          className="flex items-center space-x-2 px-3 py-3 md:px-4 md:py-3 bg-white text-logo-navy border border-gray-200 rounded-md shadow-sm transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Open navigation menu"
        >
          <Menu size={20} strokeWidth={2.5} />
          <span className="text-sm font-bold tracking-wide hidden sm:inline">MENU</span>
        </button>
      </div>
    </div>
  );
};
