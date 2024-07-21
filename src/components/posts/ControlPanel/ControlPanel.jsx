import React from 'react'
import PropTypes from 'prop-types'
import GenericBtn from 'components/ui/GenericBtn';
import css from './ControlPanel.module.css';

const ControlPanel = ({openModal, clearFilter}) => {
  return (
    <div className={css.wrapper}>
      <GenericBtn onClick={openModal}>Додати новий пост</GenericBtn>
      <GenericBtn onClick={clearFilter}>Очистити фільтр</GenericBtn>
    </div>
  )
}

ControlPanel.propTypes = {
  openModal: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,

}

export default ControlPanel
