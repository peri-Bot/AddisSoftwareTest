"use client"

import { useState } from "react"
import React from "react"
import SongList from "./components/song-list.tsx"
import SongForm from "./components/song-form.tsx"
import Statistics from "./components/statistics.tsx"

export default function Home() {
	const [showForm, setShowForm] = useState(false)

	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-between items-center mb-8">
				<h2 className="text-3xl font-bold text-gruvbox-dark0 dark:text-gruvbox-light0">Songs</h2>
				<button
					onClick={() => setShowForm(!showForm)}
					className="bg-gruvbox-button hover:bg-gruvbox-orange text-gruvbox-dark0 font-bold py-2 px-4 rounded transition-colors"
				>
					{showForm ? "Cancel" : "Add Song"}
				</button>
			</div>
			{showForm && <SongForm onClose={() => setShowForm(false)} />}
			<SongList />
			<Statistics />
		</div>
	)
}

