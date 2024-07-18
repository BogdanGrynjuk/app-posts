import { useState } from "react";
import PostForm from "./posts/PostForm";
import PostList from "./posts/PostList";
import EmptyPostListMessage from "./posts/EmptyPostListMessage";
import PostSelect from "./posts/PostSelect";


export const App = () => {

  const [posts, setPosts] = useState([
    { id: "1", title: "Css", body: "Css - каскадна таблиця стилів" },
    { id: "2", title: "Javascript", body: "Javascript - мова програмування" },
    { id: "3", title: "Html", body: "Html - мова розмітки гіпертексту" },
    
  ]);

  const [selectedSort, setSelectedSort] = useState('');



  
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }
  
  return (
    <div style={{ width: '800px' }}>
      <PostForm createPost={createPost} />
      <PostSelect selectedSort={selectedSort} sortPost={sortPost}/>
      {posts.length
        ? <PostList posts={posts} deletePost={deletePost} />
        : <EmptyPostListMessage />
      }
    </div>
  );
};
      