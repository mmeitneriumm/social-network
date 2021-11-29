import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost, addMessage, updateNewPostText } from "./redux/state";

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
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
