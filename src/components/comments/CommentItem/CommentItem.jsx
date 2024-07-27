import React from 'react';
import PropTypes from 'prop-types';
import css from './CommentItem.module.css';


const CommentItem = ({ comment }) => {
 
  return (
    <div className={css.comment}>
      <div className={css.comment__content}>
        <p><b>Name: </b>{comment.name}</p>
        <p><b>Email: </b>{comment.email}</p>
        <p><b>Body: </b>{comment.body}</p>
      </div>
     
    </div>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default CommentItem;