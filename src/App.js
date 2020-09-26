import React from "react";
import simone from "./images/simone.jpeg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "#111111" }}>
        <div style={{ display: "flex" }}>
          <div className="introduction-two-sentences">
            <p id="name">Simone</p>
            <p>is a Software Developer based in </p>
            <p className="location">Mannheim </p>
            <p>currently working at</p>
            <p className="workplace">Pathmate Technologies</p>

            <p>.</p>
            <p className="introduction-subtitle">
              Focused on product and visual design , passionate about gaming,
              technology and dogs
            </p>
            <img
              id="simone"
              src={simone}
              alt="Simone Hoffmann"
              style={{ alignContent: "center" }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
