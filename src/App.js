import React from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage.js";
import Header from "./components/Header/Header.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomePage />
        <Header/>
        
      </header>
    </div>
  );
}

export default App;
