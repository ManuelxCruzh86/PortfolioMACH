import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/cricle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Fondo patron y opacidad */}
            <div className="absolute inset-0 bg-[url('/Patronfondo.png')] bg-repeat opacity-20 z-0" />

            <div className="relative z-10">
                <TransitionPage />
                <CircleImage />
                <AvatarServices />
                <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                    <div className="max-w-[450px]">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                            Mis <span className="font-bold text-secondary"> servicios.</span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300">
                            Ofrezco servicios de desarrollo web frontend y backend usando tecnologías como HTML, CSS, JavaScript y frameworks actuales. Me enfoco en lograr experiencias limpias, accesibles y responsivas que reflejen la identidad de cada proyecto de forma auténtica.
                        </p>
                        <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                    </div>

                    {/* SLIDER */}
                    <div>
                        <SliderServices />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
