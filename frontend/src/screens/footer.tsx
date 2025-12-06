import MySocials from "@/components/reusableUI/socials";
import { Separator } from "../components/ui/separator";
import { ModeToggle } from "./mode-toggle";

export default function FooterContent() {
    return (
        <footer className="flex flex-col gap-4 my-4">
            <Separator orientation="horizontal" />
            <div className="flex items-center justify-between mx-4">
                <div className="flex">
                    <MySocials size="icon" variant="ghost" />
                    <ModeToggle/>
                </div>
                <p className="text-sm text-muted-foreground">Copyright © Cejie Refamonte. All rights reserved</p>
            </div>
        </footer>
    )
}