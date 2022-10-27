import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <>
    <p className="message">{message}</p>
  </>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
