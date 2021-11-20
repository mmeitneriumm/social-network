import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
