import React, { Component } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ChatPage from "./Student/ChatPage";
import NotificationPage from "./Student/NotificationPage";


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/chat/" component={ChatPage} />
            <Route path="/notifications/" component={NotificationPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
};

