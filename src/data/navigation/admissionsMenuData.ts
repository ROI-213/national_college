
export const applicationProcessMenuData = [
  { label: 'Online Admission Application', href: '/admissions/online-application' },
  { label: 'Admission Guidelines', href: '/admissions/guidelines' },
  { label: 'Academic Calendar', href: '/admissions/calendar' }
];

export const scholarshipsMenuData = [
  { label: 'Scholarships & Scholarship Committee', href: '/admissions/scholarships' },
  { label: 'Management Scholarship Application', href: '/admissions/management-scholarship' },
  { label: 'Scholarship Policy', href: '/admissions/scholarship-policy' }
];

export const admissionsMenuData = [
  { 
    label: 'Application Process', 
    href: '/admissions/online-application',
    submenu: applicationProcessMenuData
  },
  { 
    label: 'Scholarships', 
    href: '/admissions/scholarships',
    submenu: scholarshipsMenuData
  }
];
