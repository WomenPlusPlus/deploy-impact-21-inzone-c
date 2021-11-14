import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProvider from "./themes/Provider";

ReactDOM.render(

  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.querySelector('#root'),
)