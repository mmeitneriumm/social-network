import { getProfile} from "../api/api"

let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let SET_USERS_PROFILE = "SET-USERS-PROFILE";

let initialState = {
  posts: [
    { id: 1, post: "Дратути, теперь и у меня своя соцсеть" },
    { id: 2, post: "Здравствуйте, я адыхаю" },
    { id: 3, post: "Хочу в Uplab" },
  ],
  newPostText: "Ну ты можешь написать шутку",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: state.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: " ",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USERS_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile,
  };
};

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    getProfile(userId).then((data) => {
      dispatch(setUsersProfile(data));
    });
  }
}