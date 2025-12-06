import MyCarousel from "@/components/reusableUI/carousel";
import { Jairosoft, PLDT, Predeparture, ResponseCenter, Vikings } from "@/lib/values/journal";

export default function JournalSection() {
    return (
        <>
            <MyCarousel pictures={Predeparture}>
                <div className="flex flex-col gap-1">
                    <p className="text-lg">Predeparture</p>
                    <p>Early in the morning, I was so excited to visit as its my first time going to such place. </p>
                </div>
            </MyCarousel>
            <MyCarousel pictures={PLDT} reverse={true}>
                <p className="text-lg">PLDT & Vitro Data Center</p>
            </MyCarousel>
            <MyCarousel pictures={Vikings}>
                <p className="text-lg">Vikings - Lunch Time</p>
            </MyCarousel>
            <MyCarousel pictures={Jairosoft} reverse={true}>
                <p className="text-lg">Jairosoft Inc.</p>
            </MyCarousel>
            <MyCarousel pictures={ResponseCenter}>
                <p className="text-lg">Davao City Central 911 Emergency Response Center</p>
            </MyCarousel>
        </>
    )
}