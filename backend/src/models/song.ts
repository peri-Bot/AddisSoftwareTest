import mongoose, { Document, Schema } from 'mongoose';

export interface ISong extends Document {
	title: string;
	artist: string;
	album: string;
	genre: string;
}

const songSchema = new Schema<ISong>({
	title: {
		type: String,
		required: [true, 'Title is required'],
		trim: true
	},
	artist: {
		type: String,
		required: [true, 'Artist is required'],
		trim: true
	},
	album: {
		type: String,
		required: [true, 'Album is required'],
		trim: true
	},
	genre: {
		type: String,
		required: [true, 'Genre is required'],
		trim: true
	}
}, {
	timestamps: true
});

export default mongoose.model<ISong>('Song', songSchema);
