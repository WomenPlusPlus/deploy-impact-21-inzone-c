import * as React from 'react';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import createRoutes from './components/Routes'
import { darkTheme } from './themes/dark';

const darkModeTheme = createTheme(darkTheme);

function App() {
  useTheme();
  return (
    <ThemeProvider theme={darkModeTheme}>
    <div className="App">
      {createRoutes()}
    </div>
    </ThemeProvider>
  );
}

export default App;


// export default function DarkThemeWithCustomPalette() {
//   return (
    
//       <MyApp />
    
//   );
// }
