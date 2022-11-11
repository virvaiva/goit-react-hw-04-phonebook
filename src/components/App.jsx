import React from 'react';
import { nanoid } from 'nanoid';

import { Contact } from './Contacts/Contacts';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  FilteredContacts = () => {
    const { contacts, filter } = this.state;
    const ContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return ContactsList;
  };

  filterList = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  formSubmit = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const exist = this.state.contacts.some(e => e.name === name);
    if (exist) {
      return alert(`${name} is already in contacts!`);
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  handleFormSubmit = () => {
    const { contacts, deleteContact } = this.state;
    localStorage.setItem('contacts', contacts ? deleteContact : '');
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',

          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#212121',
        }}
      >
        <Section title="Phonebook">
          <Contact onSubmit={this.formSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterList} />
          <ContactList
            contacts={this.FilteredContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
