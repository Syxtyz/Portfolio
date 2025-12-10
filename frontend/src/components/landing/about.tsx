import MySocials from "@/components/reusableUI/socials"
import { Separator } from "@/components/ui/separator"

export default function AboutSection() {
    return (
        <div className="flex flex-col gap-6 flex-2 md:w-fit">
            <section className="grid gap-4 text-center lg:text-left">

                <p className="text-2xl font-bold text-primary">About me</p>
                <p className="opacity-80 text-justify mx-2 md:mx-0 md:text-left">
                    I am a passionate explorer of technology. Whether it is building web apps, desktop/mobile apps, or diving into networking, I love exploring new technologies and turning ideas into reality.
                </p>

                <p className="opacity-80 text-justify mx-2 md:mx-0 md:text-left">
                    I thrive on exploring the latest tools, frameworks, and protocols, always looking for ways to challenge myself and grow.
                </p>

                <p className="opacity-80 text-justify mx-2 md:mx-0 md:text-left">
                    Currently, I’m a 3rd-year student pursuing Bachelor of Science in Information Technology, eager to apply my skills in practical projects and continue expanding my knowledge in the field.
                </p>

                <p className="opacity-80 text-justify mx-2 md:mx-0 md:text-left">
                    At the moment, I am focused on learning Next.js and actively seeking mentorship to accelerate my learning journey.
                </p>
            </section>

            <Separator/>

            <section className="grid gap-4 text-center lg:text-left">
                <p className="text-2xl font-bold text-primary">Socials</p>

                <div className="grid gap-2">
                    <p className="opacity-80 text-justify mx-2 md:mx-0 md:text-left">
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