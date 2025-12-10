import { Link } from "react-router";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen grid items-center justify-center">
            <div className="grid gap-6 items-center justify-center">
                <div className="flex items-center gap-4 h-12">
                    <p className="text-2xl font-bold text-foreground">404</p>
                    <Separator orientation="vertical"/>
                    <p>This page could not be found.</p>
                </div>
                <Link
                    to="/"
                    className="w-fit mx-auto"
                >
                    <Button variant={"link"} className="cursor-pointer group gap-1 border">
                        <p className="ml-1">Visit Tweiqht's Portfolio</p>
                        <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                    </Button>
                </Link>
            </div>
        </div>
    );
};