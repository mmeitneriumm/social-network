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
  addPost() {
    let newPost = {
      id: 4,
      post: this._state.profilePage.newPostText,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = " ";
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
