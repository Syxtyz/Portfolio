import MySocials from "@/components/reusableUI/socials";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../theme/mode-toggle";

export default function FooterContent() {
    return (
        <footer className="flex flex-col gap-4 my-4">
            <Separator orientation="horizontal" />
            <div className="flex items-center flex-col md:flex-row gap-2 justify-between mx-4">
                <div className="flex">
                    <MySocials size="icon" variant="ghost" />
                    <ModeToggle/>
                </div>
                <p className="text-sm text-muted-foreground text-center">Copyright © Cejie Refamonte. All rights reserved</p>
            </div>
        </footer>
    )
}