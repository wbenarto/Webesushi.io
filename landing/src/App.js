import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Intro />
    </div>
  );
}

export default App;
