import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    description: string;
    technologies: string[];
  };
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { title, image, urlGithub, urlDemo, description, technologies } = data;

  return (
    <div className="flex flex-col justify-between w-full max-w-sm rounded-xl border border-neutral-700 bg-gray-900 text-white shadow-lg overflow-hidden">
      {/* Imagen: parte superior */}
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between h-full p-4 space-y-3">
        <h3 className="text-lg font-bold">{title}</h3>

        {/* Tecnologías en morado */}
        <div className="flex flex-wrap gap-2 text-sm text-purple-400 font-semibold">
          {technologies.map((tech, index) => (
            <span key={index}>• {tech}</span>
          ))}
        </div>

        {/* Descripción */}
        <p className="text-sm text-white">{description}</p>

        {/* Enlaces */}
        <div className="flex justify-end gap-4 pt-2">
          <Link href={urlGithub} target="_blank" className="hover:text-purple-400 transition">
            <FaGithub size={20} />
          </Link>
          <Link href={urlDemo} target="_blank" className="hover:text-purple-400 transition">
            <FaYoutube size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBox;
