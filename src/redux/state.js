let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Дратути, теперь и у меня своя соцсеть" },
        { id: 2, post: "Здравствуйте, я адыхаю" },
        { id: 3, post: "Хочу в Uplab" },
      ],
      newPostText: "Ну ты можешь написать шутку",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Хаски Мен" },
        { id: 2, name: "Никита Кальян" },
        { id: 3, name: "Влад Машина" },
      ],
      messages: [
        { id: 1, message: "Есть чай через руки?" },
        { id: 2, message: "Пить морковь без носков?" },
        { id: 3, message: "Что" },
        { id: 4, message: "Что?" },
      ],
      newMessageText: "Привет, как дела?",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state");
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        post: this._state.profilePage.newPostText,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = " ";
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let ADD_MESSAGE = "ADD-MESSAGE";
let UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default store;
