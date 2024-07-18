import React from 'react';
import PropTypes from 'prop-types';
import GenericList from 'components/ui/GenericList';
import PostItem from '../PostItem';

const PostList = ({ posts, deletePost }) => {
  return (
    <GenericList
      items={posts}
      renderItem={(post, index) => <PostItem post={post} number={index + 1} deletePost={deletePost}/>}
      keyExtractor={(post) => `post-${post.id}`}
      listName="Список постів"      
    />
  );
};

PostList.propTypes = {
   posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  deletePost: PropTypes.func.isRequired,
}

export default PostList;