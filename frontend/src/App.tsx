import FooterContent from "./screens/footer"
import LandingContent from "./screens/landing/main"
import { ScrollArea } from "./components/ui/scroll-area"
import AchievementContent from "./screens/achievement/main"
import { useRef, useState } from "react"
import { SplashScreen } from "./screens/splash"

import { AnimatePresence } from "framer-motion"
function App() {
  const [isReady, setIsReady] = useState(false)
  const achievementRef = useRef<HTMLDivElement | null>(null)

  return (
    <ScrollArea className="h-screen">
      <div className="lg:px-32 px-6">
        <AnimatePresence>
          {!isReady && <SplashScreen onFinish={() => setIsReady(true)} />}
          <LandingContent scrollToAchievement={() => achievementRef.current?.scrollIntoView({ behavior: "smooth" })} />
          <div ref={achievementRef}>
            <AchievementContent />
          </div>
          <FooterContent />
        </AnimatePresence>
      </div>
    </ScrollArea>
  )
}

export default App
