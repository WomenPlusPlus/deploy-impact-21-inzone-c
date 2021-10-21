//import { useTranslation } from 'react-i18next';
import Login from "./components/login";

function App() {
    //const { t} = useTranslation();
  return (
    <div className="App">
        <div className="Title">
            <h1>InZone</h1>
        </div>
        <Login/>
    </div>
  );
}

export default App;
