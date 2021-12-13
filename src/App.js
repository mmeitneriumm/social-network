import "./App.css";
import Header from "./components/Header/Header";
import UsersContainer from "./components/Users/UsersContainer";
import NavBar from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
