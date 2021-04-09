import { v4 as uuidv4 } from 'uuid';
import contactTypes from '../redux/contact-types';

const addContact = value => ({
  type: contactTypes.ADD,
  payload: { id: uuidv4(), ...value },
});

const deleteContact = idContact => ({
  type: contactTypes.DELETE,
  payload: idContact,
});

const filterContact = value => ({
  type: contactTypes.FILTER,
  payload: value,
});

export default { addContact, deleteContact, filterContact };
