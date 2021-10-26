//import { useTranslation } from 'react-i18next';
import Login from "./components/login";
import SignUp from "./components/signUp"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import red from '@mui/material/colors/red';

const theme = createTheme({
    palette: {
        primary: red,
    },
});

function App() {
    //const { t} = useTranslation();
  return (
    <div className="App">
    <Router>
        <ThemeProvider theme={theme}>
        <div className="Title">
            <h1>InZone</h1>
        </div>
        <SignUp/>
        <Route path={'/page1'} component={Page1}/>
        </ThemeProvider>
    </Router>
    </div>
  );
}

export default App;
