"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gruvbox-light2 dark:bg-gruvbox-dark2 text-gruvbox-dark0 dark:text-gruvbox-light0 hover:bg-gruvbox-light3 dark:hover:bg-gruvbox-dark1 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}

