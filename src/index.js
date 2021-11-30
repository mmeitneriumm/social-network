import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={store.getState().profilePage.posts}
        dialogs={store.getState().dialogsPage.dialogs}
        messages={store.getState().dialogsPage.messages}
        addPost={store.addPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
        newPostText={store.getState().profilePage.newPostText}
        newMessageText={store.getState().dialogsPage.newMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireThree(store.getState());
store.subscribe(rerenderEntireThree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
