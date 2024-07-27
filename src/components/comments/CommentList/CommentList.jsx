import React from 'react';
import PropTypes from 'prop-types';
import GenericList from 'components/ui/GenericList';
import CommentItem from '../CommentItem';
import css from './CommentList.module.css'

const CommentList = ({ comments }) => { 
  
  return (
    <GenericList
      items={comments}
      renderItem={(comment) => <CommentItem comment={comment}/>}
      keyExtractor={(comment) => `comment-${comment.id}`}
      listName="Коментарі:"
      customStyles={css}
    />
  );
};

CommentList.propTypes = {
   comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number,
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    })
  ).isRequired,
  
}

export default CommentList;