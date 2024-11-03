import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const initMongoConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}collection?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.error('MongoDB connection error:', e);
    process.exit(1);
  }
};
