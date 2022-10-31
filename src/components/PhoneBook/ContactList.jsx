import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <div className="contactsField">
      {contacts?.length < 0 ? (
        <Notification message="You don't have any contact 😓" />
      ) : (
        <ul className="contactsList">
          {contacts.map(({ id, name, number }) => (
            <li key={id} className="contactsList__item">
              <span className="contactsList__info">
                <b>{name}:</b> {number}
              </span>
              <button
                className="contactsList__btn"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;
