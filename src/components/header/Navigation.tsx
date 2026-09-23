import React from 'react';
import { Menu, X, ChevronDown, GraduationCap, Users, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuItems, MenuItemWithSubmenu } from '../../data/navigationData';
import { ugProgramsMenuData, postgraduateCoursesMenuData, languageDepartmentsMenuData } from '../../data/navigation/academicsMenuData';
import { clubsMenuData, committeesMenuData } from '../../data/navigation/studentServicesMenuData';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  activeDropdown: string;
  setActiveDropdown: (value: string) => void;
  isScrolled?: boolean;
}

// Multi-column dropdown component
const MultiColumnDropdown = ({ item, activeDropdown }: { item: any, activeDropdown: string }) => {
  const getDropdownWidth = (key: string) => {
    switch (key) {
      case 'academics':
        return 'w-[1400px] max-w-[calc(100vw-2rem)]';
      case 'admissions':
        return 'w-[560px]';
      case 'departments':
        return 'w-[500px]';
      case 'student-services':
        return 'w-[800px] max-h-[80vh]';
      default:
        return 'w-80';
    }
  };

  const getColumnCount = (key: string) => {
    switch (key) {
      case 'academics':
        return 'grid-cols-3';
      case 'admissions':
        return 'grid-cols-2';
      case 'departments':
        return 'grid-cols-2';
      case 'student-services':
        return 'grid-cols-2';
      default:
        return 'grid-cols-1';
    }
  };

  const getColumnIcon = (label: string) => {
    if (label.includes('Department')) return <GraduationCap size={18} className="text-primary" />;
    if (label.includes('Graduate') || label.includes('Degree')) return <BookOpen size={18} className="text-primary" />;
    if (label.includes('Certificate') || label.includes('Diploma')) return <FileText size={18} className="text-primary" />;
    if (label.includes('Club') || label.includes('Service')) return <Users size={18} className="text-primary" />;
    if (label.includes('Cell') || label.includes('Committee')) return <FileText size={18} className="text-primary" />;
    if (label.includes('Application') || label.includes('Process')) return <FileText size={18} className="text-primary" />;
    if (label.includes('Scholarship')) return <GraduationCap size={18} className="text-primary" />;
    if (label.includes('Prospectus') || label.includes('Fee')) return <BookOpen size={18} className="text-primary" />;
    return <FileText size={16} className="text-primary" />;
  };

  // Helper to render a program item with specializations
  const renderProgramItem = (subItem: any, subIndex: number) => (
    <div key={subIndex} className="mb-2">
      <Link
        to={subItem.href}
        className="block px-2 py-1 text-xs font-bold text-primary hover:text-primary/80 hover:bg-primary/5 rounded transition-all"
      >
        {subItem.label}
      </Link>
      {subItem.specializations && subItem.specializations.length > 0 && (
        <ul className="mt-0.5 px-2">
          {subItem.specializations.map((spec: string, specIndex: number) => (
            <li key={specIndex} className="text-[11px] text-gray-500 leading-tight py-0.5 flex items-start">
              <span className="mr-1 mt-0.5 text-gray-400">•</span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // Custom academics layout with 5 columns
  if (item.key === 'academics') {
    const baProgram = ugProgramsMenuData[0];              // BA
    const bscAnimation = ugProgramsMenuData[1];           // B.Sc. Animation
    const bscProgram = ugProgramsMenuData[2];             // B.Sc
    const bcomLogistics = ugProgramsMenuData[3];          // B.Com Logistics
    const bcomRegular = ugProgramsMenuData[4];            // B.Com Regular
    const bbaProgram = ugProgramsMenuData[5];             // BBA (AICTE)
    const bcaProgram = ugProgramsMenuData[6];             // BCA (AICTE)

    return (
      <div className="fixed mt-0 w-[1500px] max-w-[calc(100vw-2rem)] bg-white rounded-b-lg shadow-2xl border-t-4 border-primary z-50 border border-gray-200 animate-fade-in max-h-[85vh] overflow-y-auto" style={{ left: '50%', transform: 'translateX(-50%)', top: 'var(--nav-bottom, 56px)' }} ref={(el) => { if (el) { const navItem = el.closest('.relative.group'); if (navItem) { const rect = navItem.getBoundingClientRect(); el.style.top = rect.bottom + 'px'; } } }}>
        <div className="p-6">
          <div className="grid grid-cols-5 gap-5">
            {/* Column 1: Languages + BA */}
            <div className="space-y-1">
              <div className="border-b border-gray-200 pb-2 mb-2">
                <span className="flex items-center space-x-2 text-primary font-semibold">
                  <GraduationCap size={18} className="text-primary" />
                  <span className="text-sm">Languages</span>
                </span>
              </div>
              {languageDepartmentsMenuData.map((dept, idx) => (
                <Link
                  key={idx}
                  to={dept.href}
                  className="block px-2 py-1 text-xs font-bold text-primary hover:text-primary/80 hover:bg-primary/5 rounded transition-all"
                >
                  {dept.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <span className="flex items-center space-x-2 text-primary font-semibold">
                    <BookOpen size={18} className="text-primary" />
                    <span className="text-sm">UG Programs (Under SEP)</span>
                  </span>
                </div>
              </div>
              {renderProgramItem(baProgram, 0)}
            </div>
            {/* Column 2: B.Sc. Animation + B.Sc */}
            <div className="space-y-1">
              <div className="border-b border-gray-200 pb-2 mb-2 invisible">
                <span className="text-sm">&nbsp;</span>
              </div>
              {renderProgramItem(bscAnimation, 0)}
              {renderProgramItem(bscProgram, 1)}
            </div>
            {/* Column 3: B.Com Logistics + B.Com Regular */}
            <div className="space-y-1">
              <div className="border-b border-gray-200 pb-2 mb-2 invisible">
                <span className="text-sm">&nbsp;</span>
              </div>
              {renderProgramItem(bcomLogistics, 0)}
              {renderProgramItem(bcomRegular, 1)}
            </div>
            {/* Column 4: BBA (AICTE) */}
            <div className="space-y-1">
              <div className="border-b border-gray-200 pb-2 mb-2 invisible">
                <span className="text-sm">&nbsp;</span>
              </div>
              {renderProgramItem(bbaProgram, 0)}
            </div>
            {/* Column 5: BCA (AICTE) + PG */}
            <div className="space-y-1">
              <div className="border-b border-gray-200 pb-2 mb-2 invisible">
                <span className="text-sm">&nbsp;</span>
              </div>
              {renderProgramItem(bcaProgram, 0)}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <span className="flex items-center space-x-2 text-primary font-semibold">
                    <GraduationCap size={18} className="text-primary" />
                    <span className="text-sm">Post Graduate Programs</span>
                  </span>
                </div>
                {postgraduateCoursesMenuData.map((pg, idx) => (
                  <Link
                    key={idx}
                    to={pg.href}
                    className="block px-2 py-1 text-xs font-bold text-primary hover:text-primary/80 hover:bg-primary/5 rounded transition-all"
                  >
                    {pg.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Custom student-services layout: Clubs column + Committees in 2 sub-columns
  if (item.key === 'student-services') {
    return (
      <div className="fixed mt-0 w-[900px] max-w-[calc(100vw-2rem)] bg-white rounded-b-lg shadow-2xl border-t-4 border-primary z-50 border border-gray-200 animate-fade-in" style={{ left: '50%', transform: 'translateX(-50%)' }} ref={(el) => { if (el) { const navItem = el.closest('.relative.group'); if (navItem) { const rect = navItem.getBoundingClientRect(); el.style.top = rect.bottom + 'px'; } } }}>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Column 1: Clubs */}
            <div className="space-y-2">
              <div className="border-b border-gray-200 pb-2">
                <span className="flex items-center space-x-2 text-primary font-semibold">
                  <Users size={18} className="text-primary" />
                  <span className="text-sm">Clubs</span>
                </span>
              </div>
              <div className="space-y-1">
                {clubsMenuData.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.href}
                    className="block px-2 py-1.5 text-xs font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded transition-all"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Committees (first half) */}
            <div className="space-y-2">
              <div className="border-b border-gray-200 pb-2">
                <span className="flex items-center space-x-2 text-primary font-semibold">
                  <FileText size={18} className="text-primary" />
                  <span className="text-sm">Committees</span>
                </span>
              </div>
              <div className="space-y-1">
                {committeesMenuData.slice(0, 11).map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.href}
                    className="block px-2 py-1.5 text-xs font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded transition-all"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Committees (second half) */}
            <div className="space-y-2">
              <div className="border-b border-gray-200 pb-2 invisible">
                <span className="text-sm">&nbsp;</span>
              </div>
              <div className="space-y-1">
                {committeesMenuData.slice(11).map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.href}
                    className="block px-2 py-1.5 text-xs font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded transition-all"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Departments 2-column layout
  if (item.key === 'departments') {
    return (
      <div className={`absolute top-full left-0 mt-0 ${getDropdownWidth(item.key)} bg-white rounded-b-lg shadow-2xl border-t-4 border-primary z-50 border border-gray-200 animate-fade-in`}>
        <div className="py-3">
          <div className="grid grid-cols-2">
            {item.dropdown.map((dropItem: MenuItemWithSubmenu, dropIndex: number) => (
              <div key={dropIndex} className="relative">
                <Link
                  to={dropItem.href}
                  className="block px-6 py-2.5 text-foreground hover:bg-primary/5 hover:text-primary transition-all text-sm relative group font-medium hover:pl-8"
                >
                  <span className="relative z-10">{dropItem.label}</span>
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-200"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (item.key === 'admissions') {
    return (
      <div className={`absolute top-full left-0 mt-0 ${getDropdownWidth(item.key)} bg-white rounded-b-lg shadow-2xl border-t-4 border-primary z-50 border border-gray-200 animate-fade-in`}>
        <div className="p-6">
          <div className={`grid ${getColumnCount(item.key)} gap-6`}>
            {item.dropdown.map((dropItem: MenuItemWithSubmenu, dropIndex: number) => (
              <div key={dropIndex} className="space-y-3">
                <div className="border-b border-gray-200 pb-2">
                  {dropItem.href.startsWith('#') ? (
                    <a
                      href={dropItem.href}
                      className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      {getColumnIcon(dropItem.label)}
                      <span className="text-sm">{dropItem.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={dropItem.href}
                      className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      {getColumnIcon(dropItem.label)}
                      <span className="text-sm">{dropItem.label}</span>
                    </Link>
                  )}
                </div>
                
                {dropItem.submenu && dropItem.submenu.length > 0 && (
                  <div className="space-y-2">
                    {dropItem.submenu.map((subItem: any, subIndex: number) => (
                      <div key={subIndex}>
                        {subItem.href.startsWith('#') ? (
                          <a
                            href={subItem.href}
                            className="block px-2 py-1 text-xs font-bold text-primary hover:text-primary/80 hover:bg-primary/5 rounded transition-all"
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link
                            to={subItem.href}
                            className="block px-2 py-1 text-xs font-bold text-primary hover:text-primary/80 hover:bg-primary/5 rounded transition-all"
                          >
                            {subItem.label}
                          </Link>
                        )}
                        {subItem.specializations && subItem.specializations.length > 0 && (
                          <ul className={`mt-0.5 px-2 ${subItem.specializations.length > 6 ? 'grid grid-cols-2 gap-x-2' : ''}`}>
                            {subItem.specializations.map((spec: string, specIndex: number) => (
                              <li key={specIndex} className="text-[11px] text-gray-500 leading-tight py-0.5 flex items-start">
                                <span className="mr-1 mt-0.5 text-gray-400">•</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default single-column dropdown for other menus
  return (
    <div className="absolute top-full left-0 mt-0 w-80 bg-white rounded-b-lg shadow-2xl border-t-4 border-primary z-50 border border-gray-200 animate-fade-in">
      <div className="py-3">
        {item.dropdown.map((dropItem: MenuItemWithSubmenu, dropIndex: number) => (
          <div key={dropIndex} className="relative">
            {dropItem.href.startsWith('#') ? (
              <a
                href={dropItem.href}
                className="block px-6 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-all text-sm border-b border-gray-100 last:border-b-0 relative group font-medium hover:pl-8"
              >
                <span className="relative z-10">{dropItem.label}</span>
                <div className="absolute left-0 top-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-200"></div>
              </a>
            ) : (
              <Link
                to={dropItem.href}
                className="block px-6 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-all text-sm border-b border-gray-100 last:border-b-0 relative group font-medium hover:pl-8"
              >
                <span className="relative z-10">{dropItem.label}</span>
                <div className="absolute left-0 top-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-200"></div>
              </Link>
            )}
            {dropItem.submenu && dropItem.submenu.length > 0 && (
              <div className="ml-8 border-l-2 border-primary/20 bg-primary/5">
                {dropItem.submenu.map((subItem, subIndex) => (
                  subItem.href.startsWith('#') ? (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors hover:pl-6 duration-200"
                    >
                      {subItem.label}
                    </a>
                  ) : (
                    <Link
                      key={subIndex}
                      to={subItem.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors hover:pl-6 duration-200"
                    >
                      {subItem.label}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeDropdown,
  setActiveDropdown,
  isScrolled = false
}) => {
  React.useEffect(() => {
    const handleScroll = () => {
      if (activeDropdown) {
        setActiveDropdown('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeDropdown, setActiveDropdown]);

  return (
    <nav className={`bg-gradient-to-r from-logo-navy via-logo-blue to-logo-navy border-b border-logo-navy-dark z-50 shadow-lg transition-all duration-300 ${
      isScrolled 
        ? 'fixed top-0 left-0 w-full' 
        : 'sticky top-0'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0 w-full">
            {menuItems.map((item, index) => (
              <div
                key={item.key}
                className="relative group flex-1"
                onMouseEnter={() => setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown('')}
              >
                {item.href.startsWith('#') ? (
                  <button className="w-full flex items-center justify-center space-x-2 text-white hover:text-blue-200 hover:bg-logo-navy-dark font-medium transition-all duration-300 py-4 px-3 relative overflow-hidden group border-r border-logo-navy-dark last:border-r-0">
                    <span className="relative z-10 text-sm font-semibold whitespace-nowrap">{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown 
                        size={16} 
                        className="relative z-10 transition-transform group-hover:rotate-180 duration-300" 
                      />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </button>
                ) : (
                  <Link 
                    to={item.href}
                    className="w-full flex items-center justify-center space-x-2 text-white hover:text-blue-200 hover:bg-logo-navy-dark font-medium transition-all duration-300 py-4 px-3 relative overflow-hidden group border-r border-logo-navy-dark last:border-r-0"
                  >
                    <span className="relative z-10 text-sm font-semibold whitespace-nowrap">{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown 
                        size={16} 
                        className="relative z-10 transition-transform group-hover:rotate-180 duration-300" 
                      />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </Link>
                )}
                
                {item.dropdown && activeDropdown === item.key && (
                  <MultiColumnDropdown item={item} activeDropdown={activeDropdown} />
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-md hover:bg-logo-navy-dark ml-auto transition-colors"
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-logo-navy-dark bg-logo-navy-dark animate-slide-in-right">
            <div className="py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.key}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-white hover:bg-logo-blue rounded-md font-medium transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-white hover:bg-logo-blue rounded-md font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.dropdown && item.key === 'academics' && (
                    <div className="ml-4 space-y-1 border-l-2 border-blue-400 pl-4">
                      {/* UG Programs */}
                      {ugProgramsMenuData.map((prog, index) => (
                        <Link
                          key={`ug-${index}`}
                          to={prog.href}
                          className="block px-4 py-2 text-sm text-blue-200 hover:bg-logo-blue hover:text-white rounded-md transition-colors"
                        >
                          {prog.label}
                        </Link>
                      ))}
                      {/* PG Programs */}
                      {postgraduateCoursesMenuData.map((prog, index) => (
                        <Link
                          key={`pg-${index}`}
                          to={prog.href}
                          className="block px-4 py-2 text-sm text-blue-200 hover:bg-logo-blue hover:text-white rounded-md transition-colors"
                        >
                          {prog.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {item.dropdown && item.key !== 'academics' && (
                    <div className="ml-4 space-y-1 border-l-2 border-blue-400 pl-4">
                      {item.dropdown.map((dropItem, index) => (
                        dropItem.href.startsWith('#') ? (
                          <a
                            key={index}
                            href={dropItem.href}
                            className="block px-4 py-2 text-sm text-blue-200 hover:bg-logo-blue hover:text-white rounded-md transition-colors"
                          >
                            {dropItem.label}
                          </a>
                        ) : (
                          <Link
                            key={index}
                            to={dropItem.href}
                            className="block px-4 py-2 text-sm text-blue-200 hover:bg-logo-blue hover:text-white rounded-md transition-colors"
                          >
                            {dropItem.label}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};