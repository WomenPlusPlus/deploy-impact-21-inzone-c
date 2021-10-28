import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import ExamAlert from './components/ExamAlert'; -> Commented this for now.
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import StudentLayout from "./components/Student/StudentLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/" /> */}
          <Route path="/login" component={Login} />
          <Route path={"/signup"} component={SignUp} />
          <Route path={"/student/home"} component={StudentLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
