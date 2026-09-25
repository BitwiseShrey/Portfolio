import React from 'react';
import PortfolioIntroSequence from './components/PortfolioIntroSequence';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ShreyanshPathSpine from './components/ShreyanshPathSpine';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import AboutWhoIAm from './components/AboutWhoIAm';
import SVIASShowcase from './components/SVIASShowcase';
import ProjectsSection from './components/ProjectsSection';
import AWSLeadership from './components/AWSLeadership';
import EventShowcase from './components/EventShowcase';
import ResearchExperience from './components/ResearchExperience';
import ProductMindset from './components/ProductMindset';
import BeyondResume from './components/BeyondResume';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050507] text-[#f4f4f7] selection:bg-purple-600 selection:text-white relative">
      
      {/* Cinematic Stacked-Card & Pen Opening Sequence (Initial Load Only) */}
      <PortfolioIntroSequence />

      {/* Desktop Precision Custom Cursor */}
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar />

      {/* The Shreyansh Path — Continuous Trajectory Spine */}
      <ShreyanshPathSpine />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Impact Numbers (Horizontal Editorial Data Strip) */}
        <StatsCounter />

        {/* 3. About Me (Manifesto + Convergence Spectrum) */}
        <AboutWhoIAm />

        {/* 4. Featured Project — SVIAS (Mystery Object Concept) */}
        <SVIASShowcase />

        {/* 5. Selected Projects (Vertical Project Archive) */}
        <ProjectsSection />

        {/* 6. AWS Leadership (Photographic Chapter) */}
        <AWSLeadership />

        {/* 7. Events & Experiences (Magazine Photography Collage) */}
        <EventShowcase />

        {/* 8. Research Experience (Intelligence Desk) */}
        <ResearchExperience />

        {/* 9. Product Mindset (Interactive 5-Question Framework) */}
        <ProductMindset />

        {/* 10. Beyond The Resume (Personal Contact Sheet + Foundations) */}
        <BeyondResume />
      </main>

      {/* 11. Contact / Footer (Path Destination Terminal) */}
      <ContactFooter />

    </div>
  );
}
