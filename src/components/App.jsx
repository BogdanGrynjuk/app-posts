import { useState } from "react";
import PostItem from "./PostItem";
import GenericList from "./GenericList";

export const App = () => {

  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body:"Javascript - мова програмування"},
    {id: 2, title: "Javascript 2", body:"Javascript - мова програмування"},
    {id: 3, title: "Javascript 3", body:"Javascript - мова програмування"},
    {id: 4, title: "Javascript 4", body:"Javascript - мова програмування"},
    {id: 5, title: "Javascript 5", body:"Javascript - мова програмування"},
    {id: 6, title: "Javascript 6", body:"Javascript - мова програмування"},
    {id: 7, title: "Javascript 7", body:"Javascript - мова програмування"},
    {id: 8, title: "Javascript 8", body:"Javascript - мова програмування"},
    {id: 9, title: "Javascript 9", body:"Javascript - мова програмування"},
  ])
  return (
    <div style={{width: '800px'}}>
      <GenericList
        items={posts}
        renderItem={post => <PostItem post={post} />}
        keyExtractor={post => `post-${post.key}`}
        listName="Список постів"
        className="generic-list"
      />
      
     
    </div>
  );
};
