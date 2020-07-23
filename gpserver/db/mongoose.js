import mongoose from "mongoose";
import { constants } from '../configs/constants';

export const connectDatabase = () =>{
   mongoose.connect(constants.MONGO_URI, {useNewUrlParser: true ,useUnifiedTopology: true});

	mongoose.connection.on('connected', () => {
		process.stdout.write('MongoDB connected to server !!\n');
	});

	mongoose.connection.on('error', (err) => {
		process.stderr.write('MongoDB Connection Error. Please make sure that MongoDB is running.\n' + err);
	});

	mongoose.connection.on('disconnected', () => {
		process.stdout.write('MongoDB Disconnected from server !!\n');
	});
}