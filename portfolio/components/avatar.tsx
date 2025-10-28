
"use client"

import Image from "next/image";
import avatarImg from '@/public/avatar.png'

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image
                src={avatarImg}
                width={400}
                height={400}
                className="w-full h-full"
                alt="Avatar"
                placeholder="blur"
                priority
            />
        </MotionTransition>
    )
}