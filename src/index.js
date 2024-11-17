import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
import dotenv from 'dotenv';

dotenv.config();

const startApp = async () => {
  try {
    await initMongoConnection();

    setupServer();
  } catch (error) {
    console.error('Error during app initialization:', error);
  }
};

startApp();
