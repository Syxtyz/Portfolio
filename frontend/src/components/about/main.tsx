import MySocials from "../reusableUI/socials";

export default function AboutContent() {
    return (
        <main className="grid gap-6 mx-2 md:mx-0 mb-12">
            <section>
                <p className="text-2xl font-bold mb-1.5">About me</p>
                <div className="grid gap-2">
                    <p className="opacity-80">I am Cejie, a passionate explorer of technology. Whether it is building web apps, desktop/mobile apps, or diving into networking, I love exploring new technologies and turning ideas into reality.</p>
                    <p className="opacity-80">I thrive on exploring the latest tools, frameworks, and protocols, always looking for ways to challenge myself and grow.</p>
                    <p className="opacity-80">Currently, I’m a 3rd-year student pursuing Bachelor of Science in Information Technology, eager to apply my skills in practical projects and continue expanding my knowledge in the field.</p>
                    <p className="opacity-80">At the moment, I am focused on learning Next.js and actively seeking mentorship to accelerate my learning journey.</p>
                </div>
            </section>
            <section>
                <p className="text-2xl font-bold">Socials</p>
                <div className="grid items-center md:flex gap-4">
                    <p className="opacity-80">
                        Open any of my social profiles below to connect, follow, or get in touch:
                    </p>
                    <MySocials />
                </div>
            </section>
        </main>
    )
}