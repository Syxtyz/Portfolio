import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FacebookLink, GithubLink } from "@/lib/links";
import { FacebookIcon, GithubIcon, MailIcon } from "lucide-react";

export default function AboutSection() {
    return (
        <div className="flex flex-col gap-6 flex-2">
            <section className="grid gap-6 text-center lg:text-left">
                
                <p className="text-2xl font-bold text-primary">About me:</p>
                <p className="text-muted-foreground">
                    I am a passionate explorer of <strong>technology</strong>. Whether it is building
                    <strong> web apps</strong>, <strong>mobile apps</strong>, or diving into
                    <strong> networking</strong>, I love exploring new technologies and turning ideas into reality.
                </p>

                <p className="text-muted-foreground">
                    I thrive on exploring the latest <strong>tools</strong>, <strong>frameworks</strong>,
                    and <strong>protocols</strong>, always looking for ways to challenge myself and grow.
                </p>

                <p className="text-muted-foreground">
                    Currently, I’m a <strong>3rd-year student</strong> pursuing a
                    <strong> Bachelor of Science in Information Technology</strong>, eager to apply my skills
                    in practical projects and continue expanding my knowledge in the field.
                </p>
            </section>

            <Separator />

            <section className="grid gap-6 text-center lg:text-left">
                <p className="text-2xl font-bold text-primary">Ready to work together?</p>

                <p className="text-muted-foreground">
                    Whether you have a project idea, need help with web or mobile development,
                    or just want to collaborate on something exciting—I'm always open to new opportunities.
                    Let’s connect and create something amazing together!
                </p>

                <div className="grid sm:flex gap-4 items-center justify-center lg:justify-start">
                    <p className="text-muted-foreground whitespace-nowrap">
                        Let’s connect!
                    </p>

                    <Button variant="outline" className="flex gap-2">
                        <MailIcon size={16} />
                        Email
                    </Button>

                    <Button variant="outline" className="flex gap-2" onClick={() => window.open(FacebookLink, "_blank")}>
                        <FacebookIcon size={16} />
                        Facebook
                    </Button>

                    <Button variant="outline" className="flex gap-2" onClick={() => window.open(GithubLink, "_blank")}>
                        <GithubIcon size={16} />
                        Github
                    </Button>
                </div>
            </section>
        </div>
    )
}