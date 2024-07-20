import React, { useMemo, useState } from "react";
import PostForm from "./posts/PostForm";
import PostList from "./posts/PostList";
import PostFilter from "./posts/PostFilter";
import GenericModal from "./ui/GenericModal";
import GenericBtn from "./ui/GenericBtn";

export const App = () => {
  const modalRoot = document.querySelector("#modal-add-new-post-root");
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
    
  const sortedPosts = useMemo(() => {
    return filterPost.sort
      ? [...posts].sort((a, b) => a[filterPost.sort].localeCompare(b[filterPost.sort]))
      : posts;
  }, [filterPost.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filterPost.query.toLowerCase()));
  }, [filterPost.query, sortedPosts]);

  
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
  
  return (
    <div style={{ width: '800px' }}>

      {isModalOpen &&
        <GenericModal
          modalRoot={modalRoot}
          closeModal={toggleModal}
        >
          <PostForm
            createPost={createPost}
            closeModal={toggleModal}
          />
        </GenericModal>
      }
      
      <GenericBtn onClick={toggleModal}>Додати новий пост</GenericBtn>

      <PostFilter
        filter={filterPost}
        sortPost={sortPost}
        searchPostByTitle={searchPostByTitle}
      />
      
      <PostList posts={sortedAndSearchedPosts} deletePost={deletePost} />
    </div>
  );
};
      