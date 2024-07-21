import React from 'react';
import PropTypes from 'prop-types';
import GenericList from 'components/ui/GenericList';
import PostItem from '../PostItem';
import css from './PostList.module.css';
import EmptyPostListMessage from '../EmptyPostListMessage';

const PostList = ({ posts, deletePost }) => {
  if (!posts.length) {
    return <EmptyPostListMessage />    
  }
  
  return (
    <GenericList
      items={posts}
      renderItem={(post, index) => <PostItem post={post} number={index + 1} deletePost={deletePost}/>}
      keyExtractor={(post) => `post-${post.id}`}
      listName="Список постів"
      customStyles={css}
    />
  );
};

PostList.propTypes = {
   posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  deletePost: PropTypes.func.isRequired,
}

export default PostList;