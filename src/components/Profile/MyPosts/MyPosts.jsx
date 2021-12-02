import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.posts.map((p) => <Post message={p.post} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
          <button onClick={onAddPost} className={styles.button}>
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
