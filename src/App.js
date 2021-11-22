import "./App.css";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
