import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
// import ExamAlert from './components/ExamAlert'; -> Commented this for now.
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from "./components/HomePage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";

export const light = {
  palette: {
    mode: 'light',
  },
}
export const dark = {
  palette: {
    mode: 'dark',
  },
}


function App() {

  const [theme, setTheme] = useState(true);
  // const icon = !theme ? <Brightness7Outlined /> : <Brightness3Outlined /> 
  const appliedTheme = createTheme(light);

  return (

    <ThemeProvider theme={appliedTheme}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path={"/signup"} component={SignUp} />
            <Route path={"/student/home"} component={HomePage} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
