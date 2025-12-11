import { Button } from "../ui/button";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { FacebookLink, GithubLink, InstagramLink, LinkedinLink } from "@/lib/values/links";

interface MySocialProps {
    size?: "default" | "icon"
    variant?: "outline" | "default" | "secondary" | "ghost" | "link"
    isFooter?: boolean
}

export default function MySocials({ size = "default", variant = "link", isFooter = false}: MySocialProps) {
    return (
        <div className={`${isFooter ? "flex" : "grid gap-2 md:flex md:gap-0"}`}>
            <Button size={size} variant={variant} className="flex gap-2 cursor-pointer" onClick={() => window.open(InstagramLink, "_blank")}>
                <InstagramIcon size={16} />
                {variant === "link" && "Instagram"}
            </Button>

            <Button size={size} variant={variant} className="flex gap-2 cursor-pointer" onClick={() => window.open(FacebookLink, "_blank")}>
                <FacebookIcon size={16} />
                {variant === "link" && "Facebook"}
            </Button>

            <Button size={size} variant={variant} className="flex gap-2 cursor-pointer" onClick={() => window.open(GithubLink, "_blank")}>
                <GithubIcon size={16} />
                {variant === "link" && "Github"}
            </Button>

            <Button size={size} variant={variant} className="flex gap-2 cursor-pointer" onClick={() => window.open(LinkedinLink, "_blank")}>
                <LinkedinIcon size={16} />
                {variant === "link" && "Linkedin"}
            </Button>
        </div>
    )
}