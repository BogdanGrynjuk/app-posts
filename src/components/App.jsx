import React, { useCallback, useEffect, useState } from "react";
import PostList from "./posts/PostList";
import PostFilter from "./posts/PostFilter";
import ModalAddnewPost from "./posts/ModalAddNewPost";
import ControlPanel from "./posts/ControlPanel";
import { useFetching, useSortedAndSearchedPosts } from "../hooks";
import { PostService } from "API/PostService";
import GenericLoader from "./ui/GenericLoader";
import { LOADER } from "static/modalRoots";
import GenericInfoMessage from "./ui/GenericInfoMessage";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState({ sort: '', query: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const fetchingPosts = useCallback(async () => {
    const posts = await PostService.getAllPosts();
    setPosts(posts);
  }, []);
  
  const [fetchPosts, isLoadingPosts, postError] = useFetching(fetchingPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filterPost.sort, filterPost.query)

  const toggleModal = () => setIsModalOpen(!isModalOpen); 

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
      {postError
        &&
        <GenericInfoMessage
          message={`Під час завантаження сталася помилка. ${postError}`}
        />
        
      }
      {isLoadingPosts
        ?
        <GenericLoader modalRoot={LOADER} text={"Loading posts..."} />
        :
        <PostList
          posts={sortedAndSearchedPosts}
          deletePost={deletePost}
        />
      }
    </div>
  );
};