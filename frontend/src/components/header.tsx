import { ThemeSwitcher } from "./theme-switcher"

export default function Header() {
  return (
    <header className="bg-gruvbox-light1 dark:bg-gruvbox-dark1 text-gruvbox-dark0 dark:text-gruvbox-light0 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Song Manager</h1>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

