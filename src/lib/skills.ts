export interface Skill {
  title: string;
  icon: string;
  description: string;
  technologies: string[];
}

export const skills: Skill[] = [
  {
    title: "Frontend Development",
    icon: "💻",
    description:
      "Building responsive, accessible, and modern user interfaces with a focus on performance and user experience.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },

  {
    title: "Backend Development",
    icon: "⚙️",
    description:
      "Developing scalable REST APIs, authentication systems, and server-side applications using modern backend technologies.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Firebase Auth",
      "Cloudinary",
    ],
  },

  {
    title: "Database & Cloud",
    icon: "🗄️",
    description:
      "Designing efficient databases and integrating cloud services for secure and scalable applications.",
    technologies: [
      "MongoDB",
      "MongoDB Atlas",
      "SharePoint Lists",
      "Firebase",
      "Cloudinary",
    ],
  },

  {
    title: "Microsoft Power Platform",
    icon: "🏢" ,
    description:
      "Building enterprise business applications using Microsoft's low-code ecosystem with workflow automation and collaboration.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint Online",
      "Microsoft 365",
      "Canvas Apps",
      "Approval Workflows",
    ],
  },

  {
    title: "SharePoint Development",
    icon: "🌐",
    description:
      "Creating modern SharePoint sites, document management solutions, and enterprise collaboration portals.",
    technologies: [
      "Communication Sites",
      "Document Libraries",
      "Lists",
      "Modern Web Parts",
      "Permissions",
      "Content Management",
    ],
  },

  {
    title: "Tools & Deployment",
    icon: "🛠️",
    description:
      "Managing source control, deployment pipelines, and production-ready hosting environments.",
    technologies: [
      "Git",
      "GitHub",
      "Vercel",
      "GitHub Pages",
      "VS Code",
      "Postman",
    ],
  },
];