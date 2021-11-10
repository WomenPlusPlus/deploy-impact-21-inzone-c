import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ChatPage from "./Student/ChatPage";
import NotificationPage from "./Student/NotificationPage";
import ExamsPage from "./Student/ExamsPage";

const CoordinatorRoutes = () => {
  // We will change those urls after we create the pages for coordinators!
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
export default CoordinatorRoutes;