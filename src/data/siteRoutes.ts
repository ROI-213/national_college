/**
 * Single source of truth for all public routes on The National College website.
 * Keep this list in sync with `src/App.tsx`.
 *
 * Mark `redirect: true` for alias paths that resolve to the same logical page
 * (so they are excluded from the unique page count shown on /sitemap).
 */

export interface SiteRoute {
  path: string;
  redirect?: boolean;
}

export const siteRoutes: SiteRoute[] = [
  // Core
  { path: '/' },
  { path: '/contact' },
  { path: '/naac-iqac' },
  { path: '/nirf' },
  { path: '/sitemap' },
  { path: '/privacy-policy' },
  { path: '/terms-of-use' },
  { path: '/accessibility' },

  // About
  { path: '/about/college' },
  { path: '/about/vision-mission' },
  { path: '/about/institution-mentor' },
  { path: '/about/governing-body' },
  { path: '/about/society', redirect: true },
  { path: '/about/principal-message' },
  { path: '/college-management' },
  { path: '/about/management', redirect: true },
  { path: '/about/faculties' },
  { path: '/about/campus' },
  { path: '/about/village-adoption' },

  // Academics overview
  { path: '/academics' },
  { path: '/academics/departments' },
  { path: '/academics/graduate' },
  { path: '/academics/postgraduate' },
  { path: '/academics/certificate' },

  // Graduate programs
  { path: '/academics/graduate/ba' },
  { path: '/academics/graduate/bsc-animation' },
  { path: '/academics/graduate/bsc' },
  { path: '/academics/graduate/bcom-logistics' },
  { path: '/academics/graduate/bcom' },
  { path: '/academics/graduate/bba-business-analytics' },
  { path: '/academics/graduate/bba', redirect: true },
  { path: '/academics/graduate/bca' },

  // Postgraduate
  { path: '/academics/postgraduate/mcom' },
  { path: '/academics/postgraduate/mca' },

  // Departments
  { path: '/academics/departments/kannada' },
  { path: '/academics/departments/english' },
  { path: '/academics/departments/hindi' },
  { path: '/academics/departments/sanskrit' },
  { path: '/academics/departments/animation' },
  { path: '/academics/departments/economics' },
  { path: '/academics/departments/sociology' },
  { path: '/academics/departments/political-science' },
  { path: '/academics/departments/electronics' },
  { path: '/academics/departments/mathematics' },
  { path: '/academics/departments/zoology' },
  { path: '/academics/departments/botany' },
  { path: '/academics/departments/physics' },
  { path: '/academics/departments/chemistry' },
  { path: '/academics/departments/computer-science' },
  { path: '/academics/departments/journalism' },
  { path: '/academics/departments/commerce' },
  { path: '/academics/departments/management' },
  { path: '/academics/departments/humanities' },
  { path: '/academics/departments/languages' },
  { path: '/academics/departments/psychology' },

  // Admissions
  { path: '/admissions' },
  { path: '/admissions/guidelines' },
  { path: '/admissions/fee-structure' },
  { path: '/admissions/scholarships' },
  { path: '/admissions/online-application' },
  { path: '/admissions/mca-application' },
  { path: '/admissions/calendar' },
  { path: '/admissions/management-scholarship' },
  { path: '/admissions/scholarship-policy' },
  { path: '/admissions/fee-refund' },

  // Infrastructure
  { path: '/infrastructure' },
  { path: '/infrastructure/campus-overview' },
  { path: '/infrastructure/campus', redirect: true },
  { path: '/infrastructure/library' },
  { path: '/infrastructure/auditorium' },
  { path: '/infrastructure/mini-auditorium' },
  { path: '/infrastructure/sports-facilities' },
  { path: '/infrastructure/sports', redirect: true },
  { path: '/infrastructure/hostel-facility' },
  { path: '/infrastructure/professional-studio' },
  { path: '/infrastructure/classrooms' },

  // Research
  { path: '/research/activities' },
  { path: '/research/faculty-publications' },
  { path: '/research/publications', redirect: true },
  { path: '/research/faculty-achievements' },
  { path: '/research/student-achievements' },
  { path: '/research/enrollment' },
  { path: '/research/guides' },
  { path: '/research/patents' },

  // Placements
  { path: '/placements/overview' },
  { path: '/placements/statistics' },
  { path: '/placements/companies' },
  { path: '/placements/training' },
  { path: '/placements/director-message' },
  { path: '/placements/vision-mission' },
  { path: '/placements/activities' },
  { path: '/placements/collaboration' },

  // Student Services
  { path: '/student-services/support' },
  { path: '/student-services/clubs' },
  { path: '/student-services/committees' },
  { path: '/student-services/ncc' },
  { path: '/student-services/nss' },
  { path: '/student-services/anti-ragging' },
  { path: '/student-services/discipline-anti-ragging' },
  { path: '/student-services/alumni' },
  { path: '/student-services/cultural-club' },
  { path: '/student-services/drama-theatre' },
  { path: '/student-services/literary' },
  { path: '/student-services/science-club' },
  { path: '/student-services/social-science-club' },
  { path: '/student-services/journo-club' },
  { path: '/student-services/humanities-club' },
  { path: '/student-services/hostel-committee' },
  { path: '/student-services/website-committee' },
  { path: '/student-services/film' },
  { path: '/student-services/health' },
  { path: '/student-services/health-centre' },
  { path: '/student-services/sports' },
  { path: '/student-services/sc-st' },
  { path: '/student-services/council' },
  { path: '/student-services/disciplinary' },
  { path: '/student-services/placement-cell' },
  { path: '/student-services/research-promotion' },
  { path: '/student-services/magazine' },
  { path: '/student-services/red-cross' },
  { path: '/student-services/information-technology' },
  { path: '/student-services/ambedkar-study-centre' },
  { path: '/student-services/ashc' },
  { path: '/student-services/computerization' },
  { path: '/student-services/ecs-association' },
  { path: '/student-services/equal-opportunities' },
  { path: '/student-services/grievance' },
  { path: '/student-services/human-rights' },
  { path: '/student-services/hygiene-committee' },
  { path: '/student-services/iqac-committee' },
  { path: '/student-services/media-committee' },
  { path: '/student-services/student-aid-fund' },
  { path: '/student-services/student-welfare' },
  { path: '/student-services/women-studies' },

  // Mandatory Disclosure
  { path: '/mandatory-disclosure/mou' },

  // Media Center
  { path: '/events' },
  { path: '/news' },
  { path: '/gallery' },
  { path: '/videos' },
  { path: '/press-publications' },
];

export const getTotalPages = (): number => {
  const unique = new Set(
    siteRoutes.filter(r => !r.redirect).map(r => r.path)
  );
  return unique.size;
};
