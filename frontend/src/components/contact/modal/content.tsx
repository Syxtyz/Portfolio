import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { BookingSchema, type BookingFormData } from "@/lib/schemas/booking";

export default function ModalContent() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingFormData>({
        resolver: zodResolver(BookingSchema),
    });

    const onSubmit = async (data: BookingFormData) => {
        try {
            const res = await fetch("http://localhost:3000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                }),
            });

            const result = await res.json();
            if (result.success) {
                alert("Email sent successfully!");
            } else {
                console.error(result.error);
                alert("Failed to send email.");
            }
        } catch (err) {
            console.error(err);
            alert("Failed to send email.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-4">
                <div className="flex gap-4">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="First">First Name</Label>
                        <Input {...register("firstName")} id="First" placeholder="Your First Name" />
                        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                    </div>
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="Last">Last Name</Label>
                        <Input {...register("lastName")} id="Last" placeholder="Your Last Name" />
                        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                    </div>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="Email">Email</Label>
                    <Input {...register("email")} id="Email" placeholder="yourname@example.com" />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="Subject">Subject</Label>
                    <Input {...register("subject")} id="Subject" placeholder="Subject" />
                    {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="Message">Message</Label>
                    <ScrollArea className="max-h-40 rounded-md border">
                        <Textarea {...register("message")} id="Message" placeholder="Write your message here..." />
                    </ScrollArea>
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                </div>
            </div>

            <DialogFooter>
                <Button type="submit" className="flex-1 items-center" disabled={isSubmitting}>
                    <SendIcon />
                    <p>{isSubmitting ? "Sending..." : "Send Email"}</p>
                </Button>
            </DialogFooter>
        </form>
    );
}
