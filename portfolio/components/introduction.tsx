"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/Wanted.png" priority width="300" height="300" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className=" mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Hello I'm <span className="text-white-500">Manuel</span><br />
                        <TypeAnimation 
                            sequence={[
                                'Software Developer',
                                1000,
                                'Full Stack Developer',
                                1000,
                                'Data Analyst',
                                1000,
                                '2D Animator',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-purple-500"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Hi there! I’m a passionate software developer with a constant hunger for learning and building solutions. I enjoy diving deep into both frontend and backend technologies. Whether it's optimizing performance or contributing to open-source, I’m always eager to level up and take on new challenges. Currently focused on JavaScript, Angular, and .NET but always exploring new horizons in tech.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="../portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a
                        href="/MACH_CV.pdf"
                        download
                        className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                        Descargar CV
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;