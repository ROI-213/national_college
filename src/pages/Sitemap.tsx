import { AboutLayout } from '../components/layout/AboutLayout';
import { ExternalLink, FileText, Users, GraduationCap, Building, MapPin, BookOpen, Briefcase, Newspaper, Award, Layers } from 'lucide-react';
import { getTotalPages } from '../data/siteRoutes';

const sitemapSections = [
  {
    title: "About",
    icon: FileText,
    links: [
      { label: "About the College", href: "/about/college" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "The Institution Mentor", href: "/about/institution-mentor" },
      { label: "Governing Body", href: "/about/governing-body" },
      { label: "College Management", href: "/college-management" },
      { label: "Principal's Message", href: "/about/principal-message" },
      { label: "Faculties", href: "/about/faculties" },
      { label: "Campus", href: "/about/campus" },
      { label: "Village Adoption", href: "/about/village-adoption" }
    ]
  },
  {
    title: "Academic Departments",
    icon: GraduationCap,
    links: [
      { label: "Departments Overview", href: "/academics/departments" },
      { label: "Commerce", href: "/academics/departments/commerce" },
      { label: "Management", href: "/academics/departments/management" },
      { label: "Humanities", href: "/academics/departments/humanities" },
      { label: "Computer Science", href: "/academics/departments/computer-science" },
      { label: "Languages", href: "/academics/departments/languages" },
      { label: "Journalism", href: "/academics/departments/journalism" },
      { label: "Psychology", href: "/academics/departments/psychology" },
      { label: "English", href: "/academics/departments/english" },
      { label: "Kannada", href: "/academics/departments/kannada" },
      { label: "Hindi", href: "/academics/departments/hindi" },
      { label: "Sanskrit", href: "/academics/departments/sanskrit" },
      { label: "Economics", href: "/academics/departments/economics" },
      { label: "Political Science", href: "/academics/departments/political-science" },
      { label: "Sociology", href: "/academics/departments/sociology" },
      { label: "Mathematics", href: "/academics/departments/mathematics" },
      { label: "Physics", href: "/academics/departments/physics" },
      { label: "Chemistry", href: "/academics/departments/chemistry" },
      { label: "Botany", href: "/academics/departments/botany" },
      { label: "Zoology", href: "/academics/departments/zoology" },
      { label: "Electronics", href: "/academics/departments/electronics" },
      { label: "Animation", href: "/academics/departments/animation" }
    ]
  },
  {
    title: "UG Programs",
    icon: BookOpen,
    links: [
      { label: "UG Programs Overview", href: "/academics/graduate" },
      { label: "B.A", href: "/academics/graduate/ba" },
      { label: "B.Sc. Animation", href: "/academics/graduate/bsc-animation" },
      { label: "B.Sc", href: "/academics/graduate/bsc" },
      { label: "B.Com - Logistics", href: "/academics/graduate/bcom-logistics" },
      { label: "B.Com", href: "/academics/graduate/bcom" },
      { label: "BBA in Business Analytics (AICTE)", href: "/academics/graduate/bba-business-analytics" },
      { label: "BCA (AICTE)", href: "/academics/graduate/bca" }
    ]
  },
  {
    title: "PG Programs",
    icon: BookOpen,
    links: [
      { label: "PG Programs Overview", href: "/academics/postgraduate" },
      { label: "M.Com", href: "/academics/postgraduate/mcom" },
      { label: "MCA (AICTE)", href: "/academics/postgraduate/mca" }
    ]
  },
  {
    title: "Admissions",
    icon: Users,
    links: [
      { label: "Admissions Home", href: "/admissions" },
      { label: "Online Application", href: "/admissions/online-application" },
      { label: "Admission Guidelines", href: "/admissions/guidelines" },
      { label: "Academic Calendar", href: "/admissions/calendar" },
      { label: "Scholarships", href: "/admissions/scholarships" },
      { label: "Management Scholarship", href: "/admissions/management-scholarship" },
      { label: "Scholarship Policy", href: "/admissions/scholarship-policy" },
      { label: "Fee Structure", href: "/admissions/fee-structure" },
      { label: "Fee Refund Policy", href: "/admissions/fee-refund" }
    ]
  },
  {
    title: "Infrastructure",
    icon: Building,
    links: [
      { label: "Infrastructure Home", href: "/infrastructure" },
      { label: "Campus Overview", href: "/infrastructure/campus-overview" },
      { label: "Library", href: "/infrastructure/library" },
      { label: "Sports Facilities", href: "/infrastructure/sports-facilities" },
      { label: "Classrooms", href: "/infrastructure/classrooms" },
      { label: "Auditorium", href: "/infrastructure/auditorium" },
      { label: "Mini Auditorium", href: "/infrastructure/mini-auditorium" },
      { label: "Professional Studio", href: "/infrastructure/professional-studio" },
      { label: "Hostel Facility", href: "/infrastructure/hostel-facility" }
    ]
  },
  {
    title: "Student Services",
    icon: Users,
    links: [
      { label: "Student Support", href: "/student-services/support" },
      { label: "Clubs Overview", href: "/student-services/clubs" },
      { label: "Committees Overview", href: "/student-services/committees" },
      { label: "NSS", href: "/student-services/nss" },
      { label: "NCC", href: "/student-services/ncc" },
      { label: "Student Council", href: "/student-services/council" },
      { label: "Alumni Association", href: "/student-services/alumni" },
      { label: "Anti-Ragging Cell", href: "/student-services/anti-ragging" },
      { label: "Grievance Cell", href: "/student-services/grievance" }
    ]
  },
  {
    title: "Research",
    icon: Award,
    links: [
      { label: "Research Activities", href: "/research/activities" },
      { label: "Faculty Publications", href: "/research/faculty-publications" },
      { label: "Faculty Achievements", href: "/research/faculty-achievements" },
      { label: "Student Achievements", href: "/research/student-achievements" },
      { label: "Research Enrollment", href: "/research/enrollment" },
      { label: "Research Guides", href: "/research/guides" },
      { label: "Research Patents", href: "/research/patents" }
    ]
  },
  {
    title: "Placements",
    icon: Briefcase,
    links: [
      { label: "Placements Overview", href: "/placements/overview" },
      { label: "Placement Statistics", href: "/placements/statistics" },
      { label: "Recruiting Companies", href: "/placements/companies" },
      { label: "Placement Training", href: "/placements/training" },
      { label: "Director's Message", href: "/placements/director-message" },
      { label: "Placement Activities", href: "/placements/activities" },
      { label: "Industrial Collaboration", href: "/placements/collaboration" }
    ]
  },
  {
    title: "Media Center",
    icon: Newspaper,
    links: [
      { label: "Events", href: "/events" },
      { label: "News", href: "/news" },
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Videos", href: "/videos" },
      { label: "Press & Publications", href: "/press-publications" }
    ]
  },
  {
    title: "Other Pages",
    icon: MapPin,
    links: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "NAAC & IQAC", href: "/naac-iqac" },
      { label: "NIRF", href: "/nirf" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Accessibility", href: "/accessibility" }
    ]
  }
];

const Sitemap = () => {
  const totalPages = getTotalPages();

  return (
    <AboutLayout pageTitle="Sitemap" breadcrumbPath="Sitemap">
      <div className="space-y-10">
        <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
          Navigate through all pages and sections of The National College website.
        </p>

        <div className="mx-auto max-w-md">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Layers size={22} className="text-primary" />
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Total Pages Available
            </p>
            <p className="mt-2 text-4xl md:text-5xl font-bold text-primary tabular-nums">
              {totalPages}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Pages across the website
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sitemapSections.map((section, index) => (
            <div key={index} className="bg-card rounded-lg border border-border shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                  <section.icon size={20} className="text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
              </div>
              
              <div className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.label}
                    <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AboutLayout>
  );
};

export default Sitemap;
