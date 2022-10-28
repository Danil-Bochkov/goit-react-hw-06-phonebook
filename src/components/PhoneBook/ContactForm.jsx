import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import PropTypes from 'prop-types';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="formField">
      <label className="formField__label">
        Name
        <input
          className="formField__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="formField__label">
        Number
        <input
          className="formField__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className="formField__btn">
        Add Contact
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
