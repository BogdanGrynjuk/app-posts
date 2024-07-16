import { useState } from "react";
import GenericBtn from "./ui/GenericBtn";
import GenericInput from "./ui/GenericInput";
import PostList from "./posts/PostList/PostList";

export const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Javascript - мова програмування" },
    { id: 2, title: "Javascript 2", body: "Javascript - мова програмування" },
    { id: 3, title: "Javascript 3", body: "Javascript - мова програмування" },
    
  ]);
  const [post, setPost] = useState({title: "", body: ""});
  

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPost(prevState => ({...prevState, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault();   
    setPosts([...posts, { ...post , id: Date.now() }]);
    setPost({title: "", body: ""})
  }
  return (
    <div style={{ width: '800px' }}>
      <form onSubmit={handleSubmit}>
        <GenericInput
          type="text"
          name="title"
          value={post.title}
          placeholder="Введіть назву поста"
          label="Назва поста"
          onChange={handleChangeInput}
        />
        <GenericInput
          type="text"
          name="body"
          value={post.body}
          placeholder="Введіть опис поста" 
          label="Опис поста"
          onChange={handleChangeInput}
        />
        <GenericBtn          
          type="submit"
          disabled ={!(post.title && post.body)}
        >
          Додати новий пост
        </GenericBtn>
      </form>
      <PostList posts={posts} />
      
     
    </div>
  );
};
      