import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        newPostText={props.newPostText}
        posts={props.posts}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
