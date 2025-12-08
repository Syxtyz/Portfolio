import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MailIcon } from "lucide-react";
import ModalContent from "./content";

export default function ContactModal() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant={"secondary"} className="cursor-pointer">Book a Meeting</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex gap-2 items-center">
                            <MailIcon />
                            <p>Tweiqht | CJ</p>
                        </DialogTitle>
                        <DialogDescription>Send me an email, and I will respond as soon as possible.</DialogDescription>
                    </DialogHeader>

                    <ModalContent />

                    
                </DialogContent>
            </form>
        </Dialog>
    )
}