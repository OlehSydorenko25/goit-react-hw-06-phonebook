/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// const addContact = value => ({
//   type: contactTypes.ADD,
//   payload: { id: uuidv4(), ...value },
// });

const addContact = createAction('contact/add', value => {
  return { payload: { id: uuidv4(), ...value } };
});

// const deleteContact = idContact => ({
//   type: contactTypes.DELETE,
//   payload: idContact,
// });

const deleteContact = createAction('contact/delete');

// const filterContact = value => ({
//   type: contactTypes.FILTER,
//   payload: value,
// });

const filterContact = createAction('contact/filter');

export default { addContact, deleteContact, filterContact };
