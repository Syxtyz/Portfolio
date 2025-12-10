import { calLink } from "@/lib/values/links";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export default function MeetingContent() {
    return (
        <main className="py-6 flex justify-center">
            <div className="w-full mx-2 md:w-3/4 py-24 flex flex-col items-center justify-center gap-6 rounded-4xl bg-card/40 border px-4">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-2xl md:text-4xl font-semibold">Let's Connect</p>
                    <p className="text-muted-foreground text-sm">Set up a meeting and take the next step toward achieving your project goals.</p>
                </div>
                <Button className="cursor-pointer group gap-1" onClick={() => window.open(calLink, "_blank")}>
                    <p className="ml-1">Book a Meeting</p>
                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
            </div>
        </main>
    )
}