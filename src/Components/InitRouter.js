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
import Detail from "Routes/Detail";
import MyContents from "Routes/MyContents";
export default () => {
  return (
    <Router>
      <Header />
      <MainFrame>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/myContents" component={MyContents} />
          <Redirect to="/" />
        </Switch>
      </MainFrame>
    </Router>
  );
};
