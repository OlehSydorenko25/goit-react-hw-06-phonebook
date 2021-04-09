import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './сomponents/Container/Container';
import ContactForm from './сomponents/ContactForm/ContactForm';
import Filter from './сomponents/Filter/Filter';
import ContactList from './сomponents/ContactList/ContactList';

import './index.css';

class App extends Component {
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contactList: state.contacts,
});

export default connect(mapStateToProps)(App);
