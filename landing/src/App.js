import "./App.css";

import Home from "./pages";
import Navbar from "./components/Navbar/index";
import GalleryPage from "./pages/gallery";
import RecipesPage from "./pages/recipes";
import SigninPage from "./pages/signin";
import AboutPage from "./pages/about";
import SustainabilityPage from "./pages/sustainability";
import NotFoundPage from "./pages/404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/recipes" component={RecipesPage} exact />
          <Route path="/sustainability" component={SustainabilityPage} exact />
          <Route path="/gallery" component={GalleryPage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
