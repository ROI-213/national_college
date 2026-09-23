import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";
import Index from "./pages/Index";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MCAAdminDashboard from "./pages/admin/MCAAdminDashboard";
import EventGalleryManager from "./pages/admin/EventGalleryManager";
import EventManager from "./pages/admin/EventManager";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CollegeDayDetail from "./pages/CollegeDayDetail";
import EventDetail from "./pages/EventDetail";

// About Pages
import AboutCollege from "./pages/about/AboutCollege";
import AboutVisionMission from "./pages/about/VisionMission";
import PrincipalMessagePage from "./pages/about/PrincipalMessagePage";
import CollegeManagement from "./pages/about/CollegeManagement";
import Faculties from "./pages/about/Faculties";
import BengaluruCampus from "./pages/about/BengaluruCampus";
import InstitutionMentor from "./pages/about/InstitutionMentor";
import SocietyOfNationalCollege from "./pages/about/SocietyOfNationalCollege";
import VillageAdoption from "./pages/about/VillageAdoption";

// Academics Pages
import AcademicsHome from "./pages/academics/AcademicsHome";
import DepartmentsOverview from "./pages/academics/DepartmentsOverview";
import GraduateOverview from "./pages/academics/GraduateOverview";
import PostgraduateOverview from "./pages/academics/PostgraduateOverview";
import CertificateOverview from "./pages/academics/CertificateOverview";
import BAProgram from "./pages/academics/graduate/BAProgram";
import BScAnimation from "./pages/academics/graduate/BScAnimation";
import BScProgram from "./pages/academics/graduate/BScProgram";
import BComLogistics from "./pages/academics/graduate/BComLogistics";
import BComProgram from "./pages/academics/graduate/BComProgram";
import BBAProgram from "./pages/academics/graduate/BBAProgram";
import BCAProgram from "./pages/academics/graduate/BCAProgram";
import MComProgram from "./pages/academics/postgraduate/MComProgram";
import MCAProgram from "./pages/academics/postgraduate/MCAProgram";

import KannadaDepartment from "./pages/academics/departments/KannadaDepartment";
import EnglishDepartment from "./pages/academics/departments/EnglishDepartment";
import HindiDepartment from "./pages/academics/departments/HindiDepartment";
import SanskritDepartment from "./pages/academics/departments/SanskritDepartment";
import AnimationDepartment from "./pages/academics/departments/AnimationDepartment";
import EconomicsDepartment from "./pages/academics/departments/EconomicsDepartment";
import SociologyDepartment from "./pages/academics/departments/SociologyDepartment";
import PoliticalScienceDepartment from "./pages/academics/departments/PoliticalScienceDepartment";
import ElectronicsDepartment from "./pages/academics/departments/ElectronicsDepartment";
import MathematicsDepartment from "./pages/academics/departments/MathematicsDepartment";
import ZoologyDepartment from "./pages/academics/departments/ZoologyDepartment";
import BotanyDepartment from "./pages/academics/departments/BotanyDepartment";
import PhysicsDepartment from "./pages/academics/departments/PhysicsDepartment";
import ChemistryDepartment from "./pages/academics/departments/ChemistryDepartment";
import ComputerScienceDepartment from "./pages/academics/departments/ComputerScienceDepartment";
import JournalismDepartment from "./pages/academics/departments/JournalismDepartment";
import CommerceDepartment from "./pages/academics/departments/CommerceDepartment";
import ManagementDepartment from "./pages/academics/departments/ManagementDepartment";
import HumanitiesDepartment from "./pages/academics/departments/HumanitiesDepartment";
import LanguagesDepartment from "./pages/academics/departments/LanguagesDepartment";
import PsychologyDepartment from "./pages/academics/departments/PsychologyDepartment";

