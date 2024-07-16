import React from 'react';
import GenericList from 'components/ui/GenericList';
import PostItem from '../PostItem';

const PostList = ({ posts }) => {
  return (
    <GenericList
      items={posts}
      renderItem={(post, index) => <PostItem post={post} number={index + 1} />}
      keyExtractor={(post) => `post-${post.id}`}
      listName="Список постів"
      customStyles={{}}
    />
  );
};

export default PostList;

