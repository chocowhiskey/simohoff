import React from "react";
import simone from "./images/simone.jpeg";
import "./App.scss";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#111111" }}>
      {/* INTRODUCTION HEADER */}
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <div className="introduction-two-sentences">
            <p id="name">Simone</p>
            <p>is a Software Developer based in </p>
            <p id="location">Mannheim </p>
            <p>currently working at</p>
            <p id="workplace">Pathmate Technologies</p>

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
        <p className="sticky-about">About</p>
      </header>
      {/* About - must be sticky */}
      {/* LATEST WORK */}
      <div className="latest-work">
        <p className="latest-work-background">Latest Work</p>
        <p className="latest-work-foreground">
          A selection of some projects I've been working on
        </p>
      </div>
    </div>
  );
}

export default App;
