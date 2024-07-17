import { useState } from "react";
import PostForm from "./posts/PostForm";
import PostList from "./posts/PostList";
import EmptyPostListMessage from "./posts/EmptyPostListMessage";


export const App = () => {

  const [posts, setPosts] = useState([
    { id: "1", title: "Javascript", body: "Javascript - мова програмування" },
    { id: "2", title: "Javascript 2", body: "Javascript - мова програмування" },
    { id: "3", title: "Javascript 3", body: "Javascript - мова програмування" },
    
  ]);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };
  
  return (
    <div style={{ width: '800px' }}>
      <PostForm createPost={createPost} />    
      {posts.length
        ? <PostList posts={posts} deletePost={deletePost} />
        : <EmptyPostListMessage />
      }
    </div>
  );
};
      