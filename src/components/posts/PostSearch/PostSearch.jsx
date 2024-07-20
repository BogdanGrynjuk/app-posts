import React from 'react';
import PropTypes from 'prop-types';
import GenericInput from 'components/ui/GenericInput';
import css from './PostSearch.module.css';

const PostSearch = ({ searchQuery, searchPost }) => {
  return (
    <GenericInput
      label={"Пошук поста"}
      value={searchQuery}
      placeholder="Введіть назву поста"
      onChange={searchPost}
      customStyles={css}
    />
  );
}

PostSearch.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  searchPost: PropTypes.func.isRequired,
}

export default PostSearch
