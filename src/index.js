import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, post: "Дратути, теперь и у меня своя соцсеть" },
  { id: 2, post: "Здравствуйте, я адыхаю" },
  { id: 3, post: "Хочу в Uplab" },
];
let dialogs = [
  { id: 1, name: "Хаски Мен" },
  { id: 2, name: "Никита Кальян" },
  { id: 3, name: "Влад Машина" },
];

let messages = [
  { id: 1, message: "Есть чай через руки?" },
  { id: 2, message: "Пить морковь без носков?" },
  { id: 3, message: "Что" },
  { id: 4, message: "Что?" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
