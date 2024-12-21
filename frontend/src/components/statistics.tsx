import { useSelector } from "react-redux"
import { RootState } from "../store"

export default function Statistics() {
  const songs = useSelector((state: RootState) => state.songs.songs)

  const totalSongs = songs.length
  const totalArtists = new Set(songs.map((song) => song.artist)).size
  const totalAlbums = new Set(songs.map((song) => song.album)).size
  const totalGenres = new Set(songs.map((song) => song.genre)).size

  const genreCounts = songs.reduce((acc, song) => {
    acc[song.genre] = (acc[song.genre] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const artistCounts = songs.reduce((acc, song) => {
    acc[song.artist] = (acc[song.artist] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const albumCounts = songs.reduce((acc, song) => {
    acc[song.album] = (acc[song.album] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="mt-8 bg-gruvbox-light1 dark:bg-gruvbox-dark1 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gruvbox-dark0 dark:text-gruvbox-light0">Statistics</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Songs" value={totalSongs} />
        <StatCard title="Total Artists" value={totalArtists} />
        <StatCard title="Total Albums" value={totalAlbums} />
        <StatCard title="Total Genres" value={totalGenres} />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatList title="Songs per Genre" items={genreCounts} />
        <StatList title="Songs per Artist" items={artistCounts} />
        <StatList title="Songs per Album" items={albumCounts} />
      </div>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-gruvbox-light2 dark:bg-gruvbox-dark2 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-gruvbox-dark0 dark:text-gruvbox-light0">{title}</h3>
      <p className="text-3xl font-bold text-gruvbox-blue dark:text-gruvbox-aqua">{value}</p>
    </div>
  )
}

function StatList({ title, items }: { title: string; items: Record<string, number> }) {
  return (
    <div className="bg-gruvbox-light2 dark:bg-gruvbox-dark2 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-gruvbox-dark0 dark:text-gruvbox-light0">{title}</h3>
      <ul className="space-y-1">
        {Object.entries(items).map(([key, value]) => (
          <li key={key} className="flex justify-between text-gruvbox-dark1 dark:text-gruvbox-light1">
            <span>{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

