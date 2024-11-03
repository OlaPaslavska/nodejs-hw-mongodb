import setupServer from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import dotenv from 'dotenv';
dotenv.config();

const startApp = async () => {
  await initMongoConnection(); // Чекаємо на підключення до бази
  setupServer(); // Запускаємо сервер
};

startApp().catch((err) => {
  console.error('Failed to start the app:', err);
  process.exit(1);
});
