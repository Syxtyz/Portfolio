import { Moon, Sun } from "lucide-react"
import { Button } from "../components/ui/button"
import { useTheme } from "../components/ui/theme-provider"
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else setTheme("light")
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="default" size={"icon-lg"} className="absolute bottom-0 left-0 rounded-tr-full border border-transparent hover:border-black dark:hover:border-white" onClick={toggleTheme}>
          <Sun
            className={`absolute bottom-1/5 left-1/5 ${theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
              }`}
          />
          <Moon
            className={`absolute bottom-1/5 left-1/5 ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"

              }`}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Change Theme</p>
      </TooltipContent>
    </Tooltip>
  )
}
