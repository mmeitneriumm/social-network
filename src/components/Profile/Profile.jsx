import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import loading from "../img/loading.svg";

const Profile = (props) => {
  if (!props.profile) {
    return <img src={loading} />;
  }
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
