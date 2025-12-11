import FooterContent from "./components/footer/footer"
import LandingContent from "./components/landing/main"
import { ScrollArea } from "./components/ui/scroll-area"
import AchievementContent from "./components/achievement/main"
import { useRef, useState } from "react"
import { SplashScreen } from "./components/splash/splash"
import MeetingContent from "./components/contact/main"
import AboutContent from "./components/about/main"
function App() {
  const [isReady, setIsReady] = useState(false)
  const achievementRef = useRef<HTMLDivElement | null>(null)

  return (
    <ScrollArea className="h-screen">
      <div className="lg:px-32 md:px-6 w-screen">
          {!isReady && <SplashScreen onFinish={() => setIsReady(true)} />}
          <LandingContent scrollToAchievement={() => achievementRef.current?.scrollIntoView({ behavior: "smooth" })} />
          <div ref={achievementRef}>
            <AboutContent/>
          </div>
            <AchievementContent />
          <MeetingContent/>
          <FooterContent />
      </div>
    </ScrollArea>
  )
}

export default App
