import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <About />
        <Intro />
      </Router>
    </div>
  );
}

export default App;
