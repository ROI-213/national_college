import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AboutLayout } from '@/components/layout/AboutLayout';
import { allEvents, EventData, EventGalleryImage } from '@/data/eventsData';
import { fetchEventGallery } from '@/services/eventGalleryService';
import { fetchEventBySlug } from '@/services/eventsService';
import { Calendar, Clock, MapPin, ArrowLeft, X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const staticEvent = allEvents.find(e => e.slug === slug);
  const [event, setEvent] = useState<EventData | null>(staticEvent || null);
  const [loadingEvent, setLoadingEvent] = useState(!staticEvent);
  const [images, setImages] = useState<EventGalleryImage[]>(staticEvent?.images || []);

  useEffect(() => {
    let isMounted = true;
    if (slug) {
      fetchEventBySlug(slug).then(dbEvt => {
        if (!isMounted) return;
        if (dbEvt) {
          setEvent({
            slug: dbEvt.slug,
            title: dbEvt.title,
            pageTitle: dbEvt.page_title,
            badge: dbEvt.badge,
            subtitle: dbEvt.subtitle,
            date: dbEvt.date,
            sortDate: dbEvt.sort_date,
            monthYear: dbEvt.month_year,
            time: dbEvt.time,
            venue: dbEvt.venue,
            description: dbEvt.description,
            paragraphs: Array.isArray(dbEvt.paragraphs) ? dbEvt.paragraphs : [],
          });
        }
        setLoadingEvent(false);
      }).catch(() => {
        if (isMounted) setLoadingEvent(false);
      });
    }
    return () => { isMounted = false; };
  }, [slug]);

  useEffect(() => {
    let isMounted = true;
    if (slug) {
      fetchEventGallery(slug).then(imgs => {
        if (isMounted && imgs && imgs.length > 0) {
          setImages(imgs);
        }
      });
    }

    const handleUpdate = (e: any) => {
      if (e.detail?.slug === slug) {
        fetchEventGallery(slug).then(imgs => {
          if (isMounted && imgs) setImages(imgs);
        });
      }
    };
    window.addEventListener('event-gallery-updated', handleUpdate);
    return () => {
      isMounted = false;
      window.removeEventListener('event-gallery-updated', handleUpdate);
    };
  }, [slug]);

  const prevImage = () => setLightbox(i => (i! - 1 + images.length) % images.length);
  const nextImage = () => setLightbox(i => (i! + 1) % images.length);

  if (loadingEvent) {
    return (
      <AboutLayout pageTitle="Loading Event..." breadcrumbPath="Events / Loading">
        <div className="py-20 flex justify-center items-center">
          <Loader2 size={36} className="animate-spin text-logo-navy" />
        </div>
      </AboutLayout>
    );
  }

  if (!event) {
    return (
      <AboutLayout pageTitle="Event Details" breadcrumbPath="Events / Not Found">
        <div className="py-20 text-center container mx-auto px-4">
          <h2 className="text-2xl font-bold text-logo-navy mb-4">Event Not Found</h2>
          <p className="text-slate-500 mb-6">The requested event could not be found or may have been moved.</p>
          <Button onClick={() => navigate('/events')} className="bg-logo-navy text-white">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Events
          </Button>
        </div>
      </AboutLayout>
    );
  }

  return (
    <AboutLayout
      pageTitle={event.pageTitle}
      breadcrumbPath={`Events / ${event.pageTitle}`}
      heroContent={
        <div className="max-w-4xl mx-auto space-y-3">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {event.badge}
            </span>
          </div>
          <h2 className="text-lg md:text-2xl font-medium text-white/95 leading-relaxed">
            {event.subtitle}
          </h2>
          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-white/90 justify-center items-center pt-1">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Calendar size={14} className="text-white/80" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Clock size={14} className="text-white/80" />
              {event.time}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <MapPin size={14} className="text-white/80" />
              {event.venue}
            </span>
          </div>
        </div>
      }
    >
      {/* Back Link Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-logo-navy hover:text-logo-blue transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Events</span>
          </Link>
        </div>
      </div>

      {/* About the Event Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-logo-navy mb-6">About the Event</h2>

          <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
            {event.paragraphs.map((p, index) => (
              <p key={index} className={index === 0 ? 'font-medium text-slate-800' : 'text-slate-600'}>
                {p}
              </p>
            ))}
          </div>

          {/* Event Meta Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {[
              { icon: Calendar, label: 'Date', value: event.date },
              { icon: Clock, label: 'Time', value: event.time },
              { icon: MapPin, label: 'Venue', value: event.venue },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-blue-50/70 border border-blue-100 rounded-xl px-4 py-3.5"
              >
                <div className="w-10 h-10 bg-logo-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-logo-navy" />
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

      {/* Event Gallery (if images exist) */}
      {images.length > 0 && (
        <section id="gallery" className="py-14 bg-gray-50 scroll-mt-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-logo-navy mb-2">Event Gallery</h2>
              <p className="text-gray-500 text-sm">Glimpses from {event.title}</p>
            </div>

            {/* 4-column responsive grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto">
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 px-2.5 py-1 rounded-md">
                      View
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightbox !== null && images.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          <button
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={e => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={e => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </AboutLayout>
  );
};

export default EventDetail;
