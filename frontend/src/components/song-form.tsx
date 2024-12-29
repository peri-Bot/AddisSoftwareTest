import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
//import { addSong, updateSong } from "../store/songSlice"

interface Song {
	id?: string
	title: string
	artist: string
	album: string
	genre: string
}

interface SongFormProps {
	song?: Song
	onClose: () => void
}

export default function SongForm({ song, onClose }: SongFormProps) {
	const [formData, setFormData] = useState<Song>(
		song || { title: "", artist: "", album: "", genre: "" }
	)
	const dispatch = useDispatch()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (song) {
			// dispatch(updateSong({ ...formData, id: song.id }))
		} else {
			// dispatch(addSong(formData))
		}
		onClose()
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<form onSubmit={handleSubmit} className="mb-8 bg-gruvbox-light1 dark:bg-gruvbox-dark1 p-6 rounded-lg shadow-md">
			<h3 className="text-2xl font-bold mb-4 text-gruvbox-dark0 dark:text-gruvbox-light0">
				{song ? "Edit Song" : "Add New Song"}
			</h3>
			<div className="mb-4">
				<label htmlFor="title" className="block text-gruvbox-dark2 dark:text-gruvbox-light2 mb-2">
					Title
				</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={handleChange}
					required
					className="w-full p-2 border border-gruvbox-borderColor rounded bg-gruvbox-light0 dark:bg-gruvbox-dark0 text-gruvbox-dark0 dark:text-gruvbox-light0"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="artist" className="block text-gruvbox-dark2 dark:text-gruvbox-light2 mb-2">
					Artist
				</label>
				<input
					type="text"
					id="artist"
					name="artist"
					value={formData.artist}
					onChange={handleChange}
					required
					className="w-full p-2 border border-gruvbox-borderColor rounded bg-gruvbox-light0 dark:bg-gruvbox-dark0 text-gruvbox-dark0 dark:text-gruvbox-light0"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="album" className="block text-gruvbox-dark2 dark:text-gruvbox-light2 mb-2">
					Album
				</label>
				<input
					type="text"
					id="album"
					name="album"
					value={formData.album}
					onChange={handleChange}
					required
					className="w-full p-2 border border-gruvbox-borderColor rounded bg-gruvbox-light0 dark:bg-gruvbox-dark0 text-gruvbox-dark0 dark:text-gruvbox-light0"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="genre" className="block text-gruvbox-dark2 dark:text-gruvbox-light2 mb-2">
					Genre
				</label>
				<input
					type="text"
					id="genre"
					name="genre"
					value={formData.genre}
					onChange={handleChange}
					required
					className="w-full p-2 border border-gruvbox-borderColor rounded bg-gruvbox-light0 dark:bg-gruvbox-dark0 text-gruvbox-dark0 dark:text-gruvbox-light0"
				/>
			</div>
			<div className="flex justify-end space-x-2">
				<button
					type="button"
					onClick={onClose}
					className="bg-gruvbox-medium hover:bg-gruvbox-dark3 text-gruvbox-light0 font-bold py-2 px-4 rounded transition-colors"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="bg-gruvbox-green hover:bg-gruvbox-aqua text-gruvbox-dark0 font-bold py-2 px-4 rounded transition-colors"
				>
					{song ? "Update" : "Add"} Song
				</button>
			</div>
		</form>
	)
}

