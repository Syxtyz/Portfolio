import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { resume } from "@/lib/values/resume";

export default function LandingContent({ scrollToAchievement }: { scrollToAchievement: () => void }) {
    return (
        <main className="h-screen grid items-center justify-center relative">
            <div className="grid items-center justify-center gap-4">
                <div className="grid gap-4">
                    <div className="items-center flex flex-col">
                        <p className="w-fit text-6xl md:text-8xl font-semibold z-2 relative font-loto">Cejie Refamonte</p>
                        <p className="opacity-80 text-sm md:text-2xl relative top-1 font-Castoro">Software Developer</p>
                    </div>
                    <div>
                        <div className="border" />
                        <p className="text-sm md:text-3xl opacity-80 relative -top-1.5 mx-2 font-loto text-center">Cross-platform innovation for web and desktop</p>
                    </div>
                </div>
                <Button variant={"outline"} className="cursor-pointer group gap-1 w-fit mx-auto" onClick={() => window.open(resume, "_blank")}>
                    <p className="ml-1">Resume</p>
                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
            </div>
            <div className="w-fit absolute bottom-0 left-1/2 -translate-1/2 grid justify-center opacity-75 cursor-pointer" onClick={scrollToAchievement}>
                <span>Scroll Down</span>
                <motion.div className="mx-auto"
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 0.2,
                    }}
                >
                    <ChevronDown />
                </motion.div>
            </div>
        </main>
    )
}
