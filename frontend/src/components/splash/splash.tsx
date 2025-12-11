import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Predeparture, PLDT, Vikings, Jairosoft, ResponseCenter, PldtJournal, VitroJournal, JairosoftJournal, ErcJournal } from "@/lib/values/journalPics";
import { imageCache, markAssetsPreloaded } from "@/lib/caches/images";

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [loadedCount, setLoadedCount] = useState(0);
    const [showSkip, setShowSkip] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const loadedRef = useRef(false);

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
        const t = setTimeout(() => setShowSkip(true), 3000);
        return () => clearTimeout(t);
    }, []);

    const handleSkip = () => {
        setVideoEnded(true);
        setTimeout(onFinish, 100);
    };

    useEffect(() => {
        if (loadedRef.current) return;
        loadedRef.current = true;

        allImages.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
                imageCache.set(src, img);
                setLoadedCount((c) => {
                    const next = c + 1;
                    if (next === allImages.length) {
                        markAssetsPreloaded();
                        setVideoStarted(true);
                    }
                    return next;
                });
            };
        });
    }, [allImages]);

    return (
        <AnimatePresence>
            {!videoEnded && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black"
                >
                    {!videoStarted && (
                        <div className="text-white text-center">
                            <p>{`Loading Assets (${loadedCount}/${allImages.length})`}</p>
                            <p className="text-xs text-muted-foreground">
                                Optimizing assets for smooth performance
                            </p>
                        </div>
                    )}

                    {videoStarted && (
                        <video
                            src="/cateyes.mp4"
                            autoPlay
                            muted
                            playsInline
                            onEnded={() => setVideoEnded(true)}
                            className="object-contain h-screen w-screen"
                        />
                    )}

                    {showSkip && !videoStarted && loadedCount < allImages.length && (
                        <motion.button
                            onClick={handleSkip}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="cursor-pointer absolute bottom-16 px-4 py-1 rounded-lg text-white border-white/20 hover:bg-white/20 transition"
                        >
                            Waiting too long? Click me to skip
                        </motion.button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
