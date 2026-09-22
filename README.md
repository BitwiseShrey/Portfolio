# Shreyansh Uttam — Personal Brand Portfolio Website

> **Positioning**: Product-minded Computer Science & AI/ML student at VIT Bhopal turning ideas into products, communities, and experiences.  
> **Core Identity**: Product × Technology × Leadership × Entrepreneurship

---

## ⚡ Quick Start

### 1. Run in Development Mode
Double click `run_website.bat` or run in terminal:
```bash
npm.cmd run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm.cmd run build
```
Creates an optimized static bundle in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, **Cloudflare Pages**, or **AWS S3 + CloudFront**.

### 3. Preview Production Build
```bash
npm.cmd run preview
```

---

## 🎨 Visual Identity & Design Principles
- **Theme**: Deep Obsidian (`#070709`) and Graphite surfaces with subtle glassmorphic borders (`border-white/10`).
- **Accent**: Electric AWS / Tech Violet (`#8b5cf6`, `#a855f7`) connecting to cloud and acoustic intelligence.
- **Editorial Typography**: High contrast, crisp hierarchy using *Plus Jakarta Sans* and *JetBrains Mono*.
- **No Generic Clichés**: No excessive neon gaming aesthetics, bloated 3D models, or AI template cards. Crafted intentionally around Shreyansh's real stories and verified achievements.

---

## 📐 Sections & Information Architecture

1. **Navigation Bar (`Navbar.jsx`)**: Floating glassmorphic command pill with anchor links, live status indicator, and quick LinkedIn/Connect actions.
2. **First Screen Hero (`Hero.jsx`)**: Immediate personal brand statement, portrait cutout with depth & mouse parallax, live SVIAS status ticker, and 3 verified impact metrics.
3. **Verified Numbers Bento (`StatsCounter.jsx`)**:
   - `400+` Students in AWS/community ecosystem
   - `100+` Market Research Reports authored
   - `20–25` Core community team members led
   - `5–7` Major events organized/contributed
   - `500+` Attendees at single flagship AWS event
   - `3+` Years of college & community leadership exposure
4. **Currently Building (`CurrentlyBuilding.jsx`)**: Active sprints for SVIAS accessibility product development, AWS Student Builder Group initiatives, and early-stage product discovery.
5. **"Who I Am" (`AboutWhoIAm.jsx`)**: The 4 Pillars of Shreyansh (Product Thinker, Deep-Tech Builder, Community Catalyst, Market Strategist), featuring workstation product discovery photography.
6. **Flagship Showcase: SVIAS (`SVIASShowcase.jsx`)**:
   - **Confidential Product Case Study**: High-level accessibility vision protecting all proprietary IP.
   - **Cinematic Problem Sequence**: *Noisy Environment* → *Difficult to Follow Speech* → *SVIAS Intelligence* → *Clearer Communication*.
   - **Broad Market & Use Cases**: Everyday social inclusion, educational lecture halls, enterprise collaboration, and next-gen hearables.
   - **Confidential Prototype Showcase**: Conceptual product visualizer with private prototype status.
7. **Selected Technical Projects (`ProjectsSection.jsx`)**:
   - **NEXUS**: AI-powered resource & supply decision-support platform (coal, oil, gas, electricity, water, minerals) with risk prediction focus.
   - **Real-Time Threat Prediction**: Multi-modal edge ML safety telemetry.
   - **Driver's Drowsiness Detection**: OpenCV + TensorFlow facial landmark tracking.
8. **AWS Leadership Journey (`AWSLeadership.jsx`)**: Clearly presented as a student community leadership/volunteer role at VIT Bhopal, detailing team coordination and 500+ student summit.
9. **Event Showcase & Masonry (`EventShowcase.jsx`)**:
   - Health Hackathon 2026 (VIT Bhopal × Johns Hopkins University) — Lead Coordinator.
   - AWS Student Builder Group flagship summits & labs.
   - Neon Badminton (Advitya 2026 fest experiential production).
   - Natural & Trekking Club (General Secretary).
   - Bashcraft (Social Media Lead).
   - Fullscreen interactive **Lightbox Modal** (`LightboxModal.jsx`).
10. **Cinematic Media Section (`EventVideos.jsx`)**: "Things I've Built. Events I've Led." with video player cards and clean drop-in architecture.
11. **Research Experience (`ResearchExperience.jsx`)**: MRFR / Wanstats Research Associate Intern (100+ reports across 7 sectors, TAM/SAM sizing, competitive benchmarking).
12. **Chronological Leadership Timeline (`LeadershipTimeline.jsx`)**: Interactive scroll-linked track from 2024 to 2026.
13. **Product & Business Mindset (`ProductMindset.jsx`)**: The 5 Strategic Questions Framework ("I don't just ask how to build it. I ask why it should exist.").
14. **Beyond the Resume (`BeyondResume.jsx`)**: Competitive cricket tournaments, strategic gaming, outdoor expeditions, and community energy.
15. **Education & Academic Foundations (`EducationSection.jsx`)**: B.Tech CSE (AI & ML) at VIT Bhopal (CGPA 8.2) & Guru Har Rai Academy, Kanpur.
16. **Learning & Credentials (`CredentialsSection.jsx`)**: Compact, premium section showcasing only the 5 approved credentials (Google PM Foundations, Google PM Initiation, UPenn Business Foundations, Reliance Foundation Market Research, IBM DevOps/Agile).
17. **High-Conversion Contact & Footer (`ContactFooter.jsx`)**: One-click email copy with visual confirmation toast, verified LinkedIn, and GitHub links.

---

## 📁 Project Directory Structure

```
New folder/
├── public/
│   └── assets/
│       ├── ASSETS_GUIDE.md             # Detailed guide for dropping in media
│       ├── audio/                      # Real SVIAS audio demo files (.wav)
│       ├── images/
│       │   ├── events/                 # Event photos (Hackathon, AWS, etc.)
│       │   ├── logos/                  # SBG & SVIAS logos
│       │   └── profile/                # Portrait & casual pictures
│       ├── resume/                     # PDF Resume
│       └── videos/                     # Ready for MP4 clips
├── src/
│   ├── components/                     # All 15 modular UI components
│   ├── data/
│   │   └── portfolioData.js            # Single source of truth for all verified data
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── dist/                               # Production static bundle (after npm run build)
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── run_website.bat
```

---

## 🔄 Replacing Photos, Audio & Videos

All assets are managed in `public/assets/`. See [`public/assets/ASSETS_GUIDE.md`](public/assets/ASSETS_GUIDE.md) for filenames.
- To change text or stats: edit [`src/data/portfolioData.js`](src/data/portfolioData.js).
- To replace profile photo: replace `public/assets/images/profile/shreyansh-portrait.png`.
- To drop in event videos: add `.mp4` files into `public/assets/videos/`.
