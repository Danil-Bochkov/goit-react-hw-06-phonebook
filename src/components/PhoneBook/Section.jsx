import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className="container">
    <h2 className="PhoneBook__title">{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
