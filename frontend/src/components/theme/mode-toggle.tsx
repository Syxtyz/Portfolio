import { Moon, Sun } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useTheme } from "../../components/ui/theme-provider"
import { Tooltip, TooltipContent, TooltipTrigger } from "../../components/ui/tooltip"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else setTheme("light")
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="ghost" size={"icon"} onClick={toggleTheme} className="cursor-pointer">
          {theme === "dark" ? (
            <Moon />
          ) : (
            <Sun />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Change Theme</p>
      </TooltipContent>
    </Tooltip>
  )
}
