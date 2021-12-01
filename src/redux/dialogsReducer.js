let ADD_MESSAGE = "ADD-MESSAGE";
let UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 5,
      message: state.newMessageText,
    };
    state.messages.push(newMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newText;
  }
  return state;
};
export default dialogsReducer;

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
