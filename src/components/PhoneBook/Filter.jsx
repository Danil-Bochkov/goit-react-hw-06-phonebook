import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleChange, filter }) => {
  return (
    <form className="filterField">
      <label className="filterField__label">
        Find contacts by name
        <input
          className="filterField__input"
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
