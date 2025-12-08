import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Predeparture, PLDT, Vikings, Jairosoft, ResponseCenter, PldtJournal, VitroJournal, JairosoftJournal, ErcJournal } from "@/lib/values/journalPics";

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [step, setStep] = useState(0)
    const [loadedCount, setLoadedCount] = useState(0)
    const [typedText, setTypedText] = useState("")

    const loadedRef = useRef(false)

    const allImages = [
        ...Predeparture,
        ...PLDT,
        ...Vikings,
        ...Jairosoft,
        ...ResponseCenter,
        PldtJournal,
        VitroJournal,
        JairosoftJournal,
        ErcJournal
    ];

    useEffect(() => {
        if (loadedCount >= allImages.length) {
            const firstText = "Done Loading Assets";
            const secondText = "Welcome";
            let index = 0;
            let interval: any;
            interval = setInterval(() => {
                setTypedText(firstText.slice(0, index + 1));
                index++;
                if (index === firstText.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        let eraseIndex = firstText.length;
                        interval = setInterval(() => {
                            eraseIndex--;
                            setTypedText(firstText.slice(0, eraseIndex));
                            if (eraseIndex === 0) {
                                clearInterval(interval);
                                let wIndex = 0;
                                interval = setInterval(() => {
                                    setTypedText(secondText.slice(0, wIndex + 1));
                                    wIndex++;
                                    if (wIndex === secondText.length)
                                        clearInterval(interval);
                                }, 80);
                            }
                        }, 40);
                    }, 1000);
                }
            }, 70);
            return () => clearInterval(interval);
        }
    }, [loadedCount, allImages.length]);

    useEffect(() => {
        if (loadedRef.current) return;
        loadedRef.current = true;
        allImages.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
                setLoadedCount((c) => c + 1);
            };
        });
    }, [allImages]);

    useEffect(() => {
        const timers: number[] = []
        timers.push(window.setTimeout(() => setStep(1), 100))
        timers.push(window.setTimeout(() => setStep(2), 3500))
        timers.push(window.setTimeout(() => setStep(3), 3500))
        timers.push(
            window.setTimeout(() => {
                if (loadedCount >= allImages.length) {
                    setStep(4);
                    window.setTimeout(onFinish, 100);
                } else {
                    const check = setInterval(() => {
                        if (loadedCount >= allImages.length) {
                            clearInterval(check);
                            setStep(4);
                            onFinish();
                        }
                    }, 100);
                }
            }, 5600)
        );

        return () => timers.forEach((t) => clearTimeout(t));
    }, [loadedCount, onFinish, allImages.length]);

    return (
        <AnimatePresence>
            {step < 4 && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black"
                >
                    {step === 1 && (
                        <video
                            src="/cateyes.mp4"
                            autoPlay
                            muted
                            playsInline
                            className="object-contain h-screen w-screen"
                        />
                    )}

                    {step === 3 && (
                        <motion.h1
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="text-white text-5xl font-bold mt-6"
                        >
                            Tweiqht
                        </motion.h1>
                    )}

                    <div className="absolute bottom-4 text-muted-foreground text-xl">
                        {loadedCount >= allImages.length ? typedText : `Loading Assets (${loadedCount}/${allImages.length})`}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
