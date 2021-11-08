import React, { Component } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ChatPage from "./Student/ChatPage";
import NotificationPage from "./Student/NotificationPage";
import ExamsPage from "./Student/ExamsPage";

export default class CoordinatorRoutes extends Component {
  // We will change those urls after we create the pages for coordinators!
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/coordinator/" component={ChatPage} />
            <Route path="/coordinator/chat" component={ChatPage} />
            <Route
              path="/coordinator/notifications"
              component={NotificationPage}
            />
            <Route path="/coordinator/exams" component={ExamsPage} />
            <Route path="/coordinator/settings" component={NotificationPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
