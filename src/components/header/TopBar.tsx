import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { mandatoryDisclosureItems } from '../../data/navigation/mandatoryDisclosureData';

export const TopBar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback((key: string) => {
    setActiveDropdown(prev => (prev === key ? '' : key));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveDropdown('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#0f1629] text-white/90 py-1.5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-xs gap-2">
          {/* Left side - Contact Info */}
          <div className="flex items-center space-x-3 md:space-x-5 min-w-0">
            <div className="flex items-center space-x-1.5 min-w-0">
              <Phone size={11} className="text-white/60 shrink-0" />
              <span className="truncate">080 2667 4441</span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5">
              <Mail size={11} className="text-white/60" />
              <span>nationalbgudiautonomous@gmail.com</span>
            </div>
          </div>

          
          {/* Right side - Quick Links */}
          <div ref={containerRef} className="hidden md:flex items-center space-x-3 ml-auto flex-wrap gap-y-1">
            {mandatoryDisclosureItems.map((item) => (
              <div key={item.key} className="relative">
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center space-x-1 hover:text-white transition-colors text-xs text-white/80"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={10}
                    className={`transition-transform duration-200 ${activeDropdown === item.key ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {item.dropdown && activeDropdown === item.key && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-md shadow-xl border border-border z-[100] overflow-hidden">
                    <div className="py-1">
                      {item.dropdown.map((dropItem, index) => (
                        <a
                          key={index}
                          href={dropItem.href}
                          className="block px-4 py-2.5 text-foreground hover:bg-secondary hover:text-primary transition-all text-xs border-b border-border last:border-b-0"
                        >
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <span className="text-white/30">|</span>
            <a href="/nirf" className="hover:text-white transition-colors text-white/80">NIRF</a>
            <span className="text-white/30">|</span>
            <a href="/naac-iqac" className="hover:text-white transition-colors text-white/80">NAAC/IQAC</a>
            <span className="text-white/30">|</span>
            <a href="/student-services/support" className="hover:text-white transition-colors text-white/80">Student Support</a>
            <span className="text-white/30">|</span>
            <a href="/contact" className="hover:text-white transition-colors text-white/80">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};
