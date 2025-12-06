import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import type { ReactNode } from "react";
import { useTheme } from "../ui/theme-provider";

interface JournalCarouselProps {
    pictures: string[]
    reverse?: boolean
    children: ReactNode
}

export default function MyCarousel({ pictures, reverse = false, children }: JournalCarouselProps) {
    const { theme } = useTheme()
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
        },
        [
            AutoScroll({
                speed: 2,
                startDelay: 200,
                playOnInit: true,
                stopOnInteraction: false,
                direction: reverse ? "forward" : "backward",
            }),
        ]
    );

    return (
        <div className={`px-4 flex flex-col md:flex-row md:gap-6`}>
            <div className="relative w-fit self-center">
                <div className="embla w-140">
                    <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex">
                            {pictures.map((n) => (
                                <div
                                    key={n}
                                    className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] p-4"
                                >
                                    <div className="h-60 w-140 rounded-xl border flex items-center justify-center text-2xl font-semibold">
                                        <img src={n} className="rounded-lg w-full h-full object-cover" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`pointer-events-none absolute top-0 left-0 h-full w-16 bg-linear-to-r ${theme === "dark" ? "from-black" : "from-white"} to-transparent`} />

                <div className={`pointer-events-none absolute top-0 right-0 h-full w-16 bg-linear-to-l ${theme === "dark" ? "from-black" : "from-white"} to-transparent`} />
            </div>
            <div className="flex-1 py-4">
                {children}
            </div>
        </div>
    );
}
