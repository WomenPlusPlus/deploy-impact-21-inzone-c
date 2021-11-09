import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ChatPage from "./Student/ChatPage";
import NotificationPage from "./Student/NotificationPage";
import ExamsPage from "./Student/ExamsPage";
import StudentHomePage from "./StudentHomePage";
const StudentRoutes = () => {
  // I solved the refresh problem while i was doing changing some routes. Our URL's could be different for coordinator and student.
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/student" component={StudentHomePage} />
          <Route path="/student/chat" component={ChatPage} />
          <Route path="/student/notifications" component={NotificationPage} />
          <Route path="/student/exams" component={ExamsPage} />
          <Route path="/student/settings" component={NotificationPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default StudentRoutes;
