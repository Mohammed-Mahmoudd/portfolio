// Enhanced project data with comprehensive details for project pages

export const projects = [
  // ===== WEB PROJECTS =====
  {
  id: 'tchaikovsky-school',
  title: "Tchaikovsky School",
  year: "2025",
  category: "Education Website",
  type: "web",
  tagline: "Official website showcasing Tchaikovsky School’s programs and vision",
  description: "Modern, SEO-optimized website designed to present the school’s courses, philosophy, and activities with CMS-powered content management",

  tech: ["Next.js", "Sanity CMS", "Tailwind CSS"],

  overview: {
    problem: "The school needed a modern, professional online presence to clearly communicate its programs, values, and activities to parents and students.",
    solution: "Developed a fast, content-driven website using Sanity CMS, allowing the school to easily manage pages, courses, and announcements while maintaining strong SEO and performance.",
    role: "Full-Stack Developer – Responsible for architecture, development, CMS integration, and deployment."
  },

  techStack: {
    frontend: ["Next.js","Tailwind CSS"],
    backend: ["Sanity CMS", "Next.js API Routes"],
    tools: ["Git", "Vercel", "Sanity Studio", "Google Analytics"]
  },

  features: [
    "Content-managed pages using Sanity CMS",
    "SEO-optimized structure for better search visibility",
    "Responsive design across all devices",
    "Courses and programs showcase",
    "News and announcements section",
    "Contact and inquiry forms"
  ],

  challenges: [
    {
      problem: "Structuring CMS content to be flexible for future expansion",
      solution: "Designed reusable and scalable Sanity schemas for pages, courses, and posts"
    },
    {
      problem: "Ensuring fast load times for media-rich pages",
      solution: "Used image optimization and static generation for optimal performance"
    }
  ],

  results: {
    metrics: [
      { label: "Page Load Time", value: "< 2s" },
      { label: "SEO Score", value: "100/100" },
      { label: "Uptime", value: "99.9%" }
    ],
    impact: "Helped establish a strong digital presence for Tchaikovsky School and improved visibility for its programs."
  },

  images: [
    "/projects/ts_website.png",
    "/projects/ts_website.png",
    "/projects/ts_website.png",
  
  ],

  links: {
    live: "https://tchaikovskyschool.com",
    github: null
  }
},
  
  { 
    id: 'restaurant-laravel',
    title: "Restaurant Management System", 
    year: "2025", 
    category: "Restaurant Website",
    type: "web",
    tagline: "Full-featured restaurant website with admin dashboard",
    description: "Complete restaurant management system with menu showcase, admin dashboard, and product management",
    tech: ["Laravel", "PHP", "MySQL"],
    
    overview: {
      problem: "Restaurant needed a professional website to showcase their menu and an admin panel to manage products and orders efficiently.",
      solution: "Built a full-stack Laravel application with a customer-facing menu website and a comprehensive admin dashboard for product management, orders, and analytics.",
      role: "Full-Stack Developer - Developed both the public website and admin dashboard using Laravel framework."
    },
    
    techStack: {
      frontend: ["Blade Templates", "Bootstrap", "JavaScript", "jQuery"],
      backend: ["Laravel", "PHP", "MySQL", "Eloquent ORM"],
      tools: ["Composer", "Git", "cPanel", "phpMyAdmin"]
    },
    
    features: [
      "Product catalog with categories and filtering",
      "Admin dashboard for menu management",
      "Product CRUD operations (Create, Read, Update, Delete)",
      "Image upload and management",
      "Order management system",
      "Responsive design for all devices"
    ],
    
    challenges: [
      {
        problem: "Managing product images efficiently",
        solution: "Implemented Laravel's file storage system with image optimization and validation"
      },
      {
        problem: "Creating an intuitive admin interface",
        solution: "Built a clean dashboard with Bootstrap and Laravel Blade components for easy management"
      }
    ],
    images: ["/projects/laravel.png",],
    
    links: {
      live: null,
      github: "https://github.com/Mohammed-Mahmoudd/restaurant"
    }
  },
  
  { 
    id: 'elmetr-website',
    title: "Elmetr", 
    year: "2025", 
    category: "Legal Website",
    type: "web",
    tagline: "Empowering legal professionals with modern technology",
    description: "SEO-optimized legal services platform ranking #1 in search results",
    tech: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    
    overview: {
      problem: "Law firms struggled with online visibility and client acquisition through digital channels.",
      solution: "Developed a high-performance legal services platform with advanced SEO strategies, achieving #1 ranking in search results and attracting 1000+ active users.",
      role: "Lead Developer - Built the platform with focus on SEO optimization and user experience."
    },
    
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      backend: ["Sanity CMS", "Next.js API", "Vercel Edge Functions"],
      tools: ["Google Search Console", "Analytics", "Vercel", "Git"]
    },
    
    features: [
      "SEO-optimized architecture for top search rankings",
      "Dynamic service pages with rich content",
      "Client testimonials and case studies",
      "Contact forms with validation",
      "Blog with legal insights and updates",
      "Multi-language support (Arabic/English)"
    ],
    
    challenges: [
      {
        problem: "Achieving #1 SEO ranking in competitive legal market",
        solution: "Implemented comprehensive SEO strategy with schema markup, optimized content, and technical SEO best practices"
      },
      {
        problem: "Managing bilingual content efficiently",
        solution: "Built custom Sanity schemas with localization support and automated translation workflows"
      }
    ],
    
    results: {
      metrics: [
        { label: "Active Users", value: "1,000+" },
        { label: "SEO Ranking", value: "#1" },
        { label: "Organic Traffic", value: "+300%" },
        { label: "Conversion Rate", value: "12%" }
      ],
      impact: "Achieved #1 ranking in Google search results, driving 1000+ active users and significantly increasing client inquiries."
    },
    
    images: [
      "/projects/elmetr.png"
    ],
    
    links: {
      live: "https://elmetr.com",
      github: null
    }
  },
  
  { 
    id: 'thyroid-clinic',
    title: "Dr. Jamal Thyroid Clinic", 
    year: "2024", 
    category: "Medical Website",
    type: "web",
    tagline: "Professional medical practice website",
    description: "Healthcare website for thyroid and goiter specialist in UAE",
    tech: ["HTML5", "CSS3", "JavaScript"],
    
    overview: {
      problem: "Medical practice needed an informative website to educate patients and facilitate appointments.",
      solution: "Built a clean, accessible medical website with patient resources, treatment information, and appointment booking.",
      role: "Web Developer - Developed the complete website with focus on accessibility and user experience."
    },
    
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      backend: ["PHP", "MySQL"],
      tools: ["cPanel", "Google Maps API"]
    },
    
    features: [
      "Patient education resources",
      "Treatment information pages",
      "Online appointment booking",
      "Doctor credentials and experience",
      "Location and contact information",
      "Mobile-friendly responsive design"
    ],
    
    challenges: [
      {
        problem: "Making medical information accessible and easy to understand",
        solution: "Structured content with clear headings, simple language, and visual aids"
      }
    ],
    
    results: {
      metrics: [
        { label: "Patient Inquiries", value: "+60%" },
        { label: "Accessibility Score", value: "AA" },
        { label: "Mobile Users", value: "70%" },
        { label: "Avg. Session", value: "3.5min" }
      ],
      impact: "Increased patient inquiries by 60% and improved patient education accessibility."
    },
    
    images: [
      "/projects/clinic.png",
    ],
    
    links: {
      live: "https://www.thyroidgoiteruae.com",
      github: "https://github.com/Mohammed-Mahmoudd/Thyroid-Goiter-Ablation-Center-UAE_Website"
    }
  },
  
  { 
    id: 'alserag-construction',
    title: "Alserag Construction", 
    year: "2026", 
    category: "Construction Company",
    type: "web",
    tagline: "Showcasing excellence in construction",
    description: "Professional construction company website with project portfolio",
    tech: ["PHP", "CSS3", "JavaScript"],
    
overview: {
  problem: "Construction company needed a website to showcase projects and allow easy updates.",
  solution: "Built a dynamic site using PHP templates and frontend technologies, enabling reusable components and simple content management without a full backend.",
  role: "Full-Stack Developer - Designed and implemented frontend and reusable PHP templates for content management."
},

    
    techStack: {
      frontend: ["CSS3", "JavaScript", "Bootstrap"],
      backend: ["PHP"],
      tools: [ "Git" ]
    },
    
    features: [
      "Project portfolio with image galleries",
      "Service pages with detailed descriptions",
      "Contact form with email notifications",
      "Admin panel for content management",
      "Responsive design for mobile",
      "SEO-optimized structure"
    ],
    
    challenges: [
      {
        problem: "Managing large image galleries efficiently",
        solution: "Implemented lazy loading and image optimization with PHP processing"
      }
    ],
    
    results: {
      metrics: [
        { label: "Projects Showcased", value: "50+" },
        { label: "Client Inquiries", value: "+45%" },
        { label: "Page Views", value: "10K+/mo" },
        { label: "Load Time", value: "< 2s" }
      ],
      impact: "Increased client inquiries by 45% and established strong online portfolio presence."
    },
    
    images: [
      "/projects/elserag.png"
    ],
    
    links: {
      live: "https://el-serag.com",
      github: null
    }
  },
  { 
    id: 'haven-app',
    title: "Haven", 
    year: "2026", 
    category: "Safety & Tracking",
    type: "mobile",
    tagline: "Peace of mind for parents everywhere",
    description: "Real-time location tracking app for child safety",
    tech: ["React Native", "Expo", "Node.js"],
    
    overview: {
      problem: "Parents needed a reliable way to track their children's location for safety purposes.",
      solution: "Developed a cross-platform mobile app with real-time GPS tracking, geofencing, and instant alerts for parents.",
      role: "Full-Stack Mobile Developer - Built both mobile app and backend infrastructure."
    },
    
    techStack: {
      frontend: ["React Native", "Expo", "NativeWind", "React Navigation"],
      backend: ["Node.js", "Express", "MongoDB", "Socket.io"],
      tools: ["Expo Go", "MongoDB Atlas", "Firebase Cloud Messaging"]
    },
    
    features: [
      "Real-time GPS location tracking",
      "Geofencing with custom safe zones",
      "Instant push notifications for alerts",
      "Location history and timeline",
      "SOS emergency button",
      "Battery-efficient background tracking"
    ],
    
    challenges: [
      {
        problem: "Maintaining accurate location tracking while preserving battery life",
        solution: "Implemented smart location updates with adaptive intervals based on movement"
      },
      {
        problem: "Real-time updates for multiple users",
        solution: "Built WebSocket infrastructure with Socket.io for instant location sharing"
      }
    ],
    
    results: {
      metrics: [
        { label: "Status", value: "In Development" },
        { label: "Type", value: "Personal" },
        { label: "Platform", value: "Cross-Platform" },
        { label: "Location Accuracy", value: "95%" }
      ],
      impact: "Personal project demonstrating complex real-time geolocation capabilities and socket architecture."
    },
    
    images: [
      "/projects/haven/home.jpeg",
      "/projects/haven/map.jpeg",
      "/projects/haven/simulation.jpeg",
    ],
    
    links: {
      live: null,
      github: null
    }
  },
  { 
    id: 'edumate',
    title: "Edumate", 
    year: "2025", 
    category: "Education Tool",
    type: "web",
    tagline: "Smart study companion for students",
    description: "Interactive learning platform helping students study more effectively",
    tech: ["React", "Vite", "Tailwind CSS"],
    
    overview: {
      problem: "Students needed better tools to organize their study materials and track progress.",
      solution: "Created an interactive study platform with note-taking, flashcards, and progress tracking features.",
      role: "Frontend Developer - Built the complete React application."
    },
    
    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS"],
      backend: [],
      tools: []
    },
    
    features: [
      "Note-taking with rich text editor",
      "Flashcard creation and study mode",
      "Progress tracking and analytics",
      "Study timer with Pomodoro technique",
      "Subject organization system",
      "Cloud sync across devices"
    ],
    
    challenges: [
      {
        problem: "Real-time data synchronization across devices",
        solution: "Implemented Firebase Firestore with optimistic updates for smooth UX"
      }
    ],
    images: [
      "/projects/edumate.png",],
    
    links: {
      live: "https://edumate-bay.vercel.app",
      github: "https://github.com/Mohammed-Mahmoudd/Edumate"
    }
  },

  // ===== MOBILE PROJECTS =====
  { 
    id: 'ts-mobile',
    title: "Tchaikovsky School App", 
    year: "2025", 
    category: "Education",
    type: "mobile",
    tagline: "School management in your pocket",
    description: "Mobile app streamlining school operations for students, parents, and staff",
    tech: ["React Native", "Expo", "NativeWind", "Express"],
    
    overview: {
      problem: "School operations required multiple disconnected systems for students, parents, and administrators.",
      solution: "Built a unified mobile app that handles attendance, grades, schedules, and communication in one place.",
      role: "Full-Stack Mobile Developer - Developed the complete mobile application and backend API."
    },
    
    techStack: {
      frontend: ["React Native", "Expo", "NativeWind", "Zustand"],
      backend: ["Node.js", "Express", "PostgreSQL", "JWT"],
      tools: ["Expo", "Supabase", "Push Notifications"]
    },
    
    features: [
      "Student attendance tracking",
      "Grade and progress reports",
      "Class schedules and timetables",
      "Parent-teacher communication",
      "Assignment submissions",
      "Push notifications for updates"
    ],
    
    challenges: [
      {
        problem: "Managing different user roles (students, instructors, admin)",
        solution: "Implemented role-based access control with custom UI for each user type"
      },
      {
        problem: "Offline functionality for poor connectivity",
        solution: "Built offline-first architecture with local storage and background sync"
      }
    ],
    
    images: [
      "/projects/ts-mobileApp.png"  
    ],
    
    links: {
      live: null,
      github: null
    }
  },
  
  { 
    id: 'elmetr-app',
    title: "Elmetr Mobile", 
    year: "2025", 
    category: "Legal Tech",
    type: "mobile",
    tagline: "Legal practice management on the go",
    description: "Mobile app for lawyers to manage cases and clients efficiently",
    tech: ["React Native", "Expo", "Node.js"],
    
    overview: {
      problem: "Lawyers needed mobile access to case files, client communications, and document management.",
      solution: "Developed a comprehensive legal practice management app with case tracking, document handling, and secure client communication.",
      role: "Full-Stack Mobile Developer - Built the mobile app and integrated with existing backend systems."
    },
    
    techStack: {
      frontend: ["React Native", "Expo", "NativeWind", "React Query"],
      backend: ["Node.js", "Express", "MongoDB", "AWS S3"],
      tools: ["Expo", "MongoDB Atlas", "Stripe", "Twilio"]
    },
    
    features: [
      "Case management and tracking",
      "Secure document storage and sharing",
      "Client communication portal",
      "Appointment scheduling",
      "Billing and invoicing",
      "Task and deadline reminders"
    ],
    
    challenges: [
      {
        problem: "Ensuring data security and compliance",
        solution: "Implemented end-to-end encryption and secure authentication with biometric support"
      },
      {
        problem: "Handling large document files on mobile",
        solution: "Built progressive document loading with thumbnail previews and cloud storage"
      }
    ],
    
    images: [
      "/projects/elmetr-app/calls.jpeg",
      "/projects/elmetr-app/main.jpeg",
      "/projects/elmetr-app/list.jpeg"
    ],
    
    links: {
      live: null,
      github: null
    }
  },
  
  { 
    id: 'task-manager-app',
    title: "Task Manager", 
    year: "2025", 
    category: "Productivity",
    type: "mobile",
    tagline: "To Do List",
    description: "Full-stack task management app with authentication and real-time sync",
    tech: ["React Native", "Expo", "Node.js", "Express"],
    
    overview: {
      problem: "I need a simple yet powerful task management solution with secure authentication and cross-device synchronization.",
      solution: "Built a full-stack mobile app with JWT authentication, RESTful API for task management, and real-time updates across devices.",
      role: "Full-Stack Mobile Developer - Developed both the mobile application and backend API from scratch."
    },
    
    techStack: {
      frontend: ["React Native", "Expo", "NativeWind", "React Navigation"],
      backend: ["Node.js", "Express", "MongoDB", "JWT"],
      tools: ["Expo Go", "MongoDB Atlas", "Postman"]
    },
    
    features: [
      "Secure user authentication with JWT",
      "Create, read, update, delete tasks (CRUD)",
      "Task categorization and priority levels",
      "Due dates and reminders",
      "Real-time synchronization across devices",
      "Offline mode with local storage"
    ],
    
    challenges: [
      {
        problem: "Implementing secure authentication flow",
        solution: "Built JWT-based authentication with refresh tokens and secure storage"
      },
      {
        problem: "Syncing data across multiple devices",
        solution: "Implemented optimistic updates with conflict resolution and background sync"
      }
    ],
    images: [
      "/projects/taskly/login.jpeg",
      "/projects/taskly/categories.jpeg",
      "/projects/taskly/tasks.jpeg"
    ],
    
    links: {
      live: null,
      github: null
    }
  },
  
  
 
]

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}

// Helper function to get next/previous projects
export const getAdjacentProjects = (currentId) => {
  const currentIndex = projects.findIndex(p => p.id === currentId)
  if (currentIndex === -1) return { prev: null, next: null }
  
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
  const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1
  
  return {
    prev: projects[prevIndex],
    next: projects[nextIndex]
  }
}
