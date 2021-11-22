import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.user}>
        <img
          src="https://sun9-10.userapi.com/impg/Y98ahL09qw8fvGaCUPCJ1taIkWcaGWewN7jIgw/Tsso-6hRbXs.jpg?size=564x564&quality=96&sign=16ae910f5e035029be70272137a4c5d6&type=album"
          alt=""
        />
        <p>Мари</p>
      </div>
      {props.message}
    </div>
  );
};

export default Post;
