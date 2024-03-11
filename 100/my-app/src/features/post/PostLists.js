import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, selectAllposts, testPost } from "./postSlice";
import { Button } from "primereact/button";

const PostLists = () => {
  const postDispatch = useDispatch();

  const handleAddpost = (post) => {
    postDispatch(addPost(post));
  };

  const handleDeletpost = (post) => {
    postDispatch(deletePost(post));
  };
  // useSelector : read the state
  const posts = useSelector(selectAllposts);
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      <Button onClick={() => handleAddpost(testPost)}>Add post</Button>
      <Button onClick={() => handleDeletpost(testPost)}>Delete post</Button>
      {renderedPosts}
    </section>
  );
};

export default PostLists;
