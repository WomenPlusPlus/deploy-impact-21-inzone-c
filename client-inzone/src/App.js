import { ThemeProvider } from '@material-ui/styles';
import React, { useContext } from 'react'
import createRoutes from "./components/Routes";
import { theme } from "./themes/themes";
import { ThemeContext } from "./themes/Provider";
import "./index.css";

const getStyles = (mode) => ({
  header: {
    fontSize: 34,
    fontWeight: "400"
  },
  app: {
    height: "100%",
    width: "100%",
    padding: 16,
    backgroundColor: theme[mode].backgroundColor
  },
  text: {
    fontWeight: "200",
    color: theme[mode].color
  },
  theme: {
    color: theme[mode].highlight
  }
});
function App() {

  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

  return (
    <div className="App" style={styles.app}>
      {createRoutes()}
    </div>

  );
}

export default App;
