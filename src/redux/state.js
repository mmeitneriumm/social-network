import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
export default store;
