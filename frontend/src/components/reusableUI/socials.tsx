import { Button } from "../ui/button";
import { FacebookIcon, GithubIcon, InstagramIcon } from "lucide-react";
import { FacebookLink, GithubLink, InstagramLink } from "@/lib/values/links";

interface MySocialProps {
    size?: "default" | "icon"
    variant?: "outline" | "default" | "secondary" | "ghost" | "link"
}

export default function MySocials({ size = "default", variant = "link"}: MySocialProps) {
    return (
        <>
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
        </>
    )
}