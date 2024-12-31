import { ThemeSwitcher } from "./theme-switcher.tsx"
import React from "react"

export default function Header() {
	return (
		<header className="bg-gruvbox-dark1 text-gruvbox-light0 p-4 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">Song Manager</h1>
				<ThemeSwitcher />
			</div>
		</header>
	)
}

