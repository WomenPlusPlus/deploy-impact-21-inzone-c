import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
// import ChatPage from './Student/ChatPage';
// import NotificationPage from './Student/NotificationPage';

const createRoutes = () => (
    <Router>
        <Switch>
            <Route path="/login" component={LoginPage} />
            {/* <Route path={"/signup"} component={SignUpPage} /> */}
            <Route path={"/student/home"} component={HomePage} />
        </Switch>
    </Router>
);

export default createRoutes;