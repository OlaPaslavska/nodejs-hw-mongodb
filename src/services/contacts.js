// import getAllContactsService from '../services/contacts.js';

const getAllContacts = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
const getContactById = async (id) => {
  return await contact.findById(id);
};
export { getAllContacts, getContactById };
