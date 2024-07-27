import { PostService } from 'API/PostService';
import CommentList from 'components/comments/CommentList';
import GenericBtn from 'components/ui/GenericBtn';
import GenericInfoMessage from 'components/ui/GenericInfoMessage';
import GenericLoader from 'components/ui/GenericLoader';
import { useFetching } from 'hooks';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { LOADER } from 'static/modalRoots';

export const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  const goToPosts = () => {
    navigate(`/posts`);
  }
    
  const fetchingPost = useCallback(async () => {
    const responce = await PostService.getPostById(id);
    setPost(responce.data);    
  }, [id]);

  const fetchingComments = useCallback(async () => {
    const response = await PostService.getCommentsToPostById(id);
    setComments(response.data);
   }, [id]);

  const [fetchPost, isLoadingPost, postError] = useFetching(fetchingPost);
  const [fetchComments, isLoadingComments, commentsError] = useFetching(fetchingComments);

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [fetchPost, fetchComments]);

  return (
    <main style={{ width: '800px', overflow: "hidden" }}>
      <GenericBtn
        onClick={goToPosts}
      >
        Назад
      </GenericBtn>
      {postError
        &&
        <GenericInfoMessage
          message={`Під час завантаження поста сталася помилка. ${postError}`}
        />
      }

      {commentsError
        &&
        <GenericInfoMessage
          message={`Під час завантаження коментарів сталася помилка. ${commentsError}`}
        />
      }
      
      {isLoadingPost
        ?
        <GenericLoader modalRoot={LOADER} text={`Loading post by id#${id}...`} />
        :
        <div >
          <h1>Пост №{id}. {post.title}</h1>
          <p>{post.body}</p>
        </div>        
      }

      {isLoadingComments
        ?
        <GenericLoader modalRoot={LOADER} text={`Loading comments...`} />
        :
        <CommentList comments={comments} />
      }
    </main>
  );
}