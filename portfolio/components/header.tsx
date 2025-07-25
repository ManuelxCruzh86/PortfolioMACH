"use client"

import React from "react";
import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                        <span className="text-purple-500">Manuel</span> Cruz Hdz
                        </h1>

                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="group transition-all duration-300 flex items-center justify-center"
                            >
                                {React.cloneElement(logo, {
                                    className: "text-white group-hover:text-secondary transition-colors",
                                })}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;
