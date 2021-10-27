import Login from "./components/Login";
import SignUp from "./components/SignUp"
import ExamAlert from './components/ExamAlert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    {/* <Route path='/'/> <HomePage/>  */}
                    <Route path="/login"> <Login /></Route>
                    <Route path={'/signup'} component={SignUp} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
