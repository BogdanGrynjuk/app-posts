import React, { useEffect, useState } from "react";
import PostList from "./posts/PostList";
import PostFilter from "./posts/PostFilter";
import ModalAddnewPost from "./posts/ModalAddNewPost";
import ControlPanel from "./posts/ControlPanel";
import { useSortedAndSearchedPosts } from "./hooks";
import { PostService } from "API/PostService";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState({ sort: '', query: '' });
  
  const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filterPost.sort, filterPost.query)

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const fetchPosts = async () => {
    
      const posts = await PostService.getAllPosts();
      setPosts(posts);
    
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  
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
    <div style={{ width: '800px', overflow: "hidden" }}>

      {isModalOpen &&
        <ModalAddnewPost
          closeModal={toggleModal}
          createPost={createPost}
          existingPosts={posts}
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
      