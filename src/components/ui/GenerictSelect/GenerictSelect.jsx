import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './GenericSelect.module.css';

const GenericSelect = ({
  options,
  label,
  defaultOption,
  value,
  onChange,
  customStyles = {},
}) => {
  return (
    <label className={classNames(css.label, customStyles.label)}>
      {label}
      <select
        className={classNames(css.select, customStyles.select)}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {defaultOption &&
          <option
            disabled
            value=""
          >
            {defaultOption}
          </option>
        }
        {options.map(option =>
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )}
      </select>
    </label>
  );
}

GenericSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  label: PropTypes.string,
  defaultOption: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  customStyles: PropTypes.object,
};

export default GenericSelect;
