import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import createRoutes from "./components/Routes";

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

  // const [theme, setTheme] = useState(true);
  // const icon = !theme ? <Brightness7Outlined /> : <Brightness3Outlined /> 
  const appliedTheme = createTheme(light);

  return (

    <ThemeProvider theme={appliedTheme}>
      <div className="App">
        {createRoutes()}
      </div>
    </ThemeProvider>
  );
}

export default App;
