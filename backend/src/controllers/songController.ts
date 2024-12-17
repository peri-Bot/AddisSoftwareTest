import { Request, Response } from 'express';
import Song, { ISong } from '../models/song';

// Get all songs
export const getSongs = async (req: Request, res: Response) => {
	try {
		const songs = await Song.find();
		res.status(200).json(songs);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching songs' });
	}
};

// Create new song
export const createSong = async (req: Request, res: Response) => {
	try {
		const song = await Song.create(req.body);
		res.status(201).json(song);
	} catch (error) {
		res.status(400).json({ message: 'Error creating song' });
	}
};

// Update song
export const updateSong = async (req: Request, res: Response) => {
	try {
		const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!song) {
			res.status(404).json({ message: 'Song not found' });
			return
		}
		res.status(200).json(song);
	} catch (error) {
		res.status(400).json({ message: 'Error updating song' });
	}
};

// Delete song
export const deleteSong = async (req: Request, res: Response) => {
	try {
		const song = await Song.findByIdAndDelete(req.params.id);
		if (!song) {
			res.status(404).json({ message: 'Song not found' });
			return
		}
		res.status(200).json({ message: 'Song deleted successfully' });
	} catch (error) {
		res.status(400).json({ message: 'Error deleting song' });
	}
};
