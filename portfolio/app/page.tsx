import Image from "next/image";
import CoverParticles from "@/components/cover-particles-client";
import TransitionPage from "@/components/transition-page";
import Introduction from "@/components/introduction";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import io from "@io.png";
import io2 from "@/public/io2.png";
import io3 from "@/public/io3.png";

export default function Home() {
  return (     
    <div className="relative z-10 w-full p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <CoverParticles />
      <main className="pt-20 md:pt-32">
        <TransitionPage/>
        <Introduction />
        <div>
        <div style={{ height: "30px" }} /> 
      </div>

        <Experience />
        <TechStack />
        <div className="flex min-h-[15vh] bg-no-repeat bg-gradient-cover">
{/*           <p>Introduccion</p>
 */
 }        </div>
      </main>
    </div>
  );
}
