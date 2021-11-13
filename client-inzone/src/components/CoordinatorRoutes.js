import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ChatPage from "./ChatPage";
import NotificationPage from "./NotificationPage";
import ExamsPage from "./Coordinator/ExamsPage";
import CoordinatorHomePage from "./Coordinator/CoordinatorHomePage";
import SettingsPage from "./SettingsPage";

const CoordinatorRoutes = () => {
  // We will change those urls after we create the pages for coordinators!
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/coordinator" component={CoordinatorHomePage} />
          <Route path="/coordinator/chat" component={ChatPage} />
          <Route
            path="/coordinator/notifications"
            component={NotificationPage}
          />
          <Route path="/coordinator/exams" component={ExamsPage} />
          <Route path="/coordinator/settings" component={SettingsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default CoordinatorRoutes;