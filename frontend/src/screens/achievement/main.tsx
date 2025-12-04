import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import TechStack from "./techstack"

export default function AchievementContent() {
    return (
        <main className="h-fit px-4 py-6">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold py-2 px-4 rounded-md transition">
                        Tech Stack
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-wrap gap-4 mt-4">
                        <TechStack/>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold py-2 px-4 rounded-md transition">
                        Certificates
                    </AccordionTrigger>
                    <AccordionContent className="mt-2">
                        Test
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold py-2 px-4 rounded-md transition">
                        Educational Tour / Journal
                    </AccordionTrigger>
                    <AccordionContent className="mt-2">
                        Test
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    )
}