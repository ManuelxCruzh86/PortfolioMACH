"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
    
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Fondo patron y opacidad */}
            <div className="absolute inset-0 bg-[url('/Patronfondo.png')] bg-repeat opacity-20 z-0" />
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />

                 <TimeLine />
            </ContainerPage>
        </div>
    );
}

export default AboutMePage;