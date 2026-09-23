import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingApplyButton = () => {
  return (
    <Link
      to="/admissions/online-application"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-3 md:px-6 md:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="Apply for Admission"
    >
      <GraduationCap size={20} />
      <span className="text-sm md:text-base">Apply for Admission</span>
    </Link>
  );
};
