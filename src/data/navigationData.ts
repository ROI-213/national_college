
import { aboutMenuData } from './navigation/aboutMenuData';
import { academicsMenuData } from './navigation/academicsMenuData';
import { admissionsMenuData } from './navigation/admissionsMenuData';
import { infrastructureMenuData } from './navigation/infrastructureMenuData';
import { studentServicesMenuData } from './navigation/studentServicesMenuData';
import { mediaCenterMenuData } from './navigation/mediaCenterMenuData';
import { placementsMenuData } from './navigation/placementsMenuData';
import { researchMenuData } from './navigation/researchMenuData';
import { departmentsDropdownData } from './navigation/departmentsMenuData';

// Define proper types for menu items
export interface BaseMenuItem {
  label: string;
  href: string;
  specializations?: string[];
}

export interface MenuItemWithSubmenu extends BaseMenuItem {
  submenu?: BaseMenuItem[];
}

export interface MenuItem extends BaseMenuItem {
  dropdown?: MenuItemWithSubmenu[];
}

export interface MainMenuItem {
  key: string;
  label: string;
  href: string;
  dropdown?: MenuItemWithSubmenu[];
}

export const menuItems: MainMenuItem[] = [
  { key: 'home', label: 'Home', href: '/' },
  { 
    key: 'about', 
    label: 'About', 
    href: '/about/college',
    dropdown: aboutMenuData
  },
  { 
    key: 'academics', 
    label: 'Academics', 
    href: '/academics',
    dropdown: academicsMenuData
  },
  { 
    key: 'departments', 
    label: 'Departments', 
    href: '/academics/departments',
    dropdown: departmentsDropdownData
  },
  { 
    key: 'admissions', 
    label: 'Admissions', 
    href: '/admissions',
    dropdown: admissionsMenuData
  },
  { 
    key: 'infrastructure', 
    label: 'Infrastructure', 
    href: '/infrastructure',
    dropdown: infrastructureMenuData
  },
  { 
    key: 'student-services', 
    label: 'Student Services', 
    href: '/student-services/clubs',
    dropdown: studentServicesMenuData
  },
  { 
    key: 'media-center', 
    label: 'Media Center', 
    href: '/events',
    dropdown: mediaCenterMenuData
  },
  { 
    key: 'placements', 
    label: 'Placements', 
    href: '/placements/overview',
    dropdown: placementsMenuData
  },
  { 
    key: 'research', 
    label: 'Research', 
    href: '/research/activities',
    dropdown: researchMenuData
  }
];
