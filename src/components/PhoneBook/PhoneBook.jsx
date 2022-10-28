import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterContact } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import './PhoneBook.scss';

export default function PhoneBook() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContact);
  const contacts = useSelector(getContacts);

  const filterContacts = contacts => {
    return contacts?.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleChange = evt => {
    dispatch(updateFilter(evt.currentTarget.value));
  };

  return (
    <div className="PhoneBook">
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList contacts={filterContacts(contacts)} />
      </Section>
    </div>
  );
}
