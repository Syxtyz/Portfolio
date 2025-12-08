import MyCarousel from "@/components/reusableUI/carousel";
import ImageModal from "@/components/reusableUI/imageModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MyJournal } from "@/lib/values/journal";

export default function JournalSection() {
    const [modalImages, setModalImages] = useState<string[] | null>(null);

    return (
        <>
            {MyJournal.map((sec, i) => (
                <MyCarousel key={i} pictures={sec.pictures} reverse={sec.reverse}>
                    <div className="flex flex-col gap-1">
                        <p className="text-lg">{sec.title}</p>
                        {sec.description && <p>{sec.description}</p>}
                    </div>

                    {sec.journalImages && (
                        <Button
                            variant="outline"
                            className="mt-4 cursor-pointer"
                            onClick={() => setModalImages(sec.journalImages)}
                        >
                            Journal
                        </Button>
                    )}
                </MyCarousel>
            ))}

            <ImageModal show={modalImages !== null} images={modalImages || []} onClose={() => setModalImages(null)} />
        </>
    );
}
