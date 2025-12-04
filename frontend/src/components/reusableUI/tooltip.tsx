import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ToolTipProps {
    children: React.ReactNode
    content: React.ReactNode
}

export default function MyToolTip({ children, content }: ToolTipProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent className="bg-foreground text-background">
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    )
}