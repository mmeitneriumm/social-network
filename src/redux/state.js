let state = {
  profilePage: {
    posts: [
      { id: 1, post: "Дратути, теперь и у меня своя соцсеть" },
      { id: 2, post: "Здравствуйте, я адыхаю" },
      { id: 3, post: "Хочу в Uplab" },
    ],
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
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    post: postMessage,
  };
  state.profilePage.posts.push(newPost);
};
export default state;
