import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './GenericInput.module.css';

const GenericInput = ({ label, customStyles = {}, ...props }) => {
  return (
    <div className={classNames(css.wrapper, customStyles.wrapper)}>
      <label className={classNames(css.label, customStyles.label)}>
        {label}
        <input
          className={classNames(css.input, customStyles.input)}
          {...props}
        />
      </label>
    </div>
  );
}

GenericInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  customStyles: PropTypes.object,
};

export default GenericInput;
