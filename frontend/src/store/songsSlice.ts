import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Song {
	id: string;
	title: string;
	artist: string;
	album: string;
	genre: string;
}

interface SongsState {
	songs: Song[];
}

const initialState: SongsState = {
	songs: [],
};

const songsSlice = createSlice({
	name: 'songs',
	initialState,
	reducers: {
		addSong(state, action: PayloadAction<Song>) {
			state.songs.push(action.payload);
		},
		removeSong(state, action: PayloadAction<string>) {
			state.songs = state.songs.filter((song) => song.id !== action.payload);
		},
	},
});

export const { addSong, removeSong } = songsSlice.actions;
export default songsSlice.reducer;
