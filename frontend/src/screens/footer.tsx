import { Separator } from "../components/ui/separator";

export default function FooterContent() {
    return (
        <footer className="flex flex-col gap-4 my-4">
            <Separator orientation="horizontal"/>
            <p className="mx-auto text-sm text-muted-foreground">Copyright © Cejie Refamonte. All rights reserved</p>
        </footer>
    )
}