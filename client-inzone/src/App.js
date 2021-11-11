import React from 'react'
import createRoutes from "./components/Routes";

function App() {

  return (
    <div className="App">
      {createRoutes()}
    </div>
  );
}

export default App;
