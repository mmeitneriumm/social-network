import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div class="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile posts={props.posts} addPost={props.addPost} />}
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogs={props.dialogs}
                  messages={props.messages}
                  addMessage={props.addMessage}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
