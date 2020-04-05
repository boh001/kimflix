import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Header/Header";
import MainFrame from "./MainFrame/MainFrame";
import Home from "Routes/Home";
export default () => {
  return (
    <Router>
      <Header />
      <MainFrame>
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </MainFrame>
    </Router>
  );
};
