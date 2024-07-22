import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './GenericBtn.module.css';

const GenericBtn = ({
  children,
  disabled,
  active,
  customStyles = {},
  ...props
}) => {
  return (
    <button
      className={classNames(css.btn, { [css.btn_disabled]: disabled }, customStyles.btn, )}
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
};

export default GenericBtn;
