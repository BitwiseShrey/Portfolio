// Central Data Store for Shreyansh Uttam's Personal Portfolio
// Strict Privacy: Zero disclosure of SVIAS proprietary architecture or specifications.

export const PERSONAL_INFO = {
  name: "Shreyansh Uttam",
  headline: "I build ideas into products,\ncommunities & experiences.",
  subheading: "Computer Science & AI/ML student at VIT Bhopal building at the intersection of Product, Technology, and Entrepreneurship.",
  positioning: "Product • Technology • Leadership • Entrepreneurship",
  location: "Kanpur → Bhopal, India",
  email: "shreyanshuttam1225@gmail.com",
  phone: "+91 7905170950",
  linkedin: "https://linkedin.com/in/shreyansh-uttam-30a84b274",
  github: "https://github.com",
  resumeUrl: "/assets/docs/Shreyansh_Uttam_Resume.pdf",
  
  education: {
    institution: "VIT Bhopal University",
    degree: "B.Tech Computer Science & Engineering (AI & ML)",
    period: "2023 – Present"
  },

  profilePhoto: "/assets/images/profile/shreyansh-portrait.png",
  workstationPhoto: "/assets/images/profile/shreyansh-workstation.jpg"
};

// Strictly 4 Verified Impact Numbers
export const IMPACT_METRICS = [
  {
    value: "400+",
    label: "Students in AWS Community",
    subtext: "Campus ecosystem size"
  },
  {
    value: "100+",
    label: "Market Research Reports",
    subtext: "Synthesized & validated"
  },
  {
    value: "500+",
    label: "Attendees at Flagship AWS Event",
    subtext: "Single summit turnout"
  },
  {
    value: "20–25",
    label: "Core Team Members",
    subtext: "Led in student initiatives"
  }
];

// About Me: 4 Visual Labels
export const ABOUT_ME = {
  opening: "I started from Computer Science & AI/ML. Over time, I became obsessed with what happens beyond the code.",
  paragraphs: [
    "While engineering taught me how systems work under the hood, building real initiatives revealed what truly matters: understanding what users struggle with, discovering market gaps, and designing products people actually adopt.",
    "Today, I operate where product thinking, engineering feasibility, and business intuition converge — transforming complex technical ideas into intuitive tools and growing energized student communities."
  ],
  labels: [
    {
      title: "PRODUCT",
      sentence: "Finding the sharpest, simplest solution to real friction that users actually feel."
    },
    {
      title: "TECHNOLOGY",
      sentence: "Grounded Computer Science & AI/ML depth to evaluate feasibility and build rapidly."
    },
    {
      title: "LEADERSHIP",
      sentence: "Empowering 20–25 person cross-functional teams to execute high-stakes campus events."
    },
    {
      title: "ENTREPRENEURSHIP",
      sentence: "Analyzing market sizing, unit economics, and competitive advantages from Day 1."
    }
  ]
};

// SVIAS — Confidential Product Concept
export const SVIAS_DATA = {
  title: "SVIAS",
  fullTitle: "Smart Voice Isolation & Amplification System",
  tagline: "Building for a world where important voices shouldn't get lost in the noise.",
  status: "PRIVATE PROTOTYPE · IN DEVELOPMENT",
  badge: "Confidential Concept",

  problem: "Some environments make communication unnecessarily difficult.",
  problemElaboration: "Whether in crowded dining halls, echo-heavy lecture halls, or noisy collaboration spaces, human conversation frequently gets overwhelmed by background acoustic chaos.",

  vision: "SVIAS explores a technology-driven approach to making communication clearer in challenging environments.",
  visionElaboration: "An assistive product concept designed to help listeners isolate and clearly understand the intended speaker, unlocking effortless social and professional connection.",

  modalDetails: {
    problem: "Understanding spoken words in high-noise surroundings is exhausting and exclusionary. Existing solutions often amplify everything equally, exacerbating cognitive fatigue.",
    vision: "Creating an intelligent conversational listening layer that prioritizes the human voice a listener cares about, preserving conversational intimacy and clarity.",
    stage: "Private prototype in active exploration and bench testing. Architecture and technical specifications remain confidential while user testing is conducted.",
    role: "Product Concept Lead & Prototyper — formulating the user problem, target experience benchmarks, and product specifications.",
    exploring: "Accessibility pathways, low-latency device integration, assistive listening interfaces, and ergonomic form factors for daily environments."
  },

  logo: "/assets/images/logos/svias-logo-final.png"
};

