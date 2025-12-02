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
  {
    id: 4,
    logo: <Rss size={30} className="transition-colors" />,
    src: "#!",
  },
  {
    id: 5,
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
        title: "WebApp para el congreso de FACMED",
        subtitle: "Subdireccion de Investigacion",
        description: "Desarrollo de WebApp para facilitar y mostrar las platicas,Talleres, Simposios, Abstracts y ponentes que hubo en el congreso de la facultad de medicina guardando y ordenando la informacion en bases de datos ",
        date: "Junio 2025",
        
    },
    {
       id: 2,
        title: "Fullstack Developer",
        subtitle: "Daten MX",
        description: "Manejo, Actualizacion y optimizacion de bases de datos en PostgreSql y SQL Server, Desarrollo de Software y Manejo de Apis para empresas inmobiliarias como TerraRegia con .NET y C#",
        date: "Enero 2024", 
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "CodeForge Solutions",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Prácticas en Centro de Investigacion y desarrollo en Ciencias de la Salud",
        subtitle: "WebWizards Inc.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
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
        endCounter: 5,
        text: "Projects Completed",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 264,
        text: "Code Commits",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Server />,
        title: "Bases de datos",
        description: "Desarrollo y manejo de informacion en bases de datos, optimizacion y actualizacion de las mismas",
    },
    {
        icon: <Code2 />,
        title: "Desarrollo web",
        description: "desarrollo de sitios web a medida con tecnologías modernas, adaptados a las necesidades del cliente",
    },
    {
        icon: <Computer />,
        title: "Desarrollo de Softwares ",
        description: "Creación de aplicaciones con tecnologías como .NET, C++ y más",
    },
    {
        icon: <Terminal />,
        title: "Diseño web",
        description: "Diseño de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Pencil />,
        title: "Diseño 2D",
        description: "Creación de contenido 2D persuasivo y atractivo que capta la atención del cliente",
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
    title: "ConeXXo",
    image: "/Cnxxo.png",
    urlGithub: "https://github.com/ManuelxCruzh86/POI-V2",
    urlDemo: "#!",
    description: "Red social moderna para que las personas interactúen entre sí, pudiendo crear grupos, llamadas y mensajería en tiempo real.",
    technologies: ["React", "Tailwind", "Socket.IO", "MYSQL"],
  },
  {
    id: 2,
    title: "WebApp de Congreso",
    image: "/FacMed.png",
    urlGithub: "https://github.com/rhindet/CongresoApp",
    urlDemo: "#!",
    description: "Plataforma Web App para el congreso de la Facultad de Medicina para administrar ponencias, registro y programación del congreso.",
    technologies: ["React", "Node.js", "Tailwind", "MongoDB"],
  },
  {
    id: 3,
    title: "ExVixel",
    image: "/ExVixel.png",
    urlGithub: "https://github.com/ManuelxCruzh86/ExVixel",
    urlDemo: "#!",
    description: "Aplicación de Procesamiento de Imágenes con filtros, detección de color y análisis en tiempo real.",
    technologies: [".NET","C#", "Windows Forms", "AForge.NET"],
  },
  {
    id: 4,
    title: "Clon McCarthy's Core",
    image: "/McCarthys.png",
    urlGithub: "https://github.com/ManuelxCruzh86/McCarthy-s-Core",
    urlDemo: "#!",
    description: "WebApp inspirada en McCarthy's Recreado mejorando su UI/UX y funcionalidades.",
    technologies: ["React", "Node.js", "Scss", "MYSQL"],
  },
  {
    id: 5,
    title: "AutoBill-Analytics",
    image: "/AutoBill.png",
    urlGithub: "https://github.com/ManuelxCruzh86/AutoBill-Analytics",
    urlDemo: "#!",
    description: "Sistema de extracción y análisis de datos de facturas electrónicas, generando un dashboard para su visualización.",
    technologies: ["Python", "PowerBI", "Tessereact", "SQlite"],
  },
];

export const dataEducation = [
  {
    id: 1,
    title: "Preparatoria Técnica",
    subtitle: "Centro de Estudios Tecnológicos Industriales y de Servicios No. 133",
    date: "2019 - 2022",
    description: "Técnico en logística",
  },
  {
    id: 2,
    title: "Universidad Autonoma de Nuevo León",
    subtitle: "Facultad de Ciencias Físico-Matemáticas",
    date: "2022 - 2025",
    description: "Licenciado en Multimedia y animación digital",
  }
];

