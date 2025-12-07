import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function MeetingContent() {
    return (
        <main className="py-6 flex justify-center">
            <div className="w-3/4 py-24 flex flex-col items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-3">
                    <p className="text-4xl font-semibold">Let's Connect</p>
                    <p className="text-muted-foreground text-md">Set up a meeting and take the next step toward achieving your project goals.</p>
                </div>
                <Button variant={"outline"} className="cursor-pointer">
                    <p>Book a Meeting</p>
                    <ArrowUpRight />
                </Button>
            </div>
        </main>
    )
}