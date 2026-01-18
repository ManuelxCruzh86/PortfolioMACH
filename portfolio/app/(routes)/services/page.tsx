import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/cricle-image";
import TransitionPage from "@/components/transition-page";
import SliderServicesClient from '@/components/slider-services-client'

const ServicesPage = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Fondo patron y opacidad */}
            <div className="absolute inset-0 bg-[url('/Patronfondo.png')] bg-repeat opacity-20 z-0" />

            <div className="relative z-10 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
                <TransitionPage />
                <AvatarServices />
                <div className="grid items-center justify-center min-h-[70vh] max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                            My <span className="text-purple-500 font-bold"> Services.</span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300 px-4 md:px-0">
                            I offer frontend and backend web development services using JavaScript, frameworks, .NET, and other technologies, as well as software development with current technologies. I focus on creating clean, accessible, and responsive experiences that authentically reflect the identity of each project.
                        </p>
                        <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contact me: </button>
                        <br />
                        <span>📧 manuel.cruzxh686@gmail.com</span>
                    </div>
                    <div>
                        <SliderServicesClient />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
