import { Button } from "@/components/ui/button";
import { resume } from "@/lib/values/resume";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="flex flex-col gap-6 items-center text-center lg:text-left lg:items-start flex-1">
            <div className="flex flex-col gap-6 items-center w-full">
                <img
                    src="/picture.png"
                    alt="Profile"
                    className="w-60 h-60 rounded-full object-cover shadow-md mx-auto"
                />

                <p className="text-primary font-bold text-xl">Cejie Refamonte</p>
                <p className="text-primary font-bold text-lg">Software Developer</p>
                <p className="opacity-80 md:w-fit text-center">
                    I build and explore web & desktop applications.
                </p>
                <div className="flex justify-center">
                    <Button className="cursor-pointer group gap-1" onClick={() => window.open(resume, "_blank")}>
                        <p className="ml-1">Resume</p>
                        <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                </div>
            </div>
        </div>
    )
}