import styles from "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div class="app-wrapper-content">
          {/* <Profile /> */}
          <Dialogs />
        </div>
      </div>
    </div>
  );
}

export default App;
