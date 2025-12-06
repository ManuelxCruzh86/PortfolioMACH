"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";
import dynamic from 'next/dynamic'

// Cargar el TimeLine de forma dinámica para reducir el bundle inicial de la pestaña About
const TimeLine = dynamic(() => import('@/components/time-line'), {
    ssr: false,
    loading: () => <div className="py-8 text-center">Cargando timeline...</div>
})

const AboutMePage = () => {
    return (
    
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Fondo patron y opacidad */}
            <div className="absolute inset-0 bg-[url('/Patronfondo.png')] bg-repeat opacity-20 z-0" />
            <TransitionPage />
            <ContainerPage>
{/*                 <Avatar /> */} 
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-purple-500">
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