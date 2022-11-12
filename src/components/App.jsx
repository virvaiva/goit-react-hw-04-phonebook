import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Contact } from './Contacts/Contacts';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setcontacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const filterList = event => {
    setFilter(event.target.value);
  };

  const deleteContact = idContact => {
    setcontacts(contacts =>
      contacts.filter(contact => contact.id !== idContact)
    );
  };

  const formSubmit = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const exist = contacts.some(e => e.name === name);
    if (exist) {
      return alert(`${name} is already in contacts!`);
    }
    setcontacts([contact, ...contacts]);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts), [
      contacts,
    ]);
  });

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
        <Contact onSubmit={formSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={filterList} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Section>
    </div>
  );
}