// Selected Projects (Exactly 3)
export const SELECTED_PROJECTS = [
  {
    id: "nexus",
    title: "NEXUS",
    category: "AI & Decision Systems",
    role: "Risk Prediction",
    tagline: "AI-powered resource & supply decision platform.",
    contribution: "Designed multi-factor risk prediction models for geopolitical and supply shock forecasting.",
    technologies: ["AI/ML Forecasting", "Risk Modeling", "Geospatial GIS", "Python"],
    impact: "Multi-resource disruption modeling across critical energy and mineral supply chains.",
    modalDetails: {
      overview: "NEXUS is an intelligent decision platform for global resource logistics. It anticipates bottlenecks across coal, oil, gas, electricity, and mineral flows before they cascade into enterprise supply disruptions.",
      challenges: "Integrating heterogeneous telemetry and macroeconomic indicators into actionable risk indices.",
      takeaway: "Demonstrated how machine learning transforms reactive supply spreadsheets into proactive decision intelligence."
    }
  },
  {
    id: "threat-prediction",
    title: "Real-Time Threat Prediction",
    category: "Mobile Safety AI",
    role: "AI & Sensor Intelligence",
    tagline: "Mobile safety using AI & sensor intelligence.",
    contribution: "Engineered sensor-fusion anomaly models for low-latency physical distress classification.",
    technologies: ["Sensor Telemetry", "Deep Learning", "Edge Computing", "Python"],
    impact: "Autonomous hazard classification enabling automated emergency dispatch triggers.",
    modalDetails: {
      overview: "A lightweight mobile safety architecture that passively monitors multi-modal sensor telemetry (accelerometers, gyros) to identify sudden trauma, distress, or physical hazards without requiring manual user input.",
      challenges: "Minimizing false positives while operating within strict mobile battery and CPU constraints.",
      takeaway: "Showcased edge AI's capacity to protect personal safety when victims cannot manually trigger SOS alerts."
    }
  },
  {
    id: "drowsiness-detection",
    title: "Driver's Drowsiness Detection",
    category: "Computer Vision",
    role: "Vision Pipeline Engineer",
    tagline: "Computer vision for fatigue detection.",
    contribution: "Implemented facial landmark tracking to calculate real-time Eye Aspect Ratios (EAR).",
    technologies: ["OpenCV", "TensorFlow", "Computer Vision", "Python"],
    impact: "Millisecond-level driver fatigue alerting to proactively prevent highway collisions.",
    modalDetails: {
      overview: "A non-intrusive safety system continuously tracking facial landmarks, eye closure frequency, and yawning to detect micro-sleep patterns in vehicle operators.",
      challenges: "Maintaining reliable landmark tracking under low-light nighttime driving conditions.",
      takeaway: "Emphasized the critical balance between biometric model sensitivity and latency in life-critical systems."
    }
  }
];

// AWS Leadership (Hero Section)
export const AWS_LEADERSHIP_DATA = {
  title: "AWS Student Builder Group Leader",
  subtitle: "Student Community Leadership · VIT Bhopal",
  metrics: {
    students: "400+",
    team: "20–25",
    attendees: "500+"
  },
  highlights: [
    {
      title: "Community Building",
      desc: "Growing a student technology ecosystem."
    },
    {
      title: "Event Leadership",
      desc: "Planning and executing AWS workshops & flagship events."
    },
    {
      title: "Industry Coordination",
      desc: "Working with AWS representatives, speakers & professionals."
    }
  ],
  image: "/assets/images/events/aws-speakers-stage.jpg",
  logo: "/assets/images/logos/aws-sbg-vit-bhopal-official.jpg",
  progression: [
    { stage: "Campus Contributor / Tech Volunteer", desc: "Technical volunteer & campus operations" },
    { stage: "Core Team / Logistics", desc: "Workshops, speaker coordination & logistics lead" },
    { stage: "AWS Student Builder Group Leader", desc: "Heading the campus chapter & builder community" }
  ]
};

