import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import css from './GenericModal.module.css';

const GenericModal = ({ children, closeModal, modalRoot, customStyles = {} }) => {
  const handleKeyDown = useCallback((event) => {
    if (event.code === "Escape") {      
      closeModal();      
    }
  }, [closeModal]);  
  
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <div
      className={classNames(css.backdrop, customStyles.backdrop)}
      onClick={handleBackdropClick}
    >
      <div className={classNames(css.content, customStyles.content)}>
        {children}
      </div>      
    </div>,
    modalRoot
  );
}

GenericModal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalRoot: PropTypes.instanceOf(HTMLElement).isRequired,
  customStyles: PropTypes.object,
}

export default GenericModal;