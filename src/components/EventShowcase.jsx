import React, { useState } from 'react';
import { FEATURED_EVENTS, MORE_EXPERIENCES } from '../data/portfolioData';
import { Images, ArrowRight, X, Compass, Megaphone, Calendar } from 'lucide-react';
import LightboxModal from './LightboxModal';
import { useInView } from './ScrollReveal';

export default function EventShowcase() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, once: true });

  // Map individual featured events
  const awsEvent = FEATURED_EVENTS.find(e => e.id === 'aws-student-builder-group') || FEATURED_EVENTS[1];
  const healthHack = FEATURED_EVENTS.find(e => e.id === 'health-hackathon-2026') || FEATURED_EVENTS[0];
  const workshopEvent = FEATURED_EVENTS.find(e => e.id === 'aws-workshops') || FEATURED_EVENTS[3];
  const neonBadminton = FEATURED_EVENTS.find(e => e.id === 'neon-badminton-2026') || FEATURED_EVENTS[2];

  const eventList = [
    {
      event: healthHack,
      badge: "Lead Coordinator · Feb 2026",
      title: healthHack.title,
      caption: healthHack.caption
    },
    {
      event: awsEvent,
      badge: "Chapter Leader · 500+ Attendees",
      title: "AWS Student Community Assembly",
      caption: awsEvent.caption
    },
    {
      event: neonBadminton,
      badge: "Co-Organizer · Advitya 2026",
      title: neonBadminton.title,
      caption: neonBadminton.caption
    },
    {
      event: workshopEvent,
      badge: "Lead Instructor · Hands-on Labs",
      title: workshopEvent.title,
      caption: workshopEvent.caption
    }
  ];

  return (
    <section id="events" ref={ref} className="py-20 md:py-32 border-t border-white/[0.08] bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header with Reveal */}
        <div 
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -20px, 0)'
          }}
        >
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Events &amp; Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Events Spearheaded &amp; Led
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              From 500+ campus cloud summits and university hackathons to large-scale fest productions.
            </p>
          </div>

          <button
            onClick={() => setIsMoreModalOpen(true)}
            data-cursor="open"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-purple-300 hover:text-white transition-colors px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/25 self-start sm:self-auto"
          >
            <span>More Experiences</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Editorial 2x2 Image Grid with Masked Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {eventList.map(({ event, badge, title, caption }, idx) => (
            <div
              key={event.id}
              data-spotlight
              data-cursor="view"
              onClick={() => setSelectedEvent(event)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#09090f] border border-white/10 hover:border-purple-500/40 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-950/25 flex flex-col"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 32px, 0)',
                clipPath: inView ? 'inset(0% 0% 0% 0%)' : 'inset(8% 0% 0% 0%)',
                transitionDelay: `${idx * 130 + 100}ms`
              }}
            >
              {/* Dynamic Cursor Spotlight Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: 'radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
                }}
              />

              {/* Symmetrical 16:10 Image Container with Zoom Parallax */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <img
                  src={event.image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-black/30"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-purple-300">
                  {badge}
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <Images className="w-3.5 h-3.5 text-purple-400" />
                  <span>{event.gallery?.length || 1} {event.gallery?.length === 1 ? 'Photo' : 'Photos'}</span>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="p-5 sm:p-6 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                    {caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>{event.host}</span>
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    <span>View Gallery</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedEvent && (
        <LightboxModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {/* More Experiences Modal */}
      {isMoreModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="absolute inset-0" onClick={() => setIsMoreModalOpen(false)}></div>

          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0d16] border border-purple-500/30 p-6 sm:p-8 shadow-2xl z-10 space-y-5">
            
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">
                  Archive &bull; Full Roster
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  More Events &amp; Experiences
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Extracurricular execution, university clubs, and competitive gaming.
                </p>
              </div>
              <button
                onClick={() => setIsMoreModalOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {MORE_EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-purple-400">
                    <span className="font-bold">{exp.role}</span>
                    <span className="text-zinc-500">{exp.period}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{exp.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{exp.desc}</p>
                  <div className="pt-2 text-[10px] font-mono text-zinc-500">{exp.metrics}</div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsMoreModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
              >
                Close Archive
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
