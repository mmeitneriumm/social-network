import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };
  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={props.posts}
      newPostText={props.newPostText}
    />
  );
};

export default MyPostsContainer;
