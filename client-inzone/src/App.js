import React from 'react'
import createRoutes from "./components/Routes";
import "./index.css";


function App() {

  return (
    <div className="App">
      {createRoutes()}
    </div>
  );
}

export default App;
