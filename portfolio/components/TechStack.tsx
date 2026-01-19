import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiCplusplus,
  SiPhp, SiPython, SiDotnet, SiReact, SiNextdotjs,
  SiAngular, SiNodedotjs, SiTailwindcss, SiMysql, SiPostgresql,
  SiMongodb, SiFirebase, SiSharp
} from "react-icons/si";

const TechStack = () => {
  const languages = [
    { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "C#", icon: <SiSharp />, color: "#339933" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
  ];

  const frameworksDB = [
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ];

const renderTech = (techList: any[]) => (
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {techList.map((tech, index) => (
  <div
    key={index}
    className="group flex flex-col items-center justify-center p-4 rounded-xl hover:scale-105 transition-transform duration-200"
  >
    <div
      className="text-4xl text-gray-400 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      style={{ color: tech.color }}
    >
      {tech.icon}
    </div>
    <p className="mt-2 text-sm font-medium text-white">{tech.name}</p>
  </div>
))}
  </div>
);


  return (
      <section className="relative z-20 px-6 py-12 text-white rounded-xl shadow-lg mt-20">
      <h1 className="relative z-20 mb-6 text-3xl font-bold text-center text-purple-400">Technologies</h1>
      <br></br>
      <div className="mb-10">
        <h3 className="text-center mb-4 text-xl font-semibold text-white">Programming Languages</h3>
        {renderTech(languages)}
      </div>

      <div>
        <h3 className="text-center mb-4 text-xl font-semibold text-white">Libraries, Frameworks and Databases</h3>
        {renderTech(frameworksDB)}
      </div>
    </section>
  );
};

export default TechStack;
