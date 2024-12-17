import { Request, Response } from 'express';
import Song from '../models/song';

export const getStats = async (req: Request, res: Response) => {
	try {
		const stats = await Promise.all([
			// Total counts
			Song.countDocuments(),
			Song.distinct('artist').exec(),
			Song.distinct('album').exec(),
			Song.distinct('genre').exec(),

			// Songs per genre
			Song.aggregate([
				{ $group: { _id: '$genre', count: { $sum: 1 } } }
			]),

			// Songs and albums per artist
			Song.aggregate([
				{
					$group: {
						_id: '$artist',
						songCount: { $sum: 1 },
						albums: { $addToSet: '$album' }
					}
				}
			]),

			// Songs per album
			Song.aggregate([
				{ $group: { _id: '$album', songCount: { $sum: 1 } } }
			])
		]);

		res.status(200).json({
			totalSongs: stats[0],
			totalArtists: stats[1].length,
			totalAlbums: stats[2].length,
			totalGenres: stats[3].length,
			songsPerGenre: stats[4],
			artistStats: stats[5],
			albumStats: stats[6]
		});
	} catch (error) {
		res.status(500).json({ message: 'Error fetching statistics' });
	}
};
