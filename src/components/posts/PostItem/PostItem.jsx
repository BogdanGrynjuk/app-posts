import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import css from './PostItem.module.css';
import GenericBtn from 'components/ui/GenericBtn';

const PostItem = ({ post, deletePost }) => {
  const navigate = useNavigate();
 
  return (
    <div className={css.post}>
      <div className={css.post__content}>
        <strong>{post.id} . {post.title}</strong>
        <p>{post.body}</p>
      </div>
      <div className={css.post__btns}>
        <GenericBtn
          onClick={() => navigate(`/posts/${post.id}`)}        
        >         
          Відкрити
        </GenericBtn>
        <GenericBtn onClick={() => deletePost(post.id)}>
          Видалити
        </GenericBtn>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;

