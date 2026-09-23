
import React, { useEffect, useState } from 'react';
import { X, ChevronDown, GraduationCap, Palette, FlaskConical, Truck, BookOpen, Briefcase, Monitor, Calculator, Laptop, FileEdit, ClipboardList, Award, BarChart3, Building, Users, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../data/navigationData';
import { mandatoryDisclosureMenuData } from '../../data/navigation/mandatoryDisclosureData';
import ncbImage from '@/assets/ncb.jpg';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickLinks = [
  { label: 'BA - Opt Kan / Eng', href: '/academics/graduate/ba', icon: GraduationCap },
  { label: 'B.Sc. Animation', href: '/academics/graduate/bsc-animation', icon: Palette },
  { label: 'B.Sc.', href: '/academics/graduate/bsc', icon: FlaskConical },
  { label: 'B.Com - Logistics', href: '/academics/graduate/bcom-logistics', icon: Truck },
  { label: 'B.Com - Regular', href: '/academics/graduate/bcom', icon: BookOpen },
  { label: 'BBA - AICTE', href: '/academics/graduate/bba', icon: Briefcase },
  { label: 'BCA - AICTE', href: '/academics/graduate/bca', icon: Monitor },
  { label: 'M.Com', href: '/academics/postgraduate/mcom', icon: Calculator },
  { label: 'MCA - AICTE', href: '/academics/postgraduate/mca', icon: Laptop },
  { label: 'Apply Online', href: '/admissions/online-application', icon: FileEdit },
  { label: 'Admission Guidelines', href: '/admissions/guidelines', icon: ClipboardList },
  { label: 'NAAC / IQAC', href: '/naac-iqac', icon: Award },
  { label: 'NIRF', href: '/nirf', icon: BarChart3 },
  { label: 'Hostel', href: '/infrastructure/hostel-facility', icon: Building },
  { label: 'Placement Activities', href: '/placements/activities', icon: Users },
  { label: 'Placement Training', href: '/placements/training', icon: Dumbbell },
];

const topStripLinks = [
  { label: 'NIRF', href: '/nirf' },
  { label: 'NAAC/IQAC', href: '/naac-iqac' },
  { label: 'Student Support', href: '/student-services/support' },
  { label: 'Contact', href: '/contact' },
];

const campuses = ['Basavanagudi', 'Jayanagar', 'Bagepalli'];

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (key: string) => {
    setExpandedSections(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedSections([]);
  };

  const menuSections = menuItems.filter(item => item.key !== 'home');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 animate-fade-in" role="dialog" aria-modal="true">
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content layout: LEFT grid + RIGHT sidebar */}
      <div className="relative h-full flex">

        {/* LEFT: Grid + Our Campuses strip (hidden on mobile) */}
        <div className="hidden md:flex flex-col flex-1 h-full relative" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ncbImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          {/* Grid area */}
          <div className="flex-1 flex items-center justify-center p-6 lg:p-10 overflow-y-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 max-w-4xl w-full">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={handleLinkClick}
                    className="group relative bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-l-4 border-[#1a6cb4] pt-10 pb-6 px-4 flex flex-col items-center text-center"
                  >
                    {/* Icon circle overlapping top */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#1a3a6e] flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="text-[11px] font-bold uppercase text-[#0f1629] leading-tight mt-1">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Our Campuses strip — only under left section */}
          <div className="bg-[#1a3a6e] px-8 py-3 flex items-center justify-between w-full">
            <span className="text-sm font-bold text-white uppercase tracking-wide">Our Campuses</span>
            {campuses.map((campus) => (
              <span key={campus} className="text-sm text-white font-medium">{campus}</span>
            ))}
          </div>
        </div>

        {/* RIGHT: Sidebar navigation */}
        <div className="w-full md:w-72 lg:w-80 bg-white h-full overflow-y-auto flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="text-base font-bold text-[#0f1629] tracking-wide uppercase">Main Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label="Close menu"
            >
              <X size={22} className="text-foreground" />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2 px-5 py-3 border-b border-border">
            <Link to="/admissions" onClick={handleLinkClick}
              className="flex-1 bg-[#1a3a6e] text-white text-center px-3 py-2 rounded font-bold text-xs uppercase hover:bg-[#152e57] transition-colors">
              Admission
            </Link>
            <Link to="/admissions/online-application" onClick={handleLinkClick}
              className="flex-1 bg-[#1a3a6e] text-white text-center px-3 py-2 rounded font-bold text-xs uppercase hover:bg-[#152e57] transition-colors">
              Examination
            </Link>
          </div>

          {/* Accordion Nav — Main Navigation */}
          <nav className="flex-shrink-0">
            <div className="md:hidden px-5 py-2 bg-[#0f1629]">
              <span className="text-[10px] font-bold uppercase text-white/60 tracking-wide">Main Navigation</span>
            </div>
            <Link to="/" onClick={handleLinkClick}
              className="block px-5 py-3 text-sm font-semibold text-[#0f1629] border-b border-border/50 hover:bg-secondary/50 transition-colors">
              Home
            </Link>
            {menuSections.map((section) => (
              <div key={section.key} className="border-b border-border/50">
                <div className="flex items-center">
                  {section.dropdown ? (
                    <button onClick={() => toggleSection(section.key)}
                      className="flex-1 px-5 py-3.5 text-[15px] font-semibold text-[#0f1629] hover:bg-secondary/50 transition-colors text-left">
                      {section.label}
                    </button>
                  ) : (
                    <Link to={section.href} onClick={handleLinkClick}
                      className="flex-1 px-5 py-3.5 text-[15px] font-semibold text-[#0f1629] hover:bg-secondary/50 transition-colors">
                      {section.label}
                    </Link>
                  )}
                  {section.dropdown && (
                    <button onClick={() => toggleSection(section.key)}
                      className="mx-2 w-9 h-9 flex items-center justify-center bg-[#1a3a6e] rounded hover:bg-[#152e57] transition-colors"
                      aria-label={`Expand ${section.label}`}>
                      <ChevronDown size={16}
                        className={`text-white transition-transform duration-200 ${expandedSections.includes(section.key) ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {section.dropdown && expandedSections.includes(section.key) && (
                  <div className="pb-2 bg-secondary/30 animate-fade-in">
                    {section.dropdown.map((item, idx) => (
                      <div key={idx}>
                        <Link to={item.href} onClick={handleLinkClick}
                          className="block px-7 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors">
                          {item.label}
                        </Link>
                        {item.submenu?.map((sub, subIdx) => (
                          <Link key={subIdx} to={sub.href} onClick={handleLinkClick}
                            className="block px-9 py-2 text-xs text-muted-foreground/80 hover:text-primary transition-colors">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile: Quick Links */}
          <div className="md:hidden border-t border-border px-4 py-4">
            <h3 className="text-xs font-bold uppercase text-muted-foreground mb-3 px-2">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.label} to={item.href} onClick={handleLinkClick}
                    className="bg-secondary/50 rounded-lg p-3 flex flex-col items-center gap-2 text-center hover:bg-secondary transition-colors">
                    <Icon size={18} className="text-white" />
                    <span className="text-[10px] font-bold uppercase text-[#0f1629] leading-tight">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile: Quick Access */}
          <div className="md:hidden border-t border-border">
            <div className="px-5 py-2 bg-[#0f1629]">
              <span className="text-[10px] font-bold uppercase text-white/60 tracking-wide">Quick Access</span>
            </div>
            {topStripLinks.map((link) => (
              <Link key={link.label} to={link.href} onClick={handleLinkClick}
                className="block px-5 py-2.5 text-sm font-medium text-[#0f1629] border-b border-border/30 hover:bg-secondary/50 transition-colors">
                {link.label}
              </Link>
            ))}
            {/* Mandatory Disclosure collapsible */}
            <div className="border-b border-border/30">
              <div className="flex items-center">
                <button onClick={() => toggleSection('mobile-mandatory')}
                  className="flex-1 px-5 py-2.5 text-sm font-medium text-[#0f1629] hover:bg-secondary/50 transition-colors text-left">
                  Mandatory Disclosure
                </button>
                <button onClick={() => toggleSection('mobile-mandatory')}
                  className="mx-2 w-9 h-9 flex items-center justify-center bg-[#1a3a6e] rounded hover:bg-[#152e57] transition-colors"
                  aria-label="Expand Mandatory Disclosure">
                  <ChevronDown size={16}
                    className={`text-white transition-transform duration-200 ${expandedSections.includes('mobile-mandatory') ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {expandedSections.includes('mobile-mandatory') && (
                <div className="pb-2 bg-secondary/30 animate-fade-in">
                  {mandatoryDisclosureMenuData.map((item) => (
                    <Link key={item.href} to={item.href} onClick={handleLinkClick}
                      className="block px-7 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

