import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.myPicture}>
      <h2>My posts</h2>
      <div>New post</div>
      <textarea cols="30" rows="2"></textarea>
      <button>Add post</button>
      <Post message="Дратути, теперь и у меня своя соцсеть" />
      <Post message="Здравствуйте, я адыхаю" />
    </div>
  );
};

export default MyPosts;
