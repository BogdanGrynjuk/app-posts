import React, { useCallback, useEffect, useState } from "react";
import { PostService } from "API/PostService";
import { getCountOfPages } from "utils/pages";
import { useFetching, usePagination, useSortedAndSearchedPosts } from "hooks";
import ModalAddnewPost from "components/posts/ModalAddNewPost/ModalAddNewPost";
import PostFilter from "components/posts/PostFilter";
import ControlPanel from "components/posts/ControlPanel";
import GenericInfoMessage from "components/ui/GenericInfoMessage";
import { LOADER } from "static/modalRoots";
import GenericLoader from "components/ui/GenericLoader";
import PostList from "components/posts/PostList";
import Pagination from "components/posts/Pagination";

const LIMIT_POSTS = 10;

const Posts = () => {
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

export default Posts;