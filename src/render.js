import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost } from "./redux/state";
import { addMessage } from "./redux/state";

export let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={state.profilePage.posts}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        addPost={addPost}
        addMessage={addMessage}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
