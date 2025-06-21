import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/blocks/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-none !bg-background transition-none hover:!bg-input">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all rotate-0 dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background mt-2 -mr-1" align="end">
        <DropdownMenuItem className="text-center" onClick={() => setTheme("light")}>
          <span className="w-full">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-center" onClick={() => setTheme("dark")}>
          <span className="w-full">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-center" onClick={() => setTheme("system")}>
          <span className="w-full">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}