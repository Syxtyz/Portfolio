import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface ImageModalProps {
    show: boolean
    images: string[]
    startIndex?: number
    onClose: () => void
}

export default function ImageModal({ show, images, startIndex = 0, onClose }: ImageModalProps) {
    const [index, setIndex] = useState(startIndex);

    useEffect(() => {
        if (show) setIndex(startIndex);
    }, [show, startIndex]);

    const hasMultiple = images.length > 1;

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-999"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative flex items-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {hasMultiple && (
                            <button
                                onClick={prev}
                                className="absolute -left-12 text-white hover:bg-white/10 p-2 rounded-full cursor-pointer"
                            >
                                <ChevronLeft/>
                            </button>
                        )}

                        <img
                            src={images[index]}
                            className="max-w-[90vw] max-h-[80vh] rounded-xl"
                        />

                        {hasMultiple && (
                            <button
                                onClick={next}
                                className="absolute -right-12 text-white hover:bg-white/10 p-2 rounded-full cursor-pointer"
                            >
                                <ChevronRight/>
                            </button>
                        )}

                        <button
                            onClick={onClose}
                            className="absolute -top-8 -right-8 p-2 text-white hover:bg-white/10 rounded-full cursor-pointer"
                        >
                            <XIcon/>
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
