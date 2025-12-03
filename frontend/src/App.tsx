import FooterContent from "./screens/footer"
import { ModeToggle } from "./screens/mode-toggle"
import LandingContent from "./screens/landing/main"
import { ScrollArea } from "./components/ui/scroll-area"

function App() {

  return (
    <ScrollArea className="h-screen px-32">
      <LandingContent />
      <ModeToggle />
      <FooterContent />
      {/* Education Tour Journal with Photos
      Certification
      Tech Stack */}
    </ScrollArea>
  )
}

export default App
