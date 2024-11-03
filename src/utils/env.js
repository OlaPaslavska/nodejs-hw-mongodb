import { getAllContacts } from '../services/contacts.js';

export const getContacts = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    console.log('Fetched contacts:', contacts); // Лог для перевірки
    res.status(200).json({
      status: 200,
      message: `Successfully found contacts!`,
      data: contacts,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
