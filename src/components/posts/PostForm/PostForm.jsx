import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import GenericInput from 'components/ui/GenericInput';
import GenericBtn from 'components/ui/GenericBtn';

import css from './PostForm.module.css';

const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPost(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = { ...post, id: nanoid() };
    createPost(newPost);
    setPost({ title: "", body: "" });
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
};

export default PostForm;
