import React, { useEffect, useState } from 'react';
import { X, Calendar, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, item }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  // Reset active image index when item changes
  useEffect(() => {
    setActiveImgIdx(0);
  }, [item]);

  const gallery = item?.gallery && item.gallery.length > 0
    ? item.gallery
    : item?.image
      ? [item.image]
      : [];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && gallery.length > 1) {
        setActiveImgIdx((prev) => (prev + 1) % gallery.length);
      }
      if (e.key === 'ArrowLeft' && gallery.length > 1) {
        setActiveImgIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, gallery.length]);

  if (!isOpen || !item) return null;

  const currentMediaSrc = gallery[activeImgIdx] || item.image || item.poster;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in">
      {/* Background dismissal click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Content Window */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#2B124C] border border-[#854F6C]/40 shadow-2xl z-10 flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-white/20 transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Preview Header */}
        <div className="relative w-full bg-black/80 overflow-hidden flex flex-col items-center justify-center border-b border-[#854F6C]/30">
          <div className="relative w-full max-h-[52vh] flex items-center justify-center p-2 sm:p-4">
            {item.videoSrc ? (
              <video
                src={item.videoSrc}
                poster={item.poster}
                controls
                autoPlay
                className="w-full max-h-[50vh] object-contain rounded-xl"
              >
                Your browser does not support HTML5 video.
              </video>
            ) : currentMediaSrc ? (
              <img
                src={currentMediaSrc}
                alt={item.title}
                className="w-full max-h-[50vh] object-contain rounded-xl shadow-2xl"
              />
            ) : null}

            {/* Prev / Next Controls if multiple gallery photos */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImgIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-white/25 transition-all shadow-xl"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImgIdx((prev) => (prev + 1) % gallery.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-white/25 transition-all shadow-xl"
                  aria-label="Next photograph"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Counter Pill */}
                <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono text-[#DFB6B2]">
                  {activeImgIdx + 1} / {gallery.length} Photos
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Strip for Multi-Image Galleries */}
          {gallery.length > 1 && (
            <div className="w-full px-4 py-2.5 bg-black/40 border-t border-white/[0.06] flex items-center justify-center gap-2.5 overflow-x-auto">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden border transition-all shrink-0 ${
                    activeImgIdx === idx
                      ? 'border-[#DFB6B2] ring-2 ring-[#DFB6B2]/40 scale-105'
                      : 'border-[#DFB6B2]/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-md bg-[#522B5B]/60 text-[#DFB6B2] font-semibold border border-[#854F6C]/50">
              {item.category}
            </span>
            {item.date && (
              <span className="text-xs font-mono text-[#DFB6B2]/70 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </span>
            )}
            {item.role && (
              <span className="text-xs font-mono text-[#DFB6B2] bg-[#522B5B]/60 border border-[#854F6C]/50 px-2.5 py-0.5 rounded">
                Role: {item.role}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-display text-[#FBE4D8]">
              {item.title}
            </h3>
            {item.host && (
              <p className="text-sm font-medium text-[#DFB6B2] mt-1">
                {item.host}
              </p>
            )}
          </div>

          <p className="text-sm sm:text-base text-[#DFB6B2]/80 leading-relaxed">
            {item.description}
          </p>

          {item.highlights && item.highlights.length > 0 && (
            <div className="pt-4 border-t border-[#854F6C]/30">
              <span className="text-xs font-mono uppercase tracking-wider text-[#DFB6B2]/70 block mb-2.5">
                Key Event Contributions
              </span>
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-lg bg-[#190019]/60 border border-[#854F6C]/30 text-[#FBE4D8] font-medium"
                  >
                    &bull; {h}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
