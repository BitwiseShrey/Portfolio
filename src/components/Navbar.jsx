import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, ChevronRight, FileDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "SVIAS", href: "#svias", isFlagship: true },
    { name: "Projects", href: "#projects" },
    { name: "AWS Leadership", href: "#aws-leadership" },
    { name: "Events", href: "#events" },
    { name: "Research", href: "#research" },
    { name: "Mindset", href: "#mindset" },
    { name: "Beyond", href: "#beyond" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#070709]/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600/30 to-purple-950/60 border border-purple-500/30 flex items-center justify-center font-bold text-white text-xs tracking-wider group-hover:border-purple-400/70 transition-all duration-200">
            SU
          </div>
          <div>
            <span className="font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors text-sm sm:text-base block leading-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wide uppercase hidden sm:block">
              Product • Technology • Leadership
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150 ${
                link.isFlagship
                  ? 'text-purple-300 bg-purple-500/15 hover:bg-purple-500/25 font-semibold border border-purple-500/30'
                  : 'text-zinc-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {link.name}
              {link.isFlagship && <span className="ml-1 text-[9px] text-purple-400 font-mono">★</span>}
            </a>
          ))}
        </nav>

        {/* Right CTA / Quick Links */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Shreyansh_Uttam_Resume.pdf"
            className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5"
            title="Download Resume"
          >
            <span>Resume</span>
            <FileDown className="w-3.5 h-3.5 text-zinc-400" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-sm shadow-purple-600/30 transition-all duration-200 flex items-center gap-1"
          >
            <span>Connect</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090e]/95 border-b border-white/10 backdrop-blur-xl px-6 py-5 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm px-3 py-2 rounded-lg transition-all ${
                  link.isFlagship
                    ? 'text-purple-300 bg-purple-500/15 border border-purple-500/30 font-semibold'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Shreyansh_Uttam_Resume.pdf"
              className="flex-1 text-center text-xs font-medium py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300"
            >
              Resume ↓
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center text-xs font-semibold py-2 rounded-xl bg-purple-600 text-white"
            >
              Connect &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
