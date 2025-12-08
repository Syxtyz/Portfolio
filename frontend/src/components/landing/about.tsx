import MySocials from "@/components/reusableUI/socials"
import { Separator } from "@/components/ui/separator"

export default function AboutSection() {
    return (
        <div className="flex flex-col gap-6 flex-2 w-80 md:w-fit">
            <section className="grid gap-4 text-center lg:text-left">

                <p className="text-2xl font-bold text-primary">About me</p>
                <p className="text-muted-foreground text-justify mx-2 md:mx-0 md:text-left">
                    I am a passionate explorer of <strong>technology</strong>. Whether it is building
                    <strong> web apps</strong>, <strong>mobile apps</strong>, or diving into
                    <strong> networking</strong>, I love exploring new technologies and turning ideas into reality.
                </p>

                <p className="text-muted-foreground text-justify mx-2 md:mx-0 md:text-left">
                    I thrive on exploring the latest <strong>tools</strong>, <strong>frameworks</strong>,
                    and <strong>protocols</strong>, always looking for ways to challenge myself and grow.
                </p>

                <p className="text-muted-foreground text-justify mx-2 md:mx-0 md:text-left">
                    Currently, I’m a <strong>3rd-year student</strong> pursuing
                    <strong> Bachelor of Science in Information Technology</strong>, eager to apply my skills
                    in practical projects and continue expanding my knowledge in the field.
                </p>
            </section>

            <Separator className="mx-2 md:mx-0"/>

            <section className="grid gap-4 text-center lg:text-left">
                <p className="text-2xl font-bold text-primary">Socials</p>

                <div className="grid gap-2">
                    <p className="text-muted-foreground text-justify mx-2 md:mx-0 md:text-left">
                        Open any of my social profiles below to connect, follow, or get in touch.
                    </p>
                    <div className="flex justify-center md:justify-normal">
                        <MySocials/>
                    </div>
                </div>
            </section>
        </div>
    )
}