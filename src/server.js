import express from 'express';
import cors from 'cors';
import pino from 'pino';

import { env } from './utils/env.js';
import { getAllContacts, getContactById } from './services/contacts.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/contacts', async (req, res) => {
    const contacts = await getAllContacts();

    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });

  app.get('/contacts/:contactID', async (req, res) => {
    const { contactID } = req.params;
    const contact = await getContactById(contactID);

    if (!contact) {
      res.status(404).json({
        message: 'Contact not found',
      });
      return;
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactID}!`,
      data: contact,
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
