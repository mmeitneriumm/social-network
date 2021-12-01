let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, post: "Дратути, теперь и у меня своя соцсеть" },
    { id: 2, post: "Здравствуйте, я адыхаю" },
    { id: 3, post: "Хочу в Uplab" },
  ],
  newPostText: "Ну ты можешь написать шутку",
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 4,
      post: state.newPostText,
    };
    state.posts.push(newPost);
    state.newPostText = " ";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  return state;
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
