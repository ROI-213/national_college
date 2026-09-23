import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AboutLayout } from '@/components/layout/AboutLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { allEvents, EventData } from '@/data/eventsData';
import { fetchAllEventsFromDB, EventRecord } from '@/services/eventsService';
import { Calendar, Clock, MapPin, Loader2 } from 'lucide-react';

// Convert DB record to EventData shape
function dbToEventData(r: EventRecord): EventData {
  return {
    slug: r.slug,
    title: r.title,
    pageTitle: r.page_title,
    badge: r.badge,
    subtitle: r.subtitle,
    date: r.date,
    sortDate: r.sort_date,
    monthYear: r.month_year,
    time: r.time,
    venue: r.venue,
    description: r.description,
    paragraphs: Array.isArray(r.paragraphs) ? r.paragraphs : [],
  };
}

const Events = () => {
  const navigate = useNavigate();
  const [dbEvents, setDbEvents] = useState<EventData[]>([]);
  const [loadingDb, setLoadingDb] = useState(true);

  const loadEvents = useCallback(async () => {
    setLoadingDb(true);
    try {
      const data = await fetchAllEventsFromDB();
      if (data && data.length > 0) {
        setDbEvents(data.map(dbToEventData));
      } else {
        // fallback to static data
        setDbEvents(allEvents);
      }
    } catch {
      setDbEvents(allEvents);
    } finally {
      setLoadingDb(false);
    }
  }, []);

  useEffect(() => { loadEvents(); }, [loadEvents]);

  // Re-load when admin creates/updates events
  useEffect(() => {
    const handler = () => loadEvents();
    window.addEventListener('events-updated', handler);
    return () => window.removeEventListener('events-updated', handler);
  }, [loadEvents]);

  // Sort events strictly date-wise (newest first)
  const sortedEvents = useMemo(() => {
    return [...dbEvents].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  }, [dbEvents]);

  const handleDetailsClick = (event: EventData) => {
    navigate(`/events/${event.slug}`);
  };

  return (
    <AboutLayout pageTitle="Events & Activities" breadcrumbPath="Events">
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-logo-navy mb-3">Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay tuned for our events, celebrations, and academic activities arranged in date and month-wise order.
            </p>
          </div>

          {loadingDb ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 size={32} className="animate-spin text-logo-navy" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {sortedEvents.map(event => (
                  <Card
                    key={event.slug}
                    className="shadow-md hover:shadow-xl transition-shadow border-border flex flex-col justify-between"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-logo-blue border border-blue-100">
                          <Calendar size={12} />
                          {event.date}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {event.time}
                        </span>
                      </div>
                      <CardTitle className="text-lg md:text-xl text-logo-navy leading-snug">
                        {event.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {event.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-border/80 text-xs md:text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar size={15} className="mr-2 text-logo-blue flex-shrink-0" />
                          <span>Date: <strong className="text-slate-700 font-medium">{event.date}</strong></span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock size={15} className="mr-2 text-logo-blue flex-shrink-0" />
                          <span>Time: <strong className="text-slate-700 font-medium">{event.time}</strong></span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin size={15} className="mr-2 text-logo-blue flex-shrink-0" />
                          <span>Venue: <strong className="text-slate-700 font-medium">{event.venue}</strong></span>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-logo-blue hover:bg-logo-navy hover:text-white font-medium"
                        onClick={() => handleDetailsClick(event)}
                      >
                        Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
          )}
        </div>
      </section>
    </AboutLayout>
  );
};

export default Events;
