import Image from "next/image";
import { MotionTransition } from "./transition-component";
import avatar2 from "@/public/avatar2.png";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-15 hidden md:inline-block md:absolute md:-bottom-35 -z-10">
            <Image
                src={avatar2}
                alt="Avatar"
                width={400}
                height={400}
                className="w-[220px] h-full"
                placeholder="blur"
                priority
            />
        </MotionTransition>
    );
}

export default AvatarServices;