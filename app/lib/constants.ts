export const personalInfo = {
  name: "Hania Arshad",
  firstName: "Hania",
  lastName: "Arshad",
  title: "Mobile App Developer",
  titles: [
    "Flutter Developer",
    "Mobile App Developer",
    "BS CS UET \u201827",
    ".NET Developer",
    "Backend Developer",
  ],
  tagline:
    "Passionate developer building efficient and scalable mobile & web solutions",
  summary:
    "I am a passionate developer with interests in Mobile App, .NET, Frontend, and Backend Development, focused on building efficient and scalable solutions. I aim to contribute to team success by collaborating with senior developers, continuously learning, and delivering high-quality work.",
  aboutDetailed: [
    "I am a passionate developer with interests in Mobile App, .NET, Frontend, and Backend Development, focused on building efficient and scalable solutions.",
    "Currently pursuing BS Computer Science at UET Lahore, I specialize in Flutter, .NET Core, and mobile app development. I love turning complex problems into simple, elegant solutions.",
    "Love to explore new technologies, contributing to team discussions, and continuously learning to deliver high-quality work.",
  ],
  email: "haniaarshad890@gmail.com",
  phone: "+92 332 5420906",
  location: "LDA Avenue -1, Lahore",
  github: "https://github.com/HANIAARSHAD890",
  linkedin: "https://www.linkedin.com/in/haniaarshad/",
  resumeUrl: "https://raw.githubusercontent.com/HANIAARSHAD890/MyPortfolio/main/HaniaArshad_CV.pdf",
  avatar: "/images/profile.jpg",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { name: "Flutter", category: "Frontend", level: 85, icon: "code" },
  { name: "Dart", category: "Languages", level: 82, icon: "code" },
  { name: "Kotlin", category: "Languages", level: 75, icon: "code" },
  { name: "C#", category: "Languages", level: 80, icon: "code" },
  { name: "C++", category: "Languages", level: 70, icon: "code" },
  { name: ".NET Core", category: "Backend", level: 82, icon: "server" },
  { name: "API Testing", category: "Backend", level: 78, icon: "server" },
  { name: "SQL", category: "Database", level: 75, icon: "database" },
   { name: "MongoDB", category: "Database", level: 50, icon: "database" },
    { name: "Firebase", category: "Database", level: 80, icon: "database" },
  { name: "Python", category: "Languages", level: 72, icon: "code" },
  { name: "HTML / CSS", category: "Frontend", level: 80, icon: "code" },
  { name: "TypeScript", category: "Languages", level: 65, icon: "code" },
  { name: "JavaScript", category: "Languages", level: 70, icon: "code" },
  { name: "Angular", category: "Frontend", level: 55, icon: "code" },
  { name: "Git", category: "Tools", level: 80, icon: "code" },
  { name: "Swagger", category: "Tools", level: 75, icon: "server" },
  { name: "Postman", category: "Tools", level: 78, icon: "server" },
];

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "Languages", label: "Languages" },
  { id: "Database", label: "Database" },
  { id: "Tools", label: "Tools" },
];

export const projects = [
  {
    title: "MCP Unified Server & Agentic Workflows",
    description:
      "Multi-system software project management executed using Agile Scrum of Scrums, where multiple independent Scrum teams were coordinated to deliver an integrated AI platform with MCP-based agentic workflow system. Presented at UET Open House Evaluation.",
    tech: ["MCP", "Agentic AI", "Python", "Scrum of Scrums"],
    image: "/images/projects/mcp_server.jpg",
    github: "https://github.com/AmirHashmi017/MCP-Server-And-LangGraph-Agent",
    live: "https://www.linkedin.com/posts/amirhashmi017_agenticai-mcp-langgraph-ugcPost-7415022930478399488-jYxw/",
    featured: true,
    timeline: "Dec 2025 - Jan 2026",
  },
  {
    title: "Smart Answering Research System",
    description:
      "Research-based RAG chatbot that provides authentic, context-aware answers from verified research sources. Built with FastAPI backend, Grobid for research paper parsing, and Gemini for intelligent answering. Delivered using Agile Scrum across 9 sprints.",
    tech: ["FastAPI", "Gemini", "React.js", "Grobid", "Supabase"],
    image: "/images/projects/smart-answering.jpg",
    github: "https://github.com/Maryyam18/Smart-Research-Answering-System",
    live: "https://www.linkedin.com/posts/haniaarshad_fastapi-reactjs-agilescrum-ugcPost-7417251210849775616-mpjM/",
    featured: true,
    timeline: "2025",
  },
  {
    title: "RecipeBytes",
    description:
      "AI-powered recipe management and meal planning mobile app built with Kotlin. Features include OCR-based recipe extraction from images, AI recipe generation, ingredient suggestions, nutrition analysis, monthly meal planner, shopping lists, and smart notifications.",
    tech: ["Kotlin", "Firebase", "LLaMA", "Cloudinary", "OCR"],
    image: "/images/projects/recipebytes.jpg",
    github: "https://github.com/HANIAARSHAD890/RecipeBytesV2-MobileApp",
    live: "https://www.linkedin.com/posts/haniaarshad_recipebytes-mobile-app-ugcPost-7478639605601239040-wak4/",
    featured: true,
    timeline: "2026"
    ,
  },
  {
    title: "Pilgrim Health Predictor",
    description:
      "AI-powered health monitoring system predicting conditions like dehydration, heat exhaustion, heatstroke, fatigue, and injury risks for Hajj & Umrah pilgrims. Implemented Decision Tree algorithm with Google Gemini API integration for intelligent health advisory.",
    tech: ["Python", "Gemini API", "Streamlit", "Scikit-learn"],
    image: "/images/projects/pilgrim.jpg",
    github: "https://github.com/HANIAARSHAD890/ARHajj-Augmented-Reality-AI-for-Hajj-",
    live: "https://www.linkedin.com/posts/haniaarshad_pilgrim-health-predictor-excited-to-share-activity-7334241158333628416-SgCN/",
    featured: true,
    timeline: "2025",
  },
  {
    title: "Messify",
    description:
      "Flutter-based mess management mobile application with menu display, attendance tracking, and role-based features for streamlined hostel dining operations.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/images/projects/messify.png",
    github: "https://github.com/HANIAARSHAD890/MobileAPP_Messify",
    live: "",
    featured: false,
    timeline: "April 2025",
  },
  {
    title: "ShareKro",
    description:
      "Expense sharing mobile app built with Flutter using Clean Architecture and GetX state management. Features include expense creation with multi-method split screens, receipt upload, expense history with timeline views, friends management with dues tracking, and an analytics dashboard.",
    tech: ["Flutter", "GetX", "Clean Architecture", "REST API"],
    image: "/images/projects/sharekro.png",
    github: "",
    live: "",
    featured: false,
    timeline: "Mar 2025 - July 2025",
  },
];

