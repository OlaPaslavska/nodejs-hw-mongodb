import mongoose from 'mongoose';
import { env } from '../utils/env.js';

import dotenv from 'dotenv';
dotenv.config();

export const initMongoConnection = async () => {
  if (
    !process.env.MONGODB_USER ||
    !process.env.MONGODB_PASSWORD ||
    !process.env.MONGODB_URL ||
    !process.env.MONGODB_DB
  ) {
    console.error(
      'MongoDB connection configuration is missing in environment variables.',
    );
    process.exit(1);
  }
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=cluster0`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.error('MongoDB connection error:', e.message);
    process.exit(1);
  }
};
