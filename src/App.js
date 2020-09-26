import React from "react";
import logo from "./images/logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "#111111" }}>
        <div className="introduction-two-sentences">
          <p className="name">Simone</p>
          <p>is a Software Developer based in </p>
          <p className="location">Mannheim </p>
          <p>currently working at</p>
          <p className="workplace">Pathmate Technologies</p>

          <p>.</p>
          <p className="header-subtitle">
            Focused on product and visual design , passionate about gaming,
            technology and dogs
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
