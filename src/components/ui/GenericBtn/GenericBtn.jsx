import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './GenericBtn.module.css';

const GenericBtn = ({
  children,
  disabled,
  active,
  customStyles = {},
  customClass,
  ...props
}) => {
  return (
    <button
      className={classNames(
        css.btn,
        { [css.btn_disabled]: disabled },
        { [css.btn_active]: active },
        customStyles.btn)}
      {...props}
    >
      {children}
    </button>
  );
};

GenericBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  customStyles: PropTypes.object,
  customClass: PropTypes.string,
};

export default GenericBtn;

