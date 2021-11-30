import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        newPostText={props.newPostText}
        posts={props.posts}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
