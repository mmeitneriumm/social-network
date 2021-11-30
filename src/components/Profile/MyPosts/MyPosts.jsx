import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  let postElement = props.posts.map((p) => <Post message={p.post} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  };
  return (
    <div className={styles.durovVerniStenu}>
      <div className={styles.myPosts}>
        <p>My posts</p>
        <div className={styles.newPost}>
          <textarea
            cols="30"
            rows="2"
            ref={newPostElement}
            placeholder="New post..."
            value={props.newPostText}
            onChange={onPostChange}
          />
          <button onClick={addPost} className={styles.button}>
            Add post
          </button>
        </div>
        {postElement}
      </div>
      <div className={styles.friends}>
        <p>My Friends</p>
      </div>
    </div>
  );
};

export default MyPosts;
