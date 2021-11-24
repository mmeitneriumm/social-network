import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, post: "Дратути, теперь и у меня своя соцсеть" },
    { id: 2, post: "Здравствуйте, я адыхаю" },
    { id: 3, post: "Хочу в Uplab" },
  ];
  let postElement = postsData.map((post) => <Post message={post.post} />);
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
