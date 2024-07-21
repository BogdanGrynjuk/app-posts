import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GenericModal from 'components/ui/GenericModal'
import { MODAL_ADD_NEW_POST_ROOT } from 'static/modalRoots';
import PostForm from '../PostForm';
import GenericBtn from 'components/ui/GenericBtn';
import customStylesForBtnCloseModal from './CustomStylesForBtn.module.css' 


const ModalAddnewPost = ({closeModal, createPost}) => {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => setModalRoot(MODAL_ADD_NEW_POST_ROOT), []);
  
  return (
    <>
      {modalRoot
        ? <GenericModal
          modalRoot={modalRoot}
          closeModal={closeModal}
        >
          <GenericBtn
            onClick={closeModal}
            customStyles={customStylesForBtnCloseModal}
          >
            X
          </GenericBtn>
          <PostForm
            createPost={createPost}
            closeModal={closeModal}
          />

        </GenericModal >
        : null
      }
    </>
  );
}

ModalAddnewPost.propTypes = {
  closeModal: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
};

export default ModalAddnewPost;

