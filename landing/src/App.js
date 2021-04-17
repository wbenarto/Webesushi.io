import "./App.css";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import Home from "./pages";
import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar/index";
import SignupPage from "./pages/signup";
import GalleryPage from "./pages/gallery";
import HomeMakase from "./pages/homemakase";
import SigninPage from "./pages/signin";
import AuthRoute from "./util/AuthRoute";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import SustainabilityPage from "./pages/sustainability";
import NotFoundPage from "./pages/404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let authenticated;
const token = localStorage.FBIToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <Provider store={store}>
      <>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <AuthRoute
              path="/signin/"
              component={SigninPage}
              exact
              authenticated={authenticated}
            />
            <AuthRoute
              path="/signup/"
              component={SignupPage}
              exact
              authenticated={authenticated}
            />
            <Route path="/homemakase/" component={HomeMakase} exact />
            <Route
              path="/sustainability/"
              component={SustainabilityPage}
              exact
            />
            <Route path="/gallery/" component={GalleryPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </>
    </Provider>
  );
}

export default App;
