import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GenericInput from 'components/ui/GenericInput';
import GenericBtn from 'components/ui/GenericBtn';

import css from './PostForm.module.css';

const PostForm = ({ createPost, closeModal, existingPosts }) => {
  const [post, setPost] = useState({ title: "", body: "" });  
  const [idCounter, setIdCounter] = useState(1);

  useEffect(() => {
    if (existingPosts.length > 0) {
      const maxId = Math.max(...existingPosts.map(post => post.id));
      setIdCounter(maxId + 1);
    }
  }, [existingPosts]);
  
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPost(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = { ...post, id: idCounter };
    setIdCounter(prevId => prevId + 1);
    createPost(newPost);
    setPost({ title: "", body: "" });
    closeModal();
  };
  

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit}
    >
      <GenericInput
        type="text"
        name="title"
        value={post.title}
        placeholder="Введіть назву поста"
        label="Назва поста"
        onChange={handleChangeInput}
      />
      <GenericInput
        type="text"
        name="body"
        value={post.body}
        placeholder="Введіть опис поста"
        label="Опис поста"
        onChange={handleChangeInput}
      />
      <GenericBtn
        type="submit"
        disabled={!(post.title && post.body)}
        customStyles={css}
      >
        Додати новий пост
      </GenericBtn>
    </form>
  );
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  existingPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
  closeModal: PropTypes.func.isRequired,
  

};

export default PostForm;
