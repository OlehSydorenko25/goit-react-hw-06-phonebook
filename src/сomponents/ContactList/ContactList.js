import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/contacts-actions';
import styles from './ContactList.module.css';

const ContactList = ({ contactList, onDeleteContact }) => {
  //   console.log(contactList);
  return (
    <ul className={styles.contactList}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.contact}>
            <span>{name}: </span>
            <span>{number}</span>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

const getVisibleContacts = (arrContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return arrContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { contacts, filter } = state.phonebook;

  const visidleContacts = getVisibleContacts(contacts, filter);

  return { contactList: visidleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
