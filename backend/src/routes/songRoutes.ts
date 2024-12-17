import express from 'express';
import { getSongs, createSong, updateSong, deleteSong } from '../controllers/songController';

const router = express.Router();

router.route('/')
	.get(getSongs)
	.post(createSong);

router.route('/:id')
	.put(updateSong)
	.delete(deleteSong);

export default router;
