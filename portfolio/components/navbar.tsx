"use client"

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname();

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-md">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`group px-4 py-3 rounded-full cursor-pointer transition-all duration-200
                                ${router === item.link
                                    ? "bg-purple-200/20 text-white"
                                    : "text-purple-300 hover:bg-purple-500/20 hover:text-purple-200"}
                            `}
                        >
                            <Link href={item.link}>
                                {item.icon}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
};

export default Navbar;
