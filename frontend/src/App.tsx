import FooterContent from "./screens/footer"
import LandingContent from "./screens/landing/main"
import { ScrollArea } from "./components/ui/scroll-area"
import AchievementContent from "./screens/achievement/main"

function App() {

  return (
    <ScrollArea className="h-screen lg:px-32">
      <LandingContent />
      {/* <ModeToggle /> */}
      <AchievementContent/>
      <FooterContent />
      {/* Education Tour Journal with Photos
      Certification
      Tech Stack */}
    </ScrollArea>
  )
}

export default App
