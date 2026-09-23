import { Link } from 'react-router-dom';

export const MarqueeStrip = () => {
  const content = (
    <span className="inline-flex items-center gap-2 whitespace-nowrap px-8">
      <span>Welcome to The National College, Basavanagudi</span>
      <span className="mx-4">|</span>
      <Link
        to="/admissions/mca-application"
        className="underline underline-offset-2 hover:text-amber-300 transition-colors"
      >
        Admission Open for MCA 2026-27 Batch — Apply Now
      </Link>
      <span className="mx-4">|</span>
    </span>
  );

  return (
    <div className="w-full bg-primary overflow-hidden">
      <div className="py-2.5 text-primary-foreground font-semibold text-sm md:text-base">
        <div className="animate-marquee inline-flex">
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
};