export const experiences = [
  {
  company: "Devanics",
  role: "Flutter Developer",
  type: "Internship",
  period: "July 2026 - Present",
  location: "Lahore",
  description: [
    "Developing Flutter applications using clean architecture principles",
    "Integrated RESTful APIs and using Provider for State Management",
    "Implemented responsive UIs from Figma designs",
    "Integrated Stripe payment workflows and Google Cloud service", 
    "Collaborated in team discussions through standups" 
  ],

  tech: ["Flutter", "Dart", "REST API", "Postman", "Figma", "Firebase", "Stripe"],

},
  {
    company: "UET KICS (Game Studio)",
    role: "Flutter Developer",
    type: "Hybrid",
    period: "Mar 2025 - July 2025",
    location: "Lahore",
    description: [
      "Maintained repositories collaboratively, practicing clean architecture",
      "Integrated RESTful API endpoints and tested them using Postman",
      "Participated in team discussions and coordinated workflows",
      "Implemented UI accurately by collaborating with Figma designer",
    ],
    tech: ["Flutter", "Dart", "REST API", "Postman", "Figma"],
  },
  {
    company: "BillNow",
     type: "Hybird",
    role: "Junior Software Engineer",
    period: "June 2024 - Oct 2024",
    location: "Lahore",
    description: [
      "Developed backend APIs using .NET Core framework and tested them using Swagger Codegen",
      "Wrote clean code, implemented stored procedures, and managed SQL databases",
      "Collaborated with senior developers to implement new features and fix issues",
    ],
    tech: [".NET Core", "C#", "SQL", "Swagger"],
  },
  {
    company: "UET Lahore",
     type: "Volunteer",
    role: "Teaching Assistant",
    period: "Mar 2025 - May 2025",
    location: "Lahore",
    description: [
      "Developed backend APIs using .NET Core framework and tested them using Swagger Codegen",
      "Wrote clean code, implemented stored procedures, and managed SQL databases",
      "Collaborated with senior developers to implement new features and fix issues",
    ],
    tech: [".NET Core", "C#", "SQL", "Swagger"],
  },
];

export const education = [
  {
    institution: "University of Engineering and Technology, Lahore",
    degree: "BS Computer Science",
    period: "Sep 2023 - Present",
    location: "Lahore",
    gpa: "3.7/4.0",
    semester: "6th Semester",
    achievements: [
      "Achieved A grade in Programming Fundamentals and OOP during first year of BS CS, receiving a prize from the department",
      "Served as Teaching Assistant for Programming Fundamentals lab in 4th semester, mentoring junior students",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    institution: "PAEC Model College For Girls, Chashma",
    degree: "FSC Pre-Engineering",
    period: "June 2021 - June 2023",
    location: "Chashma",
    gpa: "",
    grade: "Grade A",
    marks: "1000/1100",
    achievements: [
      "Grade A — 1000/1100 marks",
      "Won first prize in the college-wide Science Exhibition",
      "Secured 3rd prize in Poster Competition",
    ],
    courses: [
      "Mathematics",
      "Physics",
      "Chemistry",
    ],
  },
];

export const testimonials = [] as {
  name: string;
  role: string;
  content: string;
}[];

export const certifications = [] as {
  title: string;
  issuer: string;
  date: string;
  url: string;
  description: string;
}[];

export const services = [
  {
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications using Flutter with clean architecture and responsive UI design.",
    icon: "code",
  },
  {
    title: "Backend Development",
    description:
      "Developing robust backend APIs using .NET Core with RESTful principles and Swagger documentation.",
    icon: "server",
  },
  {
    title: "Database Management",
    description:
      "Designing and managing SQL databases with stored procedures, optimized queries, and data integrity.",
    icon: "database",
  },
  {
    title: "API Integration",
    description:
      "Integrating third-party APIs and services with thorough testing using Postman and Swagger.",
    icon: "server",
  },
  {
    title: "UI Implementation",
    description:
      "Translating Figma designs into pixel-perfect, responsive Flutter UI with attention to detail.",
    icon: "code",
  },
  {
    title: "Team Collaboration",
    description:
      "Working effectively in team environments using Git version control and Agile workflows.",
    icon: "code",
  },
];

export const contactInfo = {
  email: "haniaarshad890@gmail.com",
  phone: "+92 332 5420906",
  location: "LDA Avenue -1, Lahore",
  availability: "Open to opportunities",
};
