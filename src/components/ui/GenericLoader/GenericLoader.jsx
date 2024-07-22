import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import css from './GenericLoader.module.css';

const GenericLoader = ({
  text,
  modalRoot,
  customStyles = {}
}) => {
  return createPortal(
    <div className={classNames(css.backdrop, customStyles.backdrop)}>
      <div className={classNames(css.loader, customStyles.loader)}></div>
      <p className={classNames(css.text, customStyles.text)}>{text}</p>      
    </div>,
    modalRoot
  )
}

GenericLoader.propTypes = {
  text: PropTypes.string,
  modalRoot: PropTypes.instanceOf(HTMLElement).isRequired,
  customStyles: PropTypes.object,
}

export default GenericLoader
