import React from "react";
import { NavBar } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
