import React from 'react';
import PropTypes from 'prop-types';

import css from './PostFilter.module.css';
import PostSelect from '../PostSelect';
import PostSearch from '../PostSearch';

const PostFilter = ({filter, sortPost, searchPostByTitle}) => {
  return (
    <div className={css.wrapper}>
      <PostSelect
        selectedSort={filter.sort}
        sortPost={sortPost}
      />
      <PostSearch
        searchQuery={filter.query}
        searchPost={searchPostByTitle}
      />
    </div>
  );
}

PostFilter.propTypes = {
  filter: PropTypes.shape({
    sort: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
  }).isRequired,
  sortPost: PropTypes.func.isRequired,
  searchPostByTitle: PropTypes.func.isRequired,

}

export default PostFilter;
