import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteSong } from "../store/songSlice"
import SongForm from "./song-form"

interface Song {
  id: string
  title: string
  artist: string
  album: string
  genre: string
}

export default function SongItem({ song }: { song: Song }) {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteSong(song.id))
  }

  return (
    <div className="bg-gruvbox-light1 dark:bg-gruvbox-dark1 p-4 rounded-lg shadow-md">
      {isEditing ? (
        <SongForm song={song} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h3 className="text-xl font-bold mb-2 text-gruvbox-dark0 dark:text-gruvbox-light0">{song.title}</h3>
          <p className="text-gruvbox-dark2 dark:text-gruvbox-light2">Artist: {song.artist}</p>
          <p className="text-gruvbox-dark2 dark:text-gruvbox-light2">Album: {song.album}</p>
          <p className="text-gruvbox-dark2 dark:text-gruvbox-light2">Genre: {song.genre}</p>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gruvbox-blue hover:bg-gruvbox-aqua text-gruvbox-dark0 font-bold py-1 px-2 rounded text-sm transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-gruvbox-red hover:bg-gruvbox-orange text-gruvbox-light0 font-bold py-1 px-2 rounded text-sm transition-colors"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

