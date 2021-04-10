import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './contacts-actions';

const contacts = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactTypes.ADD:
//       return [...state, payload];

//     case contactTypes.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [action.filterContact]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case contactTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({ contacts, filter });
