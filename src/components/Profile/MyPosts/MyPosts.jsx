import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.posts.map((p) => <Post message={p.post} />);
  return (
    <div className={styles.myPosts}>
      <p>My posts</p>
      <div>New post</div>
      <textarea cols="30" rows="2"></textarea>
      <button>Add post</button>
      {postElement}
    </div>
  );
};

export default MyPosts;
