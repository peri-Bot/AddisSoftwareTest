"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import SongItem from "./song-item"

export default function SongList() {
  const songs = useSelector((state: RootState) => state.songs.songs)
  const [filter, setFilter] = useState("")

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(filter.toLowerCase()) ||
      song.artist.toLowerCase().includes(filter.toLowerCase()) ||
      song.album.toLowerCase().includes(filter.toLowerCase()) ||
      song.genre.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Filter songs..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 border border-gruvbox-borderColor rounded bg-gruvbox-light0 dark:bg-gruvbox-dark0 text-gruvbox-dark0 dark:text-gruvbox-light0"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSongs.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}

