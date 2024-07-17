import GenericInfoMessage from 'components/ui/GenericInfoMessage'
import React from 'react';
import css from './EmptyPostListMessage.module.css';

const EmptyPostListMessage = () => {
  return (
    <GenericInfoMessage message="Пости відсутні" customStyles={css} />
  );
}

export default EmptyPostListMessage;
