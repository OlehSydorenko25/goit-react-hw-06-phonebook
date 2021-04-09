import { createStore, combineReducers } from 'redux';
import contactTypes from './contact-types';

// const contacts = [
//   { id: '1', name: 'Alex', number: '321-321-321' },
//   { id: '2', name: 'Polli', number: '654-654-654' },
//   { id: '3', name: 'Mango', number: '987-987-987' },
// ];

const counterReducer = (state = [], { type, payload }) => {
  switch (type) {
    case contactTypes.ADD:
      return [...state, payload];

    case contactTypes.DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filterReduser = (state = '', { type, payload }) => {
  switch (type) {
    case contactTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: counterReducer,
  filter: filterReduser,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
