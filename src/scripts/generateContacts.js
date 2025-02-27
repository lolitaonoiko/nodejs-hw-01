import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    for (let i = 1; i <= number; i++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
