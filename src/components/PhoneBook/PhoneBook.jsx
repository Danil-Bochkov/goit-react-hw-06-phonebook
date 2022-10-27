import { useState, useEffect } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import './PhoneBook.scss';
import { nanoid } from 'nanoid';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default function PhoneBook() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useLocalStorage('filter', '');

  const formSubmitHandler = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(state => {
      return [
        ...state,
        {
          id: nanoid(),
          name,
          number,
        },
      ];
    });
  };

  const handleChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const filterContacts = contacts => {
    return contacts?.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = idContact => {
    setContacts(state => {
      return state?.filter(state => state.id !== idContact);
    });
  };

  return (
    <div className="PhoneBook">
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList
          contacts={filterContacts(contacts)}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    </div>
  );
}
