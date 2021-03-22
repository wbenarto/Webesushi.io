import "./App.css";
import { useState } from "react";
import Home from "./pages";
import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar/index";
import GalleryPage from "./pages/gallery";
import HomeMakase from "./pages/homemakase";
import SigninPage from "./pages/signin";

import SustainabilityPage from "./pages/sustainability";
import NotFoundPage from "./pages/404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("pressed = " + isOpen);
  };
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/homemakase" component={HomeMakase} exact />
          <Route path="/sustainability" component={SustainabilityPage} exact />
          <Route path="/gallery" component={GalleryPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
