import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/cricle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";


const PortfolioPage = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Fondo patron y opacidad */}
            <div className="absolute inset-0 bg-[url('/Patronfondo.png')] bg-repeat opacity-20 z-0" />

            <ContainerPage className="relative z-10">
                <TransitionPage />
                <AvatarPortfolio />
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        Mis últimos <span className="font-bold text-purple-500">trabajos realizados</span>
                    </h1>

                    <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </div>
    );
};


export default PortfolioPage;