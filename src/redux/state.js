let rerenderEntireThree = () => {
  console.log("state");
};

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 4,
    post: state.profilePage.newPostText,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = " ";
  rerenderEntireThree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireThree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireThree(state);
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireThree(state);
};

export const subscribe = (observer) => {
  rerenderEntireThree = observer;
};

export default state;
