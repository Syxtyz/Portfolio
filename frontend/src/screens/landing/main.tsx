import { FacebookIcon, GithubIcon, MailIcon } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";

export default function LandingContent() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-12">
            <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto w-full">

                <div className="flex flex-col gap-6 items-center text-center lg:text-left lg:items-start flex-1">
                    <div className="flex flex-col gap-6 items-center">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-40 h-40 rounded-full object-cover shadow-md"
                        />

                        <p className="text-primary font-bold text-xl">Cejie Refamonte</p>
                        <p className="text-primary font-bold text-lg">Full Stack Developer</p>

                        <p className="text-muted-foreground max-w-sm">
                            I build full-stack applications and explore web, mobile, and networking projects.
                        </p>
                        <Button
                            className="px-12"
                            onClick={() => window.open("/resume.pdf", "_blank")}
                        >
                            Resume
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                    <section className="grid gap-6 text-center lg:text-left">
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

                            <Button variant="outline" className="flex gap-2">
                                <FacebookIcon size={16} />
                                Facebook
                            </Button>

                            <Button variant="outline" className="flex gap-2">
                                <GithubIcon size={16} />
                                Github
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
