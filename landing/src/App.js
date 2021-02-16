import "./App.css";
import Intro from "./components/Intro";
// import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./pages";
import Navbar from "./components/Navbar/index";
import SigninPage from "./pages/signin";
import SustainabilityPage from "./pages/sustainability";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/sustainability" component={SustainabilityPage} exact />
        </Switch>

        {/* <About />
        <Intro /> */}
      </Router>
    </div>
  );
}

export default App;
