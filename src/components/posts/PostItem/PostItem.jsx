import React from 'react';
import PropTypes from 'prop-types';

import css from './PostItem.module.css';
import GenericBtn from 'components/ui/GenericBtn';

const PostItem = ({ post, number, deletePost }) => {
 
  return (
    <div className={css.post}>
      <div className={css.post__content}>
        <strong>{number} . {post.title}</strong>
        <p>{post.body}</p>
      </div>
      <div className={css.post__btns}>
        <GenericBtn onClick={() => deletePost(post.id)}>
          Видалити
        </GenericBtn>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
};

export default PostItem;

