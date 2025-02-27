import { createFakeContact } from '../utils/createFakeContact.js';

import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    const oneContact = createFakeContact();

    contacts.push(oneContact);

    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