// Events & Experiences (Photography First)
export const FEATURED_EVENTS = [
  {
    id: "health-hackathon-2026",
    title: "Health Hackathon 2026",
    host: "VIT Bhopal × Johns Hopkins University",
    role: "Lead Coordinator",
    date: "Feb 2026",
    image: "/assets/images/events/health-hackathon-stage-speech.jpg",
    caption: "Delivering the opening address at the university podium in partnership with Johns Hopkins Whiting School.",
    gallery: [
      "/assets/images/events/health-hackathon-stage-speech.jpg",
      "/assets/images/events/health-hackathon-coordinator-poster.jpg",
      "/assets/images/events/health-hackathon-judging-teams.jpg",
      "/assets/images/events/shreyansh-podium-speech.jpg",
      "/assets/images/events/health-hackathon-cert.jpg"
    ]
  },
  {
    id: "aws-student-builder-group",
    title: "AWS Student Builder Group",
    host: "VIT Bhopal Chapter",
    role: "Chapter Leader",
    date: "2025 – 2026",
    image: "/assets/images/events/aws-community-auditorium.jpg",
    caption: "Convening the campus cloud community and core team in the main auditorium with guest AWS mentors.",
    gallery: [
      "/assets/images/events/aws-community-auditorium.jpg",
      "/assets/images/events/aws-speakers-stage.jpg",
      "/assets/images/events/aws-classroom-workshop.jpg"
    ]
  },
  {
    id: "neon-badminton-2026",
    title: "Neon Badminton — Advitya 2026",
    host: "Annual Tech & Cultural Fest",
    role: "Co-Organizer & Fest Lead",
    date: "2026",
    image: "/assets/images/events/neon-badminton-advitya.jpg",
    caption: "Curating a high-intensity UV neon tournament in collaboration with the Startup Club.",
    gallery: [
      "/assets/images/events/neon-badminton-advitya.jpg"
    ]
  },
  {
    id: "aws-workshops",
    title: "AWS Workshops & Masterclasses",
    host: "VIT Bhopal Tech Labs",
    role: "Speaker & Instructor",
    date: "2025 – 2026",
    image: "/assets/images/events/aws-classroom-workshop.jpg",
    caption: "Conducting hands-on cloud architecture and serverless masterclasses with active student Q&A.",
    gallery: [
      "/assets/images/events/aws-classroom-workshop.jpg"
    ]
  }
];

// Additional Experiences for the "More Experiences →" Gallery
export const MORE_EXPERIENCES = [
  {
    id: "aws-cloud-club-vp",
    title: "AWS Cloud Club",
    host: "VIT Bhopal University",
    role: "Vice President",
    period: "Feb 2025 – Jun 2026",
    type: "Student Community Leadership",
    summary: "Coordinated technical workshops, sponsorships, volunteer teams, and event operations while supporting community growth. Applied Agile and project management principles."
  },
  {
    id: "natural-trekking-club",
    title: "Nature & Trekking Club",
    host: "VIT Bhopal University",
    role: "General Secretary",
    period: "Feb 2025 – Feb 2026",
    type: "Executive Leadership",
    summary: "Led student teams and coordinated logistics, communication, and execution for campus engagement, environmental initiatives, and safety protocols."
  },
  {
    id: "bashcraft",
    title: "Bashcraft",
    host: "Student Tech Community",
    role: "Social Media Lead",
    period: "Oct 2024 – Present",
    type: "Digital Growth & Media",
    summary: "Drove digital voice, creative storytelling, technical engagement campaigns, and visual identity to amplify developer participation and community visibility."
  }
];

