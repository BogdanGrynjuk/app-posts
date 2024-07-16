import { useState } from "react";
import PostItem from "./PostItem";
import GenericList from "./GenericList";
import GenericBtn from "./UI/GenericBtn";
import GenericInput from "./UI/GenericInput";

export const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Javascript - мова програмування" },
    { id: 2, title: "Javascript 2", body: "Javascript - мова програмування" },
    { id: 3, title: "Javascript 3", body: "Javascript - мова програмування" },
    { id: 4, title: "Javascript 4", body: "Javascript - мова програмування" },
    { id: 5, title: "Javascript 5", body: "Javascript - мова програмування" },
    { id: 6, title: "Javascript 6", body: "Javascript - мова програмування" },
    { id: 7, title: "Javascript 7", body: "Javascript - мова програмування" },
    { id: 8, title: "Javascript 8", body: "Javascript - мова програмування" },
    { id: 9, title: "Javascript 9", body: "Javascript - мова програмування" },
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form.elements.title.value;
    const postDescriprion = form.elements.descriprion.value;
    setPosts([...posts, {title: postTitle, body: postDescriprion, id: Date.now()}]);
  }
  return (
    <div style={{ width: '800px' }}>
      <form onSubmit={handleSubmit}>
        <GenericInput
          type="text"
          name="title"
          placeholder="Введіть назву поста"
          label="Назва поста"
        />
        <GenericInput
          type="text"
          name="descriprion"
          placeholder="Введіть опис поста"         
        />
        <GenericBtn          
          type="submit">
          Додати новий пост
        </GenericBtn>
      </form>
      <GenericList
        items={posts}
        renderItem={post => <PostItem post={post} />}
        keyExtractor={post => `post-${post.id}`}
        listName="Список постів"
        className="generic-list"
      />
      
     
    </div>
  );
};
