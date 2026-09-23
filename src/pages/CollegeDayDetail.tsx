import React, { useState, useEffect } from 'react';
import { AboutLayout } from '@/components/layout/AboutLayout';
import { EventGalleryImage } from '@/data/eventsData';
import { fetchEventGallery } from '@/services/eventGalleryService';
import { Calendar, Clock, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';

const defaultImages: EventGalleryImage[] = [
  {
    src: '/events/college-day-2026/college-day-1.jpg',
    alt: 'Distinguished guests at College Day 2026 – dignitary seated in the audience',
  },
  {
    src: '/events/college-day-2026/college-day-2.jpg',
    alt: 'Award distribution ceremony by the President & Chief Guest',
  },
  {
    src: '/events/college-day-2026/college-day-3.jpg',
    alt: 'Final year students celebrating at the farewell function',
  },
  {
    src: '/events/college-day-2026/college-day-4.jpg',
    alt: 'Shreenidhi G. Shastry (Sa Re Ga Ma Pa 2020 winner) with college management',
  },
  {
    src: '/events/college-day-2026/college-day-5.jpg',
    alt: 'Faculty members gathered for the College Day celebration',
  },
  {
    src: '/events/college-day-2026/college-day-6.jpg',
    alt: 'Student choir and musical performance on stage for College Day',
  },
  {
    src: '/events/college-day-2026/college-day-7.jpg',
    alt: 'Vibrant cultural dance performance by students on College Day',
  },
  {
    src: '/events/college-day-2026/college-day-8.jpg',
    alt: 'Farewell ceremony for final year students on stage',
  },
  {
    src: '/events/college-day-2026/college-day-9.jpg',
    alt: 'Felicitation of meritorious student with medal and certificate',
  },
  {
    src: '/events/college-day-2026/college-day-10.jpg',
    alt: 'Inaugural address and dignitaries on dais at Gandhi Neharu Rangamandira',
  },
  {
    src: '/events/college-day-2026/college-day-11.jpg',
    alt: 'Felicitation of Chief Guest Sri Srinivasulu, IFS with shawl, garland and silver plaque memento',
  },
  {
    src: '/events/college-day-2026/college-day-12.jpg',
    alt: 'President Dr. H. N. Subrahmanya and management presenting honor to Chief Guest',
  },
  {
    src: '/events/college-day-2026/college-day-13.jpg',
    alt: 'Presentation of silver memento plaque during College Day ceremony',
  },
  {
    src: '/events/college-day-2026/college-day-14.jpg',
    alt: 'Dignitaries standing at the inaugural table at Gandhi Neharu Rangamandira',
  },
  {
    src: '/events/college-day-2026/college-day-15.jpg',
    alt: 'Dignitaries and office bearers on stage for College Day celebration',
  },
  {
    src: '/events/college-day-2026/college-day-16.jpg',
    alt: 'Chief Guest Sri Srinivasulu, IFS and President Dr. H. N. Subrahmanya seated in audience',
  },
  {
    src: '/events/college-day-2026/college-day-17.jpg',
    alt: 'NCC cadets escorting dignitaries in ceremonial procession on red carpet',
  },
  {
    src: '/events/college-day-2026/college-day-18.jpg',
    alt: 'Management, faculty, and NCC officers gathered at campus courtyard',
  },
  {
    src: '/events/college-day-2026/college-day-19.jpg',
    alt: 'Distinguished faculty members and guests assembled on red carpet',
  },
  {
    src: '/events/college-day-2026/college-day-20.jpg',
    alt: 'NCC cadet ceremonial guard of honor welcoming Chief Guest and dignitaries on red carpet',
  },
  {
    src: '/events/college-day-2026/college-day-21.jpg',
    alt: 'Dignitaries, faculty, and NCC guard of honor lined up in campus quadrangle',
  },
  {
    src: '/events/college-day-2026/college-day-22.jpg',
    alt: 'Ceremonial procession led by NCC cadets passing the Boys Hostel block',
  },
  {
    src: '/events/college-day-2026/college-day-23.jpg',
    alt: 'Chief Guest and college management dignitaries in discussion at the conference room',
  },
  {
    src: '/events/college-day-2026/college-day-24.jpg',
    alt: 'Dignitaries on dais during the official stage launch ceremony',
  },
  {
    src: '/events/college-day-2026/college-day-25.jpg',
    alt: 'Felicitation of meritorious parents and honorees on stage with traditional shawls and mementos',
  },
  {
    src: '/events/college-day-2026/college-day-26.jpg',
    alt: 'Principal delivering the welcome address with dignitaries on dais and LED backdrop',
  },
  {
    src: '/events/college-day-2026/college-day-27.jpg',
    alt: 'Merit certificate presentation to student achiever by Sri Srinivasulu, IFS and President Dr. H. N. Subrahmanya',
  },
  {
    src: '/events/college-day-2026/college-day-28.jpg',
    alt: 'Appreciation certificate presentation to NCC officer on stage by dignitaries',
  },
  {
    src: '/events/college-day-2026/college-day-29.jpg',
    alt: 'Group photo of meritorious student awardees and performers on stage with dignitaries',
  },
  {
    src: '/events/college-day-2026/college-day-30.jpg',
    alt: 'Dignitaries sharing insights during College Day address',
  },
  {
    src: '/events/college-day-2026/college-day-31.jpg',
    alt: 'Faculty and student group celebrating College Day',
  },
  {
    src: '/events/college-day-2026/college-day-32.jpg',
    alt: 'NCC cadet escort contingent with dignitaries',
  },
  {
    src: '/events/college-day-2026/college-day-33.jpg',
    alt: 'Honoring meritorious achievers on stage',
  },
  {
    src: '/events/college-day-2026/college-day-34.jpg',
    alt: 'Distinguished gathering at Gandhi Neharu Rangamandira',
  },
  {
    src: '/events/college-day-2026/college-day-35.jpg',
    alt: 'Chief Guest addressing the gathering',
  },
  {
    src: '/events/college-day-2026/college-day-36.jpg',
    alt: 'Management representatives and guests in discussion',
  },
  {
    src: '/events/college-day-2026/college-day-37.jpg',
    alt: 'Students and staff participating in farewell event',
  },
  {
    src: '/events/college-day-2026/college-day-38.jpg',
    alt: 'Memento presentation to college management',
  },
];

const CollegeDayDetail = () => {
  const [images, setImages] = useState<EventGalleryImage[]>(defaultImages);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetchEventGallery('college-day-2026').then(imgs => {
      if (isMounted && imgs && imgs.length > 0) {
        setImages(imgs);
      }
    });

    const handleUpdate = (e: any) => {
      if (e.detail?.slug === 'college-day-2026') {
        fetchEventGallery('college-day-2026').then(imgs => {
          if (isMounted && imgs) setImages(imgs);
        });
      }
    };
    window.addEventListener('event-gallery-updated', handleUpdate);
    return () => {
      isMounted = false;
      window.removeEventListener('event-gallery-updated', handleUpdate);
    };
  }, []);

  const prev = () => setLightbox(i => (i! - 1 + images.length) % images.length);
  const next = () => setLightbox(i => (i! + 1) % images.length);

  return (
    <AboutLayout
      pageTitle="College Day 2026"
      breadcrumbPath="Events / College Day 2026"
      heroContent={
        <div className="max-w-6xl mx-auto space-y-3">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              College Day · Parents Day · Farewell 2026
            </span>
          </div>
          <h2 className="text-lg md:text-2xl font-medium text-white/95 leading-relaxed">
            College Day, Parents Day &amp; Farewell to Final Year Students
          </h2>
          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-white/90 justify-center items-center pt-1">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Calendar size={14} className="text-white/80" />
              19th May 2026
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Clock size={14} className="text-white/80" />
              10:00 AM
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <MapPin size={14} className="text-white/80" />
              Gandhi Neharu Rangamandira
            </span>
          </div>
        </div>
      }
    >

      {/* Back Link Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container mx-auto px-4 max-w-7xl">
          <a
            href="/events"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-logo-navy hover:text-logo-blue transition-colors"
          >
            ← Back to All Events
          </a>
        </div>
      </div>

      {/* Event Description */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-logo-navy mb-6">About the Event</h2>
          <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
            <p>
              The National College, Autonomous, Basavanagudi, celebrated <strong>College Day, Parents Day,
              and Farewell to Final Year Students</strong> on <strong>19th May 2026</strong> at the college premises.
            </p>
            <p>
              The function was presided over by <strong>Dr. H. N. Subrahmanya</strong>, President, NES of Karnataka (R.),
              with <strong>Sri Srinivasulu, IFS</strong>, Principal Secretary to Government, Department of Forest,
              Ecology and Environment, GOK, as the Chief Guest. The event was graced by several guests of honour
              from the National Education Society of Karnataka, along with parent representatives of outgoing final-year students.
            </p>
            <p>
              The programme celebrated student achievements over the academic year and bid farewell to the final year
              batch, with parents felicitated as part of the Parents Day observance.
            </p>
            <p>
              A special attraction of the evening was a <strong>live performance by Shreenidhi G. Shastry</strong>,
              winner of Sa Re Ga Ma Pa (2020), held at 4:30 PM, which was well received by staff, students, and parents alike.
            </p>
          </div>

          {/* Event Meta Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: Calendar, label: 'Date', value: '19th May 2026' },
              { icon: Clock, label: 'Time', value: '10:00 AM' },
              { icon: MapPin, label: 'Venue', value: 'Gandhi Neharu Rangamandira' },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3"
              >
                <div className="w-9 h-9 bg-logo-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-logo-navy" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-semibold text-logo-navy">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-12 bg-gray-50 scroll-mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-logo-navy mb-2">Event Gallery</h2>
            <p className="text-gray-500 text-sm">Glimpses from the College Day & Farewell celebration</p>
          </div>

          {/* 4-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightbox(idx)}
                className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer bg-gray-100 aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-2 py-1 rounded-md">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* Image */}
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={26} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </AboutLayout>
  );
};

export default CollegeDayDetail;
