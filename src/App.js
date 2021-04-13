import React from 'react';
import Container from './сomponents/Container/Container';
import ContactForm from './сomponents/ContactForm/ContactForm';
import Filter from './сomponents/Filter/Filter';
import ContactList from './сomponents/ContactList/ContactList';

import './index.css';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
