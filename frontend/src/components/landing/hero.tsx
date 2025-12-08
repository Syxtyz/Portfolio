import { Button } from "@/components/ui/button";
import { resume } from "@/lib/values/resume";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="flex flex-col gap-6 items-center text-center lg:text-left lg:items-start flex-1">
            <div className="flex flex-col gap-6 items-center w-full lg:items-start">
                <div className="flex flex-col gap-6 items-center">
                    <img
                        src="/picture.png"
                        alt="Profile"
                        className="w-60 h-60 rounded-full object-cover shadow-md mx-auto"
                    />

                    <p className="text-primary font-bold text-xl">Cejie Refamonte</p>
                    <p className="text-primary font-bold text-lg">Software Developer</p>
                </div>
                <p className="text-muted-foreground max-w-sm">
                    I build and explore web & mobile applications.
                </p>
                <div className="flex w-60 justify-center">
                    <Button variant={"secondary"} className="cursor-pointer group gap-1" onClick={() => window.open(resume, "_blank")}>
                        Resume
                        <ArrowUpRight className="duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}