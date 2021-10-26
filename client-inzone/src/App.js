//import { useTranslation } from 'react-i18next';
import Login from "./components/login";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page1 from './components/Page1';

function App() {
    //const { t} = useTranslation();
  return (
    <div className="App">
    <Router>
        <div className="Title">
            <h1>InZone</h1>
        </div>
        <Login/>
        <Route path={'/page1'} component={Page1}/>
    </Router>
    </div>
  );
}

export default App;
