
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.academics': 'Academics',
    'nav.admissions': 'Admissions',
    'nav.student.support': 'Student Support',
    'nav.campus': 'Campus Facilities',
    'nav.examination': 'Examination',
    'nav.placements': 'Placements',
    'nav.alumni': 'Alumni',
    'nav.naac': 'NAAC/IQAC',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // About submenu
    'nav.about.history': 'History',
    'nav.about.mission': 'Mission & Vision',
    'nav.about.governing': 'Governing Body',
    'nav.about.principal': 'Principal\'s Message',
    'nav.about.committees': 'Committees',
    'nav.about.reports': 'Annual Reports',
    
    // Academics submenu
    'nav.academics.programs': 'Programs Offered',
    'nav.academics.departments': 'Departments & Faculty',
    'nav.academics.syllabus': 'Syllabus & Curriculum',
    'nav.academics.calendar': 'Academic Calendar',
    'nav.academics.research': 'Research & Innovation',
    'nav.academics.events': 'Department Events',
    'nav.academics.feedback': 'Feedback',
    
    // Admissions submenu
    'nav.admissions.procedure': 'Admission Procedure',
    'nav.admissions.application': 'Online Application',
    'nav.admissions.prospectus': 'Prospectus',
    'nav.admissions.cutoff': 'Cut-off & Selection',
    'nav.admissions.fees': 'Fees Structure',
    'nav.admissions.scholarships': 'Scholarships',
    
    // Campus submenu
    'nav.campus.library': 'Library',
    'nav.campus.labs': 'Laboratories',
    'nav.campus.science': 'Science Centre',
    'nav.campus.arts': 'Arts Centre',
    'nav.campus.ict': 'ICT & E-Content',
    'nav.campus.sports': 'Sports & Gymnasium',
    'nav.campus.ncc': 'NCC & NSS',
    'nav.campus.activities': 'Co-Curricular Activities',
    'nav.campus.hostel': 'Hostel',
    'nav.campus.cafeteria': 'Cafeteria',
    'nav.campus.tour': 'Campus Tour',
    
    // Hero section
    'hero.title': 'The National College',
    'hero.subtitle': 'Basavanagudi, Bengaluru',
    'hero.description': 'Excellence in Education Since 1964 • NAAC Accredited with A Grade',
    'hero.cta.admissions': 'Apply Now',
    'hero.cta.explore': 'Explore Campus',
    
    // Quick Links
    'quick.admissions': 'Admissions 2024',
    'quick.results': 'Results',
    'quick.naac': 'NAAC Reports',
    'quick.virtual.tour': 'Virtual Tour',
    
    // Features
    'features.academics.title': 'Academic Excellence',
    'features.academics.desc': 'Comprehensive programs across Arts, Science & Commerce',
    'features.naac.title': 'NAAC A Accredited',
    'features.naac.desc': 'Recognized for quality education and institutional excellence',
    'features.facilities.title': 'Modern Facilities',
    'features.facilities.desc': 'State-of-the-art labs, library, and campus infrastructure',
    'features.placements.title': 'Career Support',
    'features.placements.desc': 'Dedicated placement cell with industry partnerships',
    
    // News & Announcements
    'news.title': 'Latest News & Announcements',
    
    // Programs
    'programs.title': 'Programs Offered',
    'programs.ug': 'Undergraduate Programs',
    'programs.pg': 'Postgraduate Programs',
    
    // Footer
    'footer.about.title': 'About NDC Basavanagudi',
    'footer.about.desc': 'The National College, Basavanagudi has been a cornerstone of quality education in Bengaluru since 1964, committed to academic excellence and holistic development.',
    'footer.quick.links': 'Quick Links',
    'footer.academics.links': 'Academics',
    'footer.contact.title': 'Contact Information',
    'footer.address': 'Pampa Mahakavi Rd, Basavanagudi, Bengaluru, Karnataka 560004',
    'footer.phone': '+91 80 2663 4445',
    'footer.email': 'info@ndcbasavanagudi.edu.in',
    'footer.copyright': '© 2024 The National College, Basavanagudi. All rights reserved.',
    
    // Departments
    'departments.bca': 'Bachelor of Computer Applications',
    'departments.bcom': 'Bachelor of Commerce',
    'departments.ba': 'Bachelor of Arts',
    'departments.bsc': 'Bachelor of Science',
    'departments.mca': 'Master of Computer Applications',
    'departments.mcom': 'Master of Commerce',
    'departments.ma': 'Master of Arts',
    'departments.msc': 'Master of Science'
  },
  kn: {
    // Navigation
    'nav.home': 'ಮುಖ್ಯ',
    'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
    'nav.academics': 'ಶೈಕ್ಷಣಿಕ',
    'nav.admissions': 'ಪ್ರವೇಶ',
    'nav.student.support': 'ವಿದ್ಯಾರ್ಥಿ ಸಹಾಯ',
    'nav.campus': 'ಕ್ಯಾಂಪಸ್ ಸೌಲಭ್ಯಗಳು',
    'nav.examination': 'ಪರೀಕ್ಷೆ',
    'nav.placements': 'ಉದ್ಯೋಗ ನೇಮಕಾತಿ',
    'nav.alumni': 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು',
    'nav.naac': 'ನಾಕ್/ಐಕ್ಯಾಕ್',
    'nav.gallery': 'ಗ್ಯಾಲರಿ',
    'nav.contact': 'ಸಂಪರ್ಕ',
    
    // About submenu
    'nav.about.history': 'ಇತಿಹಾಸ',
    'nav.about.mission': 'ಮಿಷನ್ ಮತ್ತು ವಿಷನ್',
    'nav.about.governing': 'ಆಡಳಿತ ಮಂಡಳಿ',
    'nav.about.principal': 'ಪ್ರಾಂಶುಪಾಲರ ಸಂದೇಶ',
    'nav.about.committees': 'ಸಮಿತಿಗಳು',
    'nav.about.reports': 'ವಾರ್ಷಿಕ ವರದಿಗಳು',
    
    // Academics submenu
    'nav.academics.programs': 'ನೀಡುವ ಕಾರ್ಯಕ್ರಮಗಳು',
    'nav.academics.departments': 'ವಿಭಾಗಗಳು ಮತ್ತು ಅಧ್ಯಾಪಕರು',
    'nav.academics.syllabus': 'ಪಠ್ಯಕ್ರಮ',
    'nav.academics.calendar': 'ಶೈಕ್ಷಣಿಕ ಕ್ಯಾಲೆಂಡರ್',
    'nav.academics.research': 'ಸಂಶೋಧನೆ ಮತ್ತು ನಾವೀನ್ಯತೆ',
    'nav.academics.events': 'ವಿಭಾಗೀಯ ಕಾರ್ಯಕ್ರಮಗಳು',
    'nav.academics.feedback': 'ಪ್ರತಿಕ್ರಿಯೆ',
    
    // Admissions submenu
    'nav.admissions.procedure': 'ಪ್ರವೇಶ ವಿಧಾನ',
    'nav.admissions.application': 'ಆನ್‌ಲೈನ್ ಅರ್ಜಿ',
    'nav.admissions.prospectus': 'ಪ್ರೋಸ್ಪೆಕ್ಟಸ್',
    'nav.admissions.cutoff': 'ಕಟ್-ಆಫ್ ಮತ್ತು ಆಯ್ಕೆ',
    'nav.admissions.fees': 'ಶುಲ್ಕ ರಚನೆ',
    'nav.admissions.scholarships': 'ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು',
    
    // Campus submenu
    'nav.campus.library': 'ಗ್ರಂಥಾಲಯ',
    'nav.campus.labs': 'ಪ್ರಯೋಗಾಲಯಗಳು',
    'nav.campus.sports': 'ಕ್ರೀಡೆ ಮತ್ತು ಜಿಮ್ನಾಷಿಯಂ',
    'nav.campus.hostel': 'ವಸತಿ ನಿಲಯ',
    'nav.campus.cafeteria': 'ಕೆಫೆಟೇರಿಯಾ',
    
    // Hero section
    'hero.title': 'ನ್ಯಾಷನಲ್ ಡಿಗ್ರಿ ಕಾಲೇಜು',
    'hero.subtitle': 'ಬಸವನಗುಡಿ, ಬೆಂಗಳೂರು',
    'hero.description': '೧೯೬೪ರಿಂದ ಶಿಕ್ಷಣದಲ್ಲಿ ಶ್ರೇಷ್ಠತೆ • ನಾಕ್ ಮಾನ್ಯತೆ ಪ್ರಾಪ್ತ ಎ ಗ್ರೇಡ್',
    'hero.cta.admissions': 'ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    'hero.cta.explore': 'ಕ್ಯಾಂಪಸ್ ನೋಡಿ',
    
    // Quick Links
    'quick.admissions': 'ಪ್ರವೇಶ ೨೦೨೪',
    'quick.results': 'ಫಲಿತಾಂಶಗಳು',
    'quick.naac': 'ನಾಕ್ ವರದಿಗಳು',
    'quick.virtual.tour': 'ವರ್ಚುವಲ್ ಟೂರ್',
    
    // Features
    'features.academics.title': 'ಶೈಕ್ಷಣಿಕ ಶ್ರೇಷ್ಠತೆ',
    'features.academics.desc': 'ಕಲೆ, ವಿಜ್ಞಾನ ಮತ್ತು ವಾಣಿಜ್ಯದಲ್ಲಿ ಸಮಗ್ರ ಕಾರ್ಯಕ್ರಮಗಳು',
    'features.naac.title': 'ನಾಕ್ ಎ ಮಾನ್ಯತೆ',
    'features.naac.desc': 'ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಂಸ್ಥಿಕ ಶ್ರೇಷ್ಠತೆಗೆ ಮಾನ್ಯತೆ',
    'features.facilities.title': 'ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳು',
    'features.facilities.desc': 'ಅತ್ಯಾಧುನಿಕ ಪ್ರಯೋಗಾಲಯಗಳು, ಗ್ರಂಥಾಲಯ ಮತ್ತು ಕ್ಯಾಂಪಸ್ ಮೂಲಸೌಕರ್ಯ',
    'features.placements.title': 'ವೃತ್ತಿ ಬೆಂಬಲ',
    'features.placements.desc': 'ಉದ್ಯಮ ಪಾಲುದಾರಿಕೆಯೊಂದಿಗೆ ಮೀಸಲಾದ ಉದ್ಯೋಗ ನೇಮಕಾತಿ ಘಟಕ',
    
    // News & Announcements
    'news.title': 'ಇತ್ತೀಚಿನ ಸುದ್ದಿ ಮತ್ತು ಘೋಷಣೆಗಳು',
    
    // Programs
    'programs.title': 'ನೀಡುವ ಕಾರ್ಯಕ್ರಮಗಳು',
    'programs.ug': 'ಪದವಿ ಕಾರ್ಯಕ್ರಮಗಳು',
    'programs.pg': 'ಸ್ನಾತಕೋತ್ತರ ಕಾರ್ಯಕ್ರಮಗಳು',
    
    // Footer
    'footer.about.title': 'ಎನ್‌ಡಿಸಿ ಬಸವನಗುಡಿ ಬಗ್ಗೆ',
    'footer.about.desc': 'ನ್ಯಾಷನಲ್ ಡಿಗ್ರಿ ಕಾಲೇಜು, ಬಸವನಗುಡಿ ೧೯೬೪ರಿಂದ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣದ ಮೂಲಾಧಾರವಾಗಿದೆ.',
    'footer.quick.links': 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    'footer.academics.links': 'ಶೈಕ್ಷಣಿಕ',
    'footer.contact.title': 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
    'footer.address': 'ಪಂಪಾ ಮಹಾಕವಿ ರಸ್ತೆ, ಬಸವನಗುಡಿ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ ೫೬೦೦೦೪',
    'footer.phone': '+೯೧ ೮೦ ೨೬೬೩ ೪೪೪೫',
    'footer.email': 'info@ndcbasavanagudi.edu.in',
    'footer.copyright': '© ೨೦೨೪ ನ್ಯಾಷನಲ್ ಡಿಗ್ರಿ ಕಾಲೇಜು, ಬಸವನಗುಡಿ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    
    // Departments
    'departments.bca': 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಕಂಪ್ಯೂಟರ್ ಅಪ್ಲಿಕೇಶನ್ಸ್',
    'departments.bcom': 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಕಾಮರ್ಸ್',
    'departments.ba': 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಆರ್ಟ್ಸ್',
    'departments.bsc': 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಸೈನ್ಸ್',
    'departments.mca': 'ಮಾಸ್ಟರ್ ಆಫ್ ಕಂಪ್ಯೂಟರ್ ಅಪ್ಲಿಕೇಶನ್ಸ್',
    'departments.mcom': 'ಮಾಸ್ಟರ್ ಆಫ್ ಕಾಮರ್ಸ್',
    'departments.ma': 'ಮಾಸ್ಟರ್ ಆಫ್ ಆರ್ಟ್ಸ್',
    'departments.msc': 'ಮಾಸ್ಟರ್ ಆಫ್ ಸೈನ್ಸ್'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
