import { Code2, Terminal, Server, BadgeCheck, Palette, Layers, Gem, Github, Instagram, BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Github size={30} className="transition-colors" />,
    src: "https://github.com/ManuelxCruzh86",
  },
  {
    id: 2,
    logo: <Linkedin size={30} className="transition-colors" />,
    src: "https://www.linkedin.com/in/manuel-alejandro-cruz-hernandez-5062592b2/",
  },
  {
    id: 3,
    logo: <Instagram size={30} className="transition-colors" />,
    src: "https://www.instagram.com/m.cruzxh686/",
  },
 /*  {
    id: 4,
    logo: <Rss size={30} className="transition-colors" />,
    src: "#!",
  }, */
  {
    id: 4,
    logo: <Youtube size={30} className="transition-colors" />,
    src: "https://www.youtube.com/@ManuelAlejandroCruzHernandez",
  },
];



export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} strokeWidth={1} className="text-white group-hover:text-black transition-colors" />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} strokeWidth={1} className="text-white group-hover:text-black transition-colors" />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} strokeWidth={1} className="text-white group-hover:text-black transition-colors" />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} strokeWidth={1} className="text-white group-hover:text-black transition-colors" />,
    link: "/portfolio",
  },
];


export const dataAboutPage = [
    {
        id: 1,
        title: "Fullstack Developer",
        subtitle: "Subdirección de Investigación",
        description: "Development of WebApp to facilitate and display lectures, workshops, symposiums, abstracts and speakers that took place at the medical school congress, saving and organizing information in databases",
        date: "June 2025",
        
    },
    {
       id: 2,
        title: ".NET Developer",
        subtitle: "Subdirección de Investigación",
        description: "Development of comprehensive clinical management system with clean architecture with layered separation (Core, Infrastructure, API, etc), implementing international health interoperability standards (HL7 FHIR) using Blazor and ASP .NET.",
        date: "Jan 2025", 
    },
    {
        id: 3,
        title: "Fullstack Developer",
        subtitle: "Daten MX",
        description: "Management, updating and optimization of databases in PostgreSql and SQL Server, software development and API management for real estate companies like TerraRegia with .NET and C#",
        date: "Jan 2024", 
    },
  
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Years of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 8,
        text: "learned technologies",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 6,
        text: "Projects Completed",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 426,
        text: "Code Commits",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Server />,
        title: "Databases",
        description: "Development and management of information in databases, optimization and updating of the same",
    },
    {
        icon: <Code2 />,
        title: "Web Development",
        description: "Development of custom websites with modern technologies, adapted to client needs",
    },
    {
        icon: <Computer />,
        title: "Software Development",
        description: "Creation of applications with technologies such as .NET, C++, C#, Blazor and more",
    },
    {
        icon: <Terminal />,
        title: "Web Design",
        description: "Design of intuitive and attractive web interfaces, focused on user experience",
    },
    {
        icon: <Pencil />,
        title: "2D Design",
        description: "Creation of persuasive and attractive 2D content that captures customer attention",
    },
    
];

/* export const dataPortfolio = [
    {
        id: 1,
        title: "People for Online Interaction Network",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/ManuelxCruzh86/POI-V2",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Web App de congreso FACMED",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/rhindet/CongresoApp",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "App de Procesamiento de Imagenes",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Clon McCarthy's Optimizdo",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
]; */

export const dataPortfolio = [
  {
    id: 1,
    title: "Congress WebApp",
    image: "/FacMed3.png",
    urlGithub: "https://github.com/rhindet/CongresoApp",
    urlDemo: "https://www.youtube.com/watch?v=jesrYPhBNkk",
    urlDeploy: "https://congreso-app-m998.vercel.app",
    description: "Web App platform for the Medical School congress to manage lectures, registration and congress scheduling.",
    technologies: ["React", "Node.js", "Tailwind", "MongoDB"],
  },
  {
    id: 2,
    title: "McCarthy's Core",
    image: "/McCarthys.png",
    urlGithub: "https://github.com/ManuelxCruzh86/McCarthy-s-Core",
    urlDemo: "#!",
    urlDeploy: "https://mc-carthy-s-core.vercel.app",
    description: "WebApp inspired by McCarthy's recreated improving its UI/UX and functionalities.",
    technologies: ["React", "Node.js", "Scss", "MYSQL"],    
  },
  {
    id: 3,
    title: "ExVixel",
    image: "/ExVixel.png",
    urlGithub: "https://github.com/ManuelxCruzh86/ExVixel",
    urlDemo: "https://www.youtube.com/watch?v=4AI-CnmzNJ0&t=5s",
    urlDeploy: "#!",
    description: "Image Processing Application with filters, color detection and real-time analysis.",
    technologies: [".NET","C#", "Windows Forms", "AForge.NET"],
  },
  {
    id: 4,
    title: "Clinicore-Suite",
    image: "/Clinicore.png",
    urlGithub: "https://github.com/ManuelxCruzh86/CliniCore-Suite",
    urlDemo: "https://www.youtube.com/watch?v=9EXP2JmCUR0",
    urlDeploy: "#!",
    description: "Platform for administration of medical and clinical offices, allowing management of patients, doctors, appointments and medical records with interoperability capability through the FHIR standard.",
    technologies: [".NET","C#", "Blazor", "ASP.NET", "MYSQL"],
  },
  {
    id: 5,
    title: "ConeXXo",
    image: "/Cnxxo.png",
    urlGithub: "https://github.com/ManuelxCruzh86/POI-V2",
    urlDemo: "#!",
    urlDeploy: "#!",
    description: "Modern social network for people to interact with each other, being able to create groups, calls and real-time messaging.",
    technologies: ["React", "Tailwind", "Socket.IO", "MYSQL"],
  },
  {
    id: 6,
    title: "AutoBill-Analytics",
    image: "/AutoBill.png",
    urlGithub: "https://github.com/ManuelxCruzh86/AutoBill-Analytics",
    urlDemo: "#!",
    urlDeploy: "#!",
    description: "System for extraction and analysis of electronic invoice data, generating a dashboard for visualization.",
    technologies: ["Python", "PowerBI", "Tessereact", "SQlite"],
  },
];

export const dataEducation = [
  {
    id: 1,
    title: "Universidad Autonoma de Nuevo Leon (UANL)",
    subtitle: "Faculty of Physical-Mathematical Sciences",
    date: "2021 - 2025",
    description: "Lic. en multimedia y animacion digital",
  },
  {
    id: 2,
    title: "Technical High School",
    subtitle: "Centro de estudios Tecnoloigicos Industrial y de Servicios No. 133",
    date: "2018 - 2021",
    description: "Technician in Logistics",
  }
];

