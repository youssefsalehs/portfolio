import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill, RiRobot3Fill } from "react-icons/ri";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiTypescript,
  SiPostman,
  SiReactquery,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GiRobotAntennas, GiPolarBear } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { ImGit } from "react-icons/im";
import { VscVscode } from "react-icons/vsc";
import {
  FaLaptop,
  FaLaptopCode,
  FaTools,
  FaGithub,
  FaAngular,
} from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";

export const skillIcons = {
  frontend: { icon: FaLaptop, color: "#3b82f6" },
  backend: { icon: IoIosSettings, color: "#10b981" },
  tools: { icon: FaTools, color: "#f59e0b" },
  "AI & Machine Learning": { icon: GiRobotAntennas, color: "#8b5cf6" },

  HTML: { icon: FaHtml5, color: "#E34F26" },
  CSS: { icon: FaCss3, color: "#1572B6" },
  Bootstrap: { icon: FaBootstrap, color: "#7952B3" },
  Tailwind: { icon: RiTailwindCssFill, color: "#06B6D4" },
  JavaScript: { icon: FaJs, color: "#fffb00" },
  React: { icon: FaReact, color: "#5bc7e5" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  Zustand: { icon: GiPolarBear, color: "#442b06" },
  Next: { icon: RiNextjsFill, color: "#000" },
  Angular: { icon: FaAngular, color: "#DD0031" },

  NodeJS: { icon: FaNodeJs, color: "#339933" },
  Express: { icon: SiExpress, color: "#000" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Mongoose: { icon: SiMongoose, color: "#880000" },
  SQL: { icon: TbSql, color: "#336791" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: FaPython, color: "#3776AB" },

  "React Query": { icon: SiReactquery, color: "#FF4154" },
  "C++": { icon: FaLaptopCode, color: "#00599C" },
  "Machine Learning": { icon: RiRobot3Fill, color: "#9333EA" },
  "Artificial Intelligence": { icon: LuBrainCircuit, color: "#6366F1" },

  Git: { icon: ImGit, color: "#F05032" },
  GitHub: { icon: FaGithub, color: "#000" },
  VSCode: { icon: VscVscode, color: "#007ACC" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
};
export const skills = {
  frontend: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    "React",
    "React Query",
    "Redux",
    "Zustand",
    "Next",
    "TypeScript",
    "Angular",
  ],
  backend: ["MongoDB", "Mongoose", "NodeJS", "Express", "SQL", "C++"],
  "AI & Machine Learning": [
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
  ],
  tools: ["Git", "GitHub", "VSCode", "Postman"],
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/youssefsalehs",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/youssef-ashraf-4b4a03267",
    icon: "FaLinkedinIn",
  },
  {
    name: "Gmail",
    url: "mailto:youssef.ashraf.saleh@gmail.com",
    icon: "SiGmail",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/201090755563",
    icon: "FaWhatsapp",
  },
];
export const educationData = {
  degree: "Bachelor of Science in Computer & Control Systems Engineering",
  faculty: "Faculty of Engineering, Mansoura University",
  gpa: "3.7 / 4.0 (93.64%)",
  duration: "Sep 2021 – Jun 2026",
};

export const experienceData = [
  {
    role: "Frontend React Developer",
    organization: "Intern2Grow",
    type: "Internship",
    duration: "Mar 2026",
    location: "Egypt",
    mode: "Remote",
    stack: ["React", "JavaScript", "Zustand", "Tailwind"],
    responsibilities: [
      "Developed a full-featured e-commerce application using React.js",
      "Implemented search, filtering, sorting, and pagination functionalities",
      "Managed application state using URL query parameters",
      "Built wishlist and product comparison features",
      "Integrated product reviews into product details page",
      "Implemented checkout form validation",
      "Resolved cart quantity logic issues",
      "Enhanced UX by replacing spinners with skeleton loading",
      "Added toast notifications for user interactions",
      "Persisted application state using local storage",
    ],
  },
  {
    role: "MERN Stack Engineer",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    type: "Internship",
    duration: "Jul 2025 - Dec 2025",
    period: "6 mos",
    location: "Cairo, Egypt",
    mode: "Hybrid",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "NodeJS",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    responsibilities: [
      "Developed and enhanced responsive user interfaces using React, HTML5, CSS, and JavaScript",
      "Built and contributed to full-stack web applications using the MERN stack",
      "Implemented backend APIs using Node.js and Express",
      "Utilized Git and GitHub for version control and collaborative development",
      "Collaborated within Agile teams to deliver scalable and maintainable solutions",
      "Applied TypeScript, Docker fundamentals, and UX/UI principles to improve application quality and usability",
    ],
  },
  {
    role: "MEAN Stack Developer",
    organization: "National Telecommunication Institute (NTI)",
    type: "Internship",
    duration: "Jul 2025 - Oct 2025",
    period: "4 mos",
    location: "El Mansoura, Egypt",
    mode: "On-site",
    stack: [
      "MongoDB",
      "Express",
      "Angular",
      "NodeJS",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "SQL",
    ],
    hours: "210-hour technical training + 30-hour professional track",
    responsibilities: [
      "Designed and developed scalable full-stack applications using the MEAN stack",
      "Built RESTful APIs and handled backend logic using Node.js and Express",
      "Managed databases and implemented secure authentication systems",
      "Delivered end-to-end projects from concept to deployment",
      "Applied Agile methodologies in project execution and team collaboration",
      "Developed client communication and project management skills, including freelance workflow strategies",
    ],
  },
];
export const featuredprojects = [
  {
    id: 1,
    title: "Medicore",
    year: 2025,
    description:
      "A full-stack pharmacy platform with secure authentication and scalable backend. Users can browse and order medicines with protected routes and a responsive modern UI.",
    subtitle: "Full-stack pharmacy management application",
    slug: "medicore-smart-pharmacy-app",
    image: "/images/medicore.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Mongoose",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/yourusername/medicore",
    liveLink: "https://medicore.vercel.app",
    stack: ["frontend", "backend", "fullstack"],
    featured: true,
    status: "completed",
    duration: "2 months",
    role: "Full Stack Developer",
    sections: [
      {
        title: "Overview",
        content:
          "Medicore is a scalable pharmacy application that allows users to search, order, and track medicines securely. Admins can manage inventory and orders efficiently.",
      },
      {
        title: "Features",
        list: [
          "Secure authentication with role-based access",
          "Responsive modern UI",
          "Order tracking and inventory management",
          "Protected routes for sensitive pages",
        ],
      },
      {
        title: "Challenges & Solutions",
        items: [
          {
            problem: "Ensuring secure authentication and role management",
            solution:
              "Implemented JWT-based authentication with hashed passwords and middleware for route protection.",
          },
          {
            problem: "Optimizing data queries in MongoDB",
            solution:
              "Used indexing and aggregation pipelines to improve performance.",
          },
        ],
      },
    ],
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: 2,
    title: "Bembo",
    description:
      "A real-time chat application where users can send messages, see online/offline status, and view typing indicators. Includes customizable themes and a clean modern UI.",
    subtitle: "Real-time chat platform with online presence indicators",
    slug: "bembo-chat-app",
    image: "/images/bembo-chat.png",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "Tailwind CSS",
      "DaisyUI",
      "Express",
      "MongoDB",
    ],
    githubLink: "https://github.com/your-username/your-repo-name",
    liveLink: "https://bembo-chat.vercel.app",
    stack: ["frontend", "backend", "fullstack"],
    featured: true,
    status: "completed",
    priority: 2,
    year: "2024",
    duration: "1.5 months",
    role: "Full Stack Developer",
    sections: [
      {
        title: "Overview",
        content:
          "Bembo Chat App is a real-time messaging platform where users can communicate instantly, see online/offline statuses, and enjoy a modern, responsive UI.",
      },
      {
        title: "Features",
        list: [
          "Real-time messaging using Socket.io",
          "Online/offline user status indicators",
          "Typing notifications",
          "Customizable UI themes",
        ],
      },
      {
        title: "Challenges & Solutions",
        items: [
          {
            problem: "Maintaining real-time updates efficiently",
            solution:
              "Optimized Socket.io events and used rooms for scalable message broadcasting.",
          },
          {
            problem: "Handling theme switching dynamically",
            solution:
              "Used React context to manage theme state across all components.",
          },
        ],
      },
    ],
    createdAt: new Date("2024-06-01"),
    updatedAt: new Date("2024-06-01"),
  },
  {
    id: 3,
    title: "Verigo",
    description:
      "A modern movie browsing application with smooth navigation. Users can search movies, explore details, and save favorites using localStorage.",
    subtitle: "Movie discovery and tracking app",
    slug: "verigo-movie-app",

    image: "/images/verigo.png",
    technologies: ["React", "Context API", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/yourusername/verigo",
    liveLink: "https://verigo.vercel.app",
    stack: ["frontend"],
    featured: true,
    status: "completed",
    duration: "3 weeks",
    role: "Frontend Developer",
    sections: [
      {
        title: "Overview",
        content:
          "Verigo is a responsive movie browsing app where users can search, view details, and save favorites in localStorage for offline persistence.",
      },
      {
        title: "Features",
        list: [
          "Search and filter movies",
          "Save favorites locally",
          "Responsive design",
          "Smooth navigation between pages",
        ],
      },
      {
        title: "Challenges & Solutions",
        items: [
          {
            problem: "Persisting favorites across sessions",
            solution: "Used localStorage to store user favorites locally.",
          },
          {
            problem: "Efficient state management for UI",
            solution: "Implemented React Context API to manage global state.",
          },
        ],
      },
    ],
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
  },
  {
    id: 4,
    title: "Pokedex",
    description:
      "A React app for exploring Pokémon. Users can search, filter, and view detailed Pokémon information with an interactive UI.",
    subtitle: "Interactive Pokémon explorer",
    slug: "pokedex-app",

    image: "/images/pokedex.png",
    technologies: ["React", "APIs", "CSS"],
    githubLink: "https://github.com/yourusername/pokemondex",
    liveLink: "https://pokemondex.vercel.app",
    stack: ["frontend"],
    featured: true,
    status: "completed",
    priority: 4,
    year: "2024",
    duration: "2 weeks",
    role: "Frontend Developer",
    sections: [
      {
        title: "Overview",
        content:
          "Pokedex is a React application that allows users to explore Pokémon data, search and filter Pokémon, and view details in a clean interactive UI.",
      },
      {
        title: "Features",
        list: [
          "Search and filter Pokémon",
          "View detailed Pokémon stats",
          "Responsive interactive UI",
        ],
      },
      {
        title: "Challenges & Solutions",
        items: [
          {
            problem: "Fetching and displaying large Pokémon data efficiently",
            solution:
              "Implemented API pagination and optimized component rendering.",
          },
        ],
      },
    ],
    createdAt: new Date("2024-05-01"),
    updatedAt: new Date("2024-05-01"),
  },
  {
    id: 5,
    title: "Shopie",
    description:
      "A clean, modern e-commerce UI with reusable components, custom styling, and fully responsive layout including Home, Shop, About, and Contact pages.",
    subtitle: "Modern responsive clothing e-commerce interface",
    slug: "shopie-clothing-ecommerce-website",
    image: "/images/shopie.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/yourusername/shopie",
    liveLink: "https://shopie.vercel.app",
    stack: ["frontend"],
    featured: true,
    status: "completed",
    priority: 5,
    year: "2024",
    duration: "1 month",
    role: "Frontend Developer",
    sections: [
      {
        title: "Overview",
        content:
          "Shopie is a modern clothing e-commerce website focused on delivering a smooth and visually appealing shopping experience. It includes multiple pages such as Home, Shop, About, and Contact, with a strong emphasis on responsive design and reusable UI components.",
      },
      {
        title: "Features",
        list: [
          "Responsive layout optimized for mobile, tablet, and desktop",
          "Reusable UI components for product cards and navigation",
          "Clean product listing with modern design and hover effects",
          "Structured multi-page navigation (Home, Shop, About, Contact)",
        ],
      },
      {
        title: "Challenges & Solutions",
        items: [
          {
            problem: "Responsive Design Consistency",
            solution:
              "Used Bootstrap grid system combined with custom CSS to ensure consistent layout across all screen sizes.",
          },
          {
            problem: "Reusable Components",
            solution:
              "Designed modular components for cards and layout sections to maintain scalability and clean code structure.",
          },
        ],
      },
    ],
    createdAt: new Date("2024-04-01"),
    updatedAt: new Date("2024-04-01"),
  },
  {
    id: 6,
    title: "Room Homepage",
    description:
      "A solution to the Room homepage challenge on Frontend Mentor. Users can view the site on any device, see hover states for interactive elements, and navigate the slider via mouse or keyboard.",
    subtitle: "Responsive landing page solution for Frontend Mentor",
    slug: "frontend-mentor-room-homepage",
    image: "/images/room-homepage.png",
    technologies: ["HTML5", "CSS", "CSS Grid", "Flexbox", "JavaScript"],
    githubLink: "https://github.com/yourusername/room-homepage",
    liveLink: "https://room-homepage.vercel.app",
    stack: ["frontend"],
    featured: false,
    status: "completed",
    priority: 6,
    year: "2024",
    duration: "1 week",
    role: "Frontend Developer",
    sections: [
      {
        title: "Overview",
        content:
          "Room Homepage solution is a responsive landing page built to meet Frontend Mentor challenge requirements. It supports hover states, keyboard navigation, and responsive design.",
      },
      {
        title: "Features",
        list: [
          "Responsive layout",
          "Interactive slider navigation",
          "Clean modern UI with hover effects",
        ],
      },
      {
        title: "Challenges & Solutions",
        items: [
          {
            problem: "Making slider keyboard accessible",
            solution:
              "Implemented arrow key navigation and focus states for accessibility.",
          },
        ],
      },
    ],
    createdAt: new Date("2024-07-01"),
    updatedAt: new Date("2024-07-01"),
  },
];
export const categories = [
  {
    number: "01",
    title: "frontend",
    description:
      "Building responsive and interactive user interfaces using React, Tailwind CSS, and modern animation techniques for smooth UX.",
  },
  {
    number: "02",
    title: "backend",
    description:
      "Designing and managing server-side logic, databases, and APIs using Node.js, Express, and MongoDB to ensure scalable and secure applications.",
  },
  {
    number: "03",
    title: "fullstack",
    description:
      "Combining frontend and backend expertise to build complete applications, handling everything from UI/UX to server logic and database management.",
  },
];
