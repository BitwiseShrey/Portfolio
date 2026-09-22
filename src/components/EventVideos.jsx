import React, { useState } from 'react';
import { VIDEO_SHOWCASE } from '../data/portfolioData';
import { Play, Film, Video, Sparkles, MonitorPlay } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function EventVideos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-20 md:py-32 border-t border-white/[0.06] bg-[#09090f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <Film className="w-3.5 h-3.5 text-purple-400" />
            <span>CINEMATIC MEDIA & DEMOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Things I've Built. Events I've Led.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Short-form reels, live prototype walk-throughs, and stage moments captured in action.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEO_SHOWCASE.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="rounded-3xl bg-[#11111a] border border-white/10 hover:border-purple-500/50 overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-950/30 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="aspect-[16/9] relative bg-black/60 overflow-hidden">
                <img
                  src={video.poster}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  onError={(e) => {
                    e.target.src = "/assets/images/events/aws-event-stage.jpg";
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-purple-600/90 border border-purple-400/40 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-purple-500 transition-all duration-200">
                    <Play className="w-6 h-6 ml-0.5 fill-white text-white" />
                  </div>
                </div>

                {/* Duration / Badge Tag */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold">
                  {video.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {video.description}
                </p>

                {/* Drop-in Status Indicator */}
                <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>File: {video.videoSrc.split('/').pop()}</span>
                  <span className="text-purple-400 font-semibold">Watch Reel &rarr;</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      <LightboxModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        item={selectedVideo}
      />
    </section>
  );
}
