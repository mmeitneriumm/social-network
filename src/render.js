import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  addPost,
  addMessage,
  updateNewPostText,
  updateNewMessageText,
} from "./redux/state";

export let rerenderEntireThree = (state) => {
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