// Research Experience
export const RESEARCH_EXPERIENCE_DATA = {
  title: "Research Associate Intern",
  company: "Wantstats Research & Media Pvt. Ltd.",
  period: "May 2026 – Jul 2026",
  reportsCount: "100+ Market Research Reports",
  summary: "Contributed to 100+ market research reports across Healthcare, Automotive, Energy, ICT, Manufacturing, and Chemicals. Analyzed market size, competitive landscapes, company profiles, and industry trends to identify market opportunities and business insights.",
  capabilities: [
    {
      title: "Market Sizing & Forecasting",
      desc: "Building multi-year TAM/SAM/SOM models and growth trajectories."
    },
    {
      title: "Competitive Intelligence",
      desc: "Evaluating industry players, competitive landscapes, company profiles, and moat durability."
    },
    {
      title: "Industry Trend Synthesis",
      desc: "Synthesizing qualitative and quantitative research into structured strategic reports."
    }
  ],
  sectorsCount: "Healthcare, Automotive, Energy, ICT, Manufacturing & Chemicals",
  previewImage: "/assets/images/research/mrfr-report-preview.png"
};

// Product Mindset (Signature Section)
export const PRODUCT_MINDSET_DATA = {
  quote: "I don't just ask how to build it. I ask why it should exist.",
  principles: [
    {
      id: "user",
      name: "USER",
      question: "What problem are they actually facing?",
      desc: "Identifying latent friction that users experience daily rather than building superficial features."
    },
    {
      id: "market",
      name: "MARKET",
      question: "Is the problem meaningful enough?",
      desc: "Assessing market size, structural urgency, and willingness to adopt before writing code."
    },
    {
      id: "product",
      name: "PRODUCT",
      question: "What's the simplest useful solution?",
      desc: "Designing an intuitive, friction-free core loop that delivers instant, unambiguous value."
    },
    {
      id: "technology",
      name: "TECHNOLOGY",
      question: "Can we build it reliably?",
      desc: "Choosing stable, scalable architectures and avoiding tech over-engineering."
    },
    {
      id: "business",
      name: "BUSINESS",
      question: "Can it create sustainable value?",
      desc: "Ensuring healthy unit economics, long-term defensibility, and clear distribution advantages."
    }
  ]
};

// Beyond The Resume: Bento Data
export const BEYOND_RESUME_DATA = {
  personal: [
    {
      title: "Cricket",
      tagline: "State-Level Player · Uttar Pradesh (2019)",
      desc: "Represented Uttar Pradesh in state-level cricket competitions. Mental composure and strategic teamwork under high-pressure scenarios."
    },
    {
      title: "Gaming",
      tagline: "Tactics & Real-Time Decision Speed",
      desc: "Rapid situational adaptability, tactical problem-solving, and distributed team coordination in high-stakes environments."
    },
    {
      title: "Travel / Expeditions",
      tagline: "Nature & Trekking Club General Secretary",
      desc: "Led student teams, planned expedition routes, and enforced safety protocols across challenging terrains and outdoor workshops."
    },
    {
      title: "Community",
      tagline: "AWS SBG Leader · 400+ Students",
      desc: "Growing student builder culture, coordinating 20+ core volunteers, and executing 500+ attendee university summits."
    }
  ],

  education: {
    institution: "VIT Bhopal University",
    degree: "B.Tech Computer Science & Engineering (AI & ML)",
    period: "2023 – Present"
  },

  credentials: [
    {
      issuer: "Google",
      title: "Foundations of Project Management",
      year: "2025"
    },
    {
      issuer: "Google",
      title: "Project Initiation: Starting a Successful Project",
      year: "2025"
    },
    {
      issuer: "UPenn",
      title: "Business Foundations Specialization",
      year: "2025"
    },
    {
      issuer: "Reliance Foundation",
      title: "Certificate Course in Market Research",
      year: "2026"
    },
    {
      issuer: "IBM",
      title: "DevOps, Agile & Design Thinking",
      year: "2025"
    }
  ]
};

// Contact Info
export const CONTACT_DATA = {
  headline: "Let's build something meaningful.",
  closing: "Still building. Still learning. Still looking for problems worth solving.",
  location: "Kanpur → Bhopal, India",
  email: "shreyanshuttam1225@gmail.com",
  phone: "+91 7905170950",
  linkedin: "https://linkedin.com/in/shreyansh-uttam-30a84b274",
  github: "https://github.com",
  resumeUrl: "/assets/docs/Shreyansh_Uttam_Resume.pdf"
};
