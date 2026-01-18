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
    <div className="relative z-[1] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <CoverParticles />
      <main>
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
