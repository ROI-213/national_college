
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TopBar } from './header/TopBar';
import { LogoSection } from './header/LogoSection';
import { HomeLogoSection } from './header/HomeLogoSection';
import { FullScreenMenu } from './header/FullScreenMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const accreditationBadges = [
    { src: '/lovable-uploads/bb23823b-8027-4472-aab8-70db07b82bd6.png', alt: 'AICTE', label: 'AICTE' },
    { src: '/lovable-uploads/4dd1f883-fae5-4197-b87f-cacac7796f8c.png', alt: 'UGC', label: 'UGC' },
    { src: '/lovable-uploads/ea68989a-ad6f-4290-9958-a29fc74f99c7.png', alt: 'NAAC A', label: 'NAAC A' },
    { src: '/lovable-uploads/76e80886-b9b0-4987-94f5-dd0a7d13cbca.png', alt: '5 Star', label: '5 Star' },
  ];

  return (
    <>
      {/* Top strip */}
      <div className="relative z-40">
        <TopBar />
      </div>

      {/* Logo panel + Menu button */}
      {isHomePage ? (
        <>
          {/* Home page: absolute over hero */}
          <div className={`${isScrolled ? 'fixed top-0 left-0 right-0 z-40 bg-white shadow-md' : 'absolute left-0 right-0 z-30'}`}
            style={!isScrolled ? { top: '36px' } : undefined}
          >
            <HomeLogoSection
              isScrolled={isScrolled}
              onMenuToggle={() => setIsMenuOpen(true)}
            />

            {/* Accreditation badges - only on home, not scrolled */}
            {!isScrolled && (
              <div className="hidden sm:block pl-6 pt-2 pb-1">
                <div className="flex items-center flex-wrap gap-2" style={{ maxWidth: '340px' }}>
                  {accreditationBadges.map((badge) => (
                    <div
                      key={badge.alt}
                      className="flex items-center space-x-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-white/50"
                    >
                      <img src={badge.src} alt={badge.alt} className="w-5 h-5 object-contain" />
                      <span className="text-[10px] font-semibold text-foreground">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            )}
          </div>

          {/* Spacer only when scrolled (fixed header) */}
          {isScrolled && <div className="h-[36px]" />}
        </>
      ) : (
        <>
          {/* Inner pages: normal flow */}
          {isScrolled ? (
            <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
              <LogoSection
                isScrolled={isScrolled}
                onMenuToggle={() => setIsMenuOpen(true)}
              />
            </div>
          ) : (
            <div className="relative z-30 bg-white shadow-sm">
              <LogoSection
                isScrolled={isScrolled}
                onMenuToggle={() => setIsMenuOpen(true)}
              />
            </div>
          )}

          {/* Spacer when scrolled to prevent content jump */}
          {isScrolled && <div className="h-[52px]" />}
        </>
      )}

      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};
