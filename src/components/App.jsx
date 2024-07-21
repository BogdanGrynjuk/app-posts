import React, { useState } from "react";
import PostList from "./posts/PostList";
import PostFilter from "./posts/PostFilter";
import ModalAddnewPost from "./posts/ModalAddNewPost";
import ControlPanel from "./posts/ControlPanel";
import { useSortedAndSearchedPosts } from "./hooks/usePosts";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [posts, setPosts] = useState([
    { id: "1", title: "Css", body: "Css - каскадна таблиця стилів" },
    { id: "2", title: "Javascript", body: "Javascript - мова програмування" },
    { id: "3", title: "Html", body: "Html - мова розмітки гіпертексту" },
    
  ]);

  const [filterPost, setFilterPost] = useState({
    sort: '',
    query: ''
  });

  const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filterPost.sort, filterPost.query)

  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const sortPost = (sort) => {
    setFilterPost({...filterPost, sort});
  };

  const searchPostByTitle = (e) => {
    setFilterPost({ ...filterPost, query: e.target.value });
  };

  const clearFilterPost = () => {
    setFilterPost({ ...filterPost, sort: "", query: "" });
  }
  
  return (
    <div style={{ width: '800px' }}>

      {isModalOpen &&
        <ModalAddnewPost
          closeModal={toggleModal}
          createPost={createPost}
        />
      }

      <PostFilter
        filter={filterPost}
        sortPost={sortPost}
        searchPostByTitle={searchPostByTitle}
      />
      
      <ControlPanel
        openModal={toggleModal}
        clearFilter={clearFilterPost}
      />
      <PostList
        posts={sortedAndSearchedPosts}
        deletePost={deletePost}
      />
    </div>
  );
};
      