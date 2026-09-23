
export const languageDepartmentsMenuData = [
  { label: 'Kannada', href: '/academics/departments/kannada' },
  { label: 'English', href: '/academics/departments/english' },
  { label: 'Hindi', href: '/academics/departments/hindi' },
  { label: 'Sanskrit', href: '/academics/departments/sanskrit' },
];

export const departmentsMenuData = [
  { label: 'Commerce', href: '/academics/departments/commerce' },
  { label: 'Management', href: '/academics/departments/management' },
  { label: 'Humanities', href: '/academics/departments/humanities' },
  { label: 'Computer Science', href: '/academics/departments/computer-science' },
  { label: 'Languages', href: '/academics/departments/languages' },
  { label: 'PG Journalism & Mass Communication', href: '/academics/departments/journalism' },
  { label: 'PG Psychology', href: '/academics/departments/psychology' }
];

export const ugProgramsMenuData = [
  { label: 'B.A - Optional Kannada / Optional English', href: '/academics/graduate/ba', specializations: ['Sociology, Economics, Optional Kannada', 'Sociology, Economics, Optional English', 'Sociology, Journalism, Optional Kannada', 'Sociology, Journalism, Optional English', 'Sociology, Journalism, Economics', 'Political Science, Economics, Physical Education', 'Political Science, Economics, Sociology', 'Political Science, Economics, Optional English'] },
  { label: 'B.Sc. Animation', href: '/academics/graduate/bsc-animation' },
  { label: 'B.Sc', href: '/academics/graduate/bsc', specializations: ['Chemistry, Botany, Zoology', 'Physics, Chemistry, Mathematics', 'Physics, Mathematics, Electronics', 'Physics, Mathematics, Computer Science', 'Electronics, Mathematics, Computer Science', 'Physics, Electronics, Computer Science'] },
  { label: 'B.Com - Logistics', href: '/academics/graduate/bcom-logistics', specializations: ['Financial Accounting', 'Materials Management', 'Fundamentals of Logistics & Supply Chain', 'Purchasing & Supply Chain Management', 'Facilities Management', 'Managing Procurement Contracts & Relationship', 'Project Management & Supply Chain Process Redesign', 'Sourcing for Logistics & Supply Chain Management'] },
  { label: 'B.Com - Regular', href: '/academics/graduate/bcom', specializations: ['Financial Accounting', 'Corporate Accounting', 'Financial Management', 'Income Tax', 'Goods & Service Tax', 'Cost Accounting', 'Corporate Administration', 'Management Accounting', 'Financial Analytics & Investment', 'Principles & Practice of Auditing'] },
  { label: 'BBA in Business Analytics (AICTE)', href: '/academics/graduate/bba-business-analytics', specializations: ['Financial Accounting', 'Business Dynamics & Entrepreneurship', 'Fundamentals of MS-EXCEL', 'Modern Marketing', 'Fundamentals of Database', 'Management System & SQL', 'Advanced Excel', 'Computer Fundamentals & C Programming', 'Goods & Service Tax', 'Data Science Life Cycle', 'Financial Analytics', 'Application of Python in Business', 'Data Warehousing & Data Mining', 'Marketing Analytics'] },
  { label: 'BCA (AICTE)', href: '/academics/graduate/bca', specializations: ['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Android', 'Data Mining', 'Python', 'Mobile Computing', 'J2EE', 'Network Security', 'Data Security', 'Blockchain Technology'] }
];

export const postgraduateCoursesMenuData = [
  { label: 'M.Com', href: '/academics/postgraduate/mcom' },
  { label: 'MCA (AICTE)', href: '/academics/postgraduate/mca' }
];

export const academicsMenuData = [
  { 
    label: 'UG Programs (Under SEP)', 
    href: '/academics/graduate',
    submenu: ugProgramsMenuData
  },
  { 
    label: 'Post Graduate Programs', 
    href: '/academics/postgraduate',
    submenu: postgraduateCoursesMenuData
  }
];
