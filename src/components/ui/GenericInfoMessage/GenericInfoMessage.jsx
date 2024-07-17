import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './GenericInfoMessage.module.css';

const GenericInfoMessage = ({
  message,
  customStyles = {},
}) => {
  return (
    <p className={classNames(css.message, customStyles.message)}>
      {message}
    </p>
  );
};

GenericInfoMessage.propTypes = {
  message: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
};

export default GenericInfoMessage;
