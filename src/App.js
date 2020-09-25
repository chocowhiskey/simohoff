import React from "react";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "#111111" }}>
        <p>Simone</p>
        <p>is a Software Developer based in </p>
        <p>Mannheim </p>
        <p>currently working at</p>
        <p>Pathmate Technologies</p>

        <p>.</p>
        <p className="header-subtitle">
          Focused on product and visual design , passionate about gaming,
          technology and dogs
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <body>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
