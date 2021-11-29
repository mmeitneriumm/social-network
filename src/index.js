import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  addPost,
  addMessage,
  updateNewPostText,
  updateNewMessageText,
  subscribe,
} from "./redux/state";

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
        newMessageText={state.dialogsPage.newMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireThree(state);
subscribe(rerenderEntireThree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