// Admissions Pages
import AdmissionsHome from "./pages/admissions/AdmissionsHome";
import AdmissionGuidelines from "./pages/admissions/AdmissionGuidelines";
import FeeStructure from "./pages/admissions/FeeStructure";
import Scholarships from "./pages/admissions/Scholarships";
import OnlineApplication from "./pages/admissions/OnlineApplication";
import MCAApplication from "./pages/admissions/MCAApplication";
import AcademicCalendar from "./pages/admissions/AcademicCalendar";
import ManagementScholarship from "./pages/admissions/ManagementScholarship";
import ScholarshipPolicy from "./pages/admissions/ScholarshipPolicy";
import FeeRefundPolicy from "./pages/admissions/FeeRefundPolicy";

// Infrastructure Pages
import InfrastructureHome from "./pages/infrastructure/InfrastructureHome";
import CampusOverview from "./pages/infrastructure/CampusOverview";
import Library from "./pages/infrastructure/Library";
import Auditorium from "./pages/infrastructure/Auditorium";
import SportsFacilities from "./pages/infrastructure/SportsFacilities";
import HostelFacility from "./pages/infrastructure/HostelFacility";
import ProfessionalStudio from "./pages/infrastructure/ProfessionalStudio";
import Classrooms from "./pages/infrastructure/Classrooms";
import MiniAuditorium from "./pages/infrastructure/MiniAuditorium";
import ResearchActivities from "./pages/research/ResearchActivities";
import FacultyPublications from "./pages/research/FacultyPublications";
import FacultyAchievements from "./pages/research/FacultyAchievements";
import StudentAchievements from "./pages/research/StudentAchievements";
import ResearchEnrollment from "./pages/research/ResearchEnrollment";
import ResearchGuides from "./pages/research/ResearchGuides";
import ResearchPatents from "./pages/research/ResearchPatents";
import IndustrialCollaboration from "./pages/placements/IndustrialCollaboration";

// Placements Pages
import PlacementsOverview from "./pages/placements/PlacementsOverview";
import PlacementStatistics from "./pages/placements/PlacementStatistics";
import RecruitingCompanies from "./pages/placements/RecruitingCompanies";
import PlacementTraining from "./pages/placements/PlacementTraining";
import DirectorMessage from "./pages/placements/DirectorMessage";
import VisionMission from "./pages/placements/VisionMission";
import PlacementActivities from "./pages/placements/PlacementActivities";

// Student Services Pages
import StudentSupport from "./pages/student-services/StudentSupport";
import ClubsOverview from "./pages/student-services/ClubsOverview";
import NCC from "./pages/student-services/NCC";
import NSS from "./pages/student-services/NSS";
import AntiRaggingCell from "./pages/student-services/AntiRaggingCell";
import AlumniAssociation from "./pages/student-services/AlumniAssociation";
import CulturalClub from "./pages/student-services/CulturalClub";
import DramaTheatre from "./pages/student-services/DramaTheatre";
import LiteraryClub from "./pages/student-services/LiteraryClub";
import ScienceClub from "./pages/student-services/ScienceClub";
import SocialScienceClub from "./pages/student-services/SocialScienceClub";
import JournoClub from "./pages/student-services/JournoClub";
import HumanitiesClub from "./pages/student-services/HumanitiesClub";
import CommitteesOverview from "./pages/student-services/CommitteesOverview";
import HostelCommittee from "./pages/student-services/HostelCommittee";
import WebsiteCommittee from "./pages/student-services/WebsiteCommittee";
import FilmClub from "./pages/student-services/FilmClub";
import HealthClub from "./pages/student-services/HealthClub";
import SportsClub from "./pages/student-services/SportsClub";
import SCSTCell from "./pages/student-services/SCSTCell";
import StudentCouncil from "./pages/student-services/StudentCouncil";
import DisciplinaryCommittee from "./pages/student-services/DisciplinaryCommittee";
import PlacementCell from "./pages/student-services/PlacementCell";
import ResearchPromotionCell from "./pages/student-services/ResearchPromotionCell";
import Magazine from "./pages/student-services/Magazine";
import RedCross from "./pages/student-services/RedCross";
import InformationTechnology from "./pages/student-services/InformationTechnology";
import AmbedkarStudyCentre from "./pages/student-services/AmbedkarStudyCentre";
import WomenStudies from "./pages/student-services/WomenStudies";
import IqacCommittee from "./pages/student-services/IqacCommittee";
import MediaCommittee from "./pages/student-services/MediaCommittee";
import HygieneCommittee from "./pages/student-services/HygieneCommittee";
import ComputerizationCommittee from "./pages/student-services/ComputerizationCommittee";
import StudentWelfare from "./pages/student-services/StudentWelfare";
import EqualOpportunities from "./pages/student-services/EqualOpportunities";
import HumanRights from "./pages/student-services/HumanRights";
import GrievanceCell from "./pages/student-services/GrievanceCell";
import StudentAidFund from "./pages/student-services/StudentAidFund";
import SexualHarassmentCell from "./pages/student-services/SexualHarassmentCell";
import EcsAssociation from "./pages/student-services/EcsAssociation";

