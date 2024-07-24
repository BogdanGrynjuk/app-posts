import React, { useCallback, useEffect, useState } from "react";
import PostList from "./posts/PostList";
import PostFilter from "./posts/PostFilter";
import ModalAddnewPost from "./posts/ModalAddNewPost";
import ControlPanel from "./posts/ControlPanel";
import { useFetching, usePagination, useSortedAndSearchedPosts } from "../hooks";
import { PostService } from "API/PostService";
import GenericLoader from "./ui/GenericLoader";
import { LOADER } from "static/modalRoots";
import GenericInfoMessage from "./ui/GenericInfoMessage";
import { getCountOfPages } from "utils/pages";
import Pagination from "./posts/Pagination";

const LIMIT_POSTS = 10;

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState({ sort: '', query: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCountPages, setTotalCountPages] = useState(0);
  const [page, setPage] = useState(1);

  
  
  const fetchingPosts = useCallback(async () => {
    const response = await PostService.getAllPosts(LIMIT_POSTS, page);
    const totalCountPosts = response.headers['x-total-count'];
    setTotalCountPages(getCountOfPages(totalCountPosts, LIMIT_POSTS))
    setPosts(response.data);
  }, [page]);
  
  const [fetchPosts, isLoadingPosts, postError] = useFetching(fetchingPosts);
  const arrayOfPageNumbers = usePagination(totalCountPages);

  useEffect(() => {
    fetchPosts();    
  }, [fetchPosts, page]);

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

  const changePage = (pageNumber) => {
    setPage(pageNumber);
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
        <>
          <PostList
          posts={sortedAndSearchedPosts}
          deletePost={deletePost}
          />
          <Pagination
            arrayOfPageNumbers={arrayOfPageNumbers}
            page={page}
            changePage={changePage}
          />
        </>
      }
    </div>
  );
};