// Other Pages
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import News from "./pages/News";
import Videos from "./pages/Videos";
import PressPublications from "./pages/PressPublications";
import NaacIqac from "./pages/NaacIqac";
import Sitemap from "./pages/Sitemap";
import Nirf from "./pages/Nirf";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Accessibility from "./pages/Accessibility";
import MouPage from "./pages/mandatory-disclosure/MouPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* About Routes */}
          <Route path="/about/college" element={<AboutCollege />} />
          <Route path="/about/vision-mission" element={<AboutVisionMission />} />
          <Route path="/about/institution-mentor" element={<InstitutionMentor />} />
          <Route path="/about/governing-body" element={<SocietyOfNationalCollege />} />
          <Route path="/about/society" element={<SocietyOfNationalCollege />} />
          <Route path="/about/principal-message" element={<PrincipalMessagePage />} />
          <Route path="/college-management" element={<CollegeManagement />} />
          <Route path="/about/management" element={<Navigate to="/college-management" replace />} />
          <Route path="/about/faculties" element={<Faculties />} />
          <Route path="/about/campus" element={<BengaluruCampus />} />
          <Route path="/about/village-adoption" element={<VillageAdoption />} />
          
          {/* Academics Routes */}
          <Route path="/academics" element={<AcademicsHome />} />
          <Route path="/academics/departments" element={<DepartmentsOverview />} />
          <Route path="/academics/graduate" element={<GraduateOverview />} />
          <Route path="/academics/postgraduate" element={<PostgraduateOverview />} />
          <Route path="/academics/certificate" element={<CertificateOverview />} />
          <Route path="/academics/graduate/ba" element={<BAProgram />} />
          <Route path="/academics/graduate/bsc-animation" element={<BScAnimation />} />
          <Route path="/academics/graduate/bsc" element={<BScProgram />} />
          <Route path="/academics/graduate/bcom-logistics" element={<BComLogistics />} />
          <Route path="/academics/graduate/bcom" element={<BComProgram />} />
          <Route path="/academics/graduate/bba-business-analytics" element={<BBAProgram />} />
          <Route path="/academics/graduate/bba" element={<Navigate to="/academics/graduate/bba-business-analytics" replace />} />
          <Route path="/academics/graduate/bca" element={<BCAProgram />} />
          <Route path="/academics/postgraduate/mcom" element={<MComProgram />} />
          <Route path="/academics/postgraduate/mca" element={<MCAProgram />} />
          <Route path="/academics/departments/kannada" element={<KannadaDepartment />} />
          <Route path="/academics/departments/english" element={<EnglishDepartment />} />
          <Route path="/academics/departments/hindi" element={<HindiDepartment />} />
          <Route path="/academics/departments/sanskrit" element={<SanskritDepartment />} />
          <Route path="/academics/departments/animation" element={<AnimationDepartment />} />
          <Route path="/academics/departments/economics" element={<EconomicsDepartment />} />
          <Route path="/academics/departments/sociology" element={<SociologyDepartment />} />
          <Route path="/academics/departments/political-science" element={<PoliticalScienceDepartment />} />
          <Route path="/academics/departments/electronics" element={<ElectronicsDepartment />} />
          <Route path="/academics/departments/mathematics" element={<MathematicsDepartment />} />
          <Route path="/academics/departments/zoology" element={<ZoologyDepartment />} />
          <Route path="/academics/departments/botany" element={<BotanyDepartment />} />
          <Route path="/academics/departments/physics" element={<PhysicsDepartment />} />
          <Route path="/academics/departments/chemistry" element={<ChemistryDepartment />} />
          <Route path="/academics/departments/computer-science" element={<ComputerScienceDepartment />} />
          <Route path="/academics/departments/journalism" element={<JournalismDepartment />} />
          <Route path="/academics/departments/commerce" element={<CommerceDepartment />} />
          <Route path="/academics/departments/management" element={<ManagementDepartment />} />
          <Route path="/academics/departments/humanities" element={<HumanitiesDepartment />} />
          <Route path="/academics/departments/languages" element={<LanguagesDepartment />} />
          <Route path="/academics/departments/psychology" element={<PsychologyDepartment />} />
          
          {/* Admissions Routes */}
          <Route path="/admissions" element={<AdmissionsHome />} />
          <Route path="/admissions/guidelines" element={<AdmissionGuidelines />} />
          <Route path="/admissions/fee-structure" element={<FeeStructure />} />
          <Route path="/admissions/scholarships" element={<Scholarships />} />
          <Route path="/admissions/online-application" element={<OnlineApplication />} />
          <Route path="/admissions/mca-application" element={<MCAApplication />} />
          <Route path="/admissions/calendar" element={<AcademicCalendar />} />
          <Route path="/admissions/management-scholarship" element={<ManagementScholarship />} />
          <Route path="/admissions/scholarship-policy" element={<ScholarshipPolicy />} />
          <Route path="/admissions/fee-refund" element={<FeeRefundPolicy />} />
          
          {/* Infrastructure Routes */}
          <Route path="/infrastructure" element={<InfrastructureHome />} />
          <Route path="/infrastructure/campus" element={<CampusOverview />} />
          <Route path="/infrastructure/campus-overview" element={<CampusOverview />} />
          <Route path="/infrastructure/library" element={<Library />} />
          <Route path="/infrastructure/auditorium" element={<MiniAuditorium />} />
          <Route path="/infrastructure/sports" element={<SportsFacilities />} />
          <Route path="/infrastructure/sports-facilities" element={<SportsFacilities />} />
          <Route path="/infrastructure/hostel-facility" element={<HostelFacility />} />
          <Route path="/infrastructure/professional-studio" element={<ProfessionalStudio />} />
          <Route path="/infrastructure/classrooms" element={<Classrooms />} />
          <Route path="/infrastructure/mini-auditorium" element={<Auditorium />} />
          
          {/* Research Routes */}
          <Route path="/research/activities" element={<ResearchActivities />} />
          <Route path="/research/publications" element={<FacultyPublications />} />
          <Route path="/research/faculty-publications" element={<FacultyPublications />} />
          <Route path="/research/faculty-achievements" element={<FacultyAchievements />} />
          <Route path="/research/student-achievements" element={<StudentAchievements />} />
          <Route path="/research/enrollment" element={<ResearchEnrollment />} />
          <Route path="/research/guides" element={<ResearchGuides />} />
          <Route path="/research/patents" element={<ResearchPatents />} />
          
          {/* Placements Routes */}
          <Route path="/placements/overview" element={<PlacementsOverview />} />
          <Route path="/placements/statistics" element={<PlacementStatistics />} />
          <Route path="/placements/companies" element={<RecruitingCompanies />} />
          <Route path="/placements/training" element={<PlacementTraining />} />
          <Route path="/placements/director-message" element={<DirectorMessage />} />
          <Route path="/placements/vision-mission" element={<VisionMission />} />
          <Route path="/placements/activities" element={<PlacementActivities />} />
          <Route path="/placements/collaboration" element={<IndustrialCollaboration />} />
          
          {/* Student Services Routes */}
          <Route path="/student-services/support" element={<StudentSupport />} />
          <Route path="/student-services/clubs" element={<ClubsOverview />} />
          <Route path="/student-services/ncc" element={<NCC />} />
          <Route path="/student-services/nss" element={<NSS />} />
          <Route path="/student-services/anti-ragging" element={<AntiRaggingCell />} />
          <Route path="/student-services/alumni" element={<AlumniAssociation />} />
          <Route path="/student-services/cultural-club" element={<CulturalClub />} />
          <Route path="/student-services/drama-theatre" element={<DramaTheatre />} />
          <Route path="/student-services/literary" element={<LiteraryClub />} />
          <Route path="/student-services/science-club" element={<ScienceClub />} />
          <Route path="/student-services/social-science-club" element={<SocialScienceClub />} />
          <Route path="/student-services/journo-club" element={<JournoClub />} />
          <Route path="/student-services/humanities-club" element={<HumanitiesClub />} />
          <Route path="/student-services/committees" element={<CommitteesOverview />} />
          <Route path="/student-services/hostel-committee" element={<HostelCommittee />} />
          <Route path="/student-services/website-committee" element={<WebsiteCommittee />} />
          <Route path="/student-services/film" element={<FilmClub />} />
          <Route path="/student-services/health" element={<HealthClub />} />
          <Route path="/student-services/sports" element={<SportsClub />} />
          <Route path="/student-services/sc-st" element={<SCSTCell />} />
          <Route path="/student-services/council" element={<StudentCouncil />} />
          <Route path="/student-services/disciplinary" element={<DisciplinaryCommittee />} />
          <Route path="/student-services/placement-cell" element={<PlacementCell />} />
          <Route path="/student-services/research-promotion" element={<ResearchPromotionCell />} />
          <Route path="/student-services/magazine" element={<Magazine />} />
          <Route path="/student-services/red-cross" element={<RedCross />} />
          <Route path="/student-services/information-technology" element={<InformationTechnology />} />
          <Route path="/student-services/ambedkar-study-centre" element={<AmbedkarStudyCentre />} />
          <Route path="/student-services/women-studies" element={<WomenStudies />} />
          <Route path="/student-services/iqac-committee" element={<IqacCommittee />} />
          <Route path="/student-services/media-committee" element={<MediaCommittee />} />
          <Route path="/student-services/hygiene-committee" element={<HygieneCommittee />} />
          <Route path="/student-services/computerization" element={<ComputerizationCommittee />} />
          <Route path="/student-services/student-welfare" element={<StudentWelfare />} />
          <Route path="/student-services/equal-opportunities" element={<EqualOpportunities />} />
          <Route path="/student-services/human-rights" element={<HumanRights />} />
          <Route path="/student-services/grievance" element={<GrievanceCell />} />
          <Route path="/student-services/student-aid-fund" element={<StudentAidFund />} />
          <Route path="/student-services/ashc" element={<SexualHarassmentCell />} />
          <Route path="/student-services/ecs-association" element={<EcsAssociation />} />
          <Route path="/student-services/health-centre" element={<HealthClub />} />
          <Route path="/student-services/discipline-anti-ragging" element={<DisciplinaryCommittee />} />
          
          {/* Other Routes */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/press-publications" element={<PressPublications />} />
          <Route path="/naac-iqac" element={<NaacIqac />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/nirf" element={<Nirf />} />
          <Route path="/mandatory-disclosure/mou" element={<MouPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/accessibility" element={<Accessibility />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/mca-applications" element={<MCAAdminDashboard />} />
          <Route path="/admin/events" element={<EventManager />} />
          <Route path="/admin/event-gallery" element={<EventGalleryManager />} />

          {/* Event Detail Routes */}
          <Route path="/events/college-day-2026" element={<CollegeDayDetail />} />
          <Route path="/events/:slug" element={<EventDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <BackToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